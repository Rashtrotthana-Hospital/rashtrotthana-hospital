import {
  AfterViewInit, ChangeDetectionStrategy, Component,
  NgZone, OnDestroy, OnInit,
  ViewEncapsulation, inject, signal, computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineCard {
  time: string; sanskrit: string; english: string;
  desc: string; icon: 'sunrise'|'sun'|'noon'|'sunset'|'dusk'|'moon';
  img: string;
  isNight: boolean; arcT: number;
}

// ── SVG coordinate space ───────────────────────────────────────────────────────
export const VW = 1400;   // wider canvas for better card spacing
export const VH = 560;

// Arc control points — tails extend ~60px beyond first/last card dot
const P0 = { x: 30,   y: 200 };   // left tail
const P1 = { x: 667,  y: 20  };   // peak
const P2 = { x: 1370, y: 200 };   // right tail

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

// ── arcT values — evenly spaced by X position across the arc ─────────────────
// Card centers are placed at equal horizontal gaps.
// X_START / X_END = card center x of first/last card, each inset by CW/2 + margin
// so cards don't clip either SVG edge.
const MARGIN  = 20;                      // gap between card edge and SVG edge
const X_START = CW / 2 + MARGIN;        // = 102.5 — first card center
const X_END   = VW - CW / 2 - MARGIN;   // = 1297.5 — last card center
const N_CARDS = 6;

// Solve t for a target x on the quadratic bezier (P0, P1, P2):
// x(t) = (1-t)^2*P0.x + 2*(1-t)*t*P1.x + t^2*P2.x
// Rearrange to: (P0-2P1+P2)*t^2 + 2*(P1-P0)*t + (P0-x) = 0
function tForX(targetX: number): number {
  const a = P0.x - 2*P1.x + P2.x;
  const b = 2*(P1.x - P0.x);
  const c = P0.x - targetX;
  if (Math.abs(a) < 1e-9) return -c / b;
  const disc = b*b - 4*a*c;
  const sqrtD = Math.sqrt(Math.max(0, disc));
  const t1 = (-b + sqrtD) / (2*a);
  const t2 = (-b - sqrtD) / (2*a);
  if (t1 >= 0 && t1 <= 1) return t1;
  return t2;
}

const CARD_T: number[] = Array.from({ length: N_CARDS }, (_, i) => {
  const x = X_START + (i / (N_CARDS - 1)) * (X_END - X_START);
  return tForX(x);
});

// STEM: how far below the arc dot the card top sits
const STEM = 28;

// Compute card layout — no clamping needed since X_START/X_END already
// ensure card centers are safely inside the SVG viewport.
export function cardLayout(t: number) {
  const pt = bezierXY(t);
  const cx = pt.x;
  return {
    cx,
    dotY:  pt.y,
    cardX: cx - CW / 2,
    cardY: pt.y + STEM,
  };
}

// ── Sky gradients (6 seasons) ──────────────────────────────────────────────────
const SKY = [
  // 0 Shishira — Late Winter: icy silver-blue mist
  'linear-gradient(155deg,#0d1a2e 0%,#1a2e45 28%,#2a4a6a 54%,#4a7a9a 78%,#8ab8cc 100%)',
  // 1 Vasanta — Spring: fresh green dawn
  'linear-gradient(155deg,#061a0e 0%,#0e3a1e 26%,#1a6a34 52%,#2eaa58 76%,#7ad48a 100%)',
  // 2 Grishma — Summer: blazing amber-orange heat
  'linear-gradient(155deg,#1a0a00 0%,#5a1e00 22%,#c04800 46%,#e87a00 68%,#ffc040 86%,#ffe090 100%)',
  // 3 Varsha — Rainy Season: deep monsoon blue-grey
  'linear-gradient(155deg,#060c18 0%,#0c1a30 28%,#162848 54%,#1e3860 76%,#2a5080 100%)',
  // 4 Sharad — Autumn: warm russet gold
  'linear-gradient(155deg,#18080a 0%,#4a1808 26%,#8a3010 50%,#c46018 72%,#e89840 88%,#f8c870 100%)',
  // 5 Hemanta — Early Winter: cool deep teal-midnight
  'linear-gradient(155deg,#020c10 0%,#061820 32%,#0c2a34 60%,#124050 82%,#1e5a6a 100%)',
];

interface Ph {
  cardBg:string; border:string; title:string; time:string;
  sub:string; icon:string; dot:string;
  activeBg:string; activeBorder:string; activeTitle:string; activeDot:string;
}
const PHASE: Ph[] = [
  // 0 Shishira — Late Winter: icy silver-blue
  { cardBg:'rgba(10,28,50,0.65)',  border:'rgba(130,185,215,0.55)',
    title:'#d8eef8', time:'rgba(165,215,240,0.92)', sub:'rgba(140,195,225,0.72)', icon:'rgba(160,220,245,0.96)',
    dot:'rgba(80,160,210,0.90)', activeBg:'rgba(18,55,90,0.82)', activeBorder:'rgba(140,200,235,0.92)',
    activeTitle:'#eaf6ff', activeDot:'#80c8e8' },
  // 1 Vasanta — Spring: fresh green
  { cardBg:'rgba(8,40,20,0.65)',   border:'rgba(80,185,110,0.55)',
    title:'#c8f0d8', time:'rgba(120,220,155,0.92)', sub:'rgba(100,200,135,0.72)', icon:'rgba(110,215,145,0.96)',
    dot:'rgba(50,175,90,0.90)', activeBg:'rgba(14,70,35,0.82)', activeBorder:'rgba(90,200,125,0.92)',
    activeTitle:'#dff8e8', activeDot:'#5ece88' },
  // 2 Grishma — Summer: fiery amber-orange
  { cardBg:'rgba(60,22,0,0.65)',   border:'rgba(240,140,30,0.55)',
    title:'#ffe8b0', time:'rgba(255,200,80,0.92)', sub:'rgba(255,185,70,0.72)', icon:'rgba(255,195,75,0.96)',
    dot:'rgba(235,140,20,0.90)', activeBg:'rgba(110,42,0,0.82)', activeBorder:'rgba(255,165,40,0.92)',
    activeTitle:'#fff4cc', activeDot:'#f8b828' },
  // 3 Varsha — Rainy Season: monsoon blue
  { cardBg:'rgba(8,20,45,0.68)',   border:'rgba(70,130,200,0.52)',
    title:'#c0d8f8', time:'rgba(140,185,240,0.92)', sub:'rgba(120,165,225,0.72)', icon:'rgba(110,175,240,0.96)',
    dot:'rgba(55,125,210,0.90)', activeBg:'rgba(12,35,75,0.82)', activeBorder:'rgba(80,150,220,0.92)',
    activeTitle:'#d8eaff', activeDot:'#60a8e8' },
  // 4 Sharad — Autumn: warm rust-gold
  { cardBg:'rgba(50,15,5,0.68)',   border:'rgba(220,130,40,0.55)',
    title:'#ffd8a0', time:'rgba(245,185,90,0.92)', sub:'rgba(230,168,78,0.72)', icon:'rgba(240,175,80,0.96)',
    dot:'rgba(210,118,28,0.90)', activeBg:'rgba(95,28,8,0.82)', activeBorder:'rgba(238,148,48,0.92)',
    activeTitle:'#ffe8c0', activeDot:'#e8a030' },
  // 5 Hemanta — Early Winter: deep teal
  { cardBg:'rgba(4,20,28,0.70)',   border:'rgba(50,145,155,0.48)',
    title:'#a8dce5', time:'rgba(120,195,210,0.88)', sub:'rgba(100,175,192,0.68)', icon:'rgba(95,185,200,0.96)',
    dot:'rgba(38,138,155,0.85)', activeBg:'rgba(6,38,50,0.85)', activeBorder:'rgba(60,165,180,0.90)',
    activeTitle:'#c5eaf0', activeDot:'#48b8c8' },
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

  // Mobile: map celestialT → even vertical % (0% = first card, 100% = last card)
  // Each card gets an equally spaced vertical slot regardless of arcT spacing,
  // so the sun/moon moves at constant visual speed and never jumps back.
  readonly mobilePct = computed(() => {
    const t = this.celestialT();
    const n = CARD_T.length;                       // 6 cards
    // Find which segment t is in
    for (let i = 0; i < n - 1; i++) {
      if (t >= CARD_T[i] && t < CARD_T[i + 1]) {
        // interpolate evenly within this segment
        const segT = (t - CARD_T[i]) / (CARD_T[i + 1] - CARD_T[i]);
        return ((i + segT) / (n - 1)) * 100;
      }
    }
    // Before first card → clamp to top
    if (t < CARD_T[0]) return 0;
    // After last card (wrapping phase) → clamp to bottom
    return 100;
  });

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
    { time:'Shishira Ritu', sanskrit:'शिशिर ऋतु',  english:'Late Winter',
      desc:'Cold and dry season — strengthen agni with warm, nourishing foods.',
      img:'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=80&h=80&fit=crop',
      icon:'sunrise', isNight:false, arcT: CARD_T[0] },
    { time:'Vasanta Ritu',  sanskrit:'वसंत ऋतु',   english:'Spring',
      desc:'Kapha accumulates — favour light, bitter and pungent foods.',
      img:'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=80&h=80&fit=crop',
      icon:'sun',     isNight:false, arcT: CARD_T[1] },
    { time:'Grishma Ritu',  sanskrit:'ग्रीष्म ऋतु', english:'Summer',
      desc:'Intense heat — favour cool, sweet and liquid-rich foods.',
      img:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=80&h=80&fit=crop',
      icon:'noon',    isNight:false, arcT: CARD_T[2] },
    { time:'Varsha Ritu',   sanskrit:'वर्षा ऋतु',   english:'Rainy Season',
      desc:'Vata aggravates — favour sour, salty and easily digestible foods.',
      img:'assets/swastya-page/images.jpeg',
      icon:'sunset',  isNight:false, arcT: CARD_T[3] },
    { time:'Sharad Ritu',   sanskrit:'शरद् ऋतु',   english:'Autumn',
      desc:'Pitta flares — favour sweet, bitter and cooling foods.',
      img:'assets/swastya-page/Sharat-Ritu.jpeg',
      icon:'dusk',    isNight:false,  arcT: CARD_T[4] },
    { time:'Hemanta Ritu',  sanskrit:'हेमंत ऋतु',  english:'Early Winter',
      desc:'Agni is strongest — favour unctuous, heavy and nourishing foods.',
      img:'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=80&h=80&fit=crop',
      icon:'moon',    isNight:false,  arcT: CARD_T[5] },
  ];

  // Per-card accent colors — season-matched
  private readonly MOBILE_ACCENTS = [
    '#80c8e8', // 0 Shishira — icy blue
    '#5ece88', // 1 Vasanta  — spring green
    '#f8b828', // 2 Grishma  — summer amber
    '#60a8e8', // 3 Varsha   — monsoon blue
    '#e8a030', // 4 Sharad   — autumn rust-gold
    '#48b8c8', // 5 Hemanta  — winter teal
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

  // Season-tinted sun/moon gradient colors
  private readonly SUN_INNER = ['#d0eeff','#a8f0c0','#fffee0','#c0d8ff','#ffe8a0','#a0e8f0'];
  private readonly SUN_OUTER = ['#60a8e8','#38c870','#f09010','#4888cc','#e89020','#30a8c0'];
  private readonly MOON_INNER = ['#d8eef8','#c8f0d8','#ffe8b0','#c0d8f8','#ffd8a0','#c5eaf0'];
  private readonly MOON_MID   = ['#80b8d8','#78d898','#e8b028','#70a8d8','#d89030','#70c0cc'];
  private readonly MOON_OUTER = ['#2068a8','#1e8848','#b87010','#2058a8','#b86010','#186880'];

  sunInnerColor()  { return this.SUN_INNER[this.activeIdx()] ?? '#ffe860'; }
  sunOuterColor()  { return this.SUN_OUTER[this.activeIdx()] ?? '#f09010'; }
  moonInnerColor() { return this.MOON_INNER[this.activeIdx()] ?? '#eafaff'; }
  moonMidColor()   { return this.MOON_MID[this.activeIdx()]   ?? '#b8deed'; }
  moonOuterColor() { return this.MOON_OUTER[this.activeIdx()] ?? '#4888aa'; }

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
