import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dietery',
  templateUrl: './dietery.component.html',
  styleUrl: './dietery.component.css'
})
export class DieteryComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  facilities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Nutrition & Dietetics Hospital in Bangalore | Rashtrotthana");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers expert clinical nutrition and dietetics in Bangalore with personalized diet plans for recovery, wellness, and long-term health.' });

    this.metaService.updateTag({ name: 'keywords', content: 'dietary services, clinical nutrition, healthy diet, hospital nutrition Bangalore' });


    this.facilities = [
      {
        main_heading: 'Dietary',
        heading: 'Dietary',
        content: `At Rashtrotthana Hospital, we prioritize nutritious, hygienic and flavorful meals through our dedicated canteen services. Prepared using high-quality ingredients, our menu caters to patients, visitors and staff, offering a range of wholesome options that support recovery and wellness. Our expert dietary team ensures balanced <a href="https://en.wikipedia.org/wiki/Meal"  target="_blank">meal</a> choices for specific dietary needs, all designed to meet hospital-grade standards of health and safety.`,
        content_1: 'Whether for a quick snack or a substantial meal, our canteen provides convenient, tasty options throughout the day, enhancing the hospital experience with accessible, satisfying and nourishing food choices.',
        image_1: 'rashtrotthana-hospital-dietary-services.png',
        image_2: 'healthy-meal-services-rashtrotthana-hospital.png',
        bg_image: 'best_hospital_for_dietry_in_bengaluru.png',
        alt1: 'Rashtrotthana Hospital Dietary Services',
        alt2: 'Nutrition Services in Bangalore - Rashtrotthana Hospital',
        alt3: 'Healthy Meal Services - Rashtrotthana Hospital'
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
    '/assets/facility/facility-img-4.jpg',
    '/assets/facility/facility-img-6.jpg',
    '/assets/facility/facility-img-8.jpg',
    '/assets/facility/facility-img-10.jpg',
    '/assets/facility/facility-img-13.jpg'
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
