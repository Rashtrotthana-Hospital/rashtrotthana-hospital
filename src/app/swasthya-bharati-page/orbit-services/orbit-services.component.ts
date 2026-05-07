import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface OrbitService {
  id: string;
  label: string;
  icon: 'yoga' | 'lifestyle' | 'education' | 'assessment' | 'ayurveda';
  desc: string;
}

const CARD_COUNT = 5;
const STEP  = 360 / CARD_COUNT; // 72°
const SPEED = 8;                 // deg/sec

// A card is "active" only when it reaches within ±6° of the top-center indicator (0° / 360°)
const ACTIVE_WINDOW = 6;

@Component({
  selector: 'app-orbit-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orbit-services.component.html',
  styleUrls: ['./orbit-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OrbitServicesComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);

  private angle = 0;
  private rafId?: number;
  private lastTime = 0;
  private paused = false;
  private resumeTimer?: ReturnType<typeof setTimeout>;

  readonly cardAngles = signal<number[]>(
    Array.from({ length: CARD_COUNT }, (_, i) => i * STEP - 90)
  );
  readonly activeIdx = signal<number>(0);

  readonly services: OrbitService[] = [
    {
      id: 'yoga',
      label: 'Yoga &\nMind-Body',
      icon: 'yoga',
      desc: 'Therapeutic yoga, pranayama, meditation and guided stress-reduction.',
    },
    {
      id: 'lifestyle',
      label: 'Lifestyle\nPrograms',
      icon: 'lifestyle',
      desc: 'Structured programs for diabetes, weight, PCOS, hypertension and anxiety.',
    },
    {
      id: 'education',
      label: 'Education &\nAwareness',
      icon: 'education',
      desc: 'Workshops for corporates, schools, communities and patient education sessions.',
    },
    {
      id: 'assessment',
      label: 'Lifestyle\nAssessment',
      icon: 'assessment',
      desc: 'Comprehensive assessments for diabetes, hypertension, obesity, sleep and stress.',
    },
    {
      id: 'ayurveda',
      label: 'Ayurveda-\nBased',
      icon: 'ayurveda',
      desc: 'Dinacharya, Ritucharya, Ayurvedic diet counselling and immunity building.',
    },
  ];

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => this.tick(performance.now()));

    const wrap = this.host.nativeElement.querySelector<HTMLElement>('.os-orbit-wrap');
    wrap?.addEventListener('mouseenter', () => { this.paused = true; });
    wrap?.addEventListener('mouseleave', () => {
      clearTimeout(this.resumeTimer);
      this.resumeTimer = setTimeout(() => { this.paused = false; }, 400);
    });
  }

  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    clearTimeout(this.resumeTimer);
  }

  private tick(now: number): void {
    if (!this.paused) {
      const dt = this.lastTime ? (now - this.lastTime) / 1000 : 0;
      this.angle = (this.angle + SPEED * dt) % 360;
      this.lastTime = now;

      this.zone.run(() => {
        const angles = Array.from({ length: CARD_COUNT }, (_, i) =>
          ((i * STEP - 90 + this.angle) % 360 + 360) % 360
        );
        this.cardAngles.set(angles);

        // Card is active only when it exactly reaches top-center (0°/360°) within ±ACTIVE_WINDOW
        for (let i = 0; i < CARD_COUNT; i++) {
          const a = angles[i];
          // distance from 0° (top), accounting for wrap-around
          const dist = Math.min(a, 360 - a);
          if (dist < ACTIVE_WINDOW && this.activeIdx() !== i) {
            this.activeIdx.set(i);
            break;
          }
        }
      });
    } else {
      this.lastTime = 0;
    }
    this.rafId = requestAnimationFrame((ts) => this.tick(ts));
  }

  cardTransform(deg: number): string {
    return `rotate(${deg}deg) translateY(calc(-1 * var(--os-r))) rotate(-${deg}deg)`;
  }

  clickCard(i: number): void {
    this.paused = true;
    clearTimeout(this.resumeTimer);
    // Snap card i to top (angle 0°): card i is at angle (i*STEP - 90 + this.angle) % 360
    // Want that = 0 → this.angle = 90 - i*STEP
    this.angle = ((90 - i * STEP) % 360 + 360) % 360;
    this.activeIdx.set(i);
    this.resumeTimer = setTimeout(() => { this.paused = false; }, 5500);
  }

  get active(): OrbitService {
    return this.services[this.activeIdx()];
  }
}
