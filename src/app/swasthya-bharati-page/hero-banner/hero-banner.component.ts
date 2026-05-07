import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HeroBannerComponent {
  // 18 floating golden specks — deterministic positions & timings
  readonly particles = Array.from({ length: 18 }, (_, i) => {
    const s = (i * 53 + 7) % 100;
    const s2 = (i * 37 + 13) % 100;
    return {
      x: 8 + (s * 0.84) % 84,
      y: 8 + (s2 * 0.84) % 82,
      size: 2 + (s % 4),
      delay: -((s * 0.22) % 5),
      duration: 3.5 + (s % 3.5),
    };
  });
}
