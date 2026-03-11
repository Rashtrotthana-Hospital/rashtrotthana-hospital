
import { Facility } from '../facility.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrl: './radiology.component.css'
})
export class RadiologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router:Router) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  sanitizedContent2: SafeHtml = '';
  facilities: Facility[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Diagnostics & Radiology Services - Rashtrotthana Hospital");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides top diagnostics and radiology services in Bangalore, ensuring accurate results and quality care.' });

    this.metaService.updateTag({ name: 'keywords', content: 'diagnostic services, radiology, multispeciality hospital, best diagnostics Bangalore' });


    this.facilities = [
      {
        main_heading: 'Radiology Services',
        heading: 'Radiology Services',
        image_1: 'radiology-facility-service-1.jpeg',
        image_2: 'radiology-facility-service-2.jpeg',
        subFacilities: [
          { subHeading: '', subContent: `Rashtrotthana Hospital offers a wide range of radiology services to assist in accurate diagnosis and treatment planning. Cutting-edge imaging technology, including <a href="https://en.wikipedia.org/wiki/X-ray" target="_blank">X-rays</a>, ultrasounds, MRIs and CT scans, equips our advanced radiology department. Our team of experienced radiologists conducts each procedure with precision and care, providing reliable results for informed decision-making by our medical professionals.` }
          , {
            subHeading: 'Comprehensive diagnostic imaging solutions:',
            subContent: 'Our radiology department provides comprehensive diagnostic imaging solutions to meet various medical needs. From detecting fractures and internal injuries to screening for underlying health conditions, our advanced imaging services offer invaluable insights. With a focus on timely and accurate diagnosis, we aim to support effective healthcare management and improve patient outcomes.'
          },
          {
            subHeading: 'Patient-Focused Approach and Timely Results:',
            subContent: 'At Rashtrotthana Hospital, we prioritize patient satisfaction and well-being. We have designed our radiology services with your comfort and convenience in mind. From scheduling appointments to delivering prompt results, we ensure a seamless experience for our patients. With our patient-focused approach and commitment to excellence, you can rely on us for accurate diagnostics and personalized care.'
          }
        ],
        bg_image: 'radiology-bg.png',
        alt1: '',
        alt2: '',
        alt3: ''
      }
    ];
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].subFacilities[0].subContent);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].subFacilities[1].subContent);
    this.sanitizedContent2 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].subFacilities[2].subContent);
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
    '/assets/facility/facility-img-10.jpg',
    '/assets/facility/facility-img-8.jpg',
    '/assets/facility/facility-img-6.jpg',
    '/assets/facility/facility-img-5.jpg',
    '/assets/facility/facility-img-3.jpg',
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