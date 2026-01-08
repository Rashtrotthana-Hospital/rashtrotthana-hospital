import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


declare var gtag: Function;

@Component({
  selector: 'app-gallstone-removal-surgery',
  templateUrl: './gallstone-removal-surgery.component.html',
  styleUrl: './gallstone-removal-surgery.component.css'
})
export class GallstoneRemovalSurgeryComponent {
  constructor(private titleService: Title,
    private metaService: Meta,
    private router: Router) { }


  ngOnInit() {
    this.titleService.setTitle(
      'Gall Stone Removal Surgery in Bangalore | Rashtrotthana Hospitall'
    );

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        "Get safe and advanced gall stone removal surgery in Bangalore at Rashtrotthana Hospital. Experienced surgeons, minimally invasive care & faster recovery.",
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
    //   alt: '',
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
      title: 'Laparoscopic Cholecystectomy',
      description: `
          <ul>
            <li>The most commonly recommended procedure for gallstones. Performed through small incisions, it causes less pain, minimal scarring, and allows faster recovery.</li>
          </ul>
        `,
      color: '#008080',
    },
    {
      icon: '⚕️',
      title: 'Open Gall Bladder Surgery',
      description: `
          <ul>
            <li> Recommended in select complex cases where laparoscopic surgery is not suitable. Provides safe access in advanced gall bladder conditions.</li>
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
        'At Rashtrotthana Hospital, gall stone removal surgeries are performed using modern laparoscopic techniques by experienced general and laparoscopic surgeons, ensuring safe and effective outcomes.',
      features: [
        {
          icon: '🔬',
          title: 'Modern Operation Theatres',
          description:
            'Equipped with advanced laparoscopic systems, high safety standards, and infection-controlled environments.',
        },
        {
          icon: '👨‍⚕️',
          title: 'Highly Skilled Surgeons',
          description:
            'Experienced specialists trained in laparoscopic and open gall bladder surgeries, handling both routine and complex cases.',
        },
        {
          icon: '🦵',
          title: 'Complete Surgical Care',
          description:
            'From diagnosis and surgery to recovery guidance and follow-up support under one roof.',
        },
        {
          icon: '⚡',
          title: 'Faster Recovery, Less Discomfort',
          description:
            'Minimally invasive techniques help reduce pain, scarring, and hospital stay.',
        },
      ],
      highlightText:
        'Every gall stone surgery is planned carefully, performed safely, and supported by experienced hands and modern infrastructure.',
    },
    {
      id: 'insurance-facility',
      number: '02',
      title: '2. Health Insurance Facility',
      icon: '💳',
      color: '#008080',
      description:
        'We make gall stone removal surgery affordable and stress-free with clear insurance support and transparent processes.',
      features: [
        {
          icon: '🏦',
          title: 'Cashless Insurance Available',
          description: 'Accepted by most major health insurance providers for gall bladder surgery.',
        },
        {
          icon: '🤝',
          title: 'Claim Assistance',
          description:
            'Our team supports patients with approvals, documentation, and coordination.',
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
            'Dedicated insurance support to avoid delays and confusion.',
        },
      ],
      highlightText:
        'Ethical billing and clear insurance guidance ensure patients can focus on recovery without financial uncertainty.',
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
          description: 'Close to major roads, metro connectivity, railway stations, and bus routes.',
        },
        {
          icon: '🏨',
          title: 'Nearby Stay Options',
          description:
            'Comfortable hotels and lodges available for patients and attendants.',
        },
        {
          icon: '🏪',
          title: 'Essential Facilities Around',
          description:
            'Pharmacies, food options, and transport services located nearby.',
        },
        {
          icon: '👥',
          title: 'Supportive Environment',
          description:
            'Our staff ensures hospital visits, admissions, and follow-ups are smooth and well-coordinated.',
        },
      ],
      highlightText:
        'A well-connected location and supportive care environment make treatment and follow-up visits comfortable for patients and families.',
    },
  ];

  faqs = [
    {
      ques: "When is gall stone removal surgery needed?",
      ans: " Gall stone surgery is advised when stones cause pain, infection, inflammation, or repeated digestive problems that do not improve with medication."
    },
    {
      ques: "Is gall stone surgery safe?",
      ans: "Yes. Laparoscopic gall stone removal is a safe and commonly performed procedure when done by experienced surgeons."
    },
    {
      ques: "How long does recovery take after gall bladder surgery?",
      ans: "Most patients return to normal activities within 7–10 days after laparoscopic surgery."
    },
    {
      ques: "Can gallstones come back after surgery?",
      ans: "Once the gall bladder is removed, gallstones do not recur."
    },
    {
      ques: "Will digestion be affected after gall bladder removal?",
      ans: "Most people digest food normally after recovery, with minor temporary dietary adjustments."
    },
  ]
}
