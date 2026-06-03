import { Component, OnInit, ViewChild, ElementRef, HostListener  } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
declare var gtag: Function;

export interface WhyCard {
  num: string;
  icon: string;
  iconAlt: string;
  title: string;
  sub: string;
  points: string[];
}
 
export interface JourneyStep {
  num: string;
  title: string;
  desc: string;
  svgIcon: SafeHtml;
}
 
export interface FaqItem {
  q: string;
  a: string;
}
 

@Component({
  selector: 'app-hernia',
  templateUrl: './hernia.component.html',
  styleUrl: './hernia.component.css'
})
export class HerniaComponent implements OnInit {

  //  constructor(
  //   private titleService: Title,
  //   private metaService: Meta,
  //   private sanitizer: DomSanitizer
  // ) {}
  // sanitizedContent: SafeHtml = '';
  // sanitizedContent1: SafeHtml = '';
  // specialities: any[] = [];

  // ngOnInit(): void {
  //   this.titleService.setTitle(
  //     'Hernia Surgery in Bangalore | Rashtrotthana Hospital'
  //   );
  //   this.metaService.updateTag({
  //     name: 'description',
  //     content:
  //       'Get safe, advanced hernia surgery in Bangalore at Rashtrotthana Hospital. Expert surgeons, minimally invasive treatment & trusted care.',
  //   });

  //   this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(
  //     this.specialities[0].content
  //   );
  //   this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(
  //     this.specialities[0].content_1
  //   );
  // }

    // ── FAQ accordion state ──────────────────────────────────────
  isModalOpen = false;
 
  openModal(): void {
    this.isModalOpen = true;
    document.body.classList.add('modal-body-lock');
  }
 
  closeModal(): void {
    this.isModalOpen = false;
    document.body.classList.remove('modal-body-lock');
  }
 
  // Close when clicking the dark backdrop (not the box itself)
  closeModalOnBackdrop(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
 
  // Close on Escape key
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }
 
  // ── FAQ accordion ────────────────────────────────────────────
  openFaq: number | null = null;
 
  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }
 
  // ── Analytics ────────────────────────────────────────────────
  scrollToForm(): void {
    this.openModal();
  }
 
  trackPhoneClick(): void {
    console.log('[Analytics] Phone CTA clicked');
  }
 
  // ── Why cards data ───────────────────────────────────────────
  whyCards: WhyCard[] = [
    {
      num: '01',
      icon: 'assets/sheild-icon-1.png',
      iconAlt: 'Advanced Surgical Care',
      title: 'Advanced Laparoscopic Surgery with Experienced Specialists',
      sub: 'Laparoscopic expertise with advanced OT technology for safe, precise, patient-centred hernia care.',
      points: [
        'Modern OTs with laparoscopic equipment',
        'Experienced general & laparoscopic surgeons',
        'End-to-end care from diagnosis to recovery',
        'Minimally invasive techniques for faster healing',
      ],
    },
    {
      num: '02',
      icon: 'assets/insurance-icon-1.png',
      iconAlt: 'Cashless Insurance',
      title: 'Cashless Insurance & Dedicated Patient Support',
      sub: 'Affordable, stress-free hernia surgery with smooth insurance coordination and transparent billing.',
      points: [
        'Cashless insurance facility available',
        'Guidance for approvals and claim processing',
        'Transparent treatment and billing',
        'Dedicated patient assistance throughout',
      ],
    },
    {
      num: '03',
      icon: 'assets/location-icon-1.png',
      iconAlt: 'Convenient Location',
      title: 'Convenient Location & Comfortable Patient Experience',
      sub: 'Located in Rajarajeshwari Nagar, Bangalore - easily accessible for patients across the city.',
      points: [
        'Easy access via Metro, bus and major roads',
        'Nearby accommodation and essential services',
        'Caring staff and patient-friendly environment',
        'Comfortable care focused on safety',
      ],
    },
  ];
 
  // ── Journey steps ────────────────────────────────────────────
  journeySteps: JourneyStep[] = [];
 
  constructor(private sanitizer: DomSanitizer, private titleService: Title, private metaService: Meta) {}
 
  ngOnInit(): void {

        this.titleService.setTitle(
      'Hernia Surgery in Bangalore | Advanced Hernia Treatment'
    );
    this.metaService.updateTag({
      name: 'description',
      content:
    'Get advanced hernia surgery in Bangalore at Rashtrotthana Hospital with expert surgeons, minimally invasive treatment, and faster recovery.',
    });

    

    this.journeySteps = [
      {
        num: '01',
        title: 'Consultation & Hernia Evaluation',
        desc: 'Our general surgeons evaluate your symptoms, physical examination and imaging reports to diagnose hernia type, severity and determine the right treatment plan.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(
          `<svg viewBox="0 0 24 24" fill="none" stroke="#4DB7B3" stroke-width="2" width="24" height="24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
           </svg>`
        ),
      },
      {
        num: '02',
        title: 'Hernia Surgery Procedure',
        desc: 'Advanced Laparoscopic or Open Hernia Repair is performed using modern surgical techniques with mesh reinforcement, focused on precision, safety and long-term durability.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(
          `<svg viewBox="0 0 24 24" fill="none" stroke="#4DB7B3" stroke-width="2" width="24" height="24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
           </svg>`
        ),
      },
      {
        num: '03',
        title: 'Post-Surgery Recovery & Care',
        desc: 'Dedicated pain management, wound care and activity guidance ensure a smooth, comfortable recovery with minimal complications and optimal healing.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(
          `<svg viewBox="0 0 24 24" fill="none" stroke="#4DB7B3" stroke-width="2" width="24" height="24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
           </svg>`
        ),
      },
      {
        num: '04',
        title: 'Rehabilitation & Return to Normal Life',
        desc: 'Post-operative dietary recommendations, activity progression and follow-up consultations help you safely return to work, exercise and daily routines.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(
          `<svg viewBox="0 0 24 24" fill="none" stroke="#4DB7B3" stroke-width="2" width="24" height="24">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
           </svg>`
        ),
      },
    ];
  }
 
  ngOnDestroy(): void {
    // Always clean up scroll lock if component destroyed while modal open
    document.body.classList.remove('modal-body-lock');
  }
 
  // ── FAQ data ─────────────────────────────────────────────────
  faqs: FaqItem[] = [
    {
      q: 'What are the common symptoms of a hernia?',
      a: 'Common symptoms include a visible bulge or lump in the abdomen, groin or navel; pain or discomfort when bending, coughing or lifting; a feeling of heaviness; and occasionally nausea. If the bulge becomes hard, painful or cannot be pushed back, seek immediate medical attention.',
    },
    {
      q: 'Is hernia surgery the only treatment option?',
      a: 'Not all hernias require immediate surgery. Small, asymptomatic hernias may be managed with watchful waiting and lifestyle changes. However hernias do not heal on their own and most will eventually need surgical repair. Your surgeon will recommend the right approach.',
    },
    {
      q: 'What is the difference between laparoscopic and open hernia surgery?',
      a: 'Laparoscopic repair uses small keyhole incisions and a camera to place mesh - less pain, minimal scarring and faster recovery. Open repair involves a single larger incision and is preferred for large, recurrent or complex hernias where direct access is needed.',
    },
    {
      q: 'How long does recovery take after hernia surgery?',
      a: 'After laparoscopic surgery most patients resume light activities within 1–2 weeks and return to normal routines in 3–4 weeks. Open repair may require 4–6 weeks. Your surgeon will provide specific guidance on diet, activity and wound care.',
    },
    {
      q: 'Is hernia surgery covered by insurance?',
      a: 'Yes, hernia surgery is generally covered under most health insurance plans in India including government schemes. At Rashtrotthana Hospital we offer cashless insurance facility and dedicated support for pre-authorisation, documentation and claim processing.',
    },
    {
      q: 'What is the cost of hernia surgery in Bangalore?',
      a: 'Cost depends on the type of hernia, surgical approach, mesh used and hospital stay. At Rashtrotthana Hospital we offer affordable and transparent pricing with cashless insurance support. Book a consultation to get a detailed estimate.',
    },
  ];

  doctors = [
    {
      image: '../../assets/Dr-Atmaram-D-C.png',
      name: 'Dr. Atmaram D. C',
      experience: "20+",
      alt: 'Dr. Atmaram D. C | Best laparoscopic Surgeon in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-atmaram-d-c',
    },
    {
      image: '../../assets/Dr-Nishanth-Lakshmikantha.png',
      name: 'Dr. Nishanth Lakshmikantha',
      experience: "10+",
      alt: 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-nishanth-lakshmikantha',
    },
  ]
}
