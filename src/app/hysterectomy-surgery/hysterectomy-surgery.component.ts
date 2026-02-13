import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var gtag: Function;

@Component({
  selector: 'app-hysterectomy-surgery',
  templateUrl: './hysterectomy-surgery.component.html',
  styleUrl: './hysterectomy-surgery.component.css'
})
export class HysterectomySurgeryComponent {


  constructor(private titleService: Title,
    private metaService: Meta,
    private router: Router) { }


  ngOnInit() {
    this.titleService.setTitle(
      'Hysterectomy Surgery in Bangalore | Trusted Women’s Carel'
    );

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        "Rashtrotthana Hospital provides safe hysterectomy surgery in Bangalore with experienced gynecologists, modern techniques & complete post-op care.",
    });

    // Optionally set other meta tags
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'knee replacement surgery, orthopedic care, best knee surgery Bangalore',
    });
  }
  contactus() {
    this.router.navigate(['/contact-us-bangalore']);
  }

  doctors = [

    {
      image: '../../assets/Dr-Latha-Venkataram.png',
      name: 'Dr. Latha Venkataram',
      // designation: 'Orthopaedics',
      alt: 'Dr. Latha Venkataram | Top Obstetrics & Gynaecologist in banaglore | Rashtrotthana Hospital',
      slug: '/doctor/dr-latha-venkataram',
      experience: '35+'
    },
    {
      image: '../../assets/Dr-Prakruthi.png',
      name: 'Dr. Prakruthi',
      // designation: 'Orthopaedics',
      alt: 'Dr. Prakruthi | Best Gynaec Doctor in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-prakruthi',
      experience: '19+'
    },
    {
      image: '../../assets/Dr-Neelam-Saraswat.png',
      name: 'Dr. Neelam',
      // designation: 'Orthopaedics',
      alt: 'Dr. Neelam Saraswat | Best Gynaecology Consultant in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-neelam-saraswat',
      experience: '12+'
    },
    {
      image: '../../assets/Dr-Vinita-Udupa.png',
      name: 'Dr. Vinutha Udupa',
      // designation: 'Orthopaedics',
      alt: 'Dr. Vinita Udupa | Best OBG in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-vinita-udupa',
      experience: '10+'
    },
    {
      image: '../../assets/Dr-Ashwitha-Gundmi.png',
      name: 'Dr. Ashwitha Gundmi',
      // designation: 'Orthopaedics',
      alt: 'Dr. Ashwitha Gundmi | Best Obstetrics & Gynaecologist in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-ashwitha-gundmi',
      experience: '9+'
    },

  ];



  formdoctors = ['Dr. Vivekanand', 'Dr. Atmaram D. C', 'Dr. Nishanth Lakshmikanth']


  mainServices: any[] = [
    {
      icon: '🔬',
      title: 'Laparoscopic Hysterectomy',
      description: `
            <ul>
              <li>A minimally invasive procedure performed through small incisions. It causes less pain, minimal scarring, and allows faster recovery compared to traditional surgery.</li>
            </ul>
          `,
      color: '#008080',
    },
    {
      icon: '⚕️',
      title: 'Abdominal (Open) Hysterectomy',
      description: `
            <ul>
              <li>Recommended in select cases involving large fibroids or complex uterine conditions where laparoscopic surgery may not be suitable.</li>
            </ul>
          `,
      color: '#00a0a0',
    },
    {
      icon: '⚕️',
      title: 'Vaginal Hysterectomy',
      description: `
            <ul>
              <li>A scar-free procedure performed through the vaginal route, suitable for specific conditions and patient profiles.</li>
            </ul>
          `,
      color: '#00a0a0',
    },
  ];

  @ViewChild('formSection') formSection!: ElementRef;

  scrollToForm() {
    if (this.formSection) {
      this.formSection.nativeElement.scrollIntoView({
        // behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
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

  sections: any = [
    {
      id: 'advanced-facilities',
      number: '01',
      title: '1. Advanced Facilities & Experienced Gynecology Team',
      icon: '🏥',
      color: '#008080',
      description:
        'At Rashtrotthana Hospital, hysterectomy procedures are performed using modern surgical techniques by experienced gynecologists, ensuring safe and effective outcomes.',
      features: [
        {
          icon: '🔬',
          title: 'Modern Operation Theatres',
          description:
            'Equipped with advanced laparoscopic systems and strict safety protocols.',
        },
        {
          icon: '👨‍⚕️',
          title: 'Highly Skilled Gynecologists',
          description:
            'Specialists trained in laparoscopic, abdominal, and vaginal hysterectomy procedures.',
        },
        {
          icon: '🦵',
          title: 'Complete Women’s Healthcare',
          description:
            'From diagnosis and surgery to post-operative care and follow-up support.',
        },
        {
          icon: '⚡',
          title: 'Faster Recovery, Less Discomfort',
          description:
            'Minimally invasive approaches help reduce pain, scarring, and recovery time.',
        },
      ],
      highlightText:
        'Every hysterectomy procedure is carefully planned and performed with precision, experience, and patient safety as the highest priority.',
    },
    {
      id: 'insurance-facility',
      number: '02',
      title: '2. Health Insurance Facility',
      icon: '💳',
      color: '#008080',
      description:
        'We make hysterectomy surgery affordable and stress-free through clear insurance support and transparent processes.',
      features: [
        {
          icon: '🏦',
          title: 'Cashless Insurance Available',
          description: ' Accepted by most major health insurance providers.',
        },
        {
          icon: '🤝',
          title: 'Claim Assistance',
          description:
            'Our team assists with approvals, paperwork, and coordination.',
        },
        {
          icon: '📜',
          title: 'Transparent Billing',
          description:
            'Clear cost communication with no hidden charges.',
        },
        {
          icon: '✨',
          title: 'Smooth Process',
          description:
            'Dedicated insurance support to avoid unnecessary delays.',
        },
      ],
      highlightText:
        'Ethical billing and clear insurance guidance help patients focus on recovery with confidence.',
    },
    {
      id: 'travel-accommodation',
      number: '03',
      title: '3. Travel & Stay Convenience',
      icon: '📍',
      color: '#00a0a0',
      description:
        'Located in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is easily accessible and well supported with nearby essential facilities.',
      features: [
        {
          icon: '🚇',
          title: 'Easily Accessible',
          description: 'Close to major roads, metro connectivity, railway stations, and bus routes.',
        },
        {
          icon: '🏨',
          title: 'Nearby Stay Options',
          description:
            'Comfortable accommodation available for patients and attendants.',
        },
        {
          icon: '🏪',
          title: 'Essential Facilities Around',
          description:
            'Pharmacies, food outlets, and transport services located nearby.',
        },
        {
          icon: '👥',
          title: 'Supportive Environment',
          description:
            'Our staff ensures smooth admissions, procedures, and follow-ups.',
        },
      ],
      highlightText:
        'A calm, well-connected location and supportive care environment ensure comfort throughout treatment and recovery.',
    },
  ];

  faqs = [
    {
      ques: "When is hysterectomy surgery recommended?",
      ans: "Hysterectomy is advised when conditions such as fibroids, heavy bleeding, chronic pelvic pain, or uterine disorders do not respond to other treatments."
    },
    {
      ques: "Is hysterectomy surgery safe?",
      ans: "Yes. Hysterectomy is a commonly performed and safe procedure when done by experienced gynecologists."
    },
    {
      ques: "How long does recovery take after hysterectomy?",
      ans: "Recovery time depends on the type of surgery, but most patients resume normal activities within a few weeks."
    },
    {
      ques: "Will hysterectomy affect hormonal balance?",
      ans: "Hormonal changes depend on whether the ovaries are removed. Your doctor will explain this clearly before surgery."
    },
    {
      ques: "Will there be scars after hysterectomy?",
      ans: "Minimally invasive procedures result in very small or no visible scars."
    },
  ]
}

