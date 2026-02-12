import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewChild,
} from '@angular/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrl: './annual-report.component.css',
})
export class AnnualReportComponent implements AfterViewInit {
  @ViewChildren('docCard') docCards!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('heading') heading!: ElementRef<HTMLElement>;

  private isTouchDevice = window.matchMedia('(hover: none)').matches;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Annual Report | Rashtrotthana Hospital Bangalore',
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore the Annual Report of Rashtrotthana Hospital, Bangalore, highlighting healthcare services, achievements, initiatives, and community impact.',
    });

    // this.metaService.updateTag({
    //   name: 'keywords',
    //   content:
    //     'anesthesiology hospital near me, spinal anesthesia, general anesthesia drugs, local anesthesia, pain medicine, intensive care medicine, critical emergency medicine',
    // });
  }

  ngAfterViewInit() {
    // Optional: Add scroll reveal animation
    this.setupScrollAnimation();
  }

  onMouseMove(event: MouseEvent, card: HTMLElement): void {
    // Skip 3D effect on touch devices
    if (this.isTouchDevice) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  onMouseLeave(card: HTMLElement): void {
    card.style.transform =
      'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }

  onViewDocument(documentType: string): void {
    console.log(`Viewing document: ${documentType}`);
    // Add your navigation or modal logic here
  }

  private setupScrollAnimation(): void {
    // Optional: Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    this.docCards.forEach((card) => {
      observer.observe(card.nativeElement);
    });
  }

  @ViewChild('reportsSection') reportsSection!: ElementRef;

  onViewReports(): void {
    this.reportsSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
