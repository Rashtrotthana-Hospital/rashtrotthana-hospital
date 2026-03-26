import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { Facility } from '../facility.model';
import { SubFacility } from '../sub-facility.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.css'
})
export class NutritionComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {
    
  }
  sanitizedSubFacilities: SubFacility[] = [];

  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Nutrition & Dietetics Services - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides personalized nutrition and dietetic consultations for patients in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'nutrition services, dietetics, patient nutrition, hospital dietitian Bangalore' });

  this.sanitizeSubFacilitiesContent();
  }
  facilities=[
    {
      main_heading:'Nutrition & Dietetics',
      heading:'Nutrition & Dietetics',
      image_1:'nutrition-service-1.png',
      image_2:'nutrition-service-2.png',
      subFacilities:[
        {
          subHeading:'Optimizing Health Through Nutrition at Rashtrotthana Hospital:',
        subContent:'At Rashtrotthana Hospital, we recognize the vital role that nutrition plays in overall health and well-being. We dedicate our Nutrition & Dietetics facility to creating personalized nutrition plans that cater to each patient s unique needs. Our team of experienced dietitians works closely with patients to develop comprehensive nutrition strategies aimed at promoting optimal health and recovery. Whether you re managing a chronic condition, recovering from surgery, or simply looking to improve your overall wellness, our expert guidance can help you achieve your nutritional goals.'
        },
        {
          subHeading:'Customized Nutrition Plans for Your Unique Needs',
        subContent:'Understanding that every individual has unique nutritional requirements, our dietitians take a personalized approach to nutrition planning. Through thorough assessments and consultations, we develop customized nutrition plans that take into account your medical history, lifestyle and personal preferences. Whether you require specialized dietary modifications or simply need guidance on healthy eating habits, our team is here to support you every step of the way. By empowering you with the knowledge and tools to make informed food choices, we aim to help you achieve long-term success in managing your health through nutrition.'
        },
        {
          subHeading:'Education and support empower healthier lifestyles.',
        subContent:`At Rashtrotthana Hospital, we believe that education and support are essential components of successful nutrition management. Our Nutrition & <a href="https://en.wikipedia.org/wiki/Dietitian" target="_blank">Dietetics</a> facility offers educational resources and ongoing support to help you make lasting changes to your diet and lifestyle. We provide you with the knowledge and skills you need to adopt healthier habits and maintain them for life. By empowering you to take control of your nutritional health, we strive to make a positive impact on your overall well-being and quality of life.`
        }
      ],
      bg_image:'dietician-bg.png'
    
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
        '/assets/facility/facility-img-1.jpg',
        '/assets/facility/facility-img-2.jpg',
        '/assets/facility/facility-img-3.jpg',
        '/assets/facility/facility-img-4.jpg',
        '/assets/facility/facility-img-5.jpg',
        '/assets/facility/facility-img-6.jpg'
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
