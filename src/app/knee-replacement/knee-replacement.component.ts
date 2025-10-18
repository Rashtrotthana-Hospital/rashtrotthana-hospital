import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var gtag: Function;

@Component({
  selector: 'app-knee-replacement',
  templateUrl: './knee-replacement.component.html',
  styleUrl: './knee-replacement.component.css',
})
export class KneeReplacementComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {}
  ngOnInit() {
    this.titleService.setTitle(
      'Advanced Total Knee Replacement Surgery - Rashtrotthana Hospital'
    );

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        "Experience pain-free mobility with advanced total knee replacement surgery at Rashtrotthana Hospital, Bangalore's leading orthopedic center.",
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
      image: 'assets/Dr-Mahesh-Kulkarni.png',
      name: 'Dr. Mahesh Kulkarni',
      designation: 'Orthopaedics',
      alt: 'Dr. Mahesh Kulkarni | Best Ortho Doctor in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-mahesh-kulkarni',
      experience: '15+'
    },
    {
      image: 'assets/Dr-Sujayendra-D-M.png',
      name: 'Dr. Sujayendra D. M',
      designation: 'Orthopaedics',
      alt: 'Dr. Sujayendra D. M | Best Orthopaedic Doctor in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-sujayendra-d-m',
      experience: '9+'
    },
    {
      image: 'assets/Dr-Nikhil-Hegde.png',
      name: 'Dr. Nikhil Hegde',
      designation: 'Orthopaedics',
      alt: 'Dr. Nikhil Hegde | Best Orthopaedic Consultant in Bangalore | Rashtrotthana Hospital',
      slug: '/doctor/dr-nikhil-hegde',
      experience: '6+'
    },
  ];

  faqs = [
    {
      questions: 'What is Total Knee Replacement Surgery?',
      answer:
        '<b>Total knee replacement surgery in Bangalore</b> involves replacing the damaged parts of the knee joint with artificial implants to restore mobility and alleviate pain. It is one of the most common procedures performed at <b>Rashtrotthana Hospital.</b>',
    },
    {
      questions:
        'Who is the Best Doctor for Knee Replacement Surgery in Bangalore?',
      answer:
        '<b>Dr. Nikhil Hegde,</b> a renowned orthopedic surgeon, is highly regarded for performing successful <b>knee replacement surgeries in Bangalore</b>. Along with <b>Dr. Sujayendra</b>, they lead the expert team at <b>Rashtrotthana Hospital.</b>',
    },
    {
      questions:
        'Which is the Best Hospital for Knee Replacement in Bangalore?',
      answer:
        '<b>Rashtrotthana Hospital in RR Nagar</b> is considered one of the <b>best knee replacement hospitals in Bangalore</b>, offering advanced surgical techniques and comprehensive care for patients.',
    },
    {
      questions: 'Do You Offer Free Knee Pain Consultations in Bangalore?',
      answer:
        'Yes, <b>Rashtrotthana Hospital</b> offers a <b>free knee pain consultation clinic</b> every <b>Monday and Thursday from 10 AM to 1 PM</b>. This service is available for individuals experiencing knee pain, stiffness, or mobility issues and provides an opportunity to consult with expert orthopedic specialists, including <b>Dr. Nikhil Hegde</b> and <b>Dr. Sujayendra.</b>',
    },
    {
      questions:
        'Are There Advanced Knee Replacement Options Available in Bangalore?',
      answer:
        'Yes, <b>advanced knee replacement in Bangalore</b>, including robotic-assisted surgery and minimally invasive techniques, are available at <b>Rashtrotthana Hospital</b>, ensuring quicker recovery and better outcomes.',
    },
    {
      questions:
        'What is Joint Replacement Surgery, and Is it Offered in Bangalore?',
      answer:
        '<b>Joint replacement surgery in Bangalore</b> includes procedures like <b>knee replacement</b> and <b>hip replacement</b>, where damaged joints are replaced with artificial implants. <b>Rashtrotthana Hospital</b> specializes in these surgeries with expert care.',
    },
    {
      questions:
        'How Long Does a Total Knee Replacement Surgery in Bangalore Take?',
      answer:
        "A typical <b>total knee replacement surgery in Bangalore</b> lasts about 1 to 2 hours. The duration may vary depending on the patient's condition and the complexity of the procedure.",
    },
    {
      questions: 'Is Free Knee Replacement Surgery Available in Bangalore?',
      answer:
        'Some hospitals and charitable organizations in <b>Bangalore</b> offer <b>free knee replacement surgery</b> through government schemes or financial aid programs. Contact <b>Rashtrotthana Hospital</b> for more information.',
    },
    {
      questions: 'Who are the Best Knee Replacement Surgeons in Bangalore?',
      answer:
        '<b>Dr. Nikhil Hegde</b> and <b>Dr. Sujayendra</b> are among the <b>best knee replacement surgeons in Bangalore</b>, known for their expertise in complex <b>joint replacement surgeries</b>.',
    },
    {
      questions:
        'What is the Recovery Time for Knee Replacement Surgery in Bangalore?',
      answer:
        'Post-surgery, patients can expect to resume normal activities within 6 to 12 weeks. Comprehensive post-operative care is provided at <b>Rashtrotthana Hospital in RR Nagar</b> to ensure a smooth recovery.',
    },
    {
      questions:
        'Can I Get Treatment for Knee Pain Before Surgery in Bangalore?',
      answer:
        'Yes, <b>knee pain treatment in Bangalore</b> is available, including physical therapy and medication. If conservative treatments fail, <b>knee replacement surgery</b> may be recommended.',
    },
    {
      questions:
        'What Makes Rashtrotthana Hospital the Best Choice for Knee Replacement in Bangalore?',
      answer:
        'With a team of top orthopedic surgeons like <b>Dr. Nikhil Hegde</b>, advanced surgical facilities, and a patient-centered approach, <b>Rashtrotthana Hospital</b> is recognized as one of the <b>best hospitals for knee replacement in Bangalore</b>.',
    },
    {
      questions:
        'What Post-Surgery Care is Required After a Total Knee Replacement?',
      answer:
        'Post-operative care at <b>Rashtrotthana Hospital in RR Nagar</b> includes physical therapy, regular follow-ups, and pain management to ensure long-term success after the procedure.',
    },
    {
      questions:
        'Are There Side Effects After Knee Replacement Surgery in Bangalore?',
      answer:
        'Side effects such as swelling, pain, or a <b>rash after knee replacement</b> are rare but manageable. The experienced team at <b>Rashtrotthana Hospital</b> ensures proper care and guidance.',
    },
    {
      questions: 'Who Can Attend the Free Knee Pain Consultation Clinic?',
      answer:
        'The <b>free knee pain consultation clinic in Bangalore</b> is open to anyone dealing with knee discomfort or related joint issues. If you are considering <b>knee replacement surgery in Bangalore</b> or seeking effective <b>knee pain treatment in Bangalore</b>, this clinic is the perfect place to start.',
    },
  ];

  surgeries: any = [
    {
      id: '1',
      title: 'Experience world-class knee replacement at an affordable price.',
      subtitle: '',
      description: ` Your comfort, safety, and recovery come first - always. At Rashtrotthana Hospital, our Total Knee Replacement Package is designed to make advanced orthopedic care accessible, transparent, and completely reliable.
        `,
      procedure:
        'Starting at just ₹1,00,000* (T&C applied), this all-inclusive package ensures that every stage of your surgery - from consultation to recovery - is handled by an experienced team with proven success in helping patients walk pain-free again.',
      benefits: [
        'Our package includes complete care from consultation to recovery.',
        'Expert surgeons ensure safe and successful knee replacements.',
        'Advanced techniques mean less pain and faster healing.',
        'Personalized rehab helps you walk comfortably again.',
        'Cashless insurance and caring support make recovery stress-free.',
      ],
      highlight:
        'Every patient deserves quality care without financial strain. Book your consultation today and take the first step toward a pain-free, confident tomorrow.',
      icon: '🦵',
    },
  ];

  mainServices: any[] = [
    {
      icon: '🔬',
      title: 'Total Knee Replacement (TKR)',
      description: `
        <ul>
          <li>In Total Knee Replacement, the entire knee joint surface is replaced with advanced implants.</li>
          <li>It is usually recommended for patients with severe arthritis or damage on both sides of the knee, causing significant pain, stiffness and mobility issues.</li>
        </ul>
      `,
      color: '#008080',
    },
    {
      icon: '⚕️',
      title: 'Partial Knee Replacement (PKR)',
      description: `
        <ul>
          <li>Partial Knee Replacement replaces only the damaged compartment of the knee, leaving the healthy part intact.</li>
          <li>This is suitable for patients whose damage is limited to one area of the knee, and it can offer a quicker recovery with a smaller incision.</li>
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
      title: '1. State-of-the-Art Facilities & Expert Team',
      icon: '🏥',
      color: '#008080',
      description:
        'At Rashtrotthana Hospital, we combine advanced medical technology with decades of orthopedic expertise to deliver exceptional results for every patient.',
      features: [
        {
          icon: '🔬',
          title: 'Modern Operation Theatres',
          description:
            'Equipped with the latest surgical tools and safety protocols.',
        },
        {
          icon: '👨‍⚕️',
          title: 'Highly Skilled Orthopedic Surgeons',
          description:
            'Experienced specialists supported by a dedicated surgical team.',
        },
        {
          icon: '🦵',
          title: 'Comprehensive Orthopedic Care',
          description:
            'From pre-surgery evaluation to post-operative recovery and rehabilitation.',
        },
        {
          icon: '⚡',
          title: 'Faster Recovery, Minimal Pain',
          description:
            'Advanced surgical techniques for long-term mobility and comfort.',
        },
      ],
      highlightText:
        'Your journey — from consultation to complete recovery — is guided by expertise, care, and advanced technology.',
    },
    {
      id: 'insurance-facility',
      number: '02',
      title: '2. Health Insurance Facility',
      icon: '💳',
      color: '#008080',
      description:
        'We make your treatment affordable and stress-free by partnering with leading health insurance providers for a smooth experience.',
      features: [
        {
          icon: '🏦',
          title: 'Cashless Facility Available',
          description: 'Accepted by most major health insurance plans.',
        },
        {
          icon: '🤝',
          title: 'Claim Assistance',
          description:
            'Our team helps with approvals and paperwork for a hassle-free process.',
        },
        {
          icon: '📜',
          title: 'Transparent Billing',
          description:
            'No hidden costs — clear and honest pricing throughout your treatment.',
        },
      ],
      highlightText:
        'Patients appreciate our transparent and supportive insurance process that keeps their focus on healing, not paperwork.',
    },
    {
      id: 'travel-accommodation',
      number: '03',
      title: '3. Travel & Accommodation Convenience',
      icon: '📍',
      color: '#00a0a0',
      description:
        'Located in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is easily accessible and surrounded by essential amenities for patients and families.',
      features: [
        {
          icon: '🚇',
          title: 'Easily Accessible',
          description: 'Close to Metro, Railway Station, and major bus routes.',
        },
        {
          icon: '🏨',
          title: 'Nearby Stay Options',
          description:
            'Comfortable hotels and lodges available for patient families.',
        },
        {
          icon: '🏪',
          title: 'Essential Facilities Around',
          description:
            'Access to pharmacies, restaurants, and transport services.',
        },
        {
          icon: '👥',
          title: 'Supportive Environment',
          description:
            'Our staff ensures every patient’s visit is smooth and worry-free.',
        },
      ],
      highlightText:
        'We ensure that every aspect of your visit — from travel to stay — is convenient, safe, and stress-free.',
    },
  ];
}
