import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';

declare var gtag: Function;
@Component({
  selector: 'app-acl-reconstruction',
  templateUrl: './acl-reconstruction.component.html',
  styleUrl: './acl-reconstruction.component.css'
})
export class AclReconstructionComponent {

  constructor(private titleService: Title,
    private metaService: Meta,
    private router: Router) { }


  ngOnInit() {
    this.titleService.setTitle(
      'ACL Reconstruction Surgery in Bangalore | Knee Ligament Care'
    );

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        "Rashtrotthana Hospital offers ACL reconstruction surgery in Bangalore using advanced arthroscopic techniques for safe recovery & knee stability.",
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
      image: '../../assets/Dr-Mahesh-Kulkarni.png',
      name: 'Dr. Mahesh Kulkarni',
      // designation: 'Orthopaedics',
      alt: '',
      slug: '/doctor/dr-mahesh-kulkarni',
      experience: '15+'
    },

    {
      image: '../../assets/Dr-Sujayendra-D-M.png',
      name: 'Dr. Sujayendra D. M',
      // designation: 'Orthopaedics',
      alt: '',
      slug: '/doctor/dr-sujayendra-d-m',
      experience: '11+'
    },
    {
      image: '../../assets/Dr-Nikhil-Hegde.png',
      name: 'Dr. Nikhil Hegde',
      // designation: 'Orthopaedics',
      alt: '',
      slug: '/doctor/dr-nikhil-hegde',
      experience: '6+'
    },
    {
      image: '../../assets/dr-sandeep-k-m-doc-page.png',
      name: 'Dr. Sandeep K. M',
      // designation: 'Orthopaedics',
      alt: '',
      slug: '/doctor/dr-sandeep-k-m',
      experience: '11+'
    },
  ];






  formdoctors = ['Dr. Mahesh Kulkarni', 'Dr. Sujayendra D. M', 'Dr. Nikhil Hegde', 'Dr. Sandeep K. M']


  mainServices: any[] = [
    {
      icon: '🔬',
      title: 'Arthroscopic ACL Reconstruction',
      description: `
                <ul>
                  <li>A minimally invasive procedure where a damaged ACL is reconstructed using a graft through small keyhole incisions. This technique offers less pain, minimal scarring, and faster recovery.</li>
                </ul>
              `,
      color: '#008080',
    },
    {
      icon: '⚕️',
      title: 'ACL Reconstruction with Hamstring / Patellar Graft',
      description: `
                <ul>
                  <li>The choice of graft depends on patient activity level, age, and knee condition. Our surgeons recommend the most suitable option after careful evaluation.</li>
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
      title: '1. Advanced Facilities & Experienced Orthopedic Team',
      icon: '🏥',
      color: '#008080',
      description:
        'At Rashtrotthana Hospital, ACL reconstruction surgeries are performed using advanced arthroscopic systems by experienced orthopedic surgeons, ensuring safe and effective outcomes.',
      features: [
        {
          icon: '🔬',
          title: 'Modern Operation Theatres',
          description:
            'Equipped with advanced arthroscopy units and strict sterilization protocols.',
        },
        {
          icon: '👨‍⚕️',
          title: 'Highly Skilled Orthopedic Surgeons',
          description:
            'Specialists trained in sports injuries, ligament reconstruction, and knee preservation.',
        },
        {
          icon: '🦵',
          title: 'Complete Orthopedic Care',
          description:
            'From diagnosis and imaging to surgery, physiotherapy, and follow-up care.',
        },
        {
          icon: '⚡',
          title: 'Faster Recovery, Better Stability',
          description:
            'Minimally invasive techniques support quicker healing and improved knee strength.',
        },
      ],
      highlightText:
        'Every ACL reconstruction is planned with precision to restore knee stability safely and effectively.',
    },
    {
      id: 'insurance-facility',
      number: '02',
      title: '2. Health Insurance Facility',
      icon: '💳',
      color: '#008080',
      description:
        'We make ACL reconstruction surgery affordable and stress-free with structured insurance support.',
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
            'Dedicated support for approvals, documentation, and coordination.',
        },
        {
          icon: '📜',
          title: 'Transparent Billing',
          description:
            'Clear pricing with no hidden costs.',
        },
        {
          icon: '✨',
          title: 'Smooth Process',
          description:
            'Well-managed insurance handling to avoid delays.',
        },
      ],
      highlightText:
        'Clear insurance guidance and ethical billing help patients focus on recovery with confidence.',
    },
    {
      id: 'travel-accommodation',
      number: '03',
      title: '3. Travel & Stay Convenience',
      icon: '📍',
      color: '#00a0a0',
      description:
        'Located in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is easily accessible and supported with nearby essential facilities.',
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
            'Comfortable accommodation for patients and attendants.',
        },
        {
          icon: '🏪',
          title: 'Essential Facilities Around',
          description:
            'Pharmacies, food outlets, and transport services close by.',
        },
        {
          icon: '👥',
          title: 'Supportive Environment',
          description:
            'Our staff ensures smooth admissions, procedures, and follow-up visits.',
        },
      ],
      highlightText:
        'A well-connected location and supportive care environment make orthopedic treatment and recovery convenient.',
    },
  ];

  faqs = [
    {
      ques: "When is ACL reconstruction surgery needed?",
      ans: "ACL reconstruction is recommended when knee instability persists and affects daily activities or sports despite conservative treatment."
    },
    {
      ques: "Is ACL reconstruction surgery safe?",
      ans: "Yes. Arthroscopic ACL reconstruction is a safe and commonly performed procedure when done by experienced orthopedic surgeons."
    },
    {
      ques: "How long does recovery take after ACL reconstruction?",
      ans: "Initial recovery takes a few weeks, while complete rehabilitation and return to sports may take several months."
    },
    {
      ques: "Will I need physiotherapy after ACL surgery?",
      ans: "Yes. Physiotherapy is essential for restoring strength, flexibility, and knee stability."
    },
    {
      ques: "Can I return to sports after ACL reconstruction?",
      ans: "Most patients can return to sports with proper rehabilitation and medical guidance."
    },
  ]
}
