import {
  AfterViewInit, ChangeDetectionStrategy, Component,
  NgZone, OnDestroy, OnInit,
  ViewEncapsulation, inject, signal, computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineCard {
  time: string; sanskrit: string; english: string;
  desc: string; icon: 'sunrise'|'sun'|'noon'|'sunset'|'dusk'|'moon';
  isNight: boolean; arcT: number;
}

// ── SVG coordinate space ───────────────────────────────────────────────────────
export const VW = 1400;   // wider canvas for better card spacing
export const VH = 560;

// Arc control points — gentle curve, cards hang below it with good clearance
const P0 = { x: 40,   y: 200 };   // left end
const P1 = { x: 700,  y: 20  };   // peak (centre-top)
const P2 = { x: 1360, y: 200 };   // right end

export function bezierXY(t: number): { x: number; y: number } {
  const u = 1 - t;
  return {
    x: u*u*P0.x + 2*u*t*P1.x + t*t*P2.x,
    y: u*u*P0.y + 2*u*t*P1.y + t*t*P2.y,
  };
}

// Card dimensions
const CW = 165;    // card width
const CH = 190;    // card height
const IR = 22;     // icon circle radius

// ── arcT values — 6 evenly spaced positions across t=0.04..0.96 ───────────────
// Spread across the arc so cards are visually centred under their dot.
// t=0 is leftmost, t=1 is rightmost.
const CARD_T = [0.04, 0.20, 0.37, 0.54, 0.70, 0.87];

// STEM: how far below the arc dot the card top sits
const STEM = 28;

// Compute card layout: cx follows arc x, card is centred on cx
export function cardLayout(t: number) {
  const pt = bezierXY(t);
  // Clamp so card never clips the SVG edge
  const cx = Math.max(CW / 2 + 12, Math.min(VW - CW / 2 - 12, pt.x));
  return {
    cx,
    dotY:  pt.y,
    cardX: cx - CW / 2,
    cardY: pt.y + STEM,
  };
}

// ── Sky gradients (6 phases) ──────────────────────────────────────────────────
const SKY = [
  // 0 pre-dawn / early morning
  'linear-gradient(155deg,#0a0618 0%,#25103a 20%,#841545 46%,#e04228 66%,#f46c35 86%,#f89e2c 100%)',
  // 1 morning golden hour
  'linear-gradient(155deg,#161e60 0%,#2b4490 26%,#dc5d26 54%,#ee9826 76%,#ffd060 100%)',
  // 2 midday blue sky
  'linear-gradient(155deg,#0962a4 0%,#1e94ce 28%,#64c2ea 56%,#b0e2f4 82%,#eaf8ff 100%)',
  // 3 sunset
  'linear-gradient(155deg,#1a0628 0%,#680ea4 24%,#c81c4c 46%,#e64a1a 66%,#f68628 84%,#fcbe3c 100%)',
  // 4 evening / dusk
  'linear-gradient(155deg,#010210 0%,#04092a 32%,#0b1a48 62%,#162664 100%)',
  // 5 night
  'linear-gradient(155deg,#000108 0%,#020410 46%,#04091e 100%)',
];

interface Ph {
  cardBg:string; border:string; title:string; time:string;
  sub:string; icon:string; dot:string;
  activeBg:string; activeBorder:string; activeTitle:string; activeDot:string;
}
const PHASE: Ph[] = [
  // 0 Dawn
  { cardBg:'rgba(70,16,55,0.62)',  border:'rgba(255,145,75,0.52)',
    title:'#ffe0bc', time:'rgba(255,195,145,0.90)', sub:'rgba(255,185,135,0.70)', icon:'rgba(255,155,85,0.96)',
    dot:'rgba(225,105,45,0.88)', activeBg:'rgba(135,35,8,0.80)', activeBorder:'rgba(255,135,65,0.90)',
    activeTitle:'#ffeed5', activeDot:'#f88845' },
  // 1 Morning
  { cardBg:'rgba(25,45,108,0.58)', border:'rgba(238,195,55,0.45)',
    title:'#fff6d8', time:'rgba(255,228,132,0.90)', sub:'rgba(255,212,115,0.70)', icon:'rgba(255,208,75,0.96)',
    dot:'rgba(218,172,30,0.88)', activeBg:'rgba(105,65,0,0.76)', activeBorder:'rgba(255,210,65,0.90)',
    activeTitle:'#fff9e5', activeDot:'#f8cc38' },
  // 2 Noon
  { cardBg:'rgba(8,55,105,0.52)',  border:'rgba(45,185,235,0.42)',
    title:'#e5f5ff', time:'rgba(175,230,252,0.92)', sub:'rgba(155,220,252,0.70)', icon:'rgba(135,218,252,0.96)',
    dot:'rgba(25,165,220,0.88)', activeBg:'rgba(0,65,125,0.72)', activeBorder:'rgba(25,175,235,0.90)',
    activeTitle:'#ccf0ff', activeDot:'#25bcee' },
  // 3 Sunset
  { cardBg:'rgba(55,6,68,0.60)',   border:'rgba(228,85,35,0.45)',
    title:'#ffd5bc', time:'rgba(255,170,108,0.90)', sub:'rgba(255,160,98,0.70)', icon:'rgba(255,135,75,0.96)',
    dot:'rgba(212,80,30,0.88)', activeBg:'rgba(125,22,4,0.78)', activeBorder:'rgba(255,110,48,0.90)',
    activeTitle:'#ffe5cc', activeDot:'#ee5c28' },
  // 4 Dusk / evening (moon starts here)
  { cardBg:'rgba(4,10,48,0.65)',   border:'rgba(85,125,218,0.40)',
    title:'#bccefc', time:'rgba(148,180,240,0.90)', sub:'rgba(128,162,228,0.70)', icon:'rgba(118,170,240,0.96)',
    dot:'rgba(70,120,208,0.88)', activeBg:'rgba(8,20,95,0.80)', activeBorder:'rgba(90,148,238,0.90)',
    activeTitle:'#d2e4ff', activeDot:'#7ca8ec' },
  // 5 Night
  { cardBg:'rgba(2,4,20,0.70)',    border:'rgba(60,100,178,0.35)',
    title:'#a5bcda', time:'rgba(128,158,208,0.86)', sub:'rgba(110,142,198,0.65)', icon:'rgba(100,158,228,0.96)',
    dot:'rgba(50,110,198,0.82)', activeBg:'rgba(4,10,62,0.84)', activeBorder:'rgba(70,130,218,0.86)',
    activeTitle:'#bcd4f8', activeDot:'#5ca2d8' },
];

// Card 4 (19:00–21:00) is at arcT 0.70 — moon starts exactly here
// moonOpacity goes 0→1 between t=CARD_T[4] and t=CARD_T[4]+0.06
const MOON_START_T = CARD_T[4];       // 0.70
const MOON_FADE_SPAN = 0.05;          // fully moon by MOON_START_T+0.05

@Component({
  selector: 'app-dinacharya-timeline',
  standalone: true, imports: [CommonModule],
  templateUrl: './dinacharya-timeline.component.html',
  styleUrls: ['./dinacharya-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DinacharyaTimelineComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);

  readonly arcPath = `M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`;
  readonly arcFill = `M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y} L ${P2.x} ${VH} L ${P0.x} ${VH} Z`;

  // expose constants to template
  readonly VW = VW; readonly VH = VH;
  readonly CW = CW; readonly CH = CH;
  readonly IR = IR;

  readonly celestialT  = signal(0);
  readonly activeIdx   = signal(0);
  readonly isNight     = signal(false);
  readonly bgA         = signal(SKY[0]);
  readonly bgB         = signal(SKY[0]);
  readonly bgFade      = signal(1);
  readonly phaseBlend  = signal(0);

  readonly sunX = computed(() => bezierXY(this.celestialT()).x);
  readonly sunY = computed(() => bezierXY(this.celestialT()).y);

  // Moon starts fading in EXACTLY at card 4 (19:00–21:00), arcT=MOON_START_T
  readonly moonOpacity = computed(() =>
    Math.max(0, Math.min(1, (this.celestialT() - MOON_START_T) / MOON_FADE_SPAN))
  );

  readonly sunGlow = computed(() =>
    Math.max(0.4, 1 - Math.abs(this.celestialT() - 0.45) * 2.2)
  );

  readonly palette = computed<Ph>(() => {
    const pb = this.phaseBlend();
    const lo = Math.floor(pb) % 6;
    const hi = (lo + 1) % 6;
    return (pb % 1) < 0.5 ? PHASE[lo] : PHASE[hi];
  });

  private rafId?: number;
  private paused = false;
  private speed  = 0.000048;
  private lastTime = 0;
  private resumeTO?: ReturnType<typeof setTimeout>;
  private prevBgIdx = -1;
  private fadeId    = 0;
  private fadeCurrent = 1;

  // 6 timeline cards — arcT mapped to CARD_T array for even visual spacing
  readonly cards: TimelineCard[] = [
    { time:'04:30 – 06:00', sanskrit:'ब्राह्म मुहूर्त',      english:'Brahma Muhūrta',
      desc:'Wake before sunrise — the calmest, most absorbent hour.',
      icon:'sunrise', isNight:false, arcT: CARD_T[0] },
    { time:'06:00 – 08:00', sanskrit:'व्यायाम · प्राणायाम',  english:'Movement & Breath',
      desc:'Yoga, pranayama and a meditative seat as the body warms.',
      icon:'sun',     isNight:false, arcT: CARD_T[1] },
    { time:'12:00 – 14:00', sanskrit:'मध्याह्न आहार',         english:'Madhyāhna Āhāra',
      desc:'Largest meal at midday when digestive fire (agni) is strongest.',
      icon:'noon',    isNight:false, arcT: CARD_T[2] },
    { time:'17:00 – 19:00', sanskrit:'सायं संध्या',            english:'Sāyaṁ Sandhyā',
      desc:'Walk, gratitude practice and a light supper — wind the day down.',
      icon:'sunset',  isNight:false, arcT: CARD_T[3] },
    { time:'19:00 – 21:00', sanskrit:'ध्यान · स्वाध्याय',     english:'Dhyāna · Svādhyāya',
      desc:'Meditation and self-study — settle the mind before sleep.',
      icon:'dusk',    isNight:true,  arcT: CARD_T[4] },
    { time:'21:30 – 22:30', sanskrit:'निद्रा',                 english:'Nidrā',
      desc:'Deep sleep for restoration and repair.',
      icon:'moon',    isNight:true,  arcT: CARD_T[5] },
  ];

  // Per-card accent colors (matches reference image order)
  private readonly MOBILE_ACCENTS = [
    '#48c890', // 0 dawn   — teal-green
    '#f8c832', // 1 morning — amber-gold
    '#28c8f0', // 2 noon   — sky-blue
    '#f59e0b', // 3 sunset — orange-amber
    '#b870f8', // 4 dusk   — violet
    '#6898f8', // 5 night  — navy-blue
  ];

  mobileAccent(i: number): string { return this.MOBILE_ACCENTS[i] ?? '#ffffff'; }

  // Static card layouts — pre-computed once
  readonly layouts = this.cards.map(c => cardLayout(c.arcT));

  readonly stars = Array.from({ length: 60 }, (_, i) => {
    const s = (i*73+11)%100;
    return { left:(s*1.07)%100, top:(((i*31+7)%100)*0.88)%88,
             size:0.8+(s%3)*0.6, delay:(s*0.16)%6, dur:2+(s%5) };
  });
  readonly clouds = [
    { x: -8,  y: 4,  scale: 1.4, op: 0.82, delay: 0,   dur: 55, type: 'large'  },
    { x: 18,  y: 1,  scale: 0.9, op: 0.65, delay: -18, dur: 68, type: 'medium' },
    { x: 40,  y: 8,  scale: 1.1, op: 0.55, delay: -30, dur: 72, type: 'small'  },
    { x: 58,  y: 2,  scale: 1.3, op: 0.75, delay: -10, dur: 60, type: 'large'  },
    { x: 72,  y: 10, scale: 0.8, op: 0.50, delay: -42, dur: 80, type: 'medium' },
    { x: 85,  y: 5,  scale: 1.0, op: 0.60, delay: -25, dur: 65, type: 'small'  },
    { x: -5,  y: 18, scale: 0.7, op: 0.35, delay: -50, dur: 90, type: 'small'  },
    { x: 30,  y: 20, scale: 1.2, op: 0.40, delay: -8,  dur: 78, type: 'medium' },
    { x: 68,  y: 22, scale: 0.9, op: 0.30, delay: -35, dur: 85, type: 'small'  },
  ];
  readonly particles = Array.from({ length: 18 }, (_, i) => {
    const s = (i*61+5)%100;
    return { x:(s*1.01)%100, y:10+((s*47)%55), size:1.5+(s%3), delay:(s*0.28)%7, dur:5+(s%6) };
  });

  ngOnInit()        { this.bgA.set(SKY[0]); this.bgB.set(SKY[0]); this.bgFade.set(1); }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => this.tick(performance.now()));
  }
  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    clearTimeout(this.resumeTO);
    this.fadeId++;
  }

  private tick(now: number): void {
    if (!this.paused) {
      const delta = this.lastTime ? now - this.lastTime : 0;
      const t = (this.celestialT() + this.speed * delta) % 1;
      this.lastTime = now;
      this.zone.run(() => {
        this.celestialT.set(t);
        this.updatePhase(t);
        this.updateActive(t);
      });
    } else {
      this.lastTime = 0;
    }
    this.rafId = requestAnimationFrame(ts => this.tick(ts));
  }

  private updatePhase(t: number): void {
    const pts = this.cards.map(c => c.arcT);
    for (let i = 0; i < pts.length - 1; i++) {
      if (t >= pts[i] && t <= pts[i+1]) {
        this.phaseBlend.set(i + (t - pts[i]) / (pts[i+1] - pts[i]));
        return;
      }
    }
    this.phaseBlend.set(t < pts[0] ? 0 : pts.length - 1);
  }

  private updateActive(t: number): void {
    let best = this.activeIdx(), bestD = Infinity;
    for (let i = 0; i < this.cards.length; i++) {
      const d = Math.abs(this.cards[i].arcT - t);
      if (d < bestD) { bestD = d; best = i; }
    }
    // Activate card only when sun/moon is within 0.05 of the card's arcT
    if (bestD < 0.05 && this.activeIdx() !== best) {
      this.activeIdx.set(best);
      this.isNight.set(this.cards[best].isNight);
      if (this.prevBgIdx !== best) {
        this.prevBgIdx = best;
        this.bgA.set(this.bgB()); this.bgB.set(SKY[best]);
        const start = this.fadeCurrent;
        this.bgFade.set(start);
        const myId = ++this.fadeId;
        let step = 0;
        const fade = () => {
          if (this.fadeId !== myId) return;
          const v = Math.min(1, start + (++step) / 60);
          this.fadeCurrent = v; this.bgFade.set(v);
          if (v < 1) setTimeout(fade, 25);
        };
        setTimeout(fade, 25);
      }
    }
  }

  // ── Template helpers ────────────────────────────────────────────────────────
  p()                   { return this.palette(); }
  isActive(i: number)   { return this.activeIdx() === i; }
  cardBg(i: number)     { const p = this.p(); return this.isActive(i) ? p.activeBg    : p.cardBg; }
  cardBorder(i: number) { const p = this.p(); return this.isActive(i) ? p.activeBorder: p.border; }
  titleColor(i: number) { const p = this.p(); return this.isActive(i) ? p.activeTitle : p.title; }
  dotFill(i: number)    { const p = this.p(); return this.isActive(i) ? p.activeDot   : p.dot; }
  subColor()  { return this.p().sub; }
  timeColor() { return this.p().time; }
  iconColor() { return this.p().icon; }
  dotR(i: number) { return this.isActive(i) ? 9 : 5.5; }

  // Mobile card colors — each card uses its own fixed phase palette
  // so the card color matches the sky phase it represents (not the global animated phase)
  mobileBg(i: number)     { return this.isActive(i) ? PHASE[i].activeBg     : PHASE[i].cardBg; }
  mobileBorder(i: number) { return this.isActive(i) ? PHASE[i].activeBorder : PHASE[i].border; }
  mobileTitle(i: number)  { return this.isActive(i) ? PHASE[i].activeTitle  : PHASE[i].title; }
  mobileSub(i: number)    { return PHASE[i].sub; }
  mobileTime(i: number)   { return PHASE[i].time; }
  mobileIcon(i: number)   { return PHASE[i].icon; }

  clickCard(i: number): void {
    this.paused = true;
    clearTimeout(this.resumeTO);
    this.celestialT.set(this.cards[i].arcT);
    this.activeIdx.set(i);
    this.isNight.set(this.cards[i].isNight);
    this.bgA.set(this.bgB()); this.bgB.set(SKY[i]);
    this.fadeCurrent = 0; this.bgFade.set(0);
    this.prevBgIdx = i; this.phaseBlend.set(i);
    const myId = ++this.fadeId; let step = 0;
    const fade = () => {
      if (this.fadeId !== myId) return;
      const v = Math.min(1, (++step) / 40);
      this.fadeCurrent = v; this.bgFade.set(v);
      if (v < 1) setTimeout(fade, 20);
    };
    setTimeout(fade, 20);
    this.resumeTO = setTimeout(() => { this.paused = false; }, 6000);
  }

  hoverCard(p: boolean) { this.paused = p; if (!p) this.lastTime = 0; }
  trackBy(i: number)    { return i; }
}
