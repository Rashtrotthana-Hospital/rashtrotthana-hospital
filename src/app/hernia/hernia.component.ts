import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
declare var gtag: Function;


@Component({
  selector: 'app-hernia',
  templateUrl: './hernia.component.html',
  styleUrl: './hernia.component.css'
})
export class HerniaComponent implements OnInit {

   constructor(
    private titleService: Title,
    private metaService: Meta,
    private sanitizer: DomSanitizer
  ) {}
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];

  ngOnInit(): void {
    this.titleService.setTitle(
      'Hernia Surgery in Bangalore | Rashtrotthana Hospital'
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get safe, advanced hernia surgery in Bangalore at Rashtrotthana Hospital. Expert surgeons, minimally invasive treatment & trusted care.',
    });

    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(
      this.specialities[0].content
    );
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(
      this.specialities[0].content_1
    );
  }


  @ViewChild('formSection') formSection!: ElementRef;

  doctorCard = {
    name: 'Dr. [General Surgeon Name]',
    image: 'assets/Doc-Inv-Page/general-surgeon.png',
    qualification: 'MBBS, MS (General Surgery), FMAS',
    experience: '25+ Years',
    speciality: 'General & Laparoscopic Surgery',
    highlights: [
      '25+ years of experience in general surgery',
      '10,000+ successful hernia repair surgeries',
      'Expert in both open and laparoscopic hernia repair',
      'Specializes in complex and recurrent hernias',
      'Advanced mesh repair techniques',
      'Minimal scarring and faster recovery approach',
      'Comprehensive post-operative care and follow-up',
      '98% success rate in hernia surgeries'
    ]
  };

  formdoctors = ['Dr. Atmaram D. C', 'Dr. Nishanth Lakshmikantha'];

  doctors = [
    {
      id: 1,
      name: 'Dr. Atmaram D. C',
      image: 'assets/Doc-Inv-Page/Dr-Atmaram-D-C.png',
      qualification: 'MBBS, MS',
      experience: '20+ Years',
      speciality: 'General Surgery',
      slug : "/doctor/dr-atmaram-d-c"
    },
    {
      id: 2,
      name: 'Dr. Nishanth Lakshmikantha',
      image: 'assets/Doc-Inv-Page/Dr-Nishanth-Lakshmikantha.png',
      qualification: 'MBBS, MS (General Surgery)',
      experience: '10+ Years',
      speciality: 'General Surgery',
      slug: "/doctor/dr-nishanth-lakshmikantha"
    }
  ];

  sections = [
    {
      number: '01',
      icon: '🏥',
      title: '1. Advanced Facilities & Experienced Surgical Team',
      color: '#008080',
      description: 'At Rashtrotthana Hospital, we combine modern medical technology with years of surgical expertise to deliver safe and effective hernia treatment.',
      features: [
        {
          icon: '⚕️',
          title: 'Modern Operation Theatres',
          description: 'Equipped with advanced surgical tools and strict safety standards.'
        },
        {
          icon: '👨‍⚕️',
          title: 'Highly Skilled Surgeons',
          description: 'Experienced specialists trained in laparoscopic and open hernia surgeries.'
        },
        {
          icon: '💚',
          title: 'Complete Surgical Care',
          description: 'From diagnosis and surgery to recovery and follow-up support.'
        },
        {
          icon: '⚡',
          title: 'Faster Recovery, Less Discomfort',
          description: 'Advanced techniques help reduce pain and speed up healing.'
        }
      ],
      highlightText: 'Patients receive structured care from initial consultation through surgery and recovery.'
    },
    {
      number: '02',
      icon: '💳',
      title: '2. Health Insurance Facility',
      color: '#FBCA51',
      description: 'We make hernia treatment affordable and worry-free through insurance support.',
      features: [
        {
          icon: '💳',
          title: 'Cashless Insurance Available',
          description: 'Accepted by most major health insurance providers.'
        },
        {
          icon: '📋',
          title: 'Claim Assistance',
          description: 'Our team helps with approvals and paperwork.'
        },
        {
          icon: '💰',
          title: 'Transparent Billing',
          description: 'No hidden charges. Clear and honest pricing.'
        },
        {
          icon: '✅',
          title: 'Smooth Process',
          description: 'Hassle-free insurance support for peace of mind.'
        }
      ],
      highlightText: 'Insurance support is handled in a clear and organized manner to reduce administrative stress.'
    },
    {
      number: '03',
      icon: '🚗',
      title: '3. Travel & Stay Convenience',
      color: '#022B50',
      description: 'Located in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is easy to reach and well supported with nearby facilities.',
      features: [
        {
          icon: '📍',
          title: 'Easily Accessible',
          description: 'Close to metro stations, railway stations and major bus routes.'
        },
        {
          icon: '🏨',
          title: 'Nearby Stay Options',
          description: 'Comfortable hotels and lodges for patients and families.'
        },
        {
          icon: '🍽️',
          title: 'Essential Facilities Around',
          description: 'Pharmacies, restaurants, and transport services close by.'
        },
        {
          icon: '🤝',
          title: 'Supportive Environment',
          description: 'Our staff ensures your visit is smooth and stress-free.'
        }
      ],
      highlightText: 'The hospital location and surrounding facilities help make visits more convenient for patients and families.'
    }
  ];

  scrollToForm(): void {
    if (this.formSection) {
      this.formSection.nativeElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  trackPhoneClick() {
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        send_to: 'AW-16656770043/-YEMCITg09IZEPvHyIY-',
        event_callback: () => {
          console.log('Phone call conversion tracked!');
        },
      });
    }
  }
}
