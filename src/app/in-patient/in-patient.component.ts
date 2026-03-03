
import { Facility } from '../facility.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-patient',
  templateUrl: './in-patient.component.html',
  styleUrl: './in-patient.component.css'
})
export class InPatientComponent {

  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  sanitizedContent2: SafeHtml = '';
  facilities: Facility[] = [];
  constructor(private titleService: Title, private metaService: Meta,
    private sanitizer: DomSanitizer, private router: Router) {

  }
  ngOnInit(): void {
    this.titleService.setTitle("Comfortable In-Patient Facilities - Rashtrotthana Hospital Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Experience quality in-patient care with comfortable rooms and comprehensive services at Rashtrotthana Hospital, Bangalore.' });

    this.metaService.updateTag({ name: 'keywords', content: 'in-patient care, hospital stay, best hospital Bangalore, patient rooms' });

    this.facilities = [
      // {
      //   main_heading: 'In-patient facility',
      //   heading: 'In-patient facility',
      //   image_1: 'rashtrotthana-hospital-inpatient-services.jpeg',
      //   image_2: 'best-inpatient-facility-in-bangalore-rashtrotthana-hospital.jpeg',
      //   bg_image: 'rashtrotthana-hospital-multispeciality-inpatient-care.png',
      //   subFacilities: [
      //     {
      //       subHeading: 'Comfort and Care at Rashtrotthana Hospital:',
      //       subContent: `At Rashtrotthana Hospital, we understand that your comfort and well-being are paramount during your stay with us. Our <a target="_blank" href="https://en.wikipedia.org/wiki/Inpatient_care">in-patient facilities</a> are designed to provide you with a serene and welcoming environment conducive to healing and recovery. We thoughtfully furnish each private room with modern amenities to ensure your comfort throughout your stay. From cozy bedding to personalized care, we strive to create a home-like atmosphere where you can focus on your health with peace of mind.`,
      //     },
      //     {
      //       subHeading: 'Personalized Attention from Our Dedicated Staff:',
      //       subContent:
      //         'Our team of compassionate healthcare professionals is committed to providing personalized attention to every patient. From skilled nurses to attentive support staff, we are here to cater to your individual needs and preferences. Whether you require assistance with daily tasks or have specific medical requirements, our dedicated team is available around the clock to ensure your comfort and well-being. At Rashtrotthana Hospital, you can rest assured that you will receive the highest standard of care in a supportive and nurturing environment.',
      //     },
      //     {
      //       subHeading: 'Advanced Medical Technology for Comprehensive Care:',
      //       subContent:
      //         'Rashtrotthana Hospital supports comprehensive and advanced care with its state-of-the-art medical technology and dedicated staff. Our in-patient facilities feature advanced monitoring systems and medical equipment to ensure accurate diagnosis and effective treatment. From cutting-edge surgical suites to specialized medical units, we have the resources and expertise to address a wide range of healthcare needs. We are committed to providing you with the highest quality of care, utilizing the latest advancements in medical technology to promote your health and well-being.',
      //     },
      //   ],
      //   alt1: 'Rashtrotthana Hospital Inpatient Services',
      //   alt2 : 'Best Inpatient Facility in Bangalore - Rashtrotthana Hospital',
      //   alt3 : 'Rashtrotthana Hospital Multispeciality Inpatient Care'
      // }    
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
    '/assets/facility/in-patinet-img-1.png',
    '/assets/facility/in-patinet-img-2.png',
    '/assets/facility/in-patinet-img-3.png',
    '/assets/facility/in-patinet-img-4.png',
    '/assets/facility/in-patinet-img-5.png',
    '/assets/facility/in-patinet-img-6.png'
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
