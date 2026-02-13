import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var gtag: Function;
@Component({
  selector: 'app-kidney-stone',
  templateUrl: './kidney-stone.component.html',
  styleUrl: './kidney-stone.component.css'
})
export class KidneyStoneComponent {

  constructor(private titleService: Title,
    private metaService: Meta,
    private router: Router) { }


  ngOnInit() {
    this.titleService.setTitle(
      'Kidney Stone Surgery in Bangalore | Laser Treatment Experts'
    );

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        "Looking for kidney stone surgery in Bangalore? Rashtrotthana Hospital offers laser stone removal with minimal pain, faster recovery & expert care.",
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
      image: '../../assets/doctor-31.png',
      name: 'Dr. Nagaraj Rao',
      designation: 'Orthopaedics',
      alt: 'Dr. Mahesh Kulkarni | Best Ortho Doctor in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-nagaraj-rao',
      experience: '27+'
    },
    {
      image: 'assets/Dr-Madhu-S-N.png',
      name: 'Dr. Madhu S. N',
      designation: 'Orthopaedics',
      alt: 'Dr. Sujayendra D. M | Best Orthopaedic Doctor in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-madhu-s-n',
      experience: '15+'
    },

  ];

  formdoctors = ['Dr. Nagaraj Rao', 'Dr. Madhu S. N']


  mainServices: any[] = [
    {
      icon: '🔬',
      title: 'Laser Kidney Stone Removal (RIRS with DJ Stenting)',
      description: `
            <ul>
              <li>A modern, scar-free procedure where kidney stones are broken into fine dust using laser technology. A thin flexible scope is passed through the natural urinary passage, avoiding cuts or stitches. A temporary DJ stent may be placed to support healing and smooth urine flow.</li>
            </ul>
          `,
      color: '#008080',
    },
    // {
    //   icon: '⚕️',
    //   title: 'Open Gall Bladder Surgery',
    //   description: `
    //         <ul>
    //           <li> Recommended in select complex cases where laparoscopic surgery is not suitable. Provides safe access in advanced gall bladder conditions.</li>
    //         </ul>
    //       `,
    //   color: '#00a0a0',
    // },
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
      title: '1. Advanced Facilities & Experienced Urology Team',
      icon: '🏥',
      color: '#008080',
      description:
        'At Rashtrotthana Hospital, kidney stone surgeries are performed using advanced laser and endoscopic systems by experienced urologists, ensuring safe and effective outcomes.',
      features: [
        {
          icon: '🔬',
          title: 'Modern Operation Theatres',
          description:
            'Equipped with advanced laser lithotripsy and endoscopic equipment under strict safety standards.',
        },
        {
          icon: '👨‍⚕️',
          title: 'Highly Skilled Urologists',
          description:
            'Specialists trained in RIRS, laser stone removal, and complex kidney stone management.',
        },
        {
          icon: '🦵',
          title: 'Complete Urology Care',
          description:
            'From diagnosis and imaging to surgery, stent care, and follow-up support.',
        },
        {
          icon: '⚡',
          title: 'Faster Recovery, Less Discomfort',
          description:
            'Minimally invasive techniques reduce pain, scarring, and downtime.',
        },
      ],
      highlightText:
        'Every kidney stone procedure is carefully planned and performed using proven techniques and modern infrastructure for patient safety.',
    },
    {
      id: 'insurance-facility',
      number: '02',
      title: '2. Health Insurance Facility',
      icon: '💳',
      color: '#008080',
      description:
        'We make kidney stone surgery affordable and worry-free through structured insurance support.',
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
            'Dedicated team support for approvals and documentation.',
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
            'Well-coordinated insurance handling to avoid delays.',
        },
      ],
      highlightText:
        'Ethical billing and clear insurance guidance help patients focus on healing without financial stress',
    },
    {
      id: 'travel-accommodation',
      number: '03',
      title: '3. Travel & Stay Convenience',
      icon: '📍',
      color: '#00a0a0',
      description:
        'Located in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is easy to reach and well supported with nearby facilities.',
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
            'Pharmacies, food outlets, and transport services nearby.',
        },
        {
          icon: '👥',
          title: 'Supportive Environment',
          description:
            'Staff assistance ensures smooth admissions, procedures, and follow-ups.',
        },
      ],
      highlightText:
        'A well-connected location and coordinated care environment make kidney stone treatment convenient for patients and families.',
    },
  ];

  faqs = [
    {
      ques: "When is kidney stone surgery needed?",
      ans: "Kidney stone surgery is recommended when stones cause severe pain, infection, blockage, or do not pass naturally with medication."
    },
    {
      ques: "Is laser kidney stone surgery safe?",
      ans: "Yes. Laser kidney stone removal (RIRS) is a safe and widely used procedure when performed by experienced urologists."
    },
    {
      ques: "How long does recovery take after kidney stone surgery?",
      ans: "Most patients resume normal activities within a few days after laser procedures."
    },
    {
      ques: "Will kidney stones come back after surgery?",
      ans: "Surgery removes existing stones, but lifestyle changes and medical advice help reduce recurrence."
    },
    {
      ques: "Is DJ stenting painful?",
      ans: "A DJ stent is temporary and usually causes mild discomfort, which settles after removal."
    },
  ]
}
