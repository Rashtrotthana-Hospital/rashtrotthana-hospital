import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-adenoidectomy',
  templateUrl: './adenoidectomy.component.html',
  styleUrl: './adenoidectomy.component.css'
})
export class AdenoidectomyComponent {
  @ViewChild('formSection') formSection!: ElementRef;

   constructor(
      private router: Router,
      private titleService: Title,
      private metaService: Meta
    ) {
      this.titleService.setTitle(
        'Adenoidectomy Surgery in Bangalore | Rashtrotthana Hospital'
      );
  
      this.metaService.updateTag({
        name: 'description',
        content:
          'Safe adenoidectomy surgery in Bangalore at Rashtrotthana Hospital. Expert ENT doctors, child-friendly care, improved breathing & faster recovery.',
      });
    }

  doctorCard = {
    name: 'Dr. [Pediatric ENT Specialist Name]',
    image: 'assets/Doc-Inv-Page/pediatric-ent-doctor.png',
    qualification: 'MBBS, MS (ENT), Fellowship in Pediatric ENT',
    experience: '20+ Years',
    speciality: 'Pediatric ENT Surgery',
    highlights: [
      '20+ years of experience in pediatric ENT surgery',
      '8000+ successful adenoidectomy procedures',
      'Expert in child-friendly surgical techniques',
      'Specializes in minimally invasive procedures for children',
      'Comprehensive pediatric airway management',
      'Trained in treating sleep disorders in children',
      'Gentle approach with excellent patient comfort'
    ]
  };

  formdoctors = ['Dr. Manasa N. A', 'Dr. Narendranath A', 'Dr. Sunil Kumar C', 'Dr. Sandhya S. Patil'];

  doctors = [
    {
      id: 1,
      name: 'Dr. Manasa N. A',
      image: 'assets/Doc-Inv-Page/Dr-Manasa-N-A.png',
      qualification: 'MBBS, DLO, DNB(ENT)',
      experience: '16+ Years',
      speciality: 'ENT',
      slug: '/doctor/dr-manasa-n-a'
    },
    {
      id: 2,
      name: 'Dr. Narendranath A',
      image: 'assets/Doc-Inv-Page/Dr-Narendranath-A.png',
      qualification: 'MBBS, MS(ENT)',
      experience: '11+',
      speciality: 'ENT',
      slug: '/doctor/dr-narendranath-a'
    },
    {
      id: 3,
      name: 'Dr. Sunil Kumar C',
      image: 'assets/Doc-Inv-Page/Dr-Sunil.png',
      qualification: 'MS ENT, DHM, IFAAM',
      experience: '14+',
      speciality: 'ENT',
      slug: '/doctor/dr-sunil-kumar-c'
    },
    {
      id: 4,
      name: 'Dr. Sandhya S. Patil',
      image: 'assets/dr-sandhaya.png',
      qualification: 'MBBS, DLO, DNB (ENT), AASC',
      experience: '12+',
      speciality: 'ENT',
      slug: '/doctor/dr-sandhya-s-patil'
    },
  ];

  sections = [
    {
      number: '01',
      icon: '👶',
      title: '1. Child-Focused ENT Care & Expert Team',
      color: '#008080',
      description: 'At Rashtrotthana Hospital, we combine modern ENT technology with years of experience in treating children gently and safely.',
      features: [
        {
          icon: '🏥',
          title: 'Modern Operation Theatres',
          description: 'Designed with advanced equipment and strict safety protocols.'
        },
        {
          icon: '👨‍⚕️',
          title: 'Experienced ENT Specialists',
          description: 'Doctors trained in adenoid and pediatric ENT surgeries.'
        },
        {
          icon: '💚',
          title: 'Complete Child-Centric Care',
          description: 'From diagnosis and surgery to recovery and follow-up support.'
        },
        {
          icon: '⚡',
          title: 'Faster Recovery, Minimal Discomfort',
          description: 'Advanced techniques ensure quick healing and less pain.'
        }
      ],
      highlightText: 'Your child\'s journey - from consultation to recovery - is guided with patience, care, and reassurance.'
    },
    {
      number: '02',
      icon: '💳',
      title: '2. Health Insurance Facility',
      color: '#FBCA51',
      description: 'We help parents focus on their child\'s recovery, not paperwork.',
      features: [
        {
          icon: '💳',
          title: 'Cashless Insurance Available',
          description: 'Accepted by most major health insurance providers.'
        },
        {
          icon: '📋',
          title: 'Claim Assistance',
          description: 'Our team supports you through approvals and documentation.'
        },
        {
          icon: '💰',
          title: 'Transparent Billing',
          description: 'No hidden charges. Honest and clear pricing.'
        },
        {
          icon: '✅',
          title: 'Simple Process',
          description: 'Smooth insurance process that keeps focus on your child.'
        }
      ],
      highlightText: 'Parents appreciate our smooth insurance process that keeps their focus on their child\'s comfort.'
    },
    {
      number: '03',
      icon: '🚗',
      title: '3. Travel & Stay Convenience',
      color: '#022B50',
      description: 'Located in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is easy for families to reach and stay comfortable.',
      features: [
        {
          icon: '📍',
          title: 'Easily Accessible',
          description: 'Close to metro stations, railway stations, and major bus routes.'
        },
        {
          icon: '🏨',
          title: 'Nearby Stay Options',
          description: 'Comfortable accommodation for parents and families.'
        },
        {
          icon: '🍽️',
          title: 'Essential Facilities Around',
          description: 'Pharmacies, food options, and transport services nearby.'
        },
        {
          icon: '🤝',
          title: 'Supportive Environment',
          description: 'Our staff treats every child with warmth and patience.'
        }
      ],
      highlightText: 'From travel to treatment to recovery - we take care of your child like our own.'
    }
  ];

  ngOnInit(): void {
    // Initialize component
  }

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
