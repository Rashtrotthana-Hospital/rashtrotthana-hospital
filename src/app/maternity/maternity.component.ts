import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-maternity',
  templateUrl: './maternity.component.html',
  styleUrl: './maternity.component.css',
})
export class MaternityComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle(
      'Best Pregnancy & Maternity Hospital in RR Nagar Bangalore| Rashtrotthana Hospital'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Trusted maternity care with advanced prenatal services, labor support and postpartum care for mother and baby safety.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Maternity care, prenatal care, delivery services, postnatal care, maternity hospital, Rashtrotthana Hospital, yoga benefits, pregnancy care',
    });
  }
  contact() {
    this.router.navigate(['/contact-us-bangalore']);
  }
  doctors = [
    {
      image: 'assets/Dr-Latha-Venkataram.png',
      name: 'Dr. Latha Venkataram',
      experience: 'Years of Experience: 32',
      alt: 'Dr. Latha Venkataram | Top Obstetrics & Gynaecologist in banaglore | Rashtrotthana Hospital',
      slug : '/doctor/dr-latha-venkataram'
    },
    {
      image: 'assets/Dr-Prakruthi.png',
      name: 'Dr. Prakruthi',
      experience: 'Years of Experience: 16',
      alt: 'Dr. Prakruthi | Best Gynaec Doctor in Bangalore | Rashtrotthana Hospital',
      slug : '/doctor/dr-prakruthi'
    },

    {
      image: 'assets/Dr-Neelam-Saraswat.png',
      name: 'Dr. Neelam Saraswat',
      experience: 'Years of Experience: 10',
      alt: 'Dr. Neelam Saraswat | Best Gynaecology Consultant in Bangalore | Rashtrotthana Hospital',
      slug : '/doctor/dr-neelam-saraswat'
    },
    {
      image: 'assets/Dr-Ashwitha-Gundmi.png',
      name: 'Dr. Ashwitha Gundmi',
      experience: 'Years of Experience: 7+',
      alt: 'Dr. Ashwitha Gundmi | Best Obstetrics & Gynaecologist in Bangalore | Rashtrotthana Hospital',
      slug : '/doctor/dr-ashwitha-gundmi'
    },
    {
      image: 'assets/Dr-Vinita-Udupa.png',
      name: 'Dr. Vinita Udupa',
      experience: 'Years of Experience: 8',
      alt: 'Dr. Vinita Udupa | Best OBG in Bangalore | Rashtrotthana Hospital',
      slug : '/doctor/dr-vinita-udupa'
    },
  ];
  doctors2 = [
    {
      image: 'assets/Dr-Neelam-Saraswat.png',
      name: 'Dr. Neelam Saraswat',
      experience: 'Years of Experience: 10',
      alt: 'Dr. Neelam Saraswat | Best Gynaecology Consultant in Bangalore | Rashtrotthana Hospital',
    },
    {
      image: 'assets/Dr-Ashwitha-Gundmi.png',
      name: 'Dr. Ashwitha Gundmi',
      experience: 'Years of Experience: 7+',
      alt: 'Dr. Ashwitha Gundmi | Best Obstetrics & Gynaecologist in Bangalore | Rashtrotthana Hospital',
    },
    {
      image: 'assets/Dr-Vinita-Udupa.png',
      name: 'Dr. Vinita Udupa',
      experience: 'Years of Experience: 8',
      alt: 'Dr. Vinita Udupa | Best OBG in Bangalore | Rashtrotthana Hospital',
    },
  ];

  doc_expertise = [
    '30+ years of experience',
    '50k+ successful deliveries',
    '80% success rate on Normal Delivery',
    'Skilled in vaginal surgeries',
    'Specializes in safe and normal (vaginal) deliveries',
    'Focused on menopause management and related health issues',
    'Expertise in managing high-risk pregnancies',
    'Provides care for diabetes and medical disorders in pregnancy',
    'Offers treatment for recurrent pregnancy loss',
  ];

  contactus() {
    this.router.navigate(['/contact-us-bangalore']);
  }

  formdoctors = ['Dr. Latha Venkataram', 'Dr. Prakruthi', 'Dr. Neelam Saraswat', 'Dr. Ashwitha Gundmi', 'Dr. Vinita Udupa']

  surgeries: any = [
    {
      id: '1',
      title: 'Experience world-class maternity care and safe delivery at an affordable price.',
      subtitle: '',
      description: `A moment this special deserves care that feels personal`,
      procedure:
        'Every mother’s journey is unique. That’s why the Janani Samridhi Maternity Package at Rashtrotthana Hospital is designed to give you a safe, calm and joy-filled delivery experience — guided by warmth, expertise, and trust.',
      benefits: [
        'Simple & Safe Yoga Sessions – gentle pre-delivery wellness',
        'Physiotherapy Counseling – regain strength after childbirth',
        'Registration & MRD fees included',
        '3-day stay – General or Four-sharing room + Nursing + Duty Doctor',
        'Surgeon & Assistant Surgeon charges covered',
        'Nutritional assessment & planned meals for recovery',
        'Lactation counseling – to begin feeding with confidence',
        'WMN Team support – 3 visits during hospital stay',
        'Birth processing charges handled by us',
        'Consumables for mother and baby included',
        '8-hour NST observation (extra hours if required are separate)',
        'Initial vaccination & newborn care kit',
        'Basic blood tests – Blood Group RH Type, TSH & Total Bilirubin'
      ],
      highlight:
        'Janani Samridhi — Because your baby’s first moment should be filled with care, comfort and love.',
      icon: '🤱',
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
    title: '1. Advanced Facilities & Expert Obstetric Team',
    icon: '🏥',
    color: '#008080',
    description:
      'At Rashtrotthana Hospital, our Janani Samriddhi Maternity Package combines advanced medical facilities with compassionate obstetric care to ensure a safe and comfortable birthing experience.',
    features: [
      {
        icon: '🤰',
        title: 'Comprehensive Antenatal Care',
        description: 'Regular check-ups, scans, and counselling for a healthy pregnancy journey.',
      },
      {
        icon: '👩‍⚕️',
        title: 'Experienced Obstetricians & Gynecologists',
        description: 'Dedicated experts available round the clock for mother and baby care.',
      },
      {
        icon: '🍼',
        title: 'Modern Labour & Delivery Suites',
        description: 'Equipped with advanced monitoring systems and emergency readiness.',
      },
      {
        icon: '💗',
        title: 'Mother & Baby Wellbeing',
        description: 'Personalized care through postnatal guidance and breastfeeding support.',
      },
    ],
    highlightText:
      'Every delivery under the Janani Samriddhi package is guided by trust, comfort, and advanced maternity care.',
  },
  {
    id: 'insurance-facility',
    number: '02',
    title: '2. Affordable & Insurance-Backed Package',
    icon: '💳',
    color: '#008080',
    description:
      'We ensure affordability and ease by offering transparent pricing and insurance assistance under the Janani Samriddhi plan.',
    features: [
      {
        icon: '🏦',
        title: 'Cashless Insurance Facility',
        description: 'Partnered with major health insurance providers for hassle-free maternity claims.',
      },
      {
        icon: '💰',
        title: 'Affordable Maternity Package',
        description: 'Inclusive pricing for consultations, delivery, and postnatal care.',
      },
      {
        icon: '🤝',
        title: 'Claim Assistance Team',
        description: 'End-to-end support to make your maternity insurance process simple and quick.',
      },
    ],
    highlightText:
      'With transparent pricing and easy claim support, your focus stays on motherhood — not paperwork.',
  },
  {
    id: 'comfort-convenience',
    number: '03',
    title: '3. Comfort & Family Convenience',
    icon: '🏡',
    color: '#00a0a0',
    description:
      'Located in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital offers a warm, family-friendly environment ideal for expectant mothers.',
    features: [
      {
        icon: '🛏️',
        title: 'Comfortable Maternity Rooms',
        description: 'Spacious, hygienic, and designed for mother’s comfort and rest.',
      },
      {
        icon: '👨‍👩‍👧',
        title: 'Family Support Access',
        description: 'Visiting facilities and stay options for family members.',
      },
      {
        icon: '🍲',
        title: 'Nutritious Meals & Dietary Support',
        description: 'Customized diet plans to promote postpartum recovery and strength.',
      },
      {
        icon: '👶',
        title: 'Newborn Care & Vaccination Guidance',
        description: 'Dedicated pediatric support from birth to discharge.',
      },
    ],
    highlightText:
      'From comfort to care, every aspect of the Janani Samriddhi package is designed for a joyful motherhood experience.',
  },
];

doctorCard = {
  title: 'Gynecology',
  name: 'Dr. Latha Venkataraman',
  degree: 'MBBS, MRCOG (UK), MRCP(I), FRCOG (UK)',
  experience: '32+ Years',
  timings: 'Prior Appointments',
  speciality: 'Obstetrics & Gynecology',
  image: 'assets/Doc-Inv-Page/Dr-Latha-Venkataram.png',
  slug: 'dr-latha-venkataram',

  icons: {
    experience: 'assets/allergy-clinic/icon-park-solid_loading-three.png',
    timings: 'assets/allergy-clinic/mdi_clock.png',
    speciality: 'assets/allergy-clinic/Vector.png'
  }
};


}
