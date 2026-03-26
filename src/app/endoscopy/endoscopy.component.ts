
import { Facility } from '../facility.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SubFacility } from '../sub-facility.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-endoscopy',
  templateUrl: './endoscopy.component.html',
  styleUrl: './endoscopy.component.css'
})
export class EndoscopyComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {

  }
  sanitizedSubFacilities: SubFacility[] = [];

  ngOnInit(): void {
    this.titleService.setTitle("Endoscopy Hospital in Bangalore | Rashtrotthana Hospital");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers advanced endoscopy services in Bangalore for accurate diagnosis of digestive disorders using safe, modern, minimally invasive techniques.' });

    this.metaService.updateTag({ name: 'keywords', content: 'endoscopy services, gastroenterology, hospital Bangalore, minimally invasive procedures' });

    console.log('hi')
    this.sanitizeSubFacilitiesContent();
  }
  facilities = [
    {
      main_heading: 'Endoscopy',
      heading: 'Endoscopy',
      image_1: 'rashtrotthana-hospital-endoscopy-services.png',
      image_2: 'best-Endoscopy-lab-in-bangalore-rashtrotthana-Hospital.png',

      subFacilities: [
        {
          subHeading: 'Expert Endoscopy Services at Rashtrotthana Hospital:',
          subContent: 'At Rashtrotthana Hospital, we offer expert endoscopy services to diagnose and treat various gastrointestinal conditions with precision and care. Skilled specialists staff our state-of-the-art endoscopy facility, utilizing advanced equipment and techniques to ensure accurate and thorough examinations. Our team is committed to delivering the highest quality of care in a comfortable and supportive environment, whether you need a routine screening or a diagnostic procedure.'
        },
        {
          subHeading: 'Comprehensive diagnostic and therapeutic options:',
          subContent: `Endoscopy is a minimally invasive procedure that allows our specialists to examine the internal organs of the digestive tract using a flexible tube with a camera and light attached. This enables us to visualize and diagnose a wide range of conditions, including ulcers, polyps, inflammation and cancer. In addition to diagnostic procedures, our endoscopy facility also offers therapeutic interventions such as <a href="https://en.wikipedia.org/wiki/Polyp_(medicine)"  target="_blank">polyp</a> removal, tissue biopsies and stent placement to address various gastrointestinal issues effectively.`
        },
        {
          subHeading: 'Patient-centered care and support:',
          subContent: 'At Rashtrotthana Hospital, we understand that undergoing an endoscopic procedure can be a source of anxiety for many patients. That is why our team is committed to providing compassionate care and support throughout your experience. From pre-procedure preparation to post-procedure follow-up, we prioritize your comfort and well-being every step of the way. Our goal is to ensure that you feel informed, empowered and confident in your care decisions, allowing you to focus on your health with peace of mind.'
        }
      ],
      bg_image: 'rashtrotthana-hospital-advanced-endoscopy-services.png',
      alt1: 'Rashtrotthana Hospital Endoscopy Services',
      alt2: 'Best Endoscopy Lab in Bangalore - Rashtrotthana Hospital',
      alt3: 'Rashtrotthana Hospital Advanced Endoscopy Services',
    }
  ];
  sanitizeSubFacilitiesContent(): void {
    console.log(this.facilities[0].subFacilities);
    // Sanitize each subContent for rendering safely with links
    this.sanitizedSubFacilities = this.facilities[0].subFacilities.map(subFacility => {
      console.log(subFacility.subContent);
      return {
        ...subFacility,
        subContent: this.sanitizer.bypassSecurityTrustHtml(subFacility.subContent) as string
      };
    });
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
    '/assets/facility/facility-img-13.jpg',
    '/assets/facility/facility-img-14.jpg',
    '/assets/facility/facility-img-16.jpg',
    '/assets/facility/facility-img-15.jpg',
    '/assets/facility/facility-img-17.jpg',
    '/assets/facility/facility-img-1.jpg'
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


