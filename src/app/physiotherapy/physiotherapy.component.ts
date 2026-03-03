import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
interface Card {
  id: number;
  title: string;
  image: string;
  heading: string;
  description: string;
  conditions: string[];
  therapyNote: string;
  gradient: string;
}

interface Service {
  title: string;
  desc: string;
  price: number;
  icon: string;

  detailTitle: string;
  detailDesc: string;
  points: string[];

  expanded: boolean;
}


@Component({
  selector: 'app-physiotherapy',
  templateUrl: './physiotherapy.component.html',
  styleUrl: './physiotherapy.component.css'
})
export class PhysiotherapyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  facilities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Expert Physiotherapy & Rehabilitation - Rashtrotthana Hospital Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers specialized physiotherapy and rehabilitation services to aid your recovery in Bangalore.' });

    this.metaService.updateTag({ name: 'keywords', content: 'physiotherapy services, rehabilitation, multispeciality hospital Bangalore' });


    // this.facilities = [
    //   {
    //     main_heading: 'Physiotherapy',
    //     heading: 'Physiotherapy',
    //     content: `The Department of Physiotherapy addresses problems associated with movement dysfunction and pain that can arise from <a href="https://en.wikipedia.org/wiki/Musculoskeletal_injury" target="_blank">musculoskeletal</a>, neurological, respiratory and chronic disability conditions or from mental illness and intellectual impairment. The physiotherapy department at Rashtrotthana Hospital strives to provide an outpatient service that is based on high standards of care and quality. Treatment Goals are achieved through comprehensive assessment with individual treatment combining education, continuous support, home exercises programs and advice.`,
    //     image_1: 'rashtrotthana-hospital-physiotherapy-services.jpeg',
    //     image_2: 'best-physiotherapy-in-bangalore-rashtrotthana-hospital.jpeg',
    //     bg_image: 'physiotherapy-for-pain-relief-rashtrotthana-hospital.png',
    //     alt1 : 'Rashtrotthana Hospital Physiotherapy Services',
    //     alt2 : 'Best Physiotherapy in Bangalore - Rashtrotthana Hospital',
    //     alt3 : 'Physiotherapy for Pain Relief - Rashtrotthana Hospital',
    //   }
    // ];
    // this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content);
    // this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content_1);
  }

  flippedCardId: number | null = null;

  // Alternating gradients
  private gradients: string[] = [
    'linear-gradient(135deg, #FFF 30.15%, #B7DDFF 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #F7FFB7 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #E9B7FF 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #B7FFC0 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #FFB7D9 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #FFCEB7 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #B7DDFF 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #F7FFB7 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #E9B7FF 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #B7FFC0 100%), linear-gradient(135deg, #FFF 30.15%, #B7DDFF 100%)',
    'linear-gradient(135deg, #FFF 30.15%, #FFB7D9 100%), linear-gradient(135deg, #FFF 30.15%, #B7DDFF 100%)',
  ];

  cards: Card[] = [
    {
      id: 1,
      title: 'Comprehensive Physiotherapy',
      image: './assets/physiotherapy/img-11.png',
      heading: 'Our services aim to:',
      description: 'Physiotherapy plays a vital role in recovery from injury, surgery, neurological conditions, and long-term medical illnesses. Each treatment plan is designed based on the patient’s condition, medical advice, and rehabilitation goals.',
      conditions: ['Reduce pain and inflammation', 'Improve mobility, strength, and balance', 'Restore functional movement', 'Prevent complications and recurrence', 'Enhance overall quality of life'],
      therapyNote: '',
      gradient: this.gradients[0]
    },
    {
      id: 2,
      title: 'Musculoskeletal Physiotherapy',
      image: './assets/physiotherapy/img-1.png',
      heading: 'Conditions managed include:',
      description: 'Musculoskeletal physiotherapy focuses on conditions affecting muscles, joints, ligaments, tendons, and the spine. Our team provides targeted therapy to relieve pain, restore mobility, and improve physical function.',
      conditions: ['Management of acute and chronic pain', 'Low back pain and neck pain', 'Joint injuries and arthritis', 'Post-fracture rehabilitation', 'Post-surgical rehabilitation', 'Soft tissue injuries', 'Sports-related musculoskeletal injuries', 'Spine disorders such as disc prolapse and spondylosis'],
      therapyNote: 'Treatment includes pain management, joint mobilisation, strengthening exercises, posture correction, and functional training.',
      gradient: this.gradients[1]
    },
    {
      id: 3,
      title: 'Neurological Physiotherapy',
      image: './assets/physiotherapy/img-2.png',
      heading: 'Conditions treated include:',
      description: 'Neurological physiotherapy is essential for patients recovering from conditions affecting the brain, spinal cord, and peripheral nerves. Our goal is to improve movement, balance, coordination, and independence.',
      conditions: ['Stroke rehabilitation', 'Spinal cord injury rehabilitation', 'Traumatic brain injury management', 'Cerebral palsy management', 'Parkinson’s disease rehabilitation', 'Multiple sclerosis management', 'Peripheral nerve injuries', 'Balance and coordination disorders'],
      therapyNote: 'Therapy focuses on muscle re-education, gait training, balance improvement, and functional activity training.',
      gradient: this.gradients[2]
    },
    {
      id: 4,
      title: 'Cardiopulmonary Physiotherapy',
      image: './assets/physiotherapy/img-3.png',
      heading: 'Services include:',
      description: 'Cardiopulmonary physiotherapy supports patients with heart and lung conditions and those recovering from surgery or critical illness. These services help improve breathing efficiency, lung capacity, and overall endurance.',
      conditions: ['Chest physiotherapy', 'Pulmonary rehabilitation', 'Post-operative respiratory care', 'ICU and critical care physiotherapy', 'Cardiac rehabilitation', 'Breathing exercises and airway clearance techniques', 'Pre- and post-thoracic surgery care'],
      therapyNote: '',
      gradient: this.gradients[3]
    },
    {
      id: 5,
      title: 'Paediatric Physiotherapy',
      image: './assets/physiotherapy/img-4.png',
      heading: 'Conditions managed include:',
      description: 'Paediatric physiotherapy focuses on improving movement, strength, posture, and functional abilities in children with developmental or neurological conditions.',
      conditions: ['Developmental delay', 'Cerebral palsy', 'Congenital deformities', 'Neuromuscular disorders'],
      therapyNote: 'Therapy is designed to support physical development and improve functional independence in children.',
      gradient: this.gradients[4]
    },
    {
      id: 6,
      title: 'Geriatric Physiotherapy',
      image: './assets/physiotherapy/img-5.png',
      heading: 'Services include:',
      description: 'Geriatric physiotherapy addresses age-related conditions that affect mobility, balance, and independence in older adults.',
      conditions: ['Management of age-related musculoskeletal disorders', 'Osteoporosis and osteopenia management', 'Balance training and fall prevention', 'Mobility and gait training', 'Arthritis management', 'Functional independence training'],
      therapyNote: 'The focus is on improving quality of life and reducing the risk of falls and complications.',
      gradient: this.gradients[5]
    },
    {
      id: 7,
      title: 'Sports Physiotherapy',
      image: './assets/physiotherapy/img-6.png',
      heading: 'Services include:',
      description: 'Our sports physiotherapy services support athletes and physically active individuals in recovering from injuries and enhancing performance.',
      conditions: ['Sports injury management', 'Return-to-play rehabilitation programs', 'Athletic conditioning', 'Performance enhancement', 'Taping', 'Injury prevention strategies'],
      therapyNote: 'Treatment aims to ensure safe recovery and prevent future injuries.',
      gradient: this.gradients[6]
    },
    {
      id: 8,
      title: 'Orthopaedic Post-Operative Rehabilitation',
      image: './assets/physiotherapy/img-7.png',
      heading: 'Rehabilitation includes:',
      description: 'Post-operative physiotherapy is a critical part of recovery following orthopaedic surgeries. Our structured rehabilitation programs help patients regain movement, strength, and function safely.',
      conditions: ['Joint replacement rehabilitation (Total Knee Replacement – TKR, Total Hip Replacement – THR)', 'Arthroscopy rehabilitation', 'Ligament reconstruction rehabilitation', 'Fracture fixation rehabilitation', 'Spine surgery '],
      therapyNote: '',
      gradient: this.gradients[7]
    },
    {
      id: 9,
      title: 'Manual Therapy',
      image: './assets/physiotherapy/img-8.png',
      heading: 'Techniques include:',
      description: 'Manual therapy techniques are used to improve joint mobility, reduce muscle tightness, and enhance functional movement.',
      conditions: ['Joint mobilisation and manipulation', 'Soft tissue mobilisation', 'Myofascial release', 'Muscle energy techniques', 'Trigger point therapy'],
      therapyNote: '',
      gradient: this.gradients[8]
    },
    {
      id: 10,
      title: 'Rehabilitation in Special Conditions',
      image: './assets/physiotherapy/img-9.png',
      heading: 'These include:',
      description: 'We offer specialised rehabilitation programs for patients with complex and long-term conditions.',
      conditions: ['Amputee rehabilitation', 'Burns rehabilitation', 'Oncology rehabilitation', 'Chronic pain management programs', 'Vertigo and vestibular rehabilitation'],
      therapyNote: '',
      gradient: this.gradients[9]
    },
    {
      id: 11,
      title: 'Women’s Health Physiotherapy',
      image: './assets/physiotherapy/img-10.png',
      heading: 'Services include:',
      description: 'Women’s health physiotherapy focuses on musculoskeletal and functional recovery during and after pregnancy.',
      conditions: ['Post-pregnancy recovery programs', 'Low back pain management', 'Pelvic floor strengthening exercises'],
      therapyNote: 'These programs support safe recovery, core strengthening, and long-term musculoskeletal health.',
      gradient: this.gradients[10]
    },
  ];

  flipCard(cardId: number): void {
    if (this.flippedCardId === cardId) {
      // Same card clicked — close it
      this.flippedCardId = null;
    } else {
      // New card clicked — flip it (previous auto-closes due to binding)
      this.flippedCardId = cardId;
    }
  }

  services: Service[] = [
    {
      icon: './assets/physiotherapy/icon-1.png',
      title: 'Neuro Recovery Support at Home',
      desc: 'This service is designed for patients requiring neurological rehabilitation at home, where consistent and specialized therapy is essential.',
      price: 1200,

      detailTitle: 'Neuro rehabilitation services include:',
      detailDesc: 'This service is designed for neurological rehabilitation at home',
      points: [
        'Stroke recovery and stroke rehabilitation',
        'Parkinson’s disease',
        'Head injuries',
        'Spinal cord injury',
        'Cerebral palsy',
        'Multiple sclerosis',
        'Bell’s palsy and facial palsy'
      ],

      expanded: false
    },
    {
      icon: './assets/physiotherapy/iocn-2.png',
      title: 'Expert Physiotherapy at Home ',
      desc: 'This category covers general orthopaedic and musculoskeletal rehabilitation, including post-surgical care and pain management.',
      price: 900,

      detailTitle: 'Conditions treated include:',
      detailDesc: '',
      points: [
        'Back pain',
        'Neck strain',
        'Frozen shoulder',
        'Knee pain',
        'Plantar fasciitis',
        'Osteoarthritis (OA) of the knee',
        'Nerve root pain',
        'Headaches related to musculoskeletal issues',
        'Pelvic joint pain',
        'Post-surgical rehabilitation and treatment'
      ],

      expanded: false
    },
    {
      icon: './assets/physiotherapy/icon-3.png',
      title: 'Advanced Home Rehabilitation ',
      desc: 'This service is intended for patients with advanced or multiple rehabilitation needs, requiring extended and specialised physiotherapy sessions.',
      price: 1400,

      detailTitle: 'Specialised rehabilitation care includes:',
      detailDesc: '',
      points: [
        'Bilateral frozen shoulders',
        'Bilateral total knee replacement (TKR) rehabilitation',
        'Bilateral osteoarthritis (OA) knee',
        'Rehabilitation involving two concurrent conditions (e.g., elbow pain with neck pain)',
        'Plantar fasciitis with back pain',
        'Knee pain with shoulder pain'
      ],

      expanded: false
    },
  ];

  toggleService(index: number) {

    this.services.forEach((service, i) => {
      service.expanded = i === index ? !service.expanded : false;
    });

  }

  expert = [
    {
      img: './assets/physiotherapy/expert-img-1.png',
      expertheading: 'Service Area',
      expertpara: 'Within 5 km radius of Rashtrotthana Hospital'
    },
    {
      img: './assets/physiotherapy/expert-img-2.png',
      expertheading: 'Timings',
      expertpara: '10:00 AM - 6:00 PM'
    },
    {
      img: './assets/physiotherapy/expert-img-3.png',
      expertheading: 'Booking',
      expertpara: 'Through the hospital front office'
    },
  ]

  howPart = [
    {
      img: './assets/physiotherapy/how-img-1.png',
      para: 'Hospital-backed rehabilitation care'
    },
    {
      img: './assets/physiotherapy/how-img-2.png',
      para: 'Safe, structured, and monitored recovery'
    },
    {
      img: './assets/physiotherapy/how-img-3.png',
      para: 'Doctor-guided treatment plans'
    },
    {
      img: './assets/physiotherapy/how-img-4.png',
      para: 'Experienced and qualified physiotherapists'
    },
    {
      img: './assets/physiotherapy/how-img-5.png',
      para: 'Comfort and convenience of home-based care'
    },
  ]

  selectedPageName: string = '';
  showPopup = false;

  pageName = 'Physiotherapy Page';

  openCallback(service: any) {
    this.selectedPageName =
      `${this.pageName} - ${service.title}`;
    this.showPopup = true;
  }

  openGeneralCallback() {
    this.selectedPageName = this.pageName;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

}