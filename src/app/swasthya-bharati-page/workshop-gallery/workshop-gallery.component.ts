import {
  Component, signal, computed, ChangeDetectionStrategy,
  ViewEncapsulation, AfterViewInit, OnDestroy, ElementRef, ViewChild,
  HostListener, NgZone, inject
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  alt: string;
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

  @ViewChild('viewport', { static: true }) viewportEl!: ElementRef<HTMLDivElement>;
  @ViewChild('track',    { static: true }) trackEl!:    ElementRef<HTMLDivElement>;

  // Flat list of every image from the consolidated Gallery folder, ordered by img number
  readonly images: GalleryImage[] = [
    { src: 'assets/swastya-page/Gallery/img-1.png', alt: 'Workshop gallery — photo 1' },
    { src: 'assets/swastya-page/Gallery/img-2.png', alt: 'Workshop gallery — photo 2' },
    { src: 'assets/swastya-page/Gallery/img-3.png', alt: 'Workshop gallery — photo 3' },
    { src: 'assets/swastya-page/Gallery/img-4.png', alt: 'Workshop gallery — photo 4' },
    { src: 'assets/swastya-page/Gallery/img-5.png', alt: 'Workshop gallery — photo 5' },
    { src: 'assets/swastya-page/Gallery/img-6.png', alt: 'Workshop gallery — photo 6' },
    { src: 'assets/swastya-page/Gallery/img-7.png', alt: 'Workshop gallery — photo 7' },
    { src: 'assets/swastya-page/Gallery/img-8.png', alt: 'Workshop gallery — photo 8' },
    { src: 'assets/swastya-page/Gallery/img-9.png', alt: 'Workshop gallery — photo 9' },
    { src: 'assets/swastya-page/Gallery/img-10.png', alt: 'Workshop gallery — photo 10' },
    { src: 'assets/swastya-page/Gallery/img-11.png', alt: 'Workshop gallery — photo 11' },
    { src: 'assets/swastya-page/Gallery/img-12.png', alt: 'Workshop gallery — photo 12' },
    { src: 'assets/swastya-page/Gallery/img-13.png', alt: 'Workshop gallery — photo 13' },
    { src: 'assets/swastya-page/Gallery/img-14.png', alt: 'Workshop gallery — photo 14' },
    { src: 'assets/swastya-page/Gallery/img-15.png', alt: 'Workshop gallery — photo 15' },
    { src: 'assets/swastya-page/Gallery/img-16.png', alt: 'Workshop gallery — photo 16' },
    { src: 'assets/swastya-page/Gallery/img-17.png', alt: 'Workshop gallery — photo 17' },
    { src: 'assets/swastya-page/Gallery/img-19.png', alt: 'Workshop gallery — photo 19' },
    { src: 'assets/swastya-page/Gallery/img-20.png', alt: 'Workshop gallery — photo 20' },
    { src: 'assets/swastya-page/Gallery/img-21.png', alt: 'Workshop gallery — photo 21' },
    { src: 'assets/swastya-page/Gallery/img-22.png', alt: 'Workshop gallery — photo 22' },
    { src: 'assets/swastya-page/Gallery/img-23.png', alt: 'Workshop gallery — photo 23' },
    { src: 'assets/swastya-page/Gallery/img-24.png', alt: 'Workshop gallery — photo 24' },
    { src: 'assets/swastya-page/Gallery/img-25.png', alt: 'Workshop gallery — photo 25' },
    { src: 'assets/swastya-page/Gallery/img-26.png', alt: 'Workshop gallery — photo 26' },
    { src: 'assets/swastya-page/Gallery/img-27.png', alt: 'Workshop gallery — photo 27' },
    { src: 'assets/swastya-page/Gallery/img-29.png', alt: 'Workshop gallery — photo 29' },
    { src: 'assets/swastya-page/Gallery/img-30.png', alt: 'Workshop gallery — photo 30' },
    { src: 'assets/swastya-page/Gallery/img-31.png', alt: 'Workshop gallery — photo 31' },
    { src: 'assets/swastya-page/Gallery/img-32.png', alt: 'Workshop gallery — photo 32' },
    { src: 'assets/swastya-page/Gallery/img-33.png', alt: 'Workshop gallery — photo 33' },
    { src: 'assets/swastya-page/Gallery/img-34.png', alt: 'Workshop gallery — photo 34' },
    { src: 'assets/swastya-page/Gallery/img-35.png', alt: 'Workshop gallery — photo 35' },
    { src: 'assets/swastya-page/Gallery/img-36.png', alt: 'Workshop gallery — photo 36' },
    { src: 'assets/swastya-page/Gallery/img-37.png', alt: 'Workshop gallery — photo 37' },
    { src: 'assets/swastya-page/Gallery/img-38.jpg', alt: 'Workshop gallery — photo 38' },
    { src: 'assets/swastya-page/Gallery/img-39.jpg', alt: 'Workshop gallery — photo 39' },
    { src: 'assets/swastya-page/Gallery/img-40.jpg', alt: 'Workshop gallery — photo 40' },
    { src: 'assets/swastya-page/Gallery/img-41.jpg', alt: 'Workshop gallery — photo 41' },
    { src: 'assets/swastya-page/Gallery/img-42.jpg', alt: 'Workshop gallery — photo 42' },
    { src: 'assets/swastya-page/Gallery/img-43.jpg', alt: 'Workshop gallery — photo 43' },
    { src: 'assets/swastya-page/Gallery/img-44.jpg', alt: 'Workshop gallery — photo 44' },
    { src: 'assets/swastya-page/Gallery/img-45.jpg', alt: 'Workshop gallery — photo 45' },
    { src: 'assets/swastya-page/Gallery/img-46.jpg', alt: 'Workshop gallery — photo 46' },
    { src: 'assets/swastya-page/Gallery/img-47.jpg', alt: 'Workshop gallery — photo 47' },
    { src: 'assets/swastya-page/Gallery/img-48.jpg', alt: 'Workshop gallery — photo 48' },
    { src: 'assets/swastya-page/Gallery/img-49.jpg', alt: 'Workshop gallery — photo 49' },
    { src: 'assets/swastya-page/Gallery/img-50.jpg', alt: 'Workshop gallery — photo 50' },
    { src: 'assets/swastya-page/Gallery/img-51.jpg', alt: 'Workshop gallery — photo 51' },
    { src: 'assets/swastya-page/Gallery/img-52.jpg', alt: 'Workshop gallery — photo 52' },
    { src: 'assets/swastya-page/Gallery/img-53.jpg', alt: 'Workshop gallery — photo 53' },
    { src: 'assets/swastya-page/Gallery/img-54.jpg', alt: 'Workshop gallery — photo 54' },
    { src: 'assets/swastya-page/Gallery/img-55.jpeg', alt: 'Workshop gallery — photo 55' },
    { src: 'assets/swastya-page/Gallery/img-56.jpeg', alt: 'Workshop gallery — photo 56' },
    { src: 'assets/swastya-page/Gallery/img-57.jpeg', alt: 'Workshop gallery — photo 57' },
    { src: 'assets/swastya-page/Gallery/img-58.jpg', alt: 'Workshop gallery — photo 58' },
    { src: 'assets/swastya-page/Gallery/img-59.jpg', alt: 'Workshop gallery — photo 59' },
    { src: 'assets/swastya-page/Gallery/img-60.png', alt: 'Workshop gallery — photo 60' },
    { src: 'assets/swastya-page/Gallery/img-61.png', alt: 'Workshop gallery — photo 61' },
    { src: 'assets/swastya-page/Gallery/img-62.png', alt: 'Workshop gallery — photo 62' },
    { src: 'assets/swastya-page/Gallery/img-63.png', alt: 'Workshop gallery — photo 63' },
    { src: 'assets/swastya-page/Gallery/img-64.png', alt: 'Workshop gallery — photo 64' },
    { src: 'assets/swastya-page/Gallery/img-65.png', alt: 'Workshop gallery — photo 65' },
    { src: 'assets/swastya-page/Gallery/img-66.png', alt: 'Workshop gallery — photo 66' },
    { src: 'assets/swastya-page/Gallery/img-67.png', alt: 'Workshop gallery — photo 67' },
    { src: 'assets/swastya-page/Gallery/img-68.png', alt: 'Workshop gallery — photo 68' },
    { src: 'assets/swastya-page/Gallery/img-69.png', alt: 'Workshop gallery — photo 69' },
    { src: 'assets/swastya-page/Gallery/img-70.png', alt: 'Workshop gallery — photo 70' },
    { src: 'assets/swastya-page/Gallery/img-71.png', alt: 'Workshop gallery — photo 71' },
    { src: 'assets/swastya-page/Gallery/img-72.png', alt: 'Workshop gallery — photo 72' },
    { src: 'assets/swastya-page/Gallery/img-73.png', alt: 'Workshop gallery — photo 73' },
    { src: 'assets/swastya-page/Gallery/img-74.png', alt: 'Workshop gallery — photo 74' },
    { src: 'assets/swastya-page/Gallery/img-75.png', alt: 'Workshop gallery — photo 75' },
    { src: 'assets/swastya-page/Gallery/img-76.png', alt: 'Workshop gallery — photo 76' },
    { src: 'assets/swastya-page/Gallery/img-77.png', alt: 'Workshop gallery — photo 77' },
    { src: 'assets/swastya-page/Gallery/img-78.png', alt: 'Workshop gallery — photo 78' },
    { src: 'assets/swastya-page/Gallery/img-79.png', alt: 'Workshop gallery — photo 79' },
    { src: 'assets/swastya-page/Gallery/img-80.png', alt: 'Workshop gallery — photo 80' },
    { src: 'assets/swastya-page/Gallery/img-81.png', alt: 'Workshop gallery — photo 81' },
    { src: 'assets/swastya-page/Gallery/img-82.png', alt: 'Workshop gallery — photo 82' },
    { src: 'assets/swastya-page/Gallery/img-83.png', alt: 'Workshop gallery — photo 83' },
    { src: 'assets/swastya-page/Gallery/img-84.png', alt: 'Workshop gallery — photo 84' },
    { src: 'assets/swastya-page/Gallery/img-85.png', alt: 'Workshop gallery — photo 85' },
    { src: 'assets/swastya-page/Gallery/img-86.png', alt: 'Workshop gallery — photo 86' },
    { src: 'assets/swastya-page/Gallery/img-87.png', alt: 'Workshop gallery — photo 87' },
    { src: 'assets/swastya-page/Gallery/img-88.png', alt: 'Workshop gallery — photo 88' },
  ];

  // Duplicate the list once so the auto-loop is seamless — when the track
  // scrolls past the first copy's full width, we wrap the offset back to 0
  // and the second copy is already in view.
  readonly loopImages = computed(() => [...this.images, ...this.images]);

  // Continuous scroll state
  readonly offsetPx = signal(0);
  readonly trackTransform = computed(() => `translateX(-${this.offsetPx()}px)`);

  // px per millisecond — calm marquee speed
  private readonly SCROLL_SPEED = 0.05;
  private rafId?: number;
  private lastTs = 0;
  private paused = false;
  private singleLoopWidth = 0;   // width of ONE copy of the image list

  // Lightbox state
  readonly lightboxIdx = signal<number | null>(null);
  readonly lightboxOpen = computed(() => this.lightboxIdx() !== null);
  readonly lightboxImg  = computed(() => {
    const i = this.lightboxIdx();
    return i === null ? '' : this.images[i].src;
  });

  openLightbox(i: number) {
    // i is the index into loopImages (may be > images.length because list is doubled)
    this.lightboxIdx.set(i % this.images.length);
  }
  closeLightbox()         { this.lightboxIdx.set(null); }
  stopProp(e: Event)      { e.stopPropagation(); }

  nextLightbox(e?: Event) {
    e?.stopPropagation();
    const i = this.lightboxIdx();
    if (i === null) return;
    this.lightboxIdx.set((i + 1) % this.images.length);
  }
  prevLightbox(e?: Event) {
    e?.stopPropagation();
    const i = this.lightboxIdx();
    if (i === null) return;
    this.lightboxIdx.set((i - 1 + this.images.length) % this.images.length);
  }

  // Pause / resume the auto-scroll on hover
  onHover(paused: boolean) { this.paused = paused; }

  private resizeHandler = () => this.measureLoop();

  ngAfterViewInit() {
    this.measureLoop();
    window.addEventListener('resize', this.resizeHandler, { passive: true });
    // Run the marquee outside Angular so each frame doesn't trigger CD
    this.zone.runOutsideAngular(() => {
      this.lastTs = performance.now();
      this.rafId = requestAnimationFrame(ts => this.tick(ts));
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  // Measure the px width of ONE copy of the image list — used to wrap the
  // continuous scroll seamlessly. Looks at the first N rendered slots.
  private measureLoop() {
    const track = this.trackEl?.nativeElement;
    if (!track) return;
    const slots = track.querySelectorAll<HTMLElement>('.wg-slot');
    if (slots.length < 2) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    const slotW = slots[0].offsetWidth;
    const n = this.images.length;
    // One loop = N slots + N gaps (the trailing gap brings us up against the
    // start of the duplicated set, so the wrap is seamless).
    this.singleLoopWidth = (slotW + gap) * n;
  }

  // Marquee loop: increment offsetPx each frame, wrap when it exceeds one
  // image-list width so the duplicated tail blends back into the head.
  private tick = (ts: number) => {
    const dt = ts - this.lastTs;
    this.lastTs = ts;
    if (!this.paused && !this.lightboxOpen() && this.singleLoopWidth > 0) {
      const next = this.offsetPx() + this.SCROLL_SPEED * dt;
      const wrapped = next >= this.singleLoopWidth ? next - this.singleLoopWidth : next;
      this.zone.run(() => this.offsetPx.set(wrapped));
    }
    this.rafId = requestAnimationFrame(this.tick);
  };

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (!this.lightboxOpen()) return;
    if (e.key === 'Escape') this.closeLightbox();
    else if (e.key === 'ArrowRight') this.nextLightbox();
    else if (e.key === 'ArrowLeft')  this.prevLightbox();
  }
}
