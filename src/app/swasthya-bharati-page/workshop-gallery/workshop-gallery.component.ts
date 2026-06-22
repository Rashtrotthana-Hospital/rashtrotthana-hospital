import {
  Component, signal, computed, ChangeDetectionStrategy,
  ViewEncapsulation, AfterViewInit, OnDestroy, ElementRef, ViewChild,
  NgZone, inject, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  images: string[];
}

@Component({
  selector: 'app-workshop-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshop-gallery.component.html',
  styleUrl: './workshop-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WorkshopGalleryComponent implements AfterViewInit, OnDestroy {

  private readonly zone = inject(NgZone);

  @ViewChild('stage', { static: true }) stageEl!: ElementRef<HTMLDivElement>;

  readonly workshops: Workshop[] = [
    {
      id: 'S1',
      title: 'Session One',
      subtitle: 'Daily routines & Dinacharya in practice',
      date: '27 March',
      images: [
        'assets/swastya-page/S1/IMG20250327100257.jpg',
        'assets/swastya-page/S1/IMG20250327100304.jpg',
        'assets/swastya-page/S1/IMG20250327100408.jpg',
        'assets/swastya-page/S1/IMG20250327100504.jpg',
        'assets/swastya-page/S1/IMG20250327100850.jpg',
        'assets/swastya-page/S1/IMG20250327102605.jpg',
        'assets/swastya-page/S1/IMG20250327102616.jpg',
        'assets/swastya-page/S1/IMG20250327102714.jpg',
        'assets/swastya-page/S1/IMG20250327103301.jpg',
        'assets/swastya-page/S1/IMG20250327103452.jpg',
        'assets/swastya-page/S1/IMG20250327103453.jpg',
        'assets/swastya-page/S1/IMG20250327104426.jpg',
        'assets/swastya-page/S1/20250327_123157PMByGPSMapCamera.jpg',
        'assets/swastya-page/S1/20250327_123200PMByGPSMapCamera.jpg',
        'assets/swastya-page/S1/Photo from Ramyashree.jpg',
      ],
    },
    {
      id: 'S2',
      title: 'Session Two',
      subtitle: 'Ahara & mindful eating workshop',
      date: '27 March',
      images: [
        'assets/swastya-page/S2/20250327_123218PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_123228PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_123236PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_123302pmByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_124931PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_124946PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_125000PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_125014PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_125019PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_125023PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_21852PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_21901PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/20250327_21914PMByGPSMapCamera.jpg',
        'assets/swastya-page/S2/IMG-20250327-WA0018.jpg',
        'assets/swastya-page/S2/IMG-20250327-WA0019.jpg',
        'assets/swastya-page/S2/IMG-20250327-WA0020.jpg',
        'assets/swastya-page/S2/IMG-20250327-WA0021.jpg',
      ],
    },
    {
      id: 'S3',
      title: 'Session Three',
      subtitle: 'Yoga therapy & breathwork',
      date: '27 March',
      images: [
        'assets/swastya-page/S3/20250327_22146pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_22206pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_22428pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_22436pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_22437pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_22754PMByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_22801PMByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_22847pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_22913pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_22940pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_24346pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_24350pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_24402pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_31625pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_31631pmByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_31715PMByGPSMapCamera.jpg',
        'assets/swastya-page/S3/20250327_31739pmByGPSMapCamera.jpg',
      ],
    },
    {
      id: 'S4',
      title: 'Session Four',
      subtitle: 'Community closing ceremony',
      date: '27 March',
      images: [
        'assets/swastya-page/S4/20250327_40025PMByGPSMapCamera.jpg',
        'assets/swastya-page/S4/20250327_40030PMByGPSMapCamera.jpg',
        'assets/swastya-page/S4/20250327_40039PMByGPSMapCamera.jpg',
        'assets/swastya-page/S4/img-1.jpeg',
        'assets/swastya-page/S4/img-2.jpeg',
        'assets/swastya-page/S4/img-3.jpeg',
        'assets/swastya-page/S4/img-4.jpg',
        'assets/swastya-page/S4/Photo from Ramyashree.jpg',
      ],
    },
  ];

  readonly activeWorkshop = signal(0);
  readonly current = computed(() => this.workshops[this.activeWorkshop()]);
  readonly items   = computed(() => this.current().images);

  // Lightbox state — index of image being previewed, or null when closed
  readonly lightboxIdx = signal<number | null>(null);
  readonly lightboxOpen = computed(() => this.lightboxIdx() !== null);
  readonly lightboxImg  = computed(() => {
    const i = this.lightboxIdx();
    return i === null ? '' : this.items()[i];
  });

  // ── 3D carousel geometry ────────────────────────────────────────────────────
  // Item visible size — responsive (matches the CSS media queries).
  readonly ITEM_W = signal(280);
  readonly ITEM_H = signal(200);

  // Computed radius for the cylinder.
  // radius = (itemWidth / 1.6) / tan(PI / N) — classic 3d carousel formula,
  // tightened so cards overlap a little (looks denser than the textbook value).
  readonly radius = computed(() => {
    const n = Math.max(this.items().length, 3);
    return Math.round((this.ITEM_W() / 1.6) / Math.tan(Math.PI / n));
  });

  // Per-item rotateY angle (degrees).
  itemAngle(i: number): number {
    const n = Math.max(this.items().length, 1);
    return (360 / n) * i;
  }

  // ── Mouse-driven 3D state ──────────────────────────────────────────────────
  readonly rotY = signal(0);   // accumulated y rotation
  readonly rotX = signal(-6);  // x tilt (driven by mouse)
  readonly zoom = signal(0);   // z translate offset (driven by mouse y)

  private rafId?: number;
  private readonly BASE_SPEED = 0.06; // slow, calm auto-rotate
  private mouseDX = this.BASE_SPEED;
  private targetX = -6;
  private targetZ = 0;
  private hovering = false;

  ngAfterViewInit() {
    this.updateItemSize();
    window.addEventListener('resize', this.onResize, { passive: true });
    this.zone.runOutsideAngular(() => {
      this.stageEl.nativeElement.addEventListener('mousemove', this.onMouseMove);
      this.stageEl.nativeElement.addEventListener('mouseenter', this.onMouseEnter);
      this.stageEl.nativeElement.addEventListener('mouseleave', this.onMouseLeave);
      this.rafId = requestAnimationFrame(this.tick);
    });
  }

  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.onResize);
    const el = this.stageEl?.nativeElement;
    if (el) {
      el.removeEventListener('mousemove', this.onMouseMove);
      el.removeEventListener('mouseenter', this.onMouseEnter);
      el.removeEventListener('mouseleave', this.onMouseLeave);
    }
  }

  // Match the CSS media-query breakpoints in the SCSS file.
  private onResize = () => this.updateItemSize();
  private updateItemSize() {
    const w = window.innerWidth;
    if (w <= 600)      { this.ITEM_W.set(180); this.ITEM_H.set(125); }
    else if (w <= 900) { this.ITEM_W.set(220); this.ITEM_H.set(150); }
    else               { this.ITEM_W.set(280); this.ITEM_H.set(200); }
  }

  private onMouseEnter = () => { this.hovering = true; };
  private onMouseLeave = () => {
    this.hovering = false;
    this.mouseDX = this.BASE_SPEED;
    this.targetX = -6;
    this.targetZ = 0;
  };

  private onMouseMove = (e: MouseEvent) => {
    if (this.lightboxOpen()) return;        // freeze interaction while lightbox is open
    const rect = this.stageEl.nativeElement.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;   // -0.5 .. 0.5
    const dy = (e.clientY - cy) / rect.height;  // -0.5 .. 0.5
    // Gentle horizontal spin — keep it slow even at the edges (0.4 max degrees/frame)
    this.mouseDX = dx * 0.4;
    // Tilt x by vertical mouse position
    this.targetX = -dy * 12 - 4;
    // Push the cylinder slightly forward/back with abs(dy)
    this.targetZ = Math.abs(dy) * 60;
  };

  // Animation loop — eased lerp toward target values
  private tick = () => {
    // Auto-rotate or mouse-driven rotate (paused when lightbox is open)
    if (!this.lightboxOpen()) {
      const cur = this.rotY();
      this.rotY.set(cur + this.mouseDX);
    }

    // Ease X tilt
    const x = this.rotX();
    this.rotX.set(x + (this.targetX - x) * 0.08);

    // Ease zoom
    const z = this.zoom();
    this.zoom.set(z + (this.targetZ - z) * 0.08);

    this.rafId = requestAnimationFrame(this.tick);
  };

  // ── Tab switching ─────────────────────────────────────────────────────────
  selectWorkshop(i: number) {
    if (i === this.activeWorkshop()) return;
    this.activeWorkshop.set(i);
    this.rotY.set(0);
  }

  // Click an item — open the lightbox preview (also stops the rotation).
  openLightbox(i: number) {
    this.lightboxIdx.set(i);
  }

  closeLightbox() {
    this.lightboxIdx.set(null);
  }

  // Stop click bubbling to the backdrop when the user clicks the image/controls.
  stopProp(e: Event) { e.stopPropagation(); }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (this.lightboxOpen() && e.key === 'Escape') this.closeLightbox();
  }
}
