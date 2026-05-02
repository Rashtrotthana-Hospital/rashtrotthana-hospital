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
  items: { title: string; sub?: string }[];
}

interface Doctor {
  name: string;
  role: string;
  initial: string;
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
  imports: [CommonModule, RouterLink],
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

  readonly activeService = signal<ServiceTab>('assessment');
  readonly openFaq = signal<number | null>(0);

  /** index of active service tab (used by SCSS via inline style for slide indicator) */
  readonly tabIndicator = signal({ left: 0, width: 0 });

  /** 12 floating petals — fixed pseudo-random parameters keep SSR stable */
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

  @ViewChild('tabsRow') tabsRow?: ElementRef<HTMLElement>;
  @ViewChildren('tabBtn') tabBtns?: QueryList<ElementRef<HTMLButtonElement>>;

  readonly pillars: Pillar[] = [
    {
      sanskrit: 'आहार',
      translit: 'Āhāra',
      english: 'Mindful Diet',
      body: 'Food as medicine — eaten with awareness, in season, in balance.',
      glyph: 'ahara',
    },
    {
      sanskrit: 'विहार',
      translit: 'Vihāra',
      english: 'Daily Routine',
      body: 'Dinacharya — anchoring waking, working and resting to natural rhythms.',
      glyph: 'vihara',
    },
    {
      sanskrit: 'निद्रा',
      translit: 'Nidrā',
      english: 'Restorative Sleep',
      body: 'Sleep is the greatest healer — quality, timing and quietude before dawn.',
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
      body: 'A daily seat of stillness — focus, clarity and equanimity.',
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
      body: 'Truth, generosity and forgiveness — ethics as everyday medicine.',
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
      desc: 'Wake before sunrise — the calmest, most absorbent hour of the mind.',
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
      desc: 'Walk, gratitude practice and a light supper — wind the day down.',
      pos: 65,
      yPos: 41,
      glyph: 'evening',
    },
    {
      time: '19:00 – 21:00',
      sanskrit: 'ध्यान · स्वाध्याय',
      english: 'Dhyāna · Svādhyāya',
      desc: 'Meditation and self-study — settle the mind before sleep.',
      pos: 79,
      yPos: 20,
      glyph: 'dusk',
    },
    {
      time: '21:30 – 22:30',
      sanskrit: 'निद्रा',
      english: 'Nidrā',
      desc: 'Sleep early — let the body restore in alignment with the night.',
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
        { title: 'Diabetes risk assessment', sub: 'Glycaemic & metabolic screen' },
        { title: 'Hypertension risk assessment', sub: 'BP, vascular & stress load' },
        { title: 'Obesity & metabolic health', sub: 'Body composition & insulin response' },
        { title: 'Sleep assessment', sub: 'Quality, rhythm and recovery' },
        { title: 'Stress profile', sub: 'Autonomic & emotional balance' },
        { title: 'Gut health assessment', sub: 'Digestion, microbiome, agni' },
        { title: 'Nutrition evaluation', sub: 'Diet quality & nutrient gaps' },
      ],
    },
    {
      id: 'ayurveda',
      label: 'Ayurveda-Based',
      caption: 'Time-tested daily, seasonal and constitutional guidance.',
      items: [
        { title: 'Dinacharya', sub: 'Daily regimen attuned to your prakṛti' },
        { title: 'Ritucharya', sub: 'Seasonal regimen for sustained balance' },
        { title: 'Ayurvedic diet counselling', sub: 'Foods that heal, not harm' },
        { title: 'Lifestyle counselling', sub: 'Habit redesign with classical roots' },
        { title: 'Immunity enhancement', sub: 'Ojas-building protocols' },
      ],
    },
    {
      id: 'yoga',
      label: 'Yoga & Mind-Body',
      caption: 'Guided practice for body, breath and mind.',
      items: [
        { title: 'Therapeutic yoga', sub: 'For specific disease conditions' },
        { title: 'Pranayama', sub: 'Breathwork for nervous-system reset' },
        { title: 'Relaxation techniques', sub: 'Yoga nidra & guided release' },
        { title: 'Meditation', sub: 'Focus, clarity, equanimity' },
        { title: 'Stress reduction sessions', sub: 'Group & one-on-one' },
      ],
    },
    {
      id: 'programs',
      label: 'Lifestyle Programs',
      caption: 'Structured journeys for the conditions of modern life.',
      items: [
        { title: 'Diabetes management', sub: 'Reverse, regulate, sustain' },
        { title: 'Weight management', sub: 'Sustainable, drug-free' },
        { title: 'PCOS & menstrual health', sub: 'Hormone balance protocol' },
        { title: 'Hypertension', sub: 'Lifestyle-first BP control' },
        { title: 'Anxiety & sleep disorders', sub: 'Mind-body recovery' },
        { title: 'Bone & joint health', sub: 'Mobility & strength program' },
        { title: 'Stress management', sub: 'Resilience & nervous system' },
      ],
    },
    {
      id: 'education',
      label: 'Education & Awareness',
      caption: 'Bringing prevention into homes, schools and workplaces.',
      items: [
        { title: 'Workshops for sectors', sub: 'Corporate, schools, communities' },
        { title: 'Patient education sessions', sub: 'Empowered self-care' },
        { title: 'School & community programs', sub: 'Lifelong healthy habits' },
        { title: 'Intervention training', sub: 'Lifestyle-based curricula' },
      ],
    },
  ];

  readonly benefits = [
    {
      group: 'Physical',
      icon: 'physical',
      items: [
        'Improved immunity',
        'Better metabolic health',
        'Pain reduction',
        'Improved digestion',
        'Better energy levels',
      ],
    },
    {
      group: 'Physiological',
      icon: 'physiological',
      items: [
        'Lower blood pressure',
        'Balanced hormones',
        'Better sleep regulation',
        'Healthy weight',
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
      title: 'Integrative approach',
      body: 'Heritage wisdom of Yoga & Ayurveda woven with modern scientific understanding.',
    },
    {
      title: 'Evidence-based protocols',
      body: 'Stress reduction, metabolic balance and mental wellbeing — measured, not assumed.',
    },
    {
      title: 'Personalised plans',
      body: 'Built around your individual constitution (prakṛti) and lifestyle pattern.',
    },
    {
      title: 'Preventive orientation',
      body: 'We identify imbalance early — and reduce long-term disease risk before it sets.',
    },
    {
      title: 'Sustainable change',
      body: 'Modifications that fit your day, your kitchen, your work — and last for years.',
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
        'Within months of supervised lifestyle correction, my fasting sugars and HbA1c came back to normal — without adding new medication.',
    },
    {
      name: 'Lasting weight loss',
      tag: 'Sustained for over a year',
      quote:
        'The plan was personal, kind, and rooted in habits I could actually keep. The weight stayed off — and so did the fatigue.',
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
        'My cycle returned and my skin cleared. The team explained the why behind every change — that made me trust the process.',
    },
  ];

  readonly doctors: Doctor[] = [
    { name: 'Dr. Sindu', role: 'Lifestyle Physician', initial: 'S' },
    { name: 'Dr. Varsha', role: 'Yoga & Lifestyle', initial: 'V' },
    { name: 'Dr. Rachana', role: 'Ayurveda & Wellness', initial: 'R' },
    { name: 'Dr. Shamanta', role: 'Integrative Medicine', initial: 'S' },
    { name: 'Dr. Ramya', role: 'Preventive Health', initial: 'R' },
  ];

  readonly faqs: Faq[] = [
    {
      q: 'What is a lifestyle clinic?',
      a: 'A lifestyle clinic works on preventing and managing disease by correcting underlying factors — diet, daily routine, sleep, behaviour, thought process and stress — rather than only treating symptoms.',
    },
    {
      q: 'Will I be prescribed medicine?',
      a: 'No. Swasthya Bharati is a drugless unit. We focus on counselling and structured lifestyle correction. Where you already take medication, we work alongside your treating physician.',
    },
    {
      q: 'Is it safe for all ages?',
      a: 'Yes — children, adults and elderly. Plans are tailored to age, constitution and current health status.',
    },
    {
      q: 'Can it reverse diabetes or PCOS?',
      a: 'Many patients experience significant, sometimes complete improvement with supervised lifestyle changes. Outcomes depend on duration of disease, adherence and individual factors — your physician will be honest about what to expect.',
    },
    {
      q: 'How is a session structured?',
      a: 'A first consultation includes detailed lifestyle history, assessment and a tailored plan. Follow-ups review progress, refine the plan and add yoga, pranayama, dietary or behavioural modules as needed.',
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
      desc: 'Seasonal practices, recipes, research notes — to your inbox.',
      meta: 'Email • Free',
      icon: 'mail',
    },
  ];

  ngOnInit(): void {
    this.prevTitle = this.title.getTitle();
    this.title.setTitle(
      'Swasthya Bharati — Lifestyle & Drugless Wellness | Rashtrotthana Hospital'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Swasthya Bharati is the drugless lifestyle unit of Rashtrotthana Hospital — integrating Ayurveda, Yoga, nutrition and modern preventive medicine to address the root causes of chronic disease.',
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
  }

  ngOnDestroy(): void {
    if (this.prevTitle) this.title.setTitle(this.prevTitle);
    this.revealObserver?.disconnect();
    this.statsObserver?.disconnect();
    this.rafIds.forEach((id) => cancelAnimationFrame(id));
    this.rafIds = [];
  }

  setService(id: ServiceTab): void {
    this.activeService.set(id);
    requestAnimationFrame(() => this.updateTabIndicator());
  }

  toggleFaq(i: number): void {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }

  bookConsultation(): void {
    this.router.navigate(['/contact-us']);
  }

  scrollTo(id: string): void {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
}
