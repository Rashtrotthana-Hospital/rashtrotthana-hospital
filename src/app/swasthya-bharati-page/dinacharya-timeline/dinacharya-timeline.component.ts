import {
  AfterViewInit, ChangeDetectionStrategy, Component,
  ElementRef, NgZone, OnDestroy, OnInit, ViewChild,
  ViewEncapsulation, inject, signal, computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SeasonDetail {
  eat: string[];
  avoid: string[];
  practices: string[];
}

export interface TimelineCard {
  time: string; sanskrit: string; english: string;
  desc: string; icon: 'sunrise'|'sun'|'noon'|'sunset'|'dusk'|'moon';
  img: string;
  isNight: boolean; arcT: number;
  detail: SeasonDetail;
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

// Back panel dimensions (larger popup)
export const BW = 260;   // back panel width
export const BH = 340;   // back panel height

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
// Card palette — uniform dark translucent navy across all seasons (matches the
// Six Seasons reference). Each season keeps its own accent hue for the time
// label, dot and *active* border so it still reads as season-specific.
// Higher alpha so the dark navy section background doesn't bleed through and
// make the card centre look black.
const CARD_BG        = 'rgba(22,38,55,0.92)';      // base card background
const CARD_BG_ACTIVE = 'rgba(28,48,70,0.96)';      // active card slightly more solid
const CARD_BORDER    = 'rgba(120,160,180,0.28)';   // muted neutral rim
const PHASE: Ph[] = [
  // 0 Shishira — Late Winter: icy silver-blue
  { cardBg: CARD_BG, border: CARD_BORDER,
    title:'#f3f8fb', time:'#9fd4e6', sub:'rgba(190,210,222,0.62)', icon:'rgba(159,212,230,0.96)',
    dot:'rgba(159,212,230,0.90)', activeBg: CARD_BG_ACTIVE, activeBorder:'rgba(150,200,230,0.65)',
    activeTitle:'#f3f8fb', activeDot:'#bfe6f0' },
  // 1 Vasanta — Spring: fresh green
  { cardBg: CARD_BG, border: CARD_BORDER,
    title:'#f3f8fb', time:'#9fe6b8', sub:'rgba(190,210,222,0.62)', icon:'rgba(159,230,184,0.96)',
    dot:'rgba(143,230,168,0.90)', activeBg: CARD_BG_ACTIVE, activeBorder:'rgba(150,220,170,0.65)',
    activeTitle:'#f3f8fb', activeDot:'#8fe6a8' },
  // 2 Grishma — Summer: warm amber-gold
  { cardBg: CARD_BG, border: CARD_BORDER,
    title:'#f3f8fb', time:'#f0c878', sub:'rgba(190,210,222,0.62)', icon:'rgba(240,200,120,0.96)',
    dot:'rgba(240,200,120,0.90)', activeBg: CARD_BG_ACTIVE, activeBorder:'rgba(240,200,120,0.70)',
    activeTitle:'#f3f8fb', activeDot:'#f0c878' },
  // 3 Varsha — Rainy Season: monsoon blue
  { cardBg: CARD_BG, border: CARD_BORDER,
    title:'#f3f8fb', time:'#9cc2ea', sub:'rgba(190,210,222,0.62)', icon:'rgba(156,194,234,0.96)',
    dot:'rgba(156,194,234,0.90)', activeBg: CARD_BG_ACTIVE, activeBorder:'rgba(140,180,225,0.70)',
    activeTitle:'#f3f8fb', activeDot:'#9cc2ea' },
  // 4 Sharad — Autumn: warm rust-gold
  { cardBg: CARD_BG, border: CARD_BORDER,
    title:'#f3f8fb', time:'#ec9a63', sub:'rgba(190,210,222,0.62)', icon:'rgba(236,154,99,0.96)',
    dot:'rgba(236,154,99,0.90)', activeBg: CARD_BG_ACTIVE, activeBorder:'rgba(225,150,95,0.70)',
    activeTitle:'#f3f8fb', activeDot:'#ec9a63' },
  // 5 Hemanta — Early Winter: deep teal
  { cardBg: CARD_BG, border: CARD_BORDER,
    title:'#f3f8fb', time:'#b3d7ee', sub:'rgba(190,210,222,0.62)', icon:'rgba(179,215,238,0.96)',
    dot:'rgba(179,215,238,0.90)', activeBg: CARD_BG_ACTIVE, activeBorder:'rgba(170,210,235,0.70)',
    activeTitle:'#f3f8fb', activeDot:'#b3d7ee' },
];

// Card 4 (19:00–21:00) is at arcT 0.70 — moon starts exactly here
// moonOpacity goes 0→1 between t=CARD_T[4] and t=CARD_T[4]+0.06
const MOON_START_T = CARD_T[4];       // 0.70
const MOON_FADE_SPAN = 0.05;          // fully moon by MOON_START_T+0.05

// ── Per-season FX modes for canvas particles ────────────────────────────────
// 0 Shishira (late winter) → snow, icy blue glow
// 1 Vasanta  (spring)      → petal, fresh green glow
// 2 Grishma  (summer)      → heat shimmer, amber glow
// 3 Varsha   (rainy)       → rain, deep blue glow
// 4 Sharad   (autumn)      → leaf, rust gold glow
// 5 Hemanta  (early winter) → frost, deep teal glow
type FxMode = 'snow' | 'petal' | 'heat' | 'rain' | 'leaf' | 'frost';
const SEASON_FX: { mode: FxMode; glow: [number, number, number]; count: number }[] = [
  { mode: 'snow',  glow: [120, 180, 225], count: 130 },
  { mode: 'petal', glow: [120, 210, 150], count: 140 },
  { mode: 'heat',  glow: [232, 165,  75], count:  70 },
  { mode: 'rain',  glow: [110, 160, 215], count: 150 },
  { mode: 'leaf',  glow: [210, 120,  65], count:  90 },
  { mode: 'frost', glow: [150, 195, 230], count: 110 },
];

interface FxParticle {
  type: FxMode;
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  rot?: number; vr?: number;
  a: number;
  ph?: number; sw?: number;
  len?: number;
  col?: [number, number, number];
}

interface FxStar { x: number; y: number; r: number; p: number; s: number; }

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

  @ViewChild('fxCanvas', { static: false }) fxCanvas?: ElementRef<HTMLCanvasElement>;

  readonly arcPath = `M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`;
  readonly arcFill = `M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y} L ${P2.x} ${VH} L ${P0.x} ${VH} Z`;

  // expose constants to template
  readonly VW = VW; readonly VH = VH;
  readonly CW = CW; readonly CH = CH;
  readonly IR = IR;
  readonly BW = BW; readonly BH = BH;

  readonly celestialT     = signal(0);
  readonly activeIdx      = signal(0);
  readonly flippedIdx = signal<number | null>(null);
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
  private speed  = 0.000030;   // slower sun travel (~33s for one full arc loop)
  private lastTime = 0;
  private resumeTO?: ReturnType<typeof setTimeout>;
  private prevBgIdx = -1;
  private fadeId    = 0;
  private fadeCurrent = 1;

  // ── FX canvas state ────────────────────────────────────────────────────────
  private fxCtx?: CanvasRenderingContext2D | null;
  private fxRafId?: number;
  private fxW = 0;
  private fxH = 0;
  private fxLast = 0;
  private fxT = 0;
  private fxParts: FxParticle[] = [];
  private fxStars: FxStar[] = [];
  private fxMode: FxMode = SEASON_FX[0].mode;
  private fxGlow: [number, number, number] = [...SEASON_FX[0].glow];
  private fxGlowTarget: [number, number, number] = [...SEASON_FX[0].glow];
  private fxGlowAlpha = 1;
  private fxGlowAlphaTarget = 1;
  private fxActiveIdx = 0;
  private fxResizeHandler = () => this.resizeFxCanvas();

  // 6 timeline cards — arcT mapped to CARD_T array for even visual spacing
  readonly cards: TimelineCard[] = [
    { time:'Shishira Ritu', sanskrit:'शिशिर ऋतु',  english:'Late Winter',
      desc:'Cold and dry season — strengthen agni with warm, nourishing foods.',
      img:'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=80&h=80&fit=crop',
      icon:'sunrise', isNight:false, arcT: CARD_T[0],
      detail: {
        eat:      ['Sesame seeds & oil','Jaggery & honey','Wheat & black gram','Warm milk & ghee','Root vegetables'],
        avoid:    ['Cold & raw foods','Light salads','Dry & rough foods','Cold water','Fasting'],
        practices:['Abhyanga (oil massage)','Warm water baths','Light exercise','Warm clothing','Nasya (nasal oil)'],
      }},
    { time:'Vasanta Ritu',  sanskrit:'वसंत ऋतु',   english:'Spring',
      desc:'Kapha accumulates — favour light, bitter and pungent foods.',
      img:'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=80&h=80&fit=crop',
      icon:'sun',     isNight:false, arcT: CARD_T[1],
      detail: {
        eat:      ['Bitter greens & herbs','Barley & millet','Honey (unheated)','Ginger & pepper','Light legumes'],
        avoid:    ['Heavy oily foods','Sweet & sour foods','Cold dairy','Excess sleep','Kapha-aggravating diet'],
        practices:['Vyayama (exercise)','Udvartana (dry massage)','Vamana therapy','Early rising','Herbal decoctions'],
      }},
    { time:'Grishma Ritu',  sanskrit:'ग्रीष्म ऋतु', english:'Summer',
      desc:'Intense heat — favour cool, sweet and liquid-rich foods.',
      img:'assets/swastya-page/maharashtra-times.avif',
      icon:'noon',    isNight:false, arcT: CARD_T[2],
      detail: {
        eat:      ['Coconut water','Sweet juicy fruits','Rice & mung dal','Cool buttermilk','Sugarcane juice'],
        avoid:    ['Pungent & spicy foods','Heavy exercise','Sour & salty foods','Alcohol','Excessive fasting'],
        practices:['Stay in cool shade','Moon-bathing at night','Light cool clothing','Sandalwood paste','Short midday rest'],
      }},
    { time:'Varsha Ritu',   sanskrit:'वर्षा ऋतु',   english:'Rainy Season',
      desc:'Vata aggravates — favour sour, salty and easily digestible foods.',
      img:'assets/swastya-page/images.jpeg',
      icon:'sunset',  isNight:false, arcT: CARD_T[3],
      detail: {
        eat:      ['Old rice & wheat','Sour fruits & tamarind','Rock salt','Warm soups & stews','Ginger & cumin'],
        avoid:    ['River water (unboiled)','Heavy meats','Excess exercise','Day sleeping','Raw leafy greens'],
        practices:['Basti (enema therapy)','Fumigation of home','Wear dry clothes','Avoid river wading','Light Agni-kindling herbs'],
      }},
    { time:'Sharad Ritu',   sanskrit:'शरद् ऋतु',   english:'Autumn',
      desc:'Pitta flares — favour sweet, bitter and cooling foods.',
      img:'assets/swastya-page/Sharat-Ritu.jpeg',
      icon:'dusk',    isNight:false,  arcT: CARD_T[4],
      detail: {
        eat:      ['Amla & pomegranate','Green gram & rice','Ghee & sugar candy','Bitter gourd','Cow milk (boiled)'],
        avoid:    ['Pungent & oily foods','Curd & sour foods','Alcohol','Heavy exercise in sun','Day sleeping'],
        practices:['Virechana (purgation)','Moon-gazing at night','Wear light cool clothes','Raktamokshana','Avoid harsh sun'],
      }},
    { time:'Hemanta Ritu',  sanskrit:'हेमंत ऋतु',  english:'Early Winter',
      desc:'Agni is strongest — favour unctuous, heavy and nourishing foods.',
      img:'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=80&h=80&fit=crop',
      icon:'moon',    isNight:false,  arcT: CARD_T[5],
      detail: {
        eat:      ['Meat & fish soups','Urad dal & sesame','Sugarcane & jaggery','Warm milk & ghee','Garlic & ginger'],
        avoid:    ['Dry & light foods','Cold drinks','Vata-aggravating diet','Exposure to cold wind','Fasting'],
        practices:['Full body oil massage','Warm clothing & sun-bathing','Strength exercises','Herbal wine (Arishtam)','Steam therapy'],
      }},
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
    this.zone.runOutsideAngular(() => {
      this.tick(performance.now());
      this.initFxCanvas();
    });
  }
  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.fxRafId) cancelAnimationFrame(this.fxRafId);
    window.removeEventListener('resize', this.fxResizeHandler);
    clearTimeout(this.resumeTO);
    this.fadeId++;
  }

  // ── FX canvas: stars + per-season particles + season-coloured glow wash ───
  private initFxCanvas() {
    const cvs = this.fxCanvas?.nativeElement;
    if (!cvs) return;
    this.fxCtx = cvs.getContext('2d');
    this.resizeFxCanvas();
    window.addEventListener('resize', this.fxResizeHandler, { passive: true });

    // Seed stars (positioned in canvas-pixel coordinates)
    const STAR_COUNT = 90;
    this.fxStars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      this.fxStars.push({
        x: Math.random() * this.fxW,
        y: Math.random() * this.fxH * 0.7,
        r: Math.random() * 1.2 + 0.3,
        p: Math.random() * Math.PI * 2,
        s: Math.random() * 0.7 + 0.3,
      });
    }

    // Sync to current active season
    this.setFxSeason(this.activeIdx());

    this.fxLast = performance.now();
    this.fxRafId = requestAnimationFrame(ts => this.fxLoop(ts));
  }

  private resizeFxCanvas() {
    const cvs = this.fxCanvas?.nativeElement;
    if (!cvs) return;
    const rect = cvs.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.fxW = Math.max(1, rect.width);
    this.fxH = Math.max(1, rect.height);
    cvs.width  = Math.round(this.fxW * dpr);
    cvs.height = Math.round(this.fxH * dpr);
    if (this.fxCtx) this.fxCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // Switch the FX mode + glow target to the given season index (0..5).
  // Called from updateActive() when the sun crosses to a new card.
  // Hard-wipes the particle pool so no leftover leaves/petals/etc from the
  // previous season linger on screen during the next card's animation.
  private setFxSeason(i: number) {
    if (i === this.fxActiveIdx && this.fxParts.length > 0) return;
    this.fxActiveIdx = i;
    const fx = SEASON_FX[i] ?? SEASON_FX[0];
    this.fxMode = fx.mode;
    this.fxGlowTarget = [...fx.glow];
    // Clear leftover particles so each card only shows its own FX
    this.fxParts.length = 0;
  }

  // Radiant summer sun — drawn at the top-left of the canvas during Grishma.
  // Replaces the rising heat bubbles with a static, glowing celestial body.
  // Drawn with bright opaque core so no dark hole shows in the centre, then
  // rays + soft outer halo blend out into the warm season wash.
  private drawSummerSun(ctx: CanvasRenderingContext2D, W: number, H: number) {
    const cx = W * 0.12;
    const cy = H * 0.18;
    const a = this.fxGlowAlpha;
    const pulse = 0.5 + 0.5 * Math.sin(this.fxT * 0.04);
    const r = 36 + pulse * 4;

    // Soft outer halo (large, low alpha — bleeds into the surrounding wash)
    const halo = ctx.createRadialGradient(cx, cy, r * 0.6, cx, cy, r * 4.2);
    halo.addColorStop(0,    `rgba(255,232,170,${0.45 * a})`);
    halo.addColorStop(0.45, `rgba(255,200,110,${0.18 * a})`);
    halo.addColorStop(1,    'rgba(255,180,80,0)');
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 4.2, 0, Math.PI * 2);
    ctx.fill();

    // Mid disc — warm yellow/orange, fully opaque so no dark hole shows.
    const disc = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    disc.addColorStop(0,    `rgba(255,246,210,${1.00 * a})`);
    disc.addColorStop(0.55, `rgba(255,212,130,${0.95 * a})`);
    disc.addColorStop(1,    `rgba(255,180, 70,${0.85 * a})`);
    ctx.fillStyle = disc;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();

    // Bright cream core
    ctx.fillStyle = `rgba(255,252,240,${0.98 * a})`;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.45, 0, Math.PI * 2);
    ctx.fill();

    // Rays — 12 spokes that pulse out from the core
    const rays = 12;
    const rot = this.fxT * 0.004;
    ctx.strokeStyle = `rgba(255,224,150,${0.8 * a})`;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    for (let i = 0; i < rays; i++) {
      const ang = rot + i * (Math.PI * 2 / rays);
      const r1 = r * 1.15;
      const r2 = r1 + 16 + (i % 2) * 7 + pulse * 7;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(ang) * r1, cy + Math.sin(ang) * r1);
      ctx.lineTo(cx + Math.cos(ang) * r2, cy + Math.sin(ang) * r2);
      ctx.stroke();
    }
  }

  private spawnFxParticle(mode: FxMode): FxParticle {
    const W = this.fxW, H = this.fxH, R = Math.random;
    if (mode === 'heat') {
      return { type: 'heat', x: R()*W, y: H + R()*40, vx: (R()-0.5)*0.3, vy: -(0.5 + R()*1.1),
               size: 5 + R()*9, a: 0.05 + R()*0.12, ph: R()*Math.PI*2 };
    }
    if (mode === 'rain') {
      return { type: 'rain', x: R()*W, y: -R()*H, vx: 0.8, vy: 10 + R()*7,
               size: 0, len: 10 + R()*12, a: 0.30 + R()*0.30 };
    }
    if (mode === 'snow' || mode === 'frost') {
      const small = mode === 'frost';
      return { type: 'snow', x: R()*W, y: -R()*H, vx: 0, vy: (small?0.4:0.6) + R()*(small?0.7:1.0),
               size: (small?1:1.4) + R()*(small?1.4:2.0), a: 0.55 + R()*0.4,
               ph: R()*Math.PI*2, sw: 0.4 + R()*0.9,
               col: small ? [225,238,250] : [255,255,255] };
    }
    if (mode === 'petal') {
      // Spring greens — fresh foliage palette (light lime → mid green → deep leaf)
      const pal: [number,number,number][] = [
        [180, 230, 150],  // soft lime
        [140, 215, 120],  // fresh green
        [108, 195,  95],  // leaf green
        [200, 240, 170],  // pale spring
      ];
      return { type: 'petal', x: R()*W, y: -R()*H, vx: (R()-0.5)*1.0, vy: 0.8 + R()*1.1,
               size: 4 + R()*4, rot: R()*Math.PI*2, vr: (R()-0.5)*0.12, a: 0.7 + R()*0.3,
               ph: R()*Math.PI*2, sw: 0.6 + R()*1.0, col: pal[(R()*pal.length)|0] };
    }
    // leaf (sharad)
    const pal: [number,number,number][] = [[214,120,60],[228,150,70],[196,80,52],[180,110,60]];
    return { type: 'leaf', x: R()*W, y: -R()*H, vx: (R()-0.5)*1.2, vy: 1.0 + R()*1.3,
             size: 5 + R()*6, rot: R()*Math.PI*2, vr: (R()-0.5)*0.14, a: 0.7 + R()*0.3,
             ph: R()*Math.PI*2, sw: 0.8 + R()*1.2, col: pal[(R()*pal.length)|0] };
  }

  private fxLoop(now: number) {
    this.fxRafId = requestAnimationFrame(ts => this.fxLoop(ts));
    const dt = Math.min(2.4, (now - this.fxLast) / 16.67);
    this.fxLast = now;
    this.fxT += dt;
    const ctx = this.fxCtx;
    if (!ctx) return;
    const W = this.fxW, H = this.fxH;

    // Ease glow colour toward target season (faster on click → snappier change)
    for (let k = 0; k < 3; k++) this.fxGlow[k] += (this.fxGlowTarget[k] - this.fxGlow[k]) * 0.12 * dt;

    // Ease the glow brightness toward its target so the FX never pops in/out
    // when the sun crosses card boundaries.
    this.fxGlowAlpha += (this.fxGlowAlphaTarget - this.fxGlowAlpha) * 0.06 * dt;

    ctx.clearRect(0, 0, W, H);

    // Season glow wash (centred low so it tints from the horizon up).
    // Summer (heat) gets a much brighter / warmer wash plus a top-left sun glow
    // so the scene feels noticeably hot, not just amber-tinted.
    if (this.fxGlowAlpha > 0.01) {
      const [r,g,b] = this.fxGlow.map(v => v | 0);
      const ga = this.fxGlowAlpha;
      const isHeat = this.fxMode === 'heat';
      const baseA  = isHeat ? 0.85 : 0.45;

      // Bottom-up wash
      const rg = ctx.createRadialGradient(W/2, H + 40, 60, W/2, H*0.8, Math.max(W, H));
      rg.addColorStop(0,    `rgba(${r},${g},${b},${baseA * ga})`);
      rg.addColorStop(0.55, `rgba(${r},${g},${b},${baseA * 0.45 * ga})`);
      rg.addColorStop(1,    `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, W, H);

      if (isHeat) {
        // Extra warm-amber top-left blast emanating from where the sun sits.
        const sx = W * 0.12;
        const sy = H * 0.18;
        const sun = ctx.createRadialGradient(sx, sy, 0, sx, sy, Math.max(W, H) * 0.85);
        sun.addColorStop(0,    `rgba(255,210,120,${0.70 * ga})`);
        sun.addColorStop(0.30, `rgba(255,170, 80,${0.32 * ga})`);
        sun.addColorStop(1,    'rgba(255,170,80,0)');
        ctx.fillStyle = sun;
        ctx.fillRect(0, 0, W, H);

        // Subtle full-frame golden veil so the sky/cards read as sun-baked.
        ctx.fillStyle = `rgba(255,196,120,${0.18 * ga})`;
        ctx.fillRect(0, 0, W, H);
      }
    }

    // Stars
    for (const s of this.fxStars) {
      const tw = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(this.fxT * 0.03 * s.s + s.p));
      ctx.beginPath();
      ctx.fillStyle = `rgba(220,236,246,${tw * 0.55})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fill();
    }

    // Summer (Grishma) gets a dedicated radiant sun overlay at the top of the
    // canvas instead of rising heat bubbles.
    if (this.fxMode === 'heat' && this.fxGlowAlpha > 0.05) {
      this.drawSummerSun(ctx, W, H);
    }

    // Spawn particles up to target count (higher per-frame budget so a fresh
    // season fills the screen quickly when the user clicks a card).
    // 'heat' has no rising particles — its visual is the radiant sun above.
    if (this.fxMode !== 'heat') {
      const targetN = (SEASON_FX[this.fxActiveIdx]?.count ?? 80) * this.fxGlowAlpha;
      let guard = 0;
      while (this.fxParts.length < targetN && guard++ < 30) {
        this.fxParts.push(this.spawnFxParticle(this.fxMode));
      }
    }

    // Update + draw particles
    for (let i = this.fxParts.length - 1; i >= 0; i--) {
      const p = this.fxParts[i];
      if (p.type === 'heat') {
        p.y += p.vy * dt; p.x += Math.sin(this.fxT * 0.05 + (p.ph ?? 0)) * 0.4 * dt;
        if (p.y < -30) { this.fxParts.splice(i, 1); continue; }
        const rg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        rg.addColorStop(0, `rgba(255,200,110,${p.a})`);
        rg.addColorStop(1, 'rgba(255,200,110,0)');
        ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
      } else if (p.type === 'rain') {
        p.y += p.vy * dt; p.x += p.vx * dt;
        if (p.y - (p.len ?? 0) > H) { this.fxParts.splice(i, 1); continue; }
        ctx.strokeStyle = `rgba(175,205,235,${p.a})`; ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 1.3, p.y - (p.len ?? 0));
        ctx.stroke();
      } else if (p.type === 'snow') {
        p.y += p.vy * dt;
        p.x += Math.sin(this.fxT * 0.04 * (p.sw ?? 1) + (p.ph ?? 0)) * (p.sw ?? 1) * 0.5 * dt;
        if (p.y > H + 10) { this.fxParts.splice(i, 1); continue; }
        const [r,g,b] = p.col ?? [255,255,255];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r},${g},${b},${p.a})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fill();
      } else {
        // petal / leaf
        p.y += p.vy * dt;
        p.x += (p.vx + Math.sin(this.fxT * 0.03 * (p.sw ?? 1) + (p.ph ?? 0)) * (p.sw ?? 1)) * dt;
        if (p.rot !== undefined && p.vr !== undefined) p.rot += p.vr * dt;
        if (p.y > H + 16) { this.fxParts.splice(i, 1); continue; }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot ?? 0);
        const [r,g,b] = p.col ?? [220,160,90];
        ctx.fillStyle = `rgba(${r},${g},${b},${p.a})`;
        ctx.beginPath();
        if (p.type === 'leaf') ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI*2);
        else                    ctx.ellipse(0, 0, p.size * 0.7, p.size, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
      }
    }
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
    // Keep the season glow at full strength at ALL times — between cards the
    // colour simply stays on the previous season until the sun arrives at the
    // next card and the colour eases toward the new target. No black gaps.
    this.fxGlowAlphaTarget = 1;

    // Activate card only when sun/moon is within 0.05 of the card's arcT
    if (bestD < 0.05 && this.activeIdx() !== best) {
      this.activeIdx.set(best);
      this.isNight.set(this.cards[best].isNight);
      this.setFxSeason(best);
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

  // Convert SVG card position → CSS % for the HTML overlay panel
  // SVG viewBox: VW × VH. The overlay sits on top of the SVG element.
  cardLeftPct(i: number)  { return (this.layouts[i].cardX / VW) * 100; }
  cardTopPct(i: number)   { return (this.layouts[i].cardY / VH) * 100; }
  cardWidthPct()          { return (CW / VW) * 100; }
  cardHeightPct()         { return (CH / VH) * 100; }

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
    this.flippedIdx.set(this.flippedIdx() === i ? null : i);
    this.paused = true;
    clearTimeout(this.resumeTO);
    this.celestialT.set(this.cards[i].arcT);
    this.activeIdx.set(i);
    this.isNight.set(this.cards[i].isNight);
    this.setFxSeason(i);                 // switch canvas particles + glow
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

  isFlipped(i: number) { return this.flippedIdx() === i; }

  hoverCard(p: boolean) { this.paused = p; if (!p) this.lastTime = 0; }
  trackBy(i: number)    { return i; }
}
