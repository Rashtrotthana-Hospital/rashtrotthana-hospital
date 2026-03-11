import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Facility } from '../facility.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrl: './pharmacy.component.css'
})
export class PharmacyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  sanitizedContent2: SafeHtml = '';
  facilities: Facility[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("24/7 Pharmacy Services at Rashtrotthana Hospital Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers 24-hour pharmacy services in Bangalore for all your medicinal needs, available round-the-clock.' });

    this.metaService.updateTag({ name: 'keywords', content: '24/7 pharmacy, hospital pharmacy, Bangalore pharmacy services' });


    this.facilities = [
      {
        main_heading: 'Pharmacy',
        heading: 'Pharmacy',
        image_1: 'rashtrotthana-hospital-24-hour-pharmacy.png',
        image_2: '24x7-medicine-store-at-rashtrotthana-hospital.png',
        subFacilities: [{
          subHeading: 'Convenient Pharmacy Solutions at Rashtrotthana Hospital:',
          subContent: `Discover convenience and reliability with our 24X7 <a href="https://en.wikipedia.org/wiki/Pharmacy" target="_blank">Pharmacy</a> services at Rashtrotthana Hospital. Our pharmacy is committed to providing FDA-approved medications and prioritizes GMP-certified drugs to ensure your safety and well-being. With a focus on accessibility and affordability, we offer a 10% discount on outpatient drug prescriptions and vaccinations, making quality healthcare more accessible to all.`
        },
        {
          subHeading: 'Personalized Care and Home Delivery Options:',
          subContent: 'Experience personalized care and convenience with Rashtrotthana Hospital s pharmacy services. Our dedicated team is here to assist you in selecting the right medications and answering any questions you may have. For added convenience, we offer home delivery within a 5-kilometer radius, ensuring that you have access to essential medications without leaving the comfort of your home. Plus, enjoy an additional 10% discount on drugs delivered to your doorstep.'
        },

        ],
        bg_image: 'pharmacy-services-near-me.png',
        alt1: 'Rashtrotthana Hospital 24-Hour Pharmacy',
        alt2: '24/7 Medicine Store at Rashtrotthana Hospital',
        alt3: 'Pharmacy Services near me'
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