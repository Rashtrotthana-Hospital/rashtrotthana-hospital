import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';

declare var gtag: Function;
@Component({
  selector: 'app-acl-reconstruction',
  templateUrl: './acl-reconstruction.component.html',
  styleUrl: './acl-reconstruction.component.css',
})
export class AclReconstructionComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
  ) {}

  ngOnInit() {
    this.titleService.setTitle(
      'ACL Reconstruction Surgery in Bangalore | Expert ACL Care',
    );

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced ACL reconstruction surgery in Bangalore at Rashtrotthana Hospital with expert orthopaedic surgeons, arthroscopic treatment, and personalized knee ligament care.',
    });

    // Optionally set other meta tags
    this.metaService.updateTag({
      name: 'keywords',
      content: 'ACL reconstruction in Bangalore, Ligament tear surgery in Bangalore, Sport Injury Treatment in Bangalore'
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
      experience: '16+',
    },

    {
      image: '../../assets/Dr-Sujayendra-D-M.png',
      name: 'Dr. Sujayendra D. M',
      // designation: 'Orthopaedics',
      alt: '',
      slug: '/doctor/dr-sujayendra-d-m',
      experience: '13+',
    },
    {
      image: '../../assets/dr-sandeep-k-m-doc-page.png',
      name: 'Dr. Sandeep K. M',
      // designation: 'Orthopaedics',
      alt: '',
      slug: '/doctor/dr-sandeep-k-m',
      experience: '13+',
    },
    {
      image: '../../assets/Dr-Nikhil-Hegde.png',
      name: 'Dr. Nikhil Hegde',
      // designation: 'Orthopaedics',
      alt: '',
      slug: '/doctor/dr-nikhil-hegde',
      experience: '8+',
    },
  ];

  formdoctors = [
    'Dr. Mahesh Kulkarni',
    'Dr. Sujayendra D. M',
    'Dr. Nikhil Hegde',
    'Dr. Sandeep K. M',
  ];

  mainServices: any[] = [
    {
      icon: '🔬',
      title: 'Arthroscopic ACL Reconstruction',
      description: `
                <ul>
                  <li>A minimally invasive procedure where a damaged ACL is reconstructed using a graft through small keyhole incisions. This technique offers less pain, minimal scarring and faster recovery.</li>
                </ul>
              `,
      color: '#008080',
    },
    {
      icon: '⚕️',
      title: 'ACL Reconstruction with Hamstring / Patellar Graft',
      description: `
                <ul>
                  <li>The choice of graft depends on patient activity level, age and knee condition. Our surgeons recommend the most suitable option after careful evaluation.</li>
                </ul>
              `,
      color: '#00a0a0',
    },
  ];

  @ViewChild('formSection') formSection!: ElementRef;

  // scrollToForm() {
  //   if (this.formSection) {
  //     this.formSection.nativeElement.scrollIntoView({
  //       // behavior: 'smooth',
  //       block: 'start',
  //       inline: 'nearest',
  //     });
  //   }
  // }

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
            'Specialists trained in sports injuries, ligament reconstruction and knee preservation.',
        },
        {
          icon: '🦵',
          title: 'Complete Orthopedic Care',
          description:
            'From diagnosis and imaging to surgery, physiotherapy and follow-up care.',
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
            'Dedicated support for approvals, documentation and coordination.',
        },
        {
          icon: '📜',
          title: 'Transparent Billing',
          description: 'Clear pricing with no hidden costs.',
        },
        {
          icon: '✨',
          title: 'Smooth Process',
          description: 'Well-managed insurance handling to avoid delays.',
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
          description:
            'Close to major roads, metro connectivity, railway stations and bus routes.',
        },
        {
          icon: '🏨',
          title: 'Nearby Stay Options',
          description: 'Comfortable accommodation for patients and attendants.',
        },
        {
          icon: '🏪',
          title: 'Essential Facilities Around',
          description:
            'Pharmacies, food outlets and transport services close by.',
        },
        {
          icon: '👥',
          title: 'Supportive Environment',
          description:
            'Our staff ensures smooth admissions, procedures and follow-up visits.',
        },
      ],
      highlightText:
        'A well-connected location and supportive care environment make orthopedic treatment and recovery convenient.',
    },
  ];

  faqs = [
    {
      ques: 'What are the signs of an ACL tear?',
      ans: 'Common signs of an ACL tear include a sudden "popping" sound or sensation in the knee at the time of injury, immediate and severe swelling within a few hours, intense pain, a feeling of knee instability or "giving way," and difficulty bearing weight or straightening the leg. An MRI scan is the most accurate tool to confirm an ACL tear and assess associated ligament or meniscus damage.',
      open: false,
    },
    {
      ques: 'Does every ACL tear require surgery?',
      ans: 'Not always. Partial ACL tears in older, less active patients may be managed with physiotherapy, bracing and activity modification. However, complete ACL tears - especially in athletes, young patients or those with significant knee instability - generally require surgical reconstruction to restore full stability and prevent secondary injuries such as meniscus tears or cartilage damage over time.',
      open: false,
    },
    {
      ques: 'What graft is used in ACL reconstruction surgery?',
      ans: "The most commonly used grafts are the patellar tendon (bone-tendon-bone), hamstring tendon (semitendinosus / gracilis) and quadriceps tendon - all taken from the patient's own body (autograft). Donor tissue (allograft) may be used in certain cases. Your surgeon will recommend the most appropriate graft based on your age, activity level, sport and associated injuries.",
      open: false,
    },
    {
      ques: 'How long does recovery take after ACL reconstruction?',
      ans: 'Most patients can walk with support within a few days and resume light activities in 4-6 weeks. Return to jogging typically occurs around 3-4 months and a full return to competitive sport is generally expected between 6-9 months with a dedicated rehabilitation programme. The timeline varies based on graft type, overall fitness and presence of additional knee injuries.',
      open: false,
    },
    {
      ques: 'Is ACL surgery covered by health insurance in India?',
      ans: 'Yes, ACL reconstruction surgery is generally covered under most health insurance policies in India, including government health schemes. Coverage may vary based on policy terms, the cause of injury (sports vs accident) and hospitalisation requirements. At Rashtrotthana Hospital, we offer cashless insurance facility and dedicated support for pre-authorisation, documentation and claim processing.',
      open: false,
    },
    {
      ques: 'What is the cost of ACL reconstruction surgery in Bangalore?',
      ans: 'The cost of ACL reconstruction surgery in Bangalore depends on factors including the type of graft used, any concurrent procedures (meniscus repair, cartilage treatment), duration of hospital stay and implant selection. At Rashtrotthana Hospital, we offer affordable, transparent pricing with cashless insurance support. Book a free consultation for a detailed treatment plan and personalised cost estimate.',
      open: false,
    },
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
    document.body.classList.add('tkr-modal-body-lock');
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.classList.remove('tkr-modal-body-lock');
  }

  closeModalOnBackdrop(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('tkr-modal-overlay')) {
      this.closeModal();
    }
  }

  // Replace scrollToForm() or keep it alongside:
  scrollToForm(): void {
    this.openModal();
  }
}
