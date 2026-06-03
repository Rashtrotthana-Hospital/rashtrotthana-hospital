import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Meta, Title, SafeHtml, DomSanitizer  } from '@angular/platform-browser';
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
  selector: 'app-gallstone-removal-surgery',
  templateUrl: './gallstone-removal-surgery.component.html',
  styleUrl: './gallstone-removal-surgery.component.css'
})
export class GallstoneRemovalSurgeryComponent {
  // constructor(private titleService: Title,
  //   private metaService: Meta,
  //   private router: Router) { }


  // ngOnInit() {
  //   this.titleService.setTitle(
  //     'Gall Stone Removal Surgery in Bangalore | Rashtrotthana Hospitall'
  //   );

  //   // Set the meta description
  //   this.metaService.updateTag({
  //     name: 'description',
  //     content:
  //       "Get safe and advanced gall stone removal surgery in Bangalore at Rashtrotthana Hospital. Experienced surgeons, minimally invasive care & faster recovery.",
  //   });

  //   // Optionally set other meta tags
  //   this.metaService.updateTag({
  //     name: 'keywords',
  //     content:
  //       'knee replacement surgery, orthopedic care, best knee surgery Bangalore',
  //   });
  // }
  
   // ── FAQ accordion state ──────────────────────────────────
  isModalOpen = false;
 
  openModal(): void {
    this.isModalOpen = true;
    document.body.classList.add('modal-body-lock');
  }
 
  closeModal(): void {
    this.isModalOpen = false;
    document.body.classList.remove('modal-body-lock');
  }
 
  closeModalOnBackdrop(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('gs-modal-overlay')) {
      this.closeModal();
    }
  }
 
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }
 
  // ── FAQ accordion ────────────────────────────────────────
  openFaq: number | null = null;
 
  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }
 
  // ── Analytics ────────────────────────────────────────────
  trackPhoneClick(): void {
    try {
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'Gallstone Phone CTA'
      });
    } catch (e) {}
  }
 
  // ── Why cards ────────────────────────────────────────────
  whyCards: WhyCard[] = [
    {
      num: '01',
      icon: 'assets/sheild-icon-1.png',
      iconAlt: 'Advanced Laparoscopic Surgery',
      title: 'Expert Laparoscopic Surgeons & Advanced OT Facilities',
      sub: 'Minimally invasive laparoscopic expertise backed by advanced OT technology - safe, precise and  patient-centred gallstone care.',
      points: [
        'Experienced general & laparoscopic surgeons',
        'Advanced OTs with HD laparoscopic imaging',
        'Over 95% of cases done laparoscopically',
        'Minimally invasive - minimal scarring & faster healing',
      ],
    },
    {
      num: '02',
      icon: 'assets/insurance-icon-1.png',
      iconAlt: 'Cashless Insurance Support',
      title: 'Cashless Insurance & Transparent Billing',
      sub: 'We make gallstone surgery in Bangalore affordable and stress-free with seamless insurance coordination and honest pricing.',
      points: [
        'Cashless insurance facility available',
        'Pre-authorisation and claim processing support',
        'Transparent treatment and billing - no hidden costs',
        'Dedicated patient assistance from admission to discharge',
      ],
    },
    {
      num: '03',
      icon: 'assets/location-icon-1.png',
      iconAlt: 'Convenient Location Bangalore',
      title: 'Convenient Location & Complete Post-Op Care',
      sub: 'Located in Rajarajeshwari Nagar, Bangalore - easily accessible, with in-house support for smooth post-surgery recovery.',
      points: [
        'Easy access via Metro, bus and  major roads',
        'In-house dietary and post-op guidance',
        'Caring, patient-friendly environment',
        'Follow-up consultations included in care plan',
      ],
    },
  ];
 
  // ── Journey steps ────────────────────────────────────────
  journeySteps: JourneyStep[] = [];
 
  constructor(
    private sanitizer: DomSanitizer,
    private titleService: Title,
    private metaService: Meta
  ) {}
 
  ngOnInit(): void {
    this.titleService.setTitle(
      'Gallstone Removal Surgery in Bangalore | Expert Gallbladder Care'
    );
    this.metaService.updateTag({
      name: 'description',
      content: 'Get advanced gallstone removal surgery in Bangalore at Rashtrotthana Hospital with expert laparoscopic surgeons and faster recovery.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'gallstone removal surgery Bangalore, laparoscopic cholecystectomy Bangalore, gallbladder surgery Bangalore, gallstone treatment Bangalore, cholecystectomy cost Bangalore, gallstone surgery hospital Bangalore'
    });
 
    this.journeySteps = [
      {
        num: '01',
        title: 'Consultation & Gallstone Evaluation',
        desc: 'Our general surgeons review your symptoms, ultrasound or CT scan reports and  blood investigations to confirm gallstone type, severity and  any associated complications - then recommend the most appropriate surgical plan.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(
          `<svg viewBox="0 0 24 24" fill="none" stroke="#4DB7B3" stroke-width="2" width="24" height="24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
           </svg>`
        ),
      },
      {
        num: '02',
        title: 'Pre-Surgery Preparation',
        desc: 'Pre-operative blood tests, anaesthesia fitness assessment, fasting instructions and  insurance pre-authorisation are completed efficiently - usually within 24–48 hours - so surgery can proceed without delay.',
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
        title: 'Laparoscopic Gallstone Surgery',
        desc: 'Laparoscopic cholecystectomy is performed under general anaesthesia through 3–4 tiny keyhole incisions. The gallbladder is carefully removed in under 45 minutes - with HD laparoscopic precision, minimal blood loss and  no large scars.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(
          `<svg viewBox="0 0 24 24" fill="none" stroke="#4DB7B3" stroke-width="2" width="24" height="24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
           </svg>`
        ),
      },
      {
        num: '04',
        title: 'Recovery & Return to Normal Life',
        desc: 'Most patients walk within hours of surgery and are discharged in 1–2 days. Dietary guidance, wound care instructions and  a follow-up consultation ensure a safe, comfortable recovery and return to normal activity within 5–7 days.',
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
    document.body.classList.remove('modal-body-lock');
  }
 
  // ── FAQ data ─────────────────────────────────────────────
  faqs: FaqItem[] = [
    {
      q: 'What are the symptoms of gallstones?',
      a: 'The most common symptom is biliary colic - a sudden, severe pain in the upper right or centre of the abdomen, often triggered after eating fatty food. Other symptoms include nausea, vomiting, fever, jaundice (yellowing of skin or eyes), dark urine, pale stools and  persistent bloating. If you experience sudden severe abdominal pain with fever or jaundice, seek medical attention immediately as these can indicate serious complications.',
    },
    {
      q: 'Do all gallstones need surgery?',
      a: 'Not all gallstones require immediate surgery. Silent gallstones (those without symptoms) may be monitored. However, symptomatic gallstones - especially those causing recurrent biliary colic, acute cholecystitis or bile duct obstruction - generally require surgical removal. Gallstones do not dissolve on their own and  delaying surgery can lead to serious complications like pancreatitis or gallbladder rupture.',
    },
    {
      q: 'What is laparoscopic cholecystectomy and how is it done?',
      a: 'Laparoscopic cholecystectomy is a minimally invasive surgical procedure to remove the gallbladder using a laparoscope (a thin camera) and surgical instruments inserted through 3–4 small keyhole incisions. It is performed under general anaesthesia and takes approximately 30–45 minutes. It is the gold standard for gallstone removal - safer, less painful and  with faster recovery than open surgery.',
    },
    {
      q: 'How long does recovery take after gallstone surgery?',
      a: 'After laparoscopic gallstone surgery, most patients walk within a few hours and are discharged in 1–2 days. Light activities can typically resume in 3–5 days and  patients return to desk work and daily routines within 5–7 days. Strenuous physical activity should be avoided for 2–3 weeks. Recovery after open cholecystectomy takes longer - typically 4–6 weeks.',
    },
    {
      q: 'Can I live a normal life after gallbladder removal?',
      a: 'Yes. The vast majority of people live completely normal lives after gallbladder removal. The liver continues to produce bile, which flows directly into the small intestine. Some patients may experience mild digestive changes initially (especially with very fatty meals), but these typically resolve within a few weeks as the body adjusts. Long-term dietary restrictions are rarely required.',
    },
    {
      q: 'Is gallstone surgery covered by health insurance in India?',
      a: 'Yes, gallstone removal surgery (cholecystectomy) is generally covered under most health insurance policies in India, including Mediclaim and government health schemes like Ayushman Bharat. Coverage depends on your specific policy terms, hospitalisation requirements and  cause of the condition. At Rashtrotthana Hospital, we offer cashless insurance facility with full support for pre-authorisation, documentation and  claim processing.',
    },
    {
      q: 'What is the cost of gallstone surgery in Bangalore?',
      a: 'The cost of gallstone removal surgery in Bangalore depends on the surgical approach (laparoscopic vs open), complexity of the case, any concurrent procedures like CBD exploration, implants used and  duration of hospital stay. At Rashtrotthana Hospital, we offer affordable, transparent pricing with cashless insurance support. Book a consultation to receive a personalised cost estimate based on your specific condition and reports.',
    },
    {
      q: 'What happens if gallstones are left untreated?',
      a: 'Untreated symptomatic gallstones can lead to serious and potentially life-threatening complications, including: acute cholecystitis (gallbladder inflammation), cholangitis (bile duct infection), gallstone pancreatitis, bile duct obstruction causing jaundice and  in rare cases, gallbladder perforation or cancer. If you have been diagnosed with gallstones and are experiencing symptoms, early surgical consultation is strongly recommended.',
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
