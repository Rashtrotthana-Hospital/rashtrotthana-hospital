import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-urology',
  templateUrl: './urology.component.html',
  styleUrl: './urology.component.css'
})
export class UrologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];

  ngOnInit(): void {
    this.titleService.setTitle("Best Urology Hospital in Bangalore | Kidney Specialist Hospital Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best urology hospital in Bangalore, India with experienced top urologists providing urology treatment.' });

    this.metaService.updateTag({ name: 'keywords', content: 'best urology hospital near me,urology, urinary problems, UTI, kidney stones, urinary incontinence, urine' });
  }

  doctors: any = [
    {
      id: 1,
      name: 'Dr. Nagaraj Rao',
      experience: '26+ Years',
      image: '../../assets/doctor-31.png',
      slug : '/doctor/dr-nagaraj-rao'
    },
    {
      id: 2,
      name: 'Dr. Madhu S. N',
      experience: '14+ years',
      image: 'assets/Dr-Madhu-S-N.png',
      slug : '/doctor/dr-madhu-s-n'
    },
    {
      id: 3,
      name : "Dr. Mahesh M",
      experience: '25+ years',
      image: 'assets/new-doctor-imgs/dr-mahesh-m-doc-page.png',
      slug : '/doctor/dr-mahesh-m'
    }
  ];

  formDoctors = ['Dr. Nagaraj Rao', 'Dr. Madhu S. N']

  faqs = [
    {
      ques : "What is genito-urinary reconstruction surgery?",
      ans : "Genito-urinary reconstruction is a specialized surgical field focused on repairing, rebuilding, or replacing parts of the urinary or reproductive systems that have been damaged by disease, injury, or are congenitally malformed."
    },
    {
      ques : "Who is a candidate for genito-urinary reconstruction?",
      ans : "Patients who may benefit from this surgery include those with congenital abnormalities, men who have suffered trauma to the urinary system, or patients who need their urinary organs reconstructed after cancer surgery. Our specialists in Bangalore can provide a thorough evaluation to determine if you are a suitable candidate."
    },
    {
      ques : "Is genito-urinary reconstruction a major surgery?",
      ans : "The scope of the surgery varies depending on the condition being treated. Our surgeons at Rashtrotthana Hospital are highly skilled in a range of advanced, often minimally invasive, techniques to ensure the best possible outcome with a focus on a safe and comfortable recovery."
    },
    {
      ques : "What types of conditions does this surgery treat?",
      ans : "This surgery can treat a wide range of conditions, including urethral strictures, bladder exstrophy, penile deformities and injuries to the kidneys, bladder, and urethra."
    },
    {
      ques : "How long is the recovery time?",
      ans : "Recovery time is unique to each patient and the specific procedure performed. Our team will provide a personalized recovery plan and care to help you return to your daily activities as quickly and safely as possible. We offer a holistic approach to healing to support your well-being."
    },
    {
      ques : "What kind of technology do you use for diagnosis and treatment?",
      ans : "We use state-of-the-art technology for accurate diagnosis and effective, minimally invasive treatments. For example, our department is equipped for advanced endoscopic and laser treatments for kidney stones, which ensures a faster recovery and less discomfort for our patients."
    },
  ]

  trackPhoneClick() {
    if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-16656770043/-YEMCITg09IZEPvHyIY-',
      'event_callback': () => {
        console.log('Phone call conversion tracked!');
      }
    });
  }
  }


  surgeries:any = [
    {
      id: 'rirs',
      title: 'Laser Kidney Stone Removal Surgery',
      subtitle: 'RIRS with DJ Stenting',
      description: 'Kidney stones can cause sharp back pain and discomfort. Our Laser Kidney Stone Removal (technically called Retrograde Intrarenal Surgery – RIRS) is a scar-free and painless way to clear kidney stones using advanced laser technology.',
      procedure: 'During the procedure, a very thin flexible scope is gently passed through the natural urinary passage to reach the kidney. The stones are broken into fine dust using a laser and removed safely. A small DJ stent is placed temporarily to help the kidney heal and ensure smooth urine flow.',
      benefits: [
        'No external cuts, stitches, or scars',
        'Laser precision – completely safe and effective',
        'Minimal pain, faster recovery, short hospital stay',
        'Ideal even for hard-to-reach stones'
      ],
      highlight: 'This procedure helps you get back to normal life quickly, free from the fear and pain of kidney stones.',
      icon: '🔬',
      slug: '/kidney-stone-surgery-bangalore'
    },
    {
      id: 'ursl',
      title: 'Ureteric Stone Removal Surgery',
      subtitle: 'URSL with DJ Stenting',
      description: 'If a stone is stuck in the ureter (the tube that carries urine from the kidney to the bladder), it can block urine flow and cause severe pain. Our Ureteric Stone Removal Surgery – also known as Ureteroscopic Lithotripsy (URSL) – is a minimally invasive laser procedure that removes the stone gently without any external incision.',
      procedure: 'The doctor uses a tiny scope to locate the stone and then breaks it into small fragments with a laser. To protect the ureter and allow healing, a Double J (DJ) stent is placed temporarily and removed after a short period.',
      benefits: [
        'No cuts or open surgery',
        'Very short recovery time',
        'Performed under expert urologist supervision',
        'Prevents kidney damage from blockage'
      ],
      highlight: 'Our patients often say they feel immediate relief once the stone is cleared and urine flow becomes normal again.',
      icon: '⚡'
    },
    {
      id: 'turp',
      title: 'Prostate Enlargement Treatment',
      subtitle: 'TURP – Transurethral Resection of the Prostate',
      description: 'Difficulty passing urine, frequent night urination, or a weak urine stream are often signs of prostate enlargement in men. Our Prostate Enlargement Treatment, medically known as TURP (Transurethral Resection of the Prostate), is a proven and effective solution that restores easy urine flow without any cuts or external wounds.',
      procedure: 'Using a small instrument inserted through the urinary passage, the surgeon removes only the excess prostate tissue causing the blockage. It\'s a safe, hospital-based procedure trusted by thousands of men for long-term relief.',
      benefits: [
        'No external incision',
        'Minimal discomfort and quick recovery',
        'Restores confidence and normal lifestyle',
        'Significant improvement in urinary flow and comfort'
      ],
      highlight: 'Many of our patients share that the relief is almost immediate — the constant urge to urinate reduces, the urine flow feels normal again, and the anxiety of sleepless nights finally fades away.',
      icon: '🩺'
    }
  ];


  sections: any = [
    {
      id: 'advanced-facilities',
      number: '01',
      title: '1. Advanced Facilities & Experienced Urology Team',
      icon: '🏥',
      color: '#008080',
      description: 'At Rashtrotthana Hospital, every urology procedure is performed in state-of-the-art operation theatres equipped with advanced laser and endoscopic technology for maximum precision and safety.',
      features: [
        {
          icon: '🔬',
          title: 'Specialized Urology Units',
          description: 'Dedicated units for kidney, ureter, and prostate surgeries.'
        },
        {
          icon: '👨‍⚕️',
          title: 'Experienced Urologists',
          description: 'Years of clinical and surgical expertise.'
        },
        {
          icon: '💊',
          title: 'End-to-End Medical Support',
          description: 'From diagnosis, anesthesia, and surgery to guided recovery.'
        },
        {
          icon: '⚡',
          title: 'Faster Healing & Minimal Pain',
          description: 'Modern, minimally invasive methods.'
        }
      ],
      highlightText: 'Your entire journey — from the first consultation to complete recovery — is guided with care, comfort, and clinical excellence.'
    },
    {
      id: 'affordable-packages',
      number: '02',
      title: '2. Transparent & Affordable Packages',
      icon: '💰',
      color: '#008080',
      description: 'We believe quality healthcare should never feel out of reach. At Rashtrotthana Hospital, every patient receives ethical, affordable, and transparent care — without compromising on quality or safety.',
      features: [
        {
          icon: '📋',
          title: 'Comprehensive All-Inclusive Packages',
          description: 'Complete packages for all urology and laser surgeries.'
        },
        {
          icon: '💳',
          title: 'Cashless Insurance Facility',
          description: 'Leading insurance providers for hassle-free experience.'
        },
        {
          icon: '🤝',
          title: 'Dedicated Insurance Assistance Desk',
          description: 'Guides through approvals, claims, and paperwork.'
        },
        {
          icon: '✓',
          title: 'No Hidden Charges',
          description: 'What we promise is exactly what you pay.'
        }
      ],
      highlightText: 'Our patients often appreciate how seamless and supportive our insurance process is — from admission to discharge, everything is handled with clarity and care.'
    },
    {
      id: 'easy-access',
      number: '03',
      title: '3. Easy Access & Patient Convenience',
      icon: '📍',
      color: '#00a0a0',
      description: 'Located in the heart of Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is easily reachable and designed for patient comfort at every step.',
      features: [
        {
          icon: '🚇',
          title: 'Well Connected',
          description: 'By Metro, Bus, and Railway routes.'
        },
        {
          icon: '🏨',
          title: 'Comfortable Accommodation',
          description: 'Options available nearby for families.'
        },
        {
          icon: '🏪',
          title: 'Essential Amenities',
          description: 'Pharmacies, cafés, and transport facilities.'
        },
        {
          icon: '👥',
          title: 'Dedicated Support Staff',
          description: 'Assist throughout your hospital journey.'
        }
      ],
      highlightText: 'We make sure your experience — from admission to discharge — remains smooth, convenient, and worry-free.'
    }
  ];
  
  @ViewChild('formSection') formSection!: ElementRef;

  scrollToForm() {
    if (this.formSection) {
      this.formSection.nativeElement.scrollIntoView({ 
        // behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  mainServices: any[] = [
    {
      icon: '🔬',
      title: 'Endoscopic and Laser Treatment',
      description: 'Advanced minimally invasive treatments for kidney stones. Quick recovery with minimal discomfort.',
      color: '#008080'
    },
    {
      icon: '⚕️',
      title: 'Laparoscopic Surgery',
      description: 'Modern surgical technique using small incisions for kidney disease and bladder conditions.',
      color: '#00a0a0'
    }
  ];

  specialtyServices: any[] = [
    {
      icon: '👨‍⚕️',
      title: 'Andrology and Male Infertility Services',
      description: 'Dedicated service for men\'s health concerns with expert diagnosis and treatment for male infertility.'
    },
    {
      icon: '👩‍⚕️',
      title: 'Female Urology',
      description: 'Specialized care for women\'s urological issues including bladder irritation and incontinence.'
    },
    {
      icon: '🎗️',
      title: 'Uro-Oncology',
      description: 'Comprehensive treatment of cancers affecting the urinary system with personalized care.'
    },
    {
      icon: '💎',
      title: 'Stone Disease',
      description: 'Latest technology and techniques to manage and treat kidney stones effectively.'
    },
    {
      icon: '🔧',
      title: 'Genito-Urinary Reconstruction',
      description: 'Expert reconstructive surgery to restore function and confidence for urinary organ issues.'
    },
    {
      icon: '👶',
      title: 'Paediatric Urology',
      description: 'Specialized compassionate care for children with unique urological needs.'
    }
  ];

}
