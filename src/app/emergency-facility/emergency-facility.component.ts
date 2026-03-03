
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-emergency-facility',
  templateUrl: './emergency-facility.component.html',
  styleUrl: './emergency-facility.component.css'
})
export class EmergencyFacilityComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  facilities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Emergency & Trauma Care | Rashtrotthana Hospital Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is recognized as the best trauma care hospital in Bangalore, offering 24/7 emergency services with rapid response and expert care.' });

    this.metaService.updateTag({ name: 'keywords', content: 'emergency care, trauma center, best hospital Bangalore, 24/7 emergency services' });



    this.facilities = [
      {
        main_heading: 'Emergency & Trauma Care',
        heading: 'Emergency & Trauma Care',
        content: `The Emergency and Trauma Care Department at Rashtrotthana Hospital offers 24/7 specialized services to handle critical medical situations with speed and efficiency. Our team of experienced emergency physicians, trauma specialists and support staff is trained to manage a range of emergencies, including severe injuries, cardiac events,<a href="https://en.wikipedia.org/wiki/Stroke"  target="_blank">strokes</a>  and respiratory crises. Equipped with state-of-the-art technology, we provide rapid assessments, accurate diagnoses and immediate interventions to stabilize patients in critical conditions. Each patient receives individualized attention and care from admission through treatment, ensuring the highest standards of emergency care in a compassionate environment.`,
        content_1: 'Our facility is designed to handle complex trauma cases, with advanced resuscitation equipment, intensive care units and access to surgical teams for urgent interventions. By implementing internationally recognized protocols and collaborating with other specialties, we maximize recovery outcomes for each patient. Beyond urgent care, we emphasize public awareness and preparedness, promoting community understanding of early intervention in emergencies. At Rashtrotthana Hospital, our commitment to patient-centered care, advanced technology and round-the-clock support makes us a trusted leader in emergency and trauma care in Bangalore.',
        image_1: 'rashtrotthana-hospital-24x7-emergency-service.png',
        image_2: 'rashtrotthana-hospital-multispeciality-emergency-and-trauma-Care.png',
        bg_image: 'best-emergency-hospital-in-bangalore-rashtrotthana-hospital.png',
        alt1: 'Best Emergency Hospital in Bangalore - Rashtrotthana Hospital',
        alt2: 'Rashtrotthana Hospital 24/7 Emergency Services',
        alt3: 'Rashtrotthana Hospital Multispeciality Emergency and Trauma Care'
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