import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation-theatre',
  templateUrl: './operation-theatre.component.html',
  styleUrl: './operation-theatre.component.css'
})
export class OperationTheatreComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  facilities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Advanced Operation Theatres for Safe Surgeries - Rashtrotthana Hospital Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Experience safe and precise surgeries at Rashtrotthana Hospital\'s state-of-the-art operation theatres in Bangalore.' });

    this.metaService.updateTag({ name: 'keywords', content: 'advanced operation theatre, surgical care, best hospital Bangalore, multispeciality surgery' });


    this.facilities = [
      {
        main_heading: 'Operation Theatre',
        heading: 'Operation Theatre',
        content: `Rashtrotthana Hospital’s Operation Theatre (OT) facilities are designed to support <a href="https://en.wikipedia.org/wiki/Surgery" target="_blank">complex surgeries</a> with precision and safety. With five major and one minor modular OT, our facility is fully equipped with advanced medical technology, ensuring all essential surgical procedures are carried out seamlessly. Our modular OTs meet high standards of hygiene, efficiency and safety, making them ideal for various major surgeries across specialities. Each OT is staffed by certified and experienced professionals trained to manage surgical needs round the clock.`,
        content_1: 'Our OT facility prioritizes patient safety and optimal outcomes by maintaining stringent infection control measures and utilizing state-of-the-art equipment for high precision. The dedicated OT staff, including expert surgeons, anesthesiologists and nurses, are committed to providing reliable and compassionate care. Rashtrotthana Hospital’s modular OT setup ensures patients have access to top-tier surgical services, reinforcing our mission to deliver accessible, high-quality healthcare in Bangalore.',
        image_1: 'best-surgical-facilities-in-bangalore-rashtrotthana-hospital.png',
        image_2: 'advanced-surgical-care-at-rashtrotthana-hospital.png',
        bg_image: 'facilities-bg.png',
        alt1: 'Best Surgical Facilities in Bangalore - Rashtrotthana Hospital',
        alt2: 'Advanced Surgical Care at Rashtrotthana Hospital',
        alt3: 'Rashtrotthana Hospital for Best Surgery Services',
      }
    ];
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content_1);

  }

  chooseCards = [
    {
      img: 'assets/facility/modern-medicine.png',
      heading: 'Modern Medicine (Allopathy)',
      para: 'Evidence-based clinical care with advanced diagnostics and treatment protocols for acute and chronic conditions.'
    },
    {
      img: 'assets/facility/ayurveda.png',
      heading: 'Ayurveda',
      para: 'Personalized herbal therapies, detoxification, and preventive wellness programs that restore balance and promote natural healing.'
    },
    {
      img: 'assets/facility/homeopathy.png',
      heading: 'Homeopathy',
      para: 'Gentle, patient-centric remedies addressing the root cause of illness while supporting overall physical and emotional well-being.'
    },
    {
      img: 'assets/facility/yoga.png',
      heading: 'Yoga & Lifestyle Therapy',
      para: 'Therapeutic yoga, breathwork, and lifestyle guidance to enhance flexibility, mental clarity and stress resilience.'
    },
    {
      img: 'assets/facility/naturopathy.png',
      heading: 'Naturopathy ',
      para: 'Natural therapies combined with expert nutritional guidance to strengthen immunity, correct metabolic imbalances, and support long-term wellness.'
    },
  ]

  images = [
    '/assets/facility/facility-img-6.jpg',
    '/assets/facility/facility-img-16.jpg',
    '/assets/facility/facility-img-13.jpg',
    '/assets/facility/facility-img-12.jpg',
    '/assets/facility/facility-img-3.jpg',
    '/assets/facility/facility-img-2.jpg'
  ];

  @ViewChild('track', { static: true }) track!: ElementRef;


  currentIndex = 0;
  cardWidth = 250;
  gap = 20;

  next() {
    const maxIndex = this.images.length - this.visibleCards();
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  visibleCards() {
    const containerWidth = window.innerWidth;
    return Math.floor(containerWidth / (this.cardWidth + this.gap));
  }

  getTransform() {
    return `translateX(-${this.currentIndex * (this.cardWidth + this.gap)}px)`;
  }


  cards = [
    { title: 'Insurance', icon: '/assets/facility/img-1.png', route: '/facility/health-insurance-plans-bangalore' },
    { title: 'Emergency & Trauma Care', icon: '/assets/facility/img-2.png', route: '/facility/best-emergency-trauma-multispeciality-hospital-bangalore' },
    { title: 'In-patient facility', icon: '/assets/facility/img-3.png', route: '/facility/inpatient-facility-bangalore' },
    { title: 'Dialysis Unit', icon: '/assets/facility/img-4.png', route: '/facility/best-kidney-dialysis-multispeciality-hospital-bangalore' },
    { title: 'Operation Theatre', icon: '/assets/facility/img-5.png', route: '/facility/operation-theatre-bangalore' },
    { title: 'ICU', icon: '/assets/facility/img-6.png', route: '/facility/best-intensive-care-unit-multispeciality-hospital-bangalore' },
    { title: 'Radiology Services', icon: '/assets/facility/img-7.png', route: '/facility/top-diagnostics-multi-speciality-hospital-bangalore' },
    { title: 'Pharmacy', icon: '/assets/facility/img-8.png', route: '/facility/24-hours-pharmacy-store-bangalore' },
    { title: 'Ambulance Services', icon: '/assets/facility/img-9.png', route: '/facility/best-ambulance-service-rashtrotthana-hospital-bangalore' },
    { title: 'Dietary', icon: '/assets/facility/img-10.png', route: '/facility/dietary-services-bangalore' },
    { title: 'Physiotherapy', icon: '/assets/facility/img-11.png', route: '/facility/physiotherapy-services-bangalore' },
    { title: 'Laboratory Services', icon: '/assets/facility/img-12.png', route: '/facility/laboratory-services-bangalore' },
    { title: 'Endoscopy', icon: '/assets/facility/img-13.png', route: '/facility/endoscopy-services-bangalore' },
    { title: 'Nutrition & Dietetics', icon: '/assets/facility/img-14.png', route: '/facility/nutrition-dietetics-services-bangalore' },

  ];


  goToPage(route: string) {
    this.router.navigate([route]);
  }

}
