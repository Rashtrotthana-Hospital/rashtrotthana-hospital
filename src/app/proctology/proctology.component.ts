import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  selector: 'app-proctology',
  templateUrl: './proctology.component.html',
  styleUrl: './proctology.component.css'
})
export class ProctologyComponent {
  // constructor(private titleService: Title,
  //   private metaService: Meta,
  //   private router: Router) { }


  // ngOnInit() {
  //   this.titleService.setTitle(
  //     'Piles Surgery in Bangalore | Laser Piles Treatment'
  //   );

  //   // Set the meta description
  //   this.metaService.updateTag({
  //     name: 'description',
  //     content:
  //       "Get advanced piles surgery in Bangalore at Rashtrotthana Hospital. Laser treatment, minimal pain, faster recovery & trusted surgical care.",
  //   });

  //   // Optionally set other meta tags
  //   this.metaService.updateTag({
  //     name: 'keywords',
  //     content:
  //       'knee replacement surgery orthopedic care, best knee surgery Bangalore',
  //   });
  // }
  // ── Modal ────────────────────────────────────────────────
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
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
 
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen) this.closeModal();
  }
 
  // ── FAQ ──────────────────────────────────────────────────
  openFaq: number | null = null;
 
  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }
 
  // ── Analytics ────────────────────────────────────────────
  trackPhoneClick(): void {
    try {
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'Piles Phone CTA'
      });
    } catch (e) {}
  }
 
  // ── Why cards ────────────────────────────────────────────
  whyCards: WhyCard[] = [
    {
      num: '01',
      icon: 'assets/sheild-icon-1.png',
      iconAlt: 'Advanced Piles Surgery',
      title: 'Laser & Minimally Invasive Piles Surgery Experts',
      sub: 'Advanced laser and stapler techniques for piles - precise, virtually painless and performed by experienced colorectal surgeons.',
      points: [
        'Experienced general & colorectal surgeons',
        'Laser haemorrhoidectomy - no cuts, no stitches',
        'Day-care procedures - go home the same day',
        'Minimal post-operative pain and faster healing',
      ],
    },
    {
      num: '02',
      icon: 'assets/insurance-icon-1.png',
      iconAlt: 'Cashless Insurance Support',
      title: 'Cashless Insurance & Transparent Billing',
      sub: 'Affordable piles surgery in Bangalore with seamless insurance coordination and honest, upfront pricing.',
      points: [
        'Cashless insurance facility available',
        'Pre-authorisation and claim processing support',
        'Transparent treatment and billing - no hidden costs',
        'Dedicated patient assistance throughout care',
      ],
    },
    {
      num: '03',
      icon: 'assets/location-icon-1.png',
      iconAlt: 'Convenient Location Bangalore',
      title: 'Convenient Location & Complete Post-Op Care',
      sub: 'Located in Rajarajeshwari Nagar, Bangalore - easily accessible, with dietary and post-operative guidance for smooth recovery.',
      points: [
        'Easy access via Metro, bus and major roads',
        'Dietary advice and wound care instructions',
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
      'Piles Surgery in Bangalore | Laser Piles Treatment'
    );
    this.metaService.updateTag({
      name: 'description',
      content:     'Get advanced piles surgery in Bangalore at Rashtrotthana Hospital with laser treatment, expert surgeons, and faster recovery.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'piles surgery Bangalore, laser piles treatment Bangalore, haemorrhoid surgery Bangalore, piles doctor Bangalore, piles treatment Bangalore',
    })
 
    this.journeySteps = [
      {
        num: '01',
        title: 'Consultation & Piles Evaluation',
        desc: 'Our surgeons conduct a clinical examination and review your symptoms to confirm the grade of haemorrhoids - Grade I through IV - and recommend the most appropriate and least invasive treatment approach for your condition.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(
          `<svg viewBox="0 0 24 24" fill="none" stroke="#4DB7B3" stroke-width="2" width="24" height="24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
           </svg>`
        ),
      },
      {
        num: '02',
        title: 'Pre-Procedure Preparation',
        desc: 'Necessary pre-operative tests, anaesthesia assessment and bowel preparation instructions are completed - most piles procedures require only local or spinal anaesthesia, making preparation simple and rapid.',
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
        title: 'Piles Surgery Procedure',
        desc: 'Laser haemorrhoidectomy, stapler MIPH or conventional surgery is performed in under 30 minutes. Our surgeons use precise techniques to remove or ablate haemorrhoidal tissue with minimal bleeding, minimal pain and no large incisions.',
        svgIcon: this.sanitizer.bypassSecurityTrustHtml(
          `<svg viewBox="0 0 24 24" fill="none" stroke="#4DB7B3" stroke-width="2" width="24" height="24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
           </svg>`
        ),
      },
      {
        num: '04',
        title: 'Recovery & Return to Normal Life',
        desc: 'Most patients are discharged on the same day or next morning. Dietary guidelines, sitz bath instructions and follow-up care ensure comfortable healing - with return to desk work in 2–3 days and full recovery in 1–2 weeks.',
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
      q: 'What are the symptoms of piles (haemorrhoids)?',
      a: 'Common symptoms of piles include bright red bleeding during or after bowel movements (blood on toilet paper or in the toilet bowl), pain or discomfort around the anus, itching or irritation in the anal region, swelling or a lump near the anus and a feeling of incomplete bowel emptying. Internal piles are often painless but bleed, while external piles can be painful and inflamed.',
    },
    {
      q: 'What are the grades of piles and when is surgery needed?',
      a: 'Piles are graded from I to IV based on severity. Grade I: small internal haemorrhoids that bleed but do not prolapse. Grade II: prolapse during straining but return on their own. Grade III: prolapse and require manual reduction. Grade IV: permanently prolapsed and cannot be reduced. Surgery is typically recommended for Grade III and IV piles or when conservative treatments (diet, medications, rubber band ligation) fail to provide lasting relief for Grade II.',
    },
    {
      q: 'What is laser piles surgery and is it painful?',
      a: 'Laser haemorrhoidectomy uses a precisely controlled laser beam to shrink, seal and ablate haemorrhoidal tissue. It is performed through natural body openings with no external cuts and no stitches required. The procedure causes minimal post-operative pain compared to conventional surgery - most patients report little to no discomfort and are discharged the same day. It is the most advanced and patient-friendly piles treatment currently available.',
    },
    {
      q: 'What is the difference between laser surgery, stapler surgery and conventional surgery for piles?',
      a: 'Laser haemorrhoidectomy uses a laser to ablate tissue - no cuts, minimal pain, day-care procedure, ideal for Grade II–III. Stapler surgery (MIPH) uses a circular stapler to remove excess tissue and reposition haemorrhoids - suitable for Grade III–IV with less pain than open surgery. Conventional haemorrhoidectomy surgically removes haemorrhoidal tissue with a scalpel - used for large or complex Grade III–IV cases. Your surgeon will recommend the best option based on your grade and anatomy.',
    },
    {
      q: 'How long does recovery take after piles surgery?',
      a: 'Recovery depends on the procedure. After laser surgery, most patients return to light work in 2–3 days and full recovery in about a week. After stapler surgery, recovery takes 1–2 weeks. After conventional haemorrhoidectomy, recovery may take 2–4 weeks. All patients receive dietary advice (high fibre, adequate fluids), sitz bath instructions and wound care guidance to ensure a comfortable recovery.',
    },
    {
      q: 'Can piles come back after surgery?',
      a: 'Recurrence rates after surgical treatment are low - especially after laser and stapler procedures. However, piles can return if the underlying causes are not addressed: chronic constipation, straining during bowel movements, low-fibre diet, prolonged sitting and obesity all increase the risk of recurrence. Post-operative dietary and lifestyle guidance from our team helps minimise this risk significantly.',
    },
    {
      q: 'Is piles surgery covered by health insurance in India?',
      a: 'Yes, piles surgery (haemorrhoidectomy) is generally covered under most health insurance policies in India, including Mediclaim policies and government schemes like Ayushman Bharat. Coverage depends on your policy terms, grade of piles and whether it is classified as a day-care or inpatient procedure. At Rashtrotthana Hospital, we offer cashless insurance facility with complete support for pre-authorisation and claim processing.',
    },
    {
      q: 'What is the cost of piles surgery in Bangalore?',
      a: 'The cost of piles surgery in Bangalore varies depending on the type of procedure (laser, stapler or conventional), grade of haemorrhoids, anaesthesia type and hospital stay required. Laser surgery may have a higher upfront cost but involves lower overall expenses due to shorter hospital stay and faster recovery. At Rashtrotthana Hospital, we offer affordable, transparent pricing with cashless insurance support. Book a consultation for a personalised cost estimate.',
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
