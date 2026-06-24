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

  // Flat list of every image across S1–S4 folders, in order
  readonly images: GalleryImage[] = [
    // ── S1 ──
    { src: 'assets/swastya-page/S1/20250327_123157PMByGPSMapCamera.jpg', alt: 'Session One — photo 1' },
    { src: 'assets/swastya-page/S1/IMG20250327100304.jpg', alt: 'Session One — photo 2' },
    { src: 'assets/swastya-page/S1/IMG20250327100408.jpg', alt: 'Session One — photo 3' },
    { src: 'assets/swastya-page/S1/IMG20250327100504.jpg', alt: 'Session One — photo 4' },
    { src: 'assets/swastya-page/S1/IMG20250327100850.jpg', alt: 'Session One — photo 5' },
    { src: 'assets/swastya-page/S1/IMG20250327102605.jpg', alt: 'Session One — photo 6' },
    { src: 'assets/swastya-page/S1/IMG20250327102616.jpg', alt: 'Session One — photo 7' },
    { src: 'assets/swastya-page/S1/IMG20250327102714.jpg', alt: 'Session One — photo 8' },
    { src: 'assets/swastya-page/S1/IMG20250327103452.jpg', alt: 'Session One — photo 9' },
    // { src: 'assets/swastya-page/S1/IMG20250327103453.jpg', alt: 'Session One — photo 10' },
    { src: 'assets/swastya-page/S1/IMG20250327104426.jpg', alt: 'Session One — photo 11' },
    { src: 'assets/swastya-page/S1/Photo from Ramyashree.jpg', alt: 'Session One — group photo' },

    // ── S2 ──
    { src: 'assets/swastya-page/S2/20250327_123218PMByGPSMapCamera.jpg', alt: 'Session Two — photo 1' },
    { src: 'assets/swastya-page/S2/20250327_123228PMByGPSMapCamera.jpg', alt: 'Session Two — photo 2' },
    { src: 'assets/swastya-page/S2/20250327_123302pmByGPSMapCamera.jpg', alt: 'Session Two — photo 3' },
    { src: 'assets/swastya-page/S2/20250327_124931PMByGPSMapCamera.jpg', alt: 'Session Two — photo 4' },
    { src: 'assets/swastya-page/S2/20250327_124946PMByGPSMapCamera.jpg', alt: 'Session Two — photo 5' },
    { src: 'assets/swastya-page/S2/20250327_125014PMByGPSMapCamera.jpg', alt: 'Session Two — photo 6' },
    { src: 'assets/swastya-page/S2/20250327_125023PMByGPSMapCamera.jpg', alt: 'Session Two — photo 7' },
    { src: 'assets/swastya-page/S2/20250327_21901PMByGPSMapCamera.jpg', alt: 'Session Two — photo 8' },
    { src: 'assets/swastya-page/S2/20250327_21914PMByGPSMapCamera.jpg', alt: 'Session Two — photo 9' },
    { src: 'assets/swastya-page/S2/IMG-20250327-WA0019.jpg', alt: 'Session Two — photo 10' },
    { src: 'assets/swastya-page/S2/IMG-20250327-WA0020.jpg', alt: 'Session Two — photo 11' },
    { src: 'assets/swastya-page/S2/IMG-20250327-WA0021.jpg', alt: 'Session Two — photo 12' },

    // ── S3 ──
    { src: 'assets/swastya-page/S3/20250327_22146pmByGPSMapCamera.jpg', alt: 'Session Three — photo 1' },
    { src: 'assets/swastya-page/S3/20250327_22428pmByGPSMapCamera.jpg', alt: 'Session Three — photo 2' },
    { src: 'assets/swastya-page/S3/20250327_22436pmByGPSMapCamera.jpg', alt: 'Session Three — photo 3' },
    { src: 'assets/swastya-page/S3/20250327_22801PMByGPSMapCamera.jpg', alt: 'Session Three — photo 4' },
    { src: 'assets/swastya-page/S3/20250327_22847pmByGPSMapCamera.jpg', alt: 'Session Three — photo 5' },
    { src: 'assets/swastya-page/S3/20250327_22913pmByGPSMapCamera.jpg', alt: 'Session Three — photo 6' },
    { src: 'assets/swastya-page/S3/20250327_24346pmByGPSMapCamera.jpg', alt: 'Session Three — photo 7' },
    { src: 'assets/swastya-page/S3/20250327_24402pmByGPSMapCamera.jpg', alt: 'Session Three — photo 8' },
    { src: 'assets/swastya-page/S3/20250327_31625pmByGPSMapCamera.jpg', alt: 'Session Three — photo 9' },
    { src: 'assets/swastya-page/S3/20250327_31715PMByGPSMapCamera.jpg', alt: 'Session Three — photo 10' },
    { src: 'assets/swastya-page/S3/20250327_31739pmByGPSMapCamera.jpg', alt: 'Session Three — photo 11' },

    // ── S4 ──
    { src: 'assets/swastya-page/S4/20250327_40025PMByGPSMapCamera.jpg', alt: 'Session Four — photo 1' },
    { src: 'assets/swastya-page/S4/20250327_40039PMByGPSMapCamera.jpg', alt: 'Session Four — photo 2' },
    { src: 'assets/swastya-page/S4/img-1.jpeg', alt: 'Session Four — photo 3' },
    { src: 'assets/swastya-page/S4/img-2.jpeg', alt: 'Session Four — photo 4' },
    { src: 'assets/swastya-page/S4/img-3.jpeg', alt: 'Session Four — photo 5' },
    { src: 'assets/swastya-page/S4/img-4.jpg', alt: 'Session Four — photo 6' },
    { src: 'assets/swastya-page/S4/Photo from Ramyashree.jpg', alt: 'Session Four — group photo' },
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
    if (this.lightboxOpen() && e.key === 'Escape') this.closeLightbox();
  }
}
