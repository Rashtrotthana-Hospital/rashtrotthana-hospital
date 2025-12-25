import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrl: './annual-report.component.css'
})
export class AnnualReportComponent implements AfterViewInit {
  @ViewChildren('docCard') docCards!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('heading') heading!: ElementRef<HTMLElement>;

  private isTouchDevice = window.matchMedia('(hover: none)').matches;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.2 }
    );

    this.docCards.forEach(card => observer.observe(card.nativeElement));
  }

  onMouseMove(event: MouseEvent, card: HTMLElement) {
    if (this.isTouchDevice) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / rect.width) * 12;
    const rotateX = -((y - rect.height / 2) / rect.height) * 12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(12px)
    `;
  }

  onMouseLeave(card: HTMLElement) {
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
    `;
  }

  onScroll() {
    const scrollY = window.scrollY;

    // Heading micro-parallax
    if (this.heading) {
      this.heading.nativeElement.style.transform =
        `translateY(${scrollY * 0.1}px)`;
    }

    // Card parallax
    this.docCards.forEach((card, index) => {
      const speed = 0.05 + index * 0.03;
      card.nativeElement.style.translate =
        `0 ${scrollY * speed}px`;
    });

    // Background shapes
    const shape1 = document.querySelector('.shape-1') as HTMLElement;
    const shape2 = document.querySelector('.shape-2') as HTMLElement;

    if (shape1) shape1.style.transform = `translateY(${scrollY * 0.15}px)`;
    if (shape2) shape2.style.transform = `translateY(${scrollY * 0.25}px)`;
  }
}
