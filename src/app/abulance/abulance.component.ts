
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-abulance',
  templateUrl: './abulance.component.html',
  styleUrl: './abulance.component.css'
})
export class AbulanceComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  sanitizedContent2: SafeHtml = '';
  facilities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("24/7 Ambulance Services in Bangalore | Rashtrotthana Hospital");

    this.metaService.updateTag({ name: 'description', content: 'Fast and reliable ambulance services in Bangalore by Rashtrotthana Hospital, ensuring safe and timely emergency medical transport when it matters most.' });

    this.metaService.updateTag({ name: 'keywords', content: 'ambulance service, emergency transport, best ambulance Bangalore' });


    this.facilities = [
      {
        main_heading: 'Ambulance Services',
        heading: 'Ambulance Services',
        content: `Rashtrotthana Hospital provides 24/7 ambulance services with two fully equipped Advanced Life Support (ALS) ambulances to respond promptly to <a  target="_blank" href="https://en.wikipedia.org/wiki/Critical_emergency_medicine">critical emergencies</a> across Bangalore. Each ALS ambulance is equipped with advanced life-saving equipment, including cardiac monitors, oxygen support and defibrillators, ensuring thorough pre-hospital care. Trained medical professionals accompany each ambulance, delivering safe and reliable transport to patients in need.`,
        content_1: 'Additionally, our Clinic on Wheels is a mobile healthcare solution that brings essential medical services to rural communities. Equipped for outpatient consultations, health examinations, sample collection and medication dispensing, this innovative initiative expands high-quality healthcare accessibility in underserved areas. Through this program, Rashtrotthana Hospital enhances proactive health management, ensuring that even remote areas benefit from comprehensive healthcare support. Both our ALS ambulance and Clinic on Wheels services demonstrate Rashtrotthana Hospital’s commitment to accessible, community-focused care across all regions.',
        // image_1: 'rashtrotthana-hospital-emergency-ambulance-service.jpeg',
        image_2: 'best-ambulance-service-in-bangalore-rashtrotthana-hospital.png  ',
        bg_image: '24x7-emergency-ambulance-rashtrotthana-hospital.png',
        alt1: '24/7 Emergency Ambulance Rashtrotthana Hospital',
        // alt2 : 'Rashtrotthana Hospital Emergency Ambulance Service',
        alt3: 'Best Ambulance Service in Bangalore Rashtrotthana Hospital',
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
    '/assets/facility/facility-img-1.jpg',
    '/assets/facility/facility-img-2.jpg',
    '/assets/facility/facility-img-3.jpg',
    '/assets/facility/facility-img-4.jpg',
    '/assets/facility/facility-img-6.jpg',
    '/assets/facility/facility-img-5.jpg'
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