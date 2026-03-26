import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.css'
})
export class LaboratoryComponent {
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  facilities: any[] = [];
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {

  }
  ngOnInit(): void {
    this.titleService.setTitle("Advanced Laboratory Services - Rashtrotthana Hospital Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital\'s laboratory offers accurate and prompt diagnostic testing services in Bangalore.' });

    this.metaService.updateTag({ name: 'keywords', content: 'lab tests, diagnostic lab, hospital lab Bangalore, pathology services' });


    this.facilities = [
      {
        main_heading: 'Laboratory Services',
        heading: 'Laboratory Services',
        content: `Rashtrotthana Hospital’s Laboratory Services are committed to providing high-quality, precise diagnostics to support patient care and enable informed healthcare decisions. Equipped with cutting-edge technology and staffed by skilled technicians, our laboratory delivers accurate, timely results that serve as a foundation for effective treatment. From routine blood tests to specialized diagnostics in haematology, biochemistry, microbiology and <a href="https://en.wikipedia.org/wiki/Immunology" target="_blank">immunology</a>, our lab covers a wide range of testing needs with a focus on reliability and accuracy.`,
        content_1: `Our patient-centered approach ensures personalized service, allowing individuals to choose from a variety of diagnostic tests based on their health requirements. Rashtrotthana Hospital’s laboratory team works closely with medical professionals to provide diagnostic support that enhances treatment outcomes. Our lab services are a trusted component of healthcare at Rashtrotthana, empowering patients with the knowledge and confidence to make well-informed decisions about their health journey.`,
        image_1: 'rashtrotthana-hospital-laboratory_services.png',
        image_2: 'best-diagnostic-lab-in-bangalore-rashtrotthana-hospital.png',
        bg_image: 'rashtrotthana_hospital-advanced-pathology-services.png',
        alt1: 'Rashtrotthana Hospital Laboratory Services',
        alt2: 'Best Diagnostic Lab in Bangalore - Rashtrotthana Hospital',
        alt3: 'Rashtrotthana Hospital Advanced Pathology Services',
      }
    ];

    // Sanitizing the content for safe HTML rendering
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
    '/assets/facility/facility-img-7.jpg',
    '/assets/facility/facility-img-8.jpg',
    '/assets/facility/facility-img-9.jpg',
    '/assets/facility/facility-img-10.jpg',
    '/assets/facility/facility-img-11.jpg',
    '/assets/facility/facility-img-12.jpg'
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
