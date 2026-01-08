import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var gtag: Function;
@Component({
  selector: 'app-proctology',
  templateUrl: './proctology.component.html',
  styleUrl: './proctology.component.css'
})
export class ProctologyComponent {
  constructor(private titleService: Title,
    private metaService: Meta,
    private router: Router) { }


  ngOnInit() {
    this.titleService.setTitle(
      'Piles Surgery in Bangalore | Laser Piles Treatment'
    );

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        "Get advanced piles surgery in Bangalore at Rashtrotthana Hospital. Laser treatment, minimal pain, faster recovery & trusted surgical care.",
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
    // {
    //   image: '../../assets/doctor-65.png',
    //   name: 'Dr. Vivekanand',
    //   // designation: 'Orthopaedics',
    //   alt: 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital',
    //   slug: '/doctor/dr-vivekanand',
    //   experience: '25+'
    // },

    {
      image: '../../assets/Dr-Atmaram-D-C.png',
      name: 'Dr. Atmaram D. C',
      // designation: 'Orthopaedics',
      alt: 'Dr. Atmaram D. C | Best laparoscopic Surgeon in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-atmaram-d-c',
      experience: '19+'
    },
    {
      image: '../../assets/Dr-Nishanth-Lakshmikantha.png',
      name: 'Dr. Nishanth Lakshmikanth',
      // designation: 'Orthopaedics',
      alt: 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-nishanth-lakshmikantha',
      experience: '9+'
    },
  ];




  formdoctors = ['Dr. Atmaram D. C', 'Dr. Nishanth Lakshmikanth']


  mainServices: any[] = [
    {
      icon: '🔬',
      title: 'Laser Piles Surgery',
      description: `
              <ul>
                <li>A modern, minimally invasive procedure that uses laser energy to treat piles with high precision. It causes minimal bleeding, less pain, and allows quicker recovery compared to conventional surgery.</li>
              </ul>
            `,
      color: '#008080',
    },
    {
      icon: '⚕️',
      title: 'Conventional Piles Surgery',
      description: `
              <ul>
                <li>Recommended in select advanced cases where laser treatment may not be suitable. Planned carefully to ensure safety and effective long-term relief.</li>
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
      title: '1. Advanced Facilities & Experienced Surgical Team',
      icon: '🏥',
      color: '#008080',
      description:
        'At Rashtrotthana Hospital, piles surgeries are performed using modern laser and minimally invasive techniques by experienced surgeons, ensuring safe and effective outcomes.',
      features: [
        {
          icon: '🔬',
          title: 'Modern Operation Theatres',
          description:
            'Equipped with advanced laser systems and strict infection control standards.',
        },
        {
          icon: '👨‍⚕️',
          title: 'Highly Skilled Surgeons',
          description:
            'Specialists trained in laser piles surgery and complex anorectal procedures.',
        },
        {
          icon: '🦵',
          title: 'Complete Surgical Care',
          description:
            'From diagnosis and treatment to recovery guidance and follow-up care.',
        },
        {
          icon: '⚡',
          title: 'Faster Recovery, Less Discomfort',
          description:
            'Advanced techniques help reduce pain, bleeding, and recovery time.',
        },
      ],
      highlightText:
        'Every piles procedure is carefully planned and performed using proven techniques focused on patient safety and comfort.',
    },
    {
      id: 'insurance-facility',
      number: '02',
      title: '2. Health Insurance Facility',
      icon: '💳',
      color: '#008080',
      description:
        'We make piles surgery affordable and worry-free with structured insurance support.',
      features: [
        {
          icon: '🏦',
          title: 'Cashless Insurance Available',
          description: 'Accepted by most major health insurance providers.',
        },
        {
          icon: '🤝',
          title: 'Claim Assistance',
          description:
            'Our team assists with approvals, documentation, and coordination.',
        },
        {
          icon: '📜',
          title: 'Transparent Billing',
          description:
            'Clear pricing with no hidden charges.',
        },
        {
          icon: '✨',
          title: 'Smooth Process',
          description:
            'Dedicated insurance support to avoid delays and confusion.',
        },
      ],
      highlightText:
        'Clear billing practices and insurance guidance help patients focus on healing with confidence.',
    },
    {
      id: 'travel-accommodation',
      number: '03',
      title: '3. Travel & Stay Convenience',
      icon: '📍',
      color: '#00a0a0',
      description:
        'Located in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is easy to access and well supported with nearby essential facilities.',
      features: [
        {
          icon: '🚇',
          title: 'Easily Accessible',
          description: 'Close to major roads, metro routes, railway stations, and bus connectivity.',
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
        'A well-connected location and coordinated care environment make piles treatment comfortable for patients and families.',
    },
  ];

  faqs = [
    {
      ques: "When is piles surgery recommended?",
      ans: "Piles surgery is advised when symptoms such as pain, bleeding, or swelling do not improve with medication or lifestyle changes."
    },
    {
      ques: "Is laser piles surgery safe?",
      ans: "Yes. Laser piles surgery is a safe and commonly performed procedure when done by experienced surgeons."
    },
    {
      ques: "How long does recovery take after piles surgery?",
      ans: "Most patients return to normal activities within a few days, depending on the treatment method used."
    },
    {
      ques: "Will piles come back after surgery?",
      ans: "Proper treatment and lifestyle guidance significantly reduce the chances of recurrence."
    },
    {
      ques: "Is piles surgery painful?",
      ans: "Modern laser techniques minimize pain and discomfort compared to traditional methods."
    },
  ]
}
