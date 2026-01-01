import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-tonsillectomy',
  templateUrl: './tonsillectomy.component.html',
  styleUrl: './tonsillectomy.component.css'
})
export class TonsillectomyComponent {

    constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle(
      'Tonsillectomy Surgery in Bangalore | Rashtrotthana Hospital'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Get safe tonsillectomy surgery in Bangalore at Rashtrotthana Hospital. Expert ENT doctors, child-friendly care, minimal pain & faster recovery. Book now.',
    });
  }

  @ViewChild('formSection') formSection!: ElementRef;

  doctorCard = {
    name: 'Dr. [ENT Specialist Name]',
    image: 'assets/Doc-Inv-Page/ent-doctor.png',
    qualification: 'MBBS, MS (ENT)',
    experience: '20+ Years',
    speciality: 'ENT Surgery',
    highlights: [
      '20+ years of experience in ENT surgery',
      '5000+ successful tonsillectomy procedures',
      'Expert in pediatric and adult ENT care',
      'Specializes in minimally invasive techniques',
      'Comprehensive throat and airway management',
      'Sleep disorder treatment expertise'
    ]
  };

formdoctors = ['Dr. Manasa N. A', 'Dr. Narendranath A', 'Dr. Sunil Kumar C', 'Dr. Sandhya S. Patil'];

  doctors = [
    {
      id: 1,
      name: 'Dr. Manasa N. A',
      image: 'assets/Doc-Inv-Page/Dr-Manasa-N-A.png',
      qualification: 'MBBS, DLO, DNB(ENT)',
      experience: '10+ Years',
      speciality: 'ENT',
      slug: '/doctor/dr-manasa-n-a'
    },
    {
      id: 2,
      name: 'Dr. Narendranath A',
      image: 'assets/Doc-Inv-Page/Dr-Narendranath-A.png',
      qualification: 'MBBS, MS(ENT)',
      experience: '10',
      speciality: 'ENT',
      slug: '/doctor/dr-narendranath-a'
    },
    {
      id: 3,
      name: 'Dr. Sunil Kumar C',
      image: 'assets/Doc-Inv-Page/Dr-Sunil.png',
      qualification: 'MS ENT, DHM, IFAAM',
      experience: '10+',
      speciality: 'ENT',
      slug: '/doctor/dr-sunil-kumar-c'
    },
    {
      id: 4,
      name: 'Dr. Sandhya S. Patil',
      image: 'assets/dr-sandhaya.png',
      qualification: 'MBBS, DLO, DNB (ENT), AASC',
      experience: '10+',
      speciality: 'ENT',
      slug: '/doctor/dr-sandhya-s-patil'
    },
  ];


  sections = [
    {
      number: '01',
      icon: '🏥',
      title: '1. Advanced ENT Care & Experienced Team',
      color: '#008080',
      description: 'At Rashtrotthana Hospital, we combine modern ENT technology with years of experience in treating both pediatric and adult patients safely.',
      features: [
        {
          icon: '⚕️',
          title: 'Modern Operation Theatres',
          description: 'Equipped with advanced surgical tools and strict safety protocols.'
        },
        {
          icon: '👨‍⚕️',
          title: 'Experienced ENT Specialists',
          description: 'Doctors trained in tonsil surgeries for both children and adults.'
        },
        {
          icon: '🏥',
          title: 'Complete ENT Care',
          description: 'From diagnosis and surgery to recovery and follow-up support.'
        },
        {
          icon: '⚡',
          title: 'Faster Recovery, Less Discomfort',
          description: 'Advanced techniques help reduce pain and promote quicker healing.'
        }
      ],
      highlightText: 'Your tonsil treatment journey - from consultation to recovery — is guided with skill, care, and attention to comfort.'
    },
    {
      number: '02',
      icon: '💳',
      title: '2. Health Insurance Facility',
      color: '#FBCA51',
      description: 'We make treatment affordable and stress-free for families and individuals.',
      features: [
        {
          icon: '💳',
          title: 'Cashless Insurance Available',
          description: 'Accepted by most major health insurance providers.'
        },
        {
          icon: '📋',
          title: 'Claim Assistance',
          description: 'Our team supports you with approvals and paperwork.'
        },
        {
          icon: '💰',
          title: 'Transparent Billing',
          description: 'No hidden charges. Clear and honest pricing.'
        },
        {
          icon: '✅',
          title: 'Simple Process',
          description: 'Hassle-free insurance claims and approvals.'
        }
      ],
      highlightText: 'Patients appreciate our supportive insurance process that allows them to focus on recovery.'
    },
    {
      number: '03',
      icon: '🚗',
      title: '3. Travel & Stay Convenience',
      color: '#022B50',
      description: 'Located in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is easy to access for patients from across the city and nearby areas.',
      features: [
        {
          icon: '📍',
          title: 'Easily Accessible',
          description: 'Close to metro stations, railway stations, and major bus routes.'
        },
        {
          icon: '🏨',
          title: 'Nearby Stay Options',
          description: 'Comfortable hotels and lodges for patients and families.'
        },
        {
          icon: '🍽️',
          title: 'Essential Facilities Around',
          description: 'Pharmacies, restaurants, and transport services nearby.'
        },
        {
          icon: '🤝',
          title: 'Supportive Environment',
          description: 'Our staff ensures every visit is smooth, comfortable, and worry-free.'
        }
      ],
      highlightText: 'From travel to treatment to recovery — we take care of every detail.'
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
