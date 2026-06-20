import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { DinacharyaTimelineComponent } from './dinacharya-timeline/dinacharya-timeline.component';
import { OrbitServicesComponent } from './orbit-services/orbit-services.component';
import { WellnessHandbookComponent } from './wellness-handbook/wellness-handbook.component';

type ServiceTab =
  | 'assessment'
  | 'ayurveda'
  | 'yoga'
  | 'programs'
  | 'education';

interface ServiceGroup {
  id: ServiceTab;
  label: string;
  caption: string;
  items: { title: string; sub?: string; icon?: string; link?: string; linkTarget?: string; download?: string }[];
}

interface Doctor {
  name: string;
  role: string;
  initial: string;
  color: string;
  bg: string;
  dept: string;
}

interface Faq {
  q: string;
  a: string;
}

interface Pillar {
  sanskrit: string;
  translit: string;
  english: string;
  body: string;
  glyph: 'ahara' | 'vihara' | 'nidra' | 'vyayama' | 'pranayama' | 'dhyana' | 'vichara' | 'achara';
}

interface DailyAnchor {
  time: string;
  sanskrit: string;
  english: string;
  desc: string;
  /** percent along the arc (0–100) */
  pos: number;
  /** bottom % matching the quadratic-bezier arc path so the pin rides the curve */
  yPos: number;
  glyph: 'sunrise' | 'sun' | 'noon' | 'evening' | 'dusk' | 'moon';
}

@Component({
  selector: 'app-swasthya-bharati-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroBannerComponent, DinacharyaTimelineComponent, OrbitServicesComponent, WellnessHandbookComponent],
  templateUrl: './swasthya-bharati-page.component.html',
  styleUrls: ['./swasthya-bharati-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'sbp-root' },
})
export class SwasthyaBharatiPageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private prevTitle = '';

  private revealObserver?: IntersectionObserver;
  private statsObserver?: IntersectionObserver;
  private statsAnimated = false;
  private rafIds: number[] = [];

  // Dinacharya active anchor + sky background
  readonly activeAnchorIdx = signal<number>(0);
  private arcInterval?: ReturnType<typeof setInterval>;
  private arcResumeTimeout?: ReturnType<typeof setTimeout>;
  private arcEl?: HTMLElement;
  private readonly handleArcEnter = () => { clearInterval(this.arcInterval); };
  private readonly handleArcLeave = () => { this.startArcCycle(); };

  readonly arcBackgrounds = [
    // 04:30 – 06:00 Brahma Muhurta - deep indigo → coral sunrise
    'linear-gradient(160deg,#0b1628 0%,#1e3a5f 28%,#c85a2f 62%,#f4a060 82%,#ffd580 100%)',
    // 06:00 – 08:00 Movement - warm golden morning
    'linear-gradient(160deg,#2d5896 0%,#5b8fd4 35%,#f4a060 62%,#ffd580 82%,#fff9e0 100%)',
    // 12:00 – 14:00 Noon - bright sky blue
    'linear-gradient(180deg,#4fc3d0 0%,#a8e6ef 45%,#fdf9ee 100%)',
    // 17:00 – 19:00 Sunset - deep magenta → amber
    'linear-gradient(160deg,#1a0a2e 0%,#a0284e 38%,#f0612a 65%,#f8ab58 100%)',
    // 19:00 – 21:00 Dusk - twilight navy
    'linear-gradient(160deg,#05060e 0%,#0d1b40 55%,#1e2d58 100%)',
    // 21:30 – 22:30 Sleep - deep midnight
    'linear-gradient(160deg,#020306 0%,#070d1e 100%)',
  ];

  // Orbit auto-rotation
  private orbitAngle = 0;
  private orbitRafId?: number;
  private lastOrbitTime = 0;
  private readonly ORBIT_SPEED = 9; // degrees per second (40 s full rotation)
  private orbitPaused = false;
  private cardHovered = false;
  private orbitResumeTimeout?: ReturnType<typeof setTimeout>;
  private orbitEl?: HTMLElement;
  private readonly handleOrbitEnter = () => { this.orbitPaused = true; };
  private readonly handleOrbitLeave = () => { if (!this.cardHovered) { this.orbitPaused = false; this.lastOrbitTime = 0; } };

  readonly activeService = signal<ServiceTab>('assessment');

  // Vision / Mission toggle
  readonly vmActive = signal<'vision' | 'mission'>('vision');
  readonly vmAnimating = signal<boolean>(false);
  readonly vmExpanded = signal<boolean>(false);
  private vmTimeout?: ReturnType<typeof setTimeout>;

  toggleVm(): void {
    if (this.vmAnimating()) return;
    this.vmAnimating.set(true);
    this.vmExpanded.set(false);
    clearTimeout(this.vmTimeout);
    this.vmTimeout = setTimeout(() => {
      this.vmActive.set(this.vmActive() === 'vision' ? 'mission' : 'vision');
      setTimeout(() => this.vmAnimating.set(false), 350);
    }, 300);
  }

  toggleVmExpand(): void {
    this.vmExpanded.set(!this.vmExpanded());
  }
  // Wellness Handbook Reference — single-card navigator
  readonly wbCurrent = signal<number>(0);

  readonly wbSections = [
    {
      id: 'dinacharya', icon: 'sun', iconBg: '#FAEEDA', iconColor: '#854F0B', barColor: '#EF9F27',
      tag: 'Daily regimen', tagBg: '#FAEEDA', tagColor: '#854F0B',
      title: 'Dinacharya (Daily Regimen)',
      desc: 'Ayurvedic structured daily routines for health and vitality',
      subs: [
        { n: '1',  text: 'Pratarutthana',                        detail: 'Waking up before sunrise (Brahma Muhurta)' },
        { n: '2',  text: 'Mala Mutra Visarjana',                 detail: 'Timely evacuation of bladder and bowels' },
        { n: '3',  text: 'Dantdhavana & Jihvanirlekana',         detail: 'Oral hygiene — brushing with herbal powder & tongue scraping' },
        { n: '4',  text: 'Ushapana',                             detail: 'Drinking one glass of water; avoid tea or coffee on empty stomach' },
        { n: '5',  text: 'Anjana and Nasya',                     detail: 'Herbal collyrium for eyes; medicated nasal drops' },
        { n: '6',  text: 'Kavala & Gandusha (Oral Detox)',       detail: 'Swishing and holding herbal oil in the mouth' },
        { n: '7',  text: 'Abhyanga and Udvarthana',              detail: 'Oil application on body before bath; dry powder massage' },
        { n: '8',  text: 'Vyayama and Yogasana',                 detail: 'Stretching and physical exercise after oil massage' },
        { n: '9',  text: 'Snana',                                detail: 'Bathing with warm water using herbal powders; avoid very hot head showers' },
        { n: '10', text: 'Prarthana',                            detail: 'Offering prayers to the Almighty' },
        { n: '11', text: 'Bhojana',                              detail: 'Eat only when truly hungry; home-cooked traditional meals with all six tastes' },
        { n: '12', text: 'Tambula sevana',                       detail: 'Chewing betel leaf preparation with areca nut, lime, clove, cardamom' },
        { n: '13', text: 'Dhoomapana',                           detail: 'Inhalation of medicated smoke from nose or mouth' },
        { n: '14', text: 'Padabhyanga',                          detail: 'Massaging the feet with ghee or sesame oil before bedtime' },
        { n: '15', text: 'Nidra',                                detail: 'Sleep before 11 pm; 6–12 hours depending on age, season, and health' },
      ],
    },
    {
      id: 'ritucharya', icon: 'snowflake', iconBg: '#E6F1FB', iconColor: '#185FA5', barColor: '#378ADD',
      tag: 'Late winter', tagBg: '#E6F1FB', tagColor: '#185FA5',
      title: 'Shishira Ritu (Late Winter)',
      desc: 'Seasonal foods and practices for late winter',
      subs: [
        { n: '→', text: 'Recommended foods',       detail: 'Sour-taste foods, cereals, pulses, wheat, corn, ginger, garlic, haritaki, milk products' },
        { n: '→', text: 'Foods to avoid',           detail: 'Pungent, bitter, astringent foods; light foods; cold foods' },
        { n: '→', text: 'Recommended practices',   detail: 'Oil/powder/paste massage; lukewarm bath; sunlight exposure; warm clothing' },
        { n: '→', text: 'Practices to avoid',       detail: 'Cold wind exposure; excessive walking and exercise; late-night sleep; travelling' },
      ],
    },
    {
      id: 'ritucharya', icon: 'tree', iconBg: '#EAF3DE', iconColor: '#3B6D11', barColor: '#639922',
      tag: 'Spring', tagBg: '#EAF3DE', tagColor: '#3B6D11',
      title: 'Vasanta Ritu (Spring)',
      desc: 'Seasonal foods and practices for spring',
      subs: [
        { n: '→', text: 'Recommended foods',       detail: 'Easily digestible foods, old barley, wheat, rice, lentil, green gram, honey, bitter-pungent foods' },
        { n: '→', text: 'Foods to avoid',           detail: 'Hard-to-digest, cold, heavy, oily, sour, sweet foods; new grains; curd; cold drinks' },
        { n: '→', text: 'Recommended practices',   detail: 'Warm water bath, regular exercise, Udvartana, Kavala, Dhooma, Anjana, Vamana and Nasya' },
        { n: '→', text: 'Practices to avoid',       detail: 'Day sleep' },
      ],
    },
    {
      id: 'ritucharya', icon: 'sun', iconBg: '#FAEEDA', iconColor: '#854F0B', barColor: '#EF9F27',
      tag: 'Summer', tagBg: '#FAEEDA', tagColor: '#854F0B',
      title: 'Grishma Ritu (Summer)',
      desc: 'Seasonal foods and practices for summer',
      subs: [
        { n: '→', text: 'Recommended foods',       detail: 'Light, easily digestible, sweet-tasting foods; rice, lentils, cold water, buttermilk, fruit juices, mango juice, milk' },
        { n: '→', text: 'Foods to avoid',           detail: 'Salty, pungent, sour, hot, and warm foods' },
        { n: '→', text: 'Recommended practices',   detail: 'Stay in cool places; apply sandalwood paste; wear light clothing; daytime sleep; enjoy moonlight and cool breeze at night' },
        { n: '→', text: 'Practices to avoid',       detail: 'Excessive exercise; hard physical work; excess sexual indulgence; alcohol consumption' },
      ],
    },
    {
      id: 'ritucharya', icon: 'cloud', iconBg: '#EEEDFE', iconColor: '#534AB7', barColor: '#7F77DD',
      tag: 'Rainy season', tagBg: '#EEEDFE', tagColor: '#534AB7',
      title: 'Varsha Ritu (Rainy Season)',
      desc: 'Seasonal foods and practices for the monsoon',
      subs: [
        { n: '→', text: 'Recommended foods',       detail: 'Sour and salty foods; old barley, rice, wheat; meat soup and vegetable soups; drinking water must be medicated or boiled' },
        { n: '→', text: 'Foods to avoid',           detail: 'River water; excessive liquid and wine; heavy and hard-to-digest meat; fried and processed foods' },
        { n: '→', text: 'Recommended practices',   detail: 'Boiled water for bath; rub body with oil after bath; traditional Abyanga; aromatic herbs; cooling drinks' },
        { n: '→', text: 'Practices to avoid',       detail: 'Getting wet in rain; day sleep; exercise and hard work; sexual indulgence; wind exposure; staying at river-bank' },
      ],
    },
    {
      id: 'ritucharya', icon: 'wind', iconBg: '#FAECE7', iconColor: '#993C1D', barColor: '#D85A30',
      tag: 'Autumn', tagBg: '#FAECE7', tagColor: '#993C1D',
      title: 'Sharat Ritu (Autumn)',
      desc: 'Seasonal foods and practices for autumn',
      subs: [
        { n: '→', text: 'Recommended foods',       detail: 'Sweet and bitter-tasting, light and cooling foods; wheat, green gram, sugar candy, honey, pointed gourd; meat of dry land animals' },
        { n: '→', text: 'Foods to avoid',           detail: 'Hot foods; bitter, sweet, astringent taste foods; fatty foods and oils; meat of aquatic animals; curds' },
        { n: '→', text: 'Recommended practices',   detail: 'Eat only when hungry; drink sun- and moon-purified water; bathe with purified water; wear flower garlands; apply sandalwood paste; enjoy moonlight in early night' },
        { n: '→', text: 'Practices to avoid',       detail: 'Day sleep; excessive eating; excess sun exposure' },
      ],
    },
    {
      id: 'ritucharya', icon: 'flame', iconBg: '#FBEAF0', iconColor: '#993556', barColor: '#D4537E',
      tag: 'Early winter', tagBg: '#FBEAF0', tagColor: '#993556',
      title: 'Hemanta Ritu (Late Autumn / Early Winter)',
      desc: 'Seasonal foods and practices for early winter',
      subs: [
        { n: '→', text: 'Recommended foods',       detail: 'Unctuous, sweet, sour, salty foods; new rice, flour preparations, green and black gram, various meats, oils, fats, milk products, sugarcane products, fermented preparations, sesame' },
        { n: '→', text: 'Foods to avoid',           detail: 'Light, cold, dry foods; cold drinks' },
        { n: '→', text: 'Recommended practices',   detail: 'Regular exercise; body and head massage; bathing with warm water; sunbathing; application of aromatic substances; wearing light clothing; staying in warm places' },
        { n: '→', text: 'Practices to avoid',       detail: 'Exposure to strong cold wind; day sleep' },
      ],
    },
    {
      id: 'ahara', icon: 'bowl', iconBg: '#E1F5EE', iconColor: '#0F6E56', barColor: '#1D9E75',
      tag: 'Food', tagBg: '#E1F5EE', tagColor: '#0F6E56',
      title: 'Ahara (Food) — guidelines for healthy eating',
      desc: 'Food as the foundation of physical, mental, and spiritual well-being',
      subs: [
        { n: '1',  text: 'Choose food according to season and health condition',            detail: 'Select based on Ritu, time of day, age, digestion strength, and health condition' },
        { n: '2',  text: 'Eat freshly prepared food',                                       detail: 'Freshly cooked and warm; avoid stale, refrigerated, reheated, or previous-day food' },
        { n: '3',  text: 'Maintain purity in preparation',                                  detail: 'Method of procuring ingredients, cleanliness of utensils, place of cooking, and cook\'s mental state all matter' },
        { n: '4',  text: 'Avoid incompatible food combinations (Viruddha Ahara)',           detail: 'Do not mix foods with opposite qualities — e.g. milk should not be combined with salty or sour substances' },
        { n: '5',  text: 'Respect regional staples',                                        detail: 'Prefer unpolished, locally grown grains and produce' },
        { n: '6',  text: 'Consume a balanced meal',                                         detail: 'Include all six tastes in each meal' },
        { n: '7',  text: 'Follow proper eating conduct',                                    detail: 'Eat mindfully without distractions; chew food properly' },
        { n: '8',  text: 'Eat only after proper digestion',                                 detail: 'Do not eat again until the previous meal is digested' },
        { n: '9',  text: 'Maintain proper quantity',                                        detail: 'Stomach division rule — leave space; solids and liquids in right proportion' },
        { n: '10', text: 'Include milk and ghee',                                           detail: 'Ethically sourced; ghee is one of the best fats for daily consumption in proper quantity' },
        { n: '11', text: 'Consume local and seasonal produce',                              detail: 'Eat what grows in your region and season' },
        { n: '12', text: 'Cook food properly',                                              detail: 'Avoid overcooked or undercooked food' },
        { n: '13', text: 'Eat with mindfulness and gratitude',                              detail: 'Mental state during eating influences digestion and assimilation' },
        { n: '14', text: 'Avoid processed foods; prefer organic',                           detail: 'Highly processed and artificial items harm long-term health' },
      ],
    },
    {
      id: 'sadvritta', icon: 'heart', iconBg: '#FBEAF0', iconColor: '#993556', barColor: '#D4537E',
      tag: 'Wellness code', tagBg: '#FBEAF0', tagColor: '#993556',
      title: 'Sadvritta (Code of Conduct for Complete Well-being)',
      desc: 'True wellness includes mental, emotional, and spiritual well-being',
      subs: [
        { n: '→', text: 'Give equal importance to all life spheres',      detail: 'Professional, personal, family, social, and spiritual life' },
        { n: '→', text: 'Follow a planned daily routine',                  detail: 'Avoid last-minute pressure with a prepared timetable' },
        { n: '→', text: 'Prepare comprehensive plans',                     detail: 'Daily timetable, weekly plan, monthly/yearly roadmap' },
        { n: '→', text: 'Write down your goals and thoughts',              detail: 'Clarity in planning reduces confusion and stress' },
        { n: '→', text: 'Choose work that gives satisfaction',             detail: 'Not just financial gain — engage in meaningful work' },
        { n: '→', text: 'Pursue activities beyond your profession',        detail: 'Art, travel, music, social activities for happiness' },
        { n: '→', text: 'Spend quality time with family daily',            detail: 'Without television or mobile phones' },
        { n: '→', text: 'Follow a spiritual path',                         detail: 'Self-reflection reduces inner conflicts and stress' },
        { n: '→', text: 'Negative traits to control',                      detail: 'Greed, uncontrolled anger, wrong desires, jealousy, ego, excessive attachment' },
      ],
    },
    {
      id: 'special', icon: 'female', iconBg: '#FBEAF0', iconColor: '#72243E', barColor: '#D4537E',
      tag: 'Special topic', tagBg: '#FBEAF0', tagColor: '#72243E',
      title: 'Rutusrava Paricharya (Guidelines during Menstruation)',
      desc: 'Dietary and lifestyle practices during menstruation',
      subs: [
        { n: '…', text: 'Overview',           detail: 'Natural monthly process; bleeding lasts 3–8 days; occurs every 21–35 days' },
        { n: '→', text: 'Diet — eat',         detail: 'Simple, freshly prepared, warm foods; slightly more ghee; plenty of warm fluids' },
        { n: '→', text: 'Diet — avoid',       detail: 'Heavy meals, overeating, non-vegetarian food, curd, coffee, tea, chocolates, baked and processed foods' },
        { n: '→', text: 'Rest and activity',  detail: 'Minimise physical and mental exertion; gentle deep breathing is acceptable; sleep adequately' },
        { n: '→', text: 'Activities to avoid', detail: 'Strenuous workouts, gym, yoga asanas, pranayama, swimming, or long walks' },
      ],
    },
    {
      id: 'special', icon: 'clock', iconBg: '#E6F1FB', iconColor: '#185FA5', barColor: '#378ADD',
      tag: 'Special topic', tagBg: '#E6F1FB', tagColor: '#185FA5',
      title: 'Circadian Rhythm — the body\'s internal clock',
      desc: 'Science behind waking before dawn and biological rhythm',
      subs: [
        { n: '…', text: 'Melatonin',                                detail: 'Released by the pineal gland at night; helps initiate sleep; increases in darkness' },
        { n: '…', text: 'Body temperature',                         detail: 'Lowest around 5 am, a few hours before natural wake time' },
        { n: '…', text: 'Cortisol',                                 detail: 'Life-protecting stress hormone; usually highest in the morning; helps alertness' },
        { n: '→', text: 'Cognition',                                detail: 'Early cortisol spike improves focus, alertness, and problem-solving (Brahma Muhurta benefit)' },
        { n: '→', text: 'Entrainment',                              detail: 'Consistent early waking + morning light synchronises the biological clock, improving energy, digestion, and sleep quality' },
        { n: '→', text: 'Appetite hormones (Ghrelin & Leptin)',     detail: 'Ghrelin (hunger hormone) suppressed during sleep; Leptin (satiety hormone) rises at night; aligned rhythm supports weight management' },
      ],
    },
  ] as const;

  get wbTotal() { return this.wbSections.length; }
  get wbSection() { return this.wbSections[this.wbCurrent()]; }
  get wbProgress() { return Math.round(((this.wbCurrent() + 1) / this.wbTotal) * 100); }

  wbGoto(i: number): void { this.wbCurrent.set(i); }
  wbPrev(): void { if (this.wbCurrent() > 0) this.wbCurrent.update(v => v - 1); }
  wbNext(): void { if (this.wbCurrent() < this.wbTotal - 1) this.wbCurrent.update(v => v + 1); }

  readonly openFaq = signal<number | null>(0);

  readonly cardPage = signal<number>(0);
  readonly isFlipping = signal<boolean>(false);
  private flipTimeout?: ReturnType<typeof setTimeout>;

  readonly CARDS_PER_PAGE = 4;
  readonly MOBILE_BREAKPOINT = 600;

  /** On mobile we show all cards (no pagination); desktop paginates. */
  private isMobile(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= this.MOBILE_BREAKPOINT;
  }

  get visibleCards() {
    const group = this.services.find(s => s.id === this.activeService());
    if (!group) return [];
    if (this.isMobile()) return group.items;
    const start = this.cardPage() * this.CARDS_PER_PAGE;
    return group.items.slice(start, start + this.CARDS_PER_PAGE);
  }

  getPagedItems(group: ServiceGroup): { title: string; sub?: string; icon?: string; link?: string; linkTarget?: string; download?: string }[] {
    if (this.isMobile()) return group.items;
    if (group.id !== this.activeService()) return group.items.slice(0, this.CARDS_PER_PAGE);
    const start = this.cardPage() * this.CARDS_PER_PAGE;
    return group.items.slice(start, start + this.CARDS_PER_PAGE);
  }

  getTotalPages(group: ServiceGroup): number {
    if (this.isMobile()) return 1;
    return Math.ceil(group.items.length / this.CARDS_PER_PAGE);
  }

  get totalPages(): number {
    const group = this.services.find(s => s.id === this.activeService());
    if (!group) return 1;
    if (this.isMobile()) return 1;
    return Math.ceil(group.items.length / this.CARDS_PER_PAGE);
  }

  get hasPrev(): boolean {
    return this.cardPage() > 0;
  }

  get hasNext(): boolean {
    return this.cardPage() < this.totalPages - 1;
  }

  cycleService(dir: 1 | -1): void {
    const ids = this.services.map(s => s.id);
    const current = ids.indexOf(this.activeService());
    const next = (current + dir + ids.length) % ids.length;
    this.setService(ids[next]);
  }

  navigateCards(dir: 1 | -1): void {
    if (this.isFlipping()) return;
    const newPage = this.cardPage() + dir;
    if (newPage < 0 || newPage >= this.totalPages) return;

    this.isFlipping.set(true);
    clearTimeout(this.flipTimeout);
    // After half the flip duration (300ms), swap the page content
    this.flipTimeout = setTimeout(() => {
      this.cardPage.set(newPage);
    }, 300);
    // After full flip (600ms), clear the flipping state
    setTimeout(() => {
      this.isFlipping.set(false);
    }, 600);
  }

  /** index of active service tab (used by SCSS via inline style for slide indicator) */
  readonly tabIndicator = signal({ left: 0, width: 0 });

  /** 12 floating petals - fixed pseudo-random parameters keep SSR stable */
  readonly petals = Array.from({ length: 14 }, (_, i) => {
    const seed = (i * 47) % 100;
    return {
      left: (seed * 1.13) % 100,
      delay: -((seed * 0.31) % 14),
      duration: 14 + (seed % 10),
      size: 10 + (seed % 14),
      drift: -40 + ((seed * 17) % 80),
      hue: i % 3, // 0 saffron, 1 gold, 2 tulsi
    };
  });

  /** Cosmic stars scattered across the dinacharya sky */
  readonly stars = Array.from({ length: 42 }, (_, i) => {
    const seed = (i * 73) % 100;
    const seed2 = (i * 31) % 100;
    return {
      left: (seed * 1.07) % 100,
      top: (seed2 * 0.85) % 92, // keep stars above the horizon
      size: 1 + (seed % 3), // 1–3 px
      delay: -((seed * 0.19) % 6),
      duration: 3 + (seed % 5), // 3–7 s twinkle
    };
  });

  @ViewChild('tabsRow') tabsRow?: ElementRef<HTMLElement>;
  @ViewChildren('tabBtn') tabBtns?: QueryList<ElementRef<HTMLButtonElement>>;

  readonly pillars: Pillar[] = [
    {
      sanskrit: 'आहार',
      translit: 'Āhāra',
      english: 'Mindful Diet',
      body: 'Food as medicine - eaten with awareness, in season, in balance.',
      glyph: 'ahara',
    },
    {
      sanskrit: 'विहार',
      translit: 'Vihāra',
      english: 'Daily Routine',
      body: 'Dinacharya - anchoring waking, working and resting to natural rhythms.',
      glyph: 'vihara',
    },
    {
      sanskrit: 'निद्रा',
      translit: 'Nidrā',
      english: 'Restorative Sleep',
      body: 'Sleep is the greatest healer - quality, timing and quietude before dawn.',
      glyph: 'nidra',
    },
    {
      sanskrit: 'व्यायाम',
      translit: 'Vyāyāma',
      english: 'Movement',
      body: 'Daily yoga, walking and conscious movement to circulate prāṇa.',
      glyph: 'vyayama',
    },
    {
      sanskrit: 'प्राणायाम',
      translit: 'Prāṇāyāma',
      english: 'Breathwork',
      body: 'The breath as the shortest path between body and mind.',
      glyph: 'pranayama',
    },
    {
      sanskrit: 'ध्यान',
      translit: 'Dhyāna',
      english: 'Meditation',
      body: 'A daily seat of stillness - focus, clarity and equanimity.',
      glyph: 'dhyana',
    },
    {
      sanskrit: 'विचार',
      translit: 'Vichāra',
      english: 'Right Thought',
      body: 'What we feed the mind matters as much as what we feed the body.',
      glyph: 'vichara',
    },
    {
      sanskrit: 'आचार',
      translit: 'Āchāra',
      english: 'Conduct',
      body: 'Truth, generosity and forgiveness - ethics as everyday medicine.',
      glyph: 'achara',
    },
  ];

  // yPos is the "bottom %" along the actual quadratic-bezier curve drawn
  // in the SVG, computed correctly accounting for the path starting at
  // x=40 (not x=0) of the viewBox: t = (pos·12 − 40) / 1120, then
  // yPos = 11.11 + 244.44·t·(1−t).
  readonly dailyRhythm: DailyAnchor[] = [
    {
      time: '04:30 – 06:00',
      sanskrit: 'ब्राह्म मुहूर्त',
      english: 'Brahma Muhūrta',
      desc: 'Wake before sunrise - the calmest, most absorbent hour of the mind.',
      pos: 8,
      yPos: 23,
      glyph: 'sunrise',
    },
    {
      time: '06:00 – 08:00',
      sanskrit: 'व्यायाम · प्राणायाम',
      english: 'Movement & Breath',
      desc: 'Yoga, pranayama and a meditative seat as the body warms.',
      pos: 25,
      yPos: 35,
      glyph: 'sun',
    },
    {
      time: '12:00 – 14:00',
      sanskrit: 'मध्याह्न आहार',
      english: 'Madhyāhna Āhāra',
      desc: 'Largest meal at midday when digestive fire (agni) is strongest.',
      pos: 50,
      yPos: 52,
      glyph: 'noon',
    },
    {
      time: '17:00 – 19:00',
      sanskrit: 'सायं संध्या',
      english: 'Sāyaṁ Sandhyā',
      desc: 'Walk, gratitude practice and a light supper - wind the day down.',
      pos: 65,
      yPos: 41,
      glyph: 'evening',
    },
    {
      time: '19:00 – 21:00',
      sanskrit: 'ध्यान · स्वाध्याय',
      english: 'Dhyāna · Svādhyāya',
      desc: 'Meditation and self-study - settle the mind before sleep.',
      pos: 79,
      yPos: 20,
      glyph: 'dusk',
    },
    {
      time: '21:30 – 22:30',
      sanskrit: 'निद्रा',
      english: 'Nidrā',
      desc: 'Sleep early - let the body restore in alignment with the night.',
      pos: 95,
      yPos: -2,
      glyph: 'moon',
    },
  ];

  readonly services: ServiceGroup[] = [
    {
      id: 'assessment',
      label: 'Lifestyle Assessment',
      caption: 'Identify silent imbalances early — before they become disease.',
      items: [
        { title: 'Dinacharya (daily regimen) and Ritucharya (seasonal regimen) guidance', icon: 'sun' },
        { title: 'Ayurvedic diet & lifestyle counselling', icon: 'leaf' },
        { title: 'Immunity enhancement guidance', icon: 'shield' },
        { title: 'Lifestyle Disorder Management (Diabetes, Hypertension, Obesity, Thyroid Disorders)', sub: 'Lifestyle Disorder Prevention', icon: 'drop' },
        // { title: 'Hypertension risk assessment', icon: 'heart' },
        // { title: 'Obesity and metabolic health assessment', icon: 'scale' },
        { title: 'Sleep assessment', icon: 'moon' },
        { title: 'Stress profile assessment', icon: 'wave' },
        { title: 'Gut health assessment', icon: 'gut' },
      ],
    },
    {
      id: 'yoga',
      label: 'Yoga Therapies',
      caption: 'Guided practice for body, breath and mind.',
      items: [
        { title: 'Therapeutic Yoga for various disease conditions', icon: 'yoga' },
        { title: 'Breathing practices (Pranayama)', icon: 'breath' },
        { title: 'Relaxation techniques', icon: 'relax' },
        { title: 'Meditation', icon: 'meditate' },
        { title: 'Stress reduction session', icon: 'wave' },
      ],
    },
    {
      id: 'education',
      label: 'Health Education & Awareness',
      caption: 'Bringing prevention into homes, schools and workplaces.',
      items: [
        { title: 'Workshops for various sectors', icon: 'workshop' },
        { title: 'Patient education sessions', icon: 'education' },
        { title: 'School / Community programs', icon: 'community' },
      ],
    },
    {
      id: 'programs',
      label: 'Training',
      caption: 'Structured training programmes in lifestyle health.',
      items: [
        { title: 'Curriculum: Swasthya Bharati Lifestyle Program', sub: 'Download curriculum →', icon: 'curriculum', link: 'assets/swastya-page/Curriculum Details of Swasthya Bharati ( Life style program) Training_.pdf', download: 'Swasthya-Bharati-Curriculum.pdf' },
        { title: 'Enrollment', sub: 'Apply via Google Form →', icon: 'enrol', link: 'https://docs.google.com/forms/d/e/1FAIpQLSf7FpOaIjUTkOFD_g0xoTjSugkY_O4-QNvmhP4cYPEDojHyhg/viewform', linkTarget: '_blank' },
      ],
    },
    // {
    //   id: 'ayurveda',
    //   label: 'Ayurveda-Based',
    //   caption: 'Time-tested daily, seasonal and constitutional guidance.',
    //   items: [
    //     { title: 'Dinacharya', sub: 'Daily regimen attuned to your prakṛti' },
    //     { title: 'Ritucharya', sub: 'Seasonal regimen for sustained balance' },
    //     { title: 'Ayurvedic diet counselling', sub: 'Foods that heal, not harm' },
    //     { title: 'Lifestyle counselling', sub: 'Habit redesign with classical roots' },
    //     { title: 'Immunity enhancement', sub: 'Ojas-building protocols' },
    //   ],
    // },
  ];

  readonly benefits = [
    {
      group: 'Physical',
      icon: 'physical',
      items: [
        'Improved immunity',
        'Healthy Weight',
        'Better energy levels',
        'Better sleep regulation',
      ],
    },
    {
      group: 'Physiological',
      icon: 'physiological',
      items: [
        'Stabilizes blood pressure (B.P.)',
        'Balances hormones',
        'Better metabolic health',
        'Pain reduction',
        'Improved digestion'
      ],
    },
    {
      group: 'Mental & Emotional',
      icon: 'mental',
      items: [
        'Reduced stress & anxiety',
        'Improved focus & clarity',
        'Emotional stability',
        'Better mood regulation',
      ],
    },
  ];

  readonly whyPoints = [
    {
      title: '',
      body: 'An integrative approach combining traditional wisdom with scientific understanding. ',
      icon: 'integrate',
    },
    {
      title: '',
      body: 'Personalised health plans based on individual constitution and lifestyle patterns',
      icon: 'person',
    },
    {
      title: '',
      body: 'A preventive orientation to reduce long-term disease risk. Health Education & Awarenes. ',
      icon: 'shield',
    },
    {
      title: '',
      body: 'Workshops for various sectors ',
      icon: 'workshop',
    },
    {
      title: '',
      body: 'Patient education sessions ',
      icon: 'education',
    },
    {
      title: '',
      body: 'School/Community programs ',
      icon: 'community',
    },
    {
      title: '',
      body: 'Lifestyle-based training ',
      icon: 'training',
    },
    {
      title: '',
      body: 'Sustainable lifestyle modifications that enhance daily vitality and overall quality of life.',
      icon: 'leaf',
    },
  ];

  readonly stats = [
    { value: 80, suffix: '%', prefix: '70–', label: 'of chronic illness is lifestyle-linked' },
    { value: 2021, suffix: '', prefix: '', label: 'serving the community since' },
    { value: 5, suffix: '+', prefix: '', label: 'specialist physicians on the team' },
  ];

  /** signals filled in by the count-up animation */
  readonly statValues = signal<number[]>(this.stats.map(() => 0));

  readonly testimonials = [
    {
      name: 'Diabetes reversed',
      tag: 'Fasting glucose normalised',
      quote:
        'Within months of supervised lifestyle correction, my fasting sugars and HbA1c came back to normal - without adding new medication.',
    },
    {
      name: 'Lasting weight loss',
      tag: 'Sustained for over a year',
      quote:
        'The plan was personal, kind and rooted in habits I could actually keep. The weight stayed off - and so did the fatigue.',
    },
    {
      name: 'Calm restored',
      tag: 'Anxiety & sleep recovery',
      quote:
        'Pranayama, dinacharya and counselling together helped my sleep and anxiety more than anything else I had tried.',
    },
    {
      name: 'PCOS regulated',
      tag: 'Cycle restored naturally',
      quote:
        'My cycle returned and my skin cleared. The team explained the why behind every change - that made me trust the process.',
    },
  ];

  readonly doctors: Doctor[] = [
    { name: 'Dr. Sindu',    role: 'Lifestyle Physician',  initial: 'S', dept: 'Lifestyle',  color: '#3ddba8', bg: 'linear-gradient(135deg,#3ddba8,#1faf82)' },
    { name: 'Dr. Varsha',   role: 'Yoga & Lifestyle',     initial: 'V', dept: 'Yoga',        color: '#a78bfa', bg: 'linear-gradient(135deg,#a78bfa,#7c3aed)' },
    { name: 'Dr. Rachana',  role: 'Ayurveda & Wellness',  initial: 'R', dept: 'Ayurveda',    color: '#f59e0b', bg: 'linear-gradient(135deg,#f59e0b,#b45309)' },
    { name: 'Dr. Shamantha', role: 'Integrative Medicine', initial: 'S', dept: 'Integrative', color: '#38bdf8', bg: 'linear-gradient(135deg,#38bdf8,#0369a1)' },
    { name: 'Dr. Ramya',    role: 'Preventive Health',    initial: 'R', dept: 'Preventive',  color: '#fb7185', bg: 'linear-gradient(135deg,#fb7185,#be123c)' },
  ];

  readonly faqs: Faq[] = [
    {
      q: 'What is a lifestyle clinic?',
      a: 'Lifestyle clinics work on preventing and managing diseases by correcting various factors like diet, daily routine, behaviour, thought process and more.',
    },
    {
      q: 'Will I be prescribed medicine?',
      a: 'No, we focus on counselling for lifestyle corrections.',
    },
    {
      q: 'Is it safe for all ages?',
      a: 'Yes, suitable for children, adults and elderly.',
    },
    {
      q: 'Can it reverse diabetes or PCOS?',
      a: 'Many patients experience significant improvement with supervised lifestyle changes.',
    },
  ];

  readonly resources = [
    {
      title: 'Lifestyle Clinic Brochure',
      desc: 'Overview of services, programs and what to expect.',
      meta: 'PDF • 2 MB',
      icon: 'doc',
    },
    {
      title: 'Health Assessment Forms',
      desc: 'Self-assessment forms for sleep, stress and nutrition.',
      meta: 'PDF • Print-ready',
      icon: 'form',
    },
    {
      title: 'Monthly Newsletter',
      desc: 'Seasonal practices, recipes, research notes - to your inbox.',
      meta: 'Email • Free',
      icon: 'mail',
    },
  ];

  ngOnInit(): void {
    this.prevTitle = this.title.getTitle();
    this.title.setTitle(
      'Swasthya Bharati - Lifestyle & Drugless Wellness | Rashtrotthana Hospital'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Swasthya Bharati is the drugless lifestyle unit of Rashtrotthana Hospital - integrating Ayurveda, Yoga, nutrition and modern preventive medicine to address the root causes of chronic disease.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'lifestyle clinic Bangalore, drugless clinic, Ayurveda, Yoga therapy, diabetes reversal, PCOS, stress management, preventive medicine, Rashtrotthana Hospital',
    });
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      // Reveal everything immediately.
      this.host.nativeElement
        .querySelectorAll<HTMLElement>('[data-reveal]')
        .forEach((el) => el.classList.add('is-revealed'));
      this.statValues.set(this.stats.map((s) => s.value));
      this.updateTabIndicator();
      return;
    }

    // Scroll-reveal observer
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('is-revealed');
            this.revealObserver?.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    this.host.nativeElement
      .querySelectorAll<HTMLElement>('[data-reveal]')
      .forEach((el) => this.revealObserver!.observe(el));

    // Stats count-up observer (one-shot)
    const statsRoot = this.host.nativeElement.querySelector('.sbp-stats');
    if (statsRoot) {
      this.statsObserver = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting && !this.statsAnimated) {
              this.statsAnimated = true;
              this.runStatCounters();
              this.statsObserver?.disconnect();
            }
          }
        },
        { threshold: 0.4 }
      );
      this.statsObserver.observe(statsRoot);
    }

    // Initial tab indicator
    requestAnimationFrame(() => this.updateTabIndicator());

    // Dinacharya arc: hover listeners + auto-cycle
    this.arcEl = this.host.nativeElement.querySelector<HTMLElement>('.sbp-arc') ?? undefined;
    if (this.arcEl) {
      this.arcEl.addEventListener('mouseenter', this.handleArcEnter);
      this.arcEl.addEventListener('mouseleave', this.handleArcLeave);
    }
    this.startArcCycle();


    // Orbit auto-rotation: attach hover listeners then start loop
    this.orbitEl = this.host.nativeElement.querySelector<HTMLElement>('.sbp-orbit') ?? undefined;
    if (this.orbitEl) {
      this.orbitEl.addEventListener('mouseenter', this.handleOrbitEnter);
      this.orbitEl.addEventListener('mouseleave', this.handleOrbitLeave);
    }
    this.startOrbit();
  }

  ngOnDestroy(): void {
    if (this.prevTitle) this.title.setTitle(this.prevTitle);
    this.revealObserver?.disconnect();
    this.statsObserver?.disconnect();
    this.rafIds.forEach((id) => cancelAnimationFrame(id));
    this.rafIds = [];
    if (this.orbitRafId != null) cancelAnimationFrame(this.orbitRafId);
    clearTimeout(this.orbitResumeTimeout);
    this.orbitEl?.removeEventListener('mouseenter', this.handleOrbitEnter);
    this.orbitEl?.removeEventListener('mouseleave', this.handleOrbitLeave);
    clearInterval(this.arcInterval);
    clearTimeout(this.arcResumeTimeout);
    clearTimeout(this.flipTimeout);
    clearTimeout(this.vmTimeout);
    this.arcEl?.removeEventListener('mouseenter', this.handleArcEnter);
    this.arcEl?.removeEventListener('mouseleave', this.handleArcLeave);
  }

  setService(id: ServiceTab): void {
    this.activeService.set(id);
    this.cardPage.set(0);
    this.isFlipping.set(false);
    requestAnimationFrame(() => this.updateTabIndicator());

    // Pause orbit for 5 s so the user can read; then resync so clicked
    // satellite is at the right-side trigger point before resuming.
    this.orbitPaused = true;
    clearTimeout(this.orbitResumeTimeout);
    this.orbitResumeTimeout = setTimeout(() => {
      const idx = this.services.findIndex((s) => s.id === id);
      if (idx >= 0) {
        // Solve for orbitAngle where effectiveAngle of idx === 0° (top):
        // idx * 90 - 90 + orbitAngle = 0 → orbitAngle = 90 - idx * 90
        this.orbitAngle = ((90 - idx * 90) % 360 + 360) % 360;
      }
      this.lastOrbitTime = 0;
      if (!this.cardHovered) this.orbitPaused = false;
    }, 5000);
  }

  toggleFaq(i: number): void {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }

  openLink(url: string, target = '_blank', download?: string): void {
    if (download) {
      const a = document.createElement('a');
      a.href = url;
      a.download = download;
      a.click();
    } else {
      window.open(url, target);
    }
  }

  bookConsultation(): void {
    this.router.navigate(['/contact-us-bangalore']);
  }

  pauseOrbit(): void { this.cardHovered = true; this.orbitPaused = true; }
  resumeOrbit(): void { this.cardHovered = false; this.orbitPaused = false; this.lastOrbitTime = 0; }

  scrollTo(id: string): void {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollTabs(dir: 1 | -1): void {
    const el = this.tabsRow?.nativeElement;
    if (!el) return;
    el.scrollBy({ left: dir * 160, behavior: 'smooth' });
  }

  trackByIndex(i: number): number {
    return i;
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.openFaq.set(null);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateTabIndicator();
  }

  private updateTabIndicator(): void {
    if (!this.tabsRow || !this.tabBtns) return;
    const active = this.tabBtns.find(
      (b) => b.nativeElement.dataset['id'] === this.activeService()
    );
    if (!active) return;
    const rowRect = this.tabsRow.nativeElement.getBoundingClientRect();
    const btnRect = active.nativeElement.getBoundingClientRect();
    this.tabIndicator.set({
      left: btnRect.left - rowRect.left,
      width: btnRect.width,
    });
    if (btnRect.width > 0) {
      this.tabsRow.nativeElement.classList.add('is-measured');
    }
  }

  setActiveAnchor(i: number): void {
    this.activeAnchorIdx.set(i);
    clearInterval(this.arcInterval);
    clearTimeout(this.arcResumeTimeout);
    this.arcResumeTimeout = setTimeout(() => this.startArcCycle(), 6000);
  }

  private startArcCycle(): void {
    clearInterval(this.arcInterval);
    this.arcInterval = setInterval(() => {
      this.activeAnchorIdx.update((i) => (i + 1) % this.dailyRhythm.length);
    }, 4500);
  }

  private startOrbit(): void {
    const tick = (now: number) => {
      if (!this.orbitPaused) {
        const delta = this.lastOrbitTime ? (now - this.lastOrbitTime) / 1000 : 0;
        this.orbitAngle = (this.orbitAngle + this.ORBIT_SPEED * delta) % 360;
        this.orbitEl?.style.setProperty('--orbit-angle', `${this.orbitAngle}deg`);
        this.checkOrbitActiveService();
      }
      this.lastOrbitTime = now;
      this.orbitRafId = requestAnimationFrame(tick);
    };
    this.orbitRafId = requestAnimationFrame(tick);
  }

  private checkOrbitActiveService(): void {
    let minDiff = Infinity;
    let activeIdx = 0;
    for (let i = 0; i < this.services.length; i++) {
      const effectiveAngle = ((i * 90 - 90 + this.orbitAngle) % 360 + 360) % 360;
      // Distance to 0° (top-center) - wraps around correctly
      const diff = Math.min(effectiveAngle, 360 - effectiveAngle);
      if (diff < minDiff) { minDiff = diff; activeIdx = i; }
    }
    const newId = this.services[activeIdx].id;
    if (newId !== this.activeService()) {
      this.activeService.set(newId);
      requestAnimationFrame(() => this.updateTabIndicator());
    }
  }

  private runStatCounters(): void {
    const start = performance.now();
    const duration = 1500;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const statsRoot =
      this.host.nativeElement.querySelector<HTMLElement>('.sbp-stats');

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const e = ease(t);
      this.statValues.set(this.stats.map((s) => Math.round(s.value * e)));
      if (t < 1) {
        this.rafIds.push(requestAnimationFrame(tick));
      } else {
        statsRoot?.classList.add('is-counted');
      }
    };
    this.rafIds.push(requestAnimationFrame(tick));
  }

  onDocCardMove(e: MouseEvent): void {
    const card = e.currentTarget as HTMLElement;
    const inner = card.querySelector('.sbp-doc-card__inner') as HTMLElement;
    if (!inner) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    inner.style.transform = `rotateX(${-y * 14}deg) rotateY(${x * 14}deg) translateY(-8px) scale(1.02)`;
  }

  onDocCardLeave(e: MouseEvent): void {
    const card = e.currentTarget as HTMLElement;
    const inner = card.querySelector('.sbp-doc-card__inner') as HTMLElement;
    if (inner) inner.style.transform = '';
  }
}
