import {
  Component, signal, computed, ChangeDetectionStrategy,
  ViewEncapsulation, ElementRef, ViewChild, AfterViewInit, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface KanbanItem { n: string; t: string; d: string; }
interface KanbanCol {
  label: string;
  colIcon: string;
  bg: string; headBg: string; iconBg: string; iconColor: string; labelColor: string;
  countBg: string; countColor: string; cardBorder: string; numBg: string; numColor: string;
  items: KanbanItem[];
}
interface KanbanSection {
  icon: string; img: string; tag: string; title: string; desc: string;
  headingsOnly?: boolean;
  hideColHead?: boolean;
  cols: KanbanCol[];
}

// ── Pinboard view-model ──────────────────────────────────────────────────────
interface PinPalette { tint: string; pin: string; num: string; label: string; }
interface PinNote {
  n: string;             // badge label / number
  t: string;             // title
  d: string;             // description
  label: string;         // category label (e.g. "Daily routine", "Uttarayana")
  showLabel: boolean;    // hide label when section has only one category
  pal: PinPalette;
}

@Component({
  selector: 'app-wellness-handbook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wellness-handbook.component.html',
  styleUrl: './wellness-handbook.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WellnessHandbookComponent implements AfterViewInit, OnDestroy {

  @ViewChild('boardEl') boardEl?: ElementRef<HTMLDivElement>;

  readonly current = signal(0);
  readonly active  = signal<number>(-1);
  // 'two' = desktop two-column layout, 'one' = mobile single column
  readonly cols = signal<'two' | 'one'>('two');

  // map column.labelColor → pinboard palette (kept consistent with old colours)
  private readonly PAL_MAP: Record<string, PinPalette> = {
    // greens (Daily routine / What to eat / Diet eat / Recommended)
    '#166534': { tint: '#dcfce7', pin: '#2f9e6a', num: '#15803d', label: '#166534' },
    // amber (Uttarayana / How to eat / Life balance / Scientific correlations)
    '#92400e': { tint: '#fef3c7', pin: '#d98324', num: '#b45309', label: '#92400e' },
    // indigo (Dakshinayana / Daily habits / Practices / Key markers)
    '#3730a3': { tint: '#e0e7ff', pin: '#5b63d6', num: '#4338ca', label: '#3730a3' },
    // rose (What to avoid / Traits to control / Foods to avoid)
    '#9f1239': { tint: '#ffe4e6', pin: '#e0476f', num: '#be123c', label: '#9f1239' },
  };

  private readonly DEFAULT_PAL: PinPalette =
    { tint: '#dcfce7', pin: '#2f9e6a', num: '#15803d', label: '#166534' };

  readonly sections: KanbanSection[] = [
    {
      icon: 'sun', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=160&h=160&fit=crop', tag: 'Dinacharya',
      title: 'Dinacharya (Daily Regimen)',
      desc: 'Structured daily routines for health and vitality',
      hideColHead: true,
      cols: [
        {
          label: 'Daily routine', colIcon: 'sunrise', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
          labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
          cardBorder: '#bbf7d0', numBg: '#dcfce7', numColor: '#15803d',
          items: [
            { n: '1',  t: 'Pratarutthana',               d: 'Waking up before sunrise (Brahma Muhurta)' },
            { n: '2',  t: 'Mala Mutra Visarjana',         d: 'Timely evacuation of bladder and bowels' },
            { n: '3',  t: 'Dantdhavana & Jihvanirlekana', d: 'Oral hygiene — herbal brushing & tongue scraping' },
            { n: '4',  t: 'Ushapana',                     d: 'Drinking one glass of water on empty stomach' },
            { n: '5',  t: 'Anjana and Nasya',             d: 'Herbal collyrium to eyes; medicated nasal drops' },
            { n: '6',  t: 'Kavala & Gandusha',            d: 'Oral Detox — swishing herbal oil in the mouth' },
            { n: '7',  t: 'Abhyanga and Udvarthana',      d: 'Oil application on the body before bath' },
            { n: '8',  t: 'Vyayama and Yogasana',         d: 'Stretching and physical exercise after oil massage' },
            { n: '9',  t: 'Snana',                        d: 'Bathing with warm water using herbal powders' },
            { n: '10', t: 'Prarthana',                    d: 'Offering prayers to the Almighty' },
            { n: '11', t: 'Bhojana',                      d: 'Eat only when truly hungry; home-cooked traditional meals' },
            { n: '12', t: 'Tambula sevana',               d: 'Chewing betel leaf preparation' },
            { n: '13', t: 'Dhoomapana',                   d: 'Inhalation of medicated smoke from nose or mouth' },
            { n: '14', t: 'Padabhyanga',                  d: 'Massaging feet with ghee or sesame oil before bedtime' },
            { n: '15', t: 'Nidra',                        d: 'Sleep — healthy sleep guidelines' },
          ],
        },
      ],
    },
    {
      icon: 'seasons', img: 'assets/swastya-page/swsthyabharathi-logo.png', tag: 'Ritucharya',
      title: 'Ritucharya (Seasonal Regimen)',
      desc: 'Ayurvedic seasonal regimen — six seasons across two solstice periods',
      cols: [
        {
          label: 'Uttarayana', colIcon: 'sun', bg: '#fffbeb', headBg: '#fef3c7', iconBg: '#fde68a', iconColor: '#92400e',
          labelColor: '#92400e', countBg: '#fde68a', countColor: '#92400e',
          cardBorder: '#fde68a', numBg: '#fffbeb', numColor: '#b45309',
          items: [
            { n: '1', t: 'Shishira Ritu', d: 'Late winter — cold and dry; strengthen agni with warm, nourishing foods' },
            { n: '2', t: 'Vasanta Ritu',  d: 'Spring — kapha accumulates; favour light, bitter, pungent foods' },
            { n: '3', t: 'Grishma Ritu',  d: 'Summer — intense heat; favour cool, sweet, liquid-rich foods' },
          ],
        },
        {
          label: 'Dakshinayana', colIcon: 'cloud', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
          labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
          cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
          items: [
            { n: '4', t: 'Varsha Ritu',  d: 'Rainy season — vata aggravates; favour sour, salty, easily digestible foods' },
            { n: '5', t: 'Sharad Ritu',  d: 'Autumn — pitta flares; favour sweet, bitter, cooling foods' },
            { n: '6', t: 'Hemanta Ritu', d: 'Early winter — agni strongest; favour unctuous, heavy, nourishing foods' },
          ],
        },
      ],
    },
    {
      icon: 'bowl', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=160&h=160&fit=crop', tag: 'Ahara',
      title: 'Ahara (Food) — guidelines for healthy eating',
      desc: 'Food as the foundation of physical, mental, and spiritual well-being',
      cols: [
        {
          label: 'What to eat', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
          labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
          cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
          items: [
            { n: '1',  t: 'Choose food by season and health',   d: 'Season, time of day, age, digestion strength' },
            { n: '2',  t: 'Eat freshly prepared food',          d: 'Freshly cooked and warm; avoid stale or reheated' },
            { n: '5',  t: 'Respect regional staples',           d: 'Prefer unpolished, locally grown grains' },
            { n: '6',  t: 'Consume a balanced meal',            d: 'Include all six tastes in each meal' },
            { n: '10', t: 'Include milk and ghee',              d: 'Ethically sourced; in proper quantity' },
            { n: '11', t: 'Consume local and seasonal produce', d: 'Eat what grows in your region and season' },
          ],
        },
        {
          label: 'How to eat', colIcon: 'utensils', bg: '#fffbeb', headBg: '#fef3c7', iconBg: '#fde68a', iconColor: '#92400e',
          labelColor: '#92400e', countBg: '#fde68a', countColor: '#92400e',
          cardBorder: '#fde68a', numBg: '#fffbeb', numColor: '#b45309',
          items: [
            { n: '7',  t: 'Follow proper eating conduct',        d: 'Eat mindfully without distractions' },
            { n: '8',  t: 'Eat only after proper digestion',     d: 'Do not eat until the previous meal is digested' },
            { n: '9',  t: 'Maintain proper quantity',            d: 'Stomach division rule — leave space' },
            { n: '12', t: 'Cook food properly',                  d: 'Avoid overcooked or undercooked food' },
            { n: '13', t: 'Eat with mindfulness and gratitude',  d: 'Mental state influences digestion' },
          ],
        },
        {
          label: 'What to avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
          labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
          cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
          items: [
            { n: '3',  t: 'Maintain purity in preparation',             d: 'Cleanliness of utensils, place, cook\'s mental state' },
            { n: '4',  t: 'Avoid incompatible combinations (Viruddha)', d: 'E.g. milk should not be combined with salty or sour' },
            { n: '14', t: 'Avoid processed foods; prefer organic',      d: 'Highly processed items harm long-term health' },
          ],
        },
      ],
    },
    // ── Vyayama (Physical Activity) ────────────────────────────────────────
    {
      icon: 'sun', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=160&h=160&fit=crop',
      tag: 'Vyayama',
      title: 'Vyayama (Physical Activity)',
      desc: 'Regular physical exercise to strengthen body, sharpen mind and stabilise health',
      cols: [
        {
          label: 'Benefits', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
          labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
          cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
          items: [
            { n: '1', t: 'Improves lightness of body',     d: 'Laghava — feeling agile and energetic' },
            { n: '2', t: 'Enhances digestion (agni)',       d: 'Strengthens metabolism and tissue assimilation' },
            { n: '3', t: 'Builds strength & stamina',       d: 'Increases muscle tone and endurance (sthairya, bala)' },
            { n: '4', t: 'Sharpens body firmness',          d: 'Improves proportionate growth of body parts' },
            { n: '5', t: 'Cleanses toxins via sweat',       d: 'Helps in elimination of ama (metabolic waste)' },
            { n: '6', t: 'Stabilises mind',                 d: 'Reduces anxiety, depression and lethargy' },
          ],
        },
        {
          label: 'How to practise', colIcon: 'activity', bg: '#fffbeb', headBg: '#fef3c7', iconBg: '#fde68a', iconColor: '#92400e',
          labelColor: '#92400e', countBg: '#fde68a', countColor: '#92400e',
          cardBorder: '#fde68a', numBg: '#fffbeb', numColor: '#b45309',
          items: [
            { n: '7',  t: 'Exercise to half your strength', d: 'Ardha-shakti — until sweat appears on forehead, nose, axilla' },
            { n: '8',  t: 'Best time — early morning',       d: 'Before sunrise during Kapha period (6–10 am)' },
            { n: '9',  t: 'Daily, consistent practice',     d: 'Short daily sessions over occasional heavy bouts' },
            { n: '10', t: 'Include yogasana & pranayama',    d: 'Combines physical strength with breath control' },
            { n: '11', t: 'Cool down after exercise',        d: 'Gentle stretching, normal breathing, water sip' },
          ],
        },
        {
          label: 'What to avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
          labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
          cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
          items: [
            { n: '✗', t: 'Over-exertion',                   d: 'Causes fatigue, breathlessness, joint pain, immunity loss' },
            { n: '✗', t: 'Exercise on a full stomach',       d: 'Disturbs digestion; wait 2–3 hours after meals' },
            { n: '✗', t: 'Exercise when ill or weak',        d: 'Skip during fever, indigestion, after blood loss' },
            { n: '✗', t: 'Vigorous exercise in extreme heat', d: 'Aggravates pitta and dehydration in summer' },
          ],
        },
      ],
    },
    // ── Nidra (Sleep) ──────────────────────────────────────────────────────
    {
      icon: 'moon', img: 'https://images.unsplash.com/photo-1455642305367-68834a1f7eea?w=160&h=160&fit=crop',
      tag: 'Nidra',
      title: 'Nidra (Sleep)',
      desc: 'Restorative sleep is one of the three pillars (trayopastambha) of life',
      cols: [
        {
          label: 'Benefits of good sleep', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
          labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
          cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
          items: [
            { n: '1', t: 'Pushti — proper nourishment',   d: 'Restores body tissues and growth' },
            { n: '2', t: 'Bala — strength & immunity',    d: 'Repairs and re-energises the body' },
            { n: '3', t: 'Jnana — clarity of mind',       d: 'Improves memory, learning and focus' },
            { n: '4', t: 'Happiness & life-longevity',    d: 'Sukha-ayushya — emotional balance and longevity' },
          ],
        },
        {
          label: 'Healthy practices', colIcon: 'calendar', bg: '#eef2ff', headBg: '#e0e7ff', iconBg: '#c7d2fe', iconColor: '#3730a3',
          labelColor: '#3730a3', countBg: '#c7d2fe', countColor: '#3730a3',
          cardBorder: '#e0e7ff', numBg: '#eef2ff', numColor: '#4338ca',
          items: [
            { n: '5', t: 'Sleep before 10 pm',            d: 'Align with the natural Kapha-night cycle' },
            { n: '6', t: '6–8 hours of restful sleep',     d: 'Wake before sunrise (Brahma Muhurta)' },
            { n: '7', t: 'Padabhyanga before bed',         d: 'Foot massage with sesame oil or ghee' },
            { n: '8', t: 'Light meals at night',           d: 'Easy-to-digest, warm food 2–3 hours before bed' },
            { n: '9', t: 'Calm environment',               d: 'Dim lights, no screens, comfortable bedding' },
          ],
        },
        {
          label: 'Avoid these habits', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
          labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
          cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
          items: [
            { n: '✗', t: 'Day sleep (Divasvapna)',          d: 'Aggravates kapha — avoid except in summer or after illness' },
            { n: '✗', t: 'Late-night sleep (Ratri-jagarana)', d: 'Aggravates vata, causes dryness, anxiety, fatigue' },
            { n: '✗', t: 'Heavy meals before bed',           d: 'Disturbs digestion and quality of sleep' },
            { n: '✗', t: 'Screens & stimulants at night',    d: 'Caffeine, mobile screens disturb melatonin cycle' },
          ],
        },
      ],
    },
    // ── Manasika Arogya (incl. Sadvritta — code of ethical conduct) ─────────
    {
      icon: 'heart', img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=160&h=160&fit=crop',
      tag: 'Manasika Arogya',
      title: 'Manasika Arogya (Mental Well-being & Sadvritta)',
      desc: 'Cultivating a calm, resilient mind through Ayurvedic mental practices and the code of ethical conduct (Sadvritta)',
      cols: [
        {
          label: 'Cultivate (Manasika)', colIcon: 'leaf', bg: '#f0fdf4', headBg: '#dcfce7', iconBg: '#bbf7d0', iconColor: '#166534',
          labelColor: '#166534', countBg: '#bbf7d0', countColor: '#166534',
          cardBorder: '#bbf7d0', numBg: '#f0fdf4', numColor: '#15803d',
          items: [
            { n: '1', t: 'Dhyana (meditation)',            d: 'Calms the mind, builds inner awareness' },
            { n: '2', t: 'Pranayama (breath control)',     d: 'Regulates prana, stabilises emotions' },
            { n: '3', t: 'Satsanga (good company)',         d: 'Spend time with positive, wise people' },
            { n: '4', t: 'Reading & self-study (Swadhyaya)', d: 'Sacred texts, biographies, reflective writing' },
            { n: '5', t: 'Service (Seva) to others',       d: 'Gives purpose and reduces self-centred worry' },
            { n: '6', t: 'Time in nature',                 d: 'Sunlight, greenery, fresh air, walking barefoot' },
          ],
        },
        {
          label: 'Sadvritta — Personal conduct', colIcon: 'shield', bg: '#fffbeb', headBg: '#fef3c7', iconBg: '#fde68a', iconColor: '#92400e',
          labelColor: '#92400e', countBg: '#fde68a', countColor: '#92400e',
          cardBorder: '#fde68a', numBg: '#fffbeb', numColor: '#b45309',
          items: [
            { n: '7',  t: 'Speak the truth (Satya)',        d: 'Words should be honest, gentle and beneficial' },
            { n: '8',  t: 'Practise non-violence (Ahimsa)', d: 'In thought, word and deed' },
            { n: '9',  t: 'Be clean & well-groomed',        d: 'Daily hygiene of body, clothing and surroundings' },
            { n: '10', t: 'Cultivate self-discipline',      d: 'Control over the senses (Indriya-nigraha)' },
            { n: '11', t: 'Practise gratitude',             d: 'Towards parents, teachers, elders and nature' },
            { n: '12', t: 'Respect elders & teachers',      d: 'Acknowledge wisdom and guidance' },
            { n: '13', t: 'Be charitable & compassionate',  d: 'Daana — share with those in need' },
            { n: '14', t: 'Maintain harmonious relations',  d: 'In family, workplace and community' },
          ],
        },
        {
          label: 'Mental disturbers — avoid', colIcon: 'ban', bg: '#fff1f2', headBg: '#ffe4e6', iconBg: '#fecdd3', iconColor: '#9f1239',
          labelColor: '#9f1239', countBg: '#fecdd3', countColor: '#9f1239',
          cardBorder: '#fecdd3', numBg: '#fff1f2', numColor: '#be123c',
          items: [
            { n: '✗', t: 'Kama (excessive desire)',         d: 'Leads to restlessness and dissatisfaction' },
            { n: '✗', t: 'Krodha (anger)',                  d: 'Destroys peace, judgement and relationships' },
            { n: '✗', t: 'Lobha (greed)',                   d: 'Breeds anxiety and unethical conduct' },
            { n: '✗', t: 'Moha (delusion / attachment)',    d: 'Clouds discrimination (viveka)' },
            { n: '✗', t: 'Mada (pride) & Matsarya (envy)',  d: 'Generate inner conflict and isolation' },
            { n: '✗', t: 'Stealing or dishonesty',           d: 'Asteya — never take what is not yours' },
            { n: '✗', t: 'Cruelty to living beings',          d: 'Causes guilt and mental disturbance' },
            { n: '✗', t: 'Gossip or back-biting',             d: 'Disturbs relationships and inner peace' },
          ],
        },
      ],
    },
  ];

  get total() { return this.sections.length; }
  get section() { return this.sections[this.current()]; }
  get itemCount() { return this.section.cols.reduce((a, c) => a + c.items.length, 0); }

  // Flat ordered list of pin notes for the active section
  readonly notes = computed<PinNote[]>(() => {
    const s = this.sections[this.current()];
    const multi = s.cols.length > 1;
    const out: PinNote[] = [];
    for (const c of s.cols) {
      const pal = this.PAL_MAP[c.labelColor] ?? this.DEFAULT_PAL;
      for (const it of c.items) {
        out.push({ n: it.n, t: it.t, d: it.d, label: c.label, showLabel: multi, pal });
      }
    }
    return out;
  });

  // ── Percentage-based pinboard geometry (matches reference design) ──────────
  // Reference design used a fixed 900px board with: cardW=262 (29.1%),
  // leftCol=92 (10.2%), rightCol=506 (56.2%), jitter 0..26 (0..2.9%),
  // step=128px. We keep step in pixels (so card overlap is consistent)
  // and express x-positions as % of board width so the layout fluidly fits
  // any board width — no transform:scale, no overflow tricks.
  readonly CARD_W_PCT  = 29.1;
  readonly LEFT_X_PCT  = 10.2;
  readonly RIGHT_X_PCT = 56.2;
  readonly TOP0        = 46;
  readonly STEP        = 128;
  private readonly JITTER_PCT = [0, 2.0, -1.3, 2.9, -0.7, 2.4, -1.8, 1.1];

  // Position of note i within the board.
  // x positions in %, y positions in px (so the vertical rhythm is stable).
  notePos(i: number) {
    if (this.cols() === 'one') {
      // Mobile: single centred column, wider card, no jitter, no overlap
      const top   = this.TOP0 + i * (this.STEP + 28);
      const leftPct  = 6;
      const widthPct = 88;
      return { leftPct, top, widthPct, pinXPct: leftPct + widthPct / 2, pinY: top - 4 };
    }
    const isLeft = i % 2 === 0;
    const leftPct = (isLeft ? this.LEFT_X_PCT : this.RIGHT_X_PCT)
                  + this.JITTER_PCT[i % this.JITTER_PCT.length];
    const top     = this.TOP0 + i * this.STEP;
    return { leftPct, top, widthPct: this.CARD_W_PCT,
             pinXPct: leftPct + this.CARD_W_PCT / 2, pinY: top - 4 };
  }

  // Total board height — last note's top + room for the card body + padding
  readonly boardH = computed(() => {
    if (this.cols() === 'one') {
      return this.TOP0 + this.notes().length * (this.STEP + 28) + 40;
    }
    return this.TOP0 + this.notes().length * this.STEP + 84;
  });

  // SVG path connecting consecutive pin heads with a smooth S-curve.
  // viewBox is 100×boardH so x is % of width, y is px.
  readonly paths = computed<string[]>(() => {
    const n = this.notes().length;
    if (n < 2) return [];
    const out: string[] = [];
    for (let i = 0; i < n - 1; i++) {
      const a = this.notePos(i);
      const b = this.notePos(i + 1);
      const midY = (a.pinY + b.pinY) / 2;
      out.push(`M${a.pinXPct},${a.pinY} C${a.pinXPct},${midY} ${b.pinXPct},${midY} ${b.pinXPct},${b.pinY}`);
    }
    return out;
  });

  goto(i: number) { this.current.set(i); this.active.set(-1); }
  prev() { if (this.current() > 0) { this.current.update(v => v - 1); this.active.set(-1); } }
  next() { if (this.current() < this.total - 1) { this.current.update(v => v + 1); this.active.set(-1); } }
  setActive(i: number) { this.active.set(this.active() === i ? -1 : i); }

  // ── Responsive layout switching ──────────────────────────────────────────
  private resizeHandler = () => this.updateCols();

  ngAfterViewInit() {
    this.updateCols();
    window.addEventListener('resize', this.resizeHandler, { passive: true });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  private updateCols() {
    const w = window.innerWidth;
    this.cols.set(w < 720 ? 'one' : 'two');
  }
}
