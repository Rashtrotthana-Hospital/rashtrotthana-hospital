import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
interface PackageSection {
  title: string;
  subtitle?: string;
  badge?: string;
  items: string[];
}

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrl: './health-check.component.css'
})
export class HealthCheckComponent {





  currentIndex = 0;
  interval: any;
  cardsPerView = 3;
  isMobile = false;
  currentPackage: any;
  doctors: any = [];

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());

    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const pkg = this.pages.find(p => p.slug === slug);

      if (pkg) {
        this.currentPackage = pkg;
        this.doctors = pkg.doctors;
        this.title.setTitle(pkg.metaTitle);

        this.meta.updateTag({
          name: 'description',
          content: pkg.metaDescription
        });
      }
    });


    // Auto slide every 3 seconds (optional)
    // this.interval = setInterval(() => {
    //   this.nextSlide();
    // }, 3000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    window.removeEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    this.cardsPerView = this.isMobile ? 1 : 3;

    // Reset to valid index when screen size changes
    if (this.currentIndex > this.maxIndex) {
      this.currentIndex = this.maxIndex;
    }
  }

  get maxIndex(): number {
    return this.doctors.length - this.cardsPerView;
  }

  nextSlide() {
    if (this.currentIndex >= this.maxIndex) {
      this.currentIndex = 0; // Loop back to start
    } else {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex <= 0) {
      this.currentIndex = this.maxIndex; // Loop to end
    } else {
      this.currentIndex--;
    }
  }

  getTransform(): string {
    if (this.isMobile) {
      // Mobile: full width cards with gap
      const containerWidth = window.innerWidth - 100; // Account for buttons and padding
      return `translateX(-${this.currentIndex * (containerWidth + 20)}px)`;
    } else {
      // Desktop: 280px cards + 25px gap
      const cardWidth = 305;
      return `translateX(-${this.currentIndex * cardWidth}px)`;
    }
  }

  @ViewChild('appointmentForm') appointmentForm!: ElementRef;

  scrollToForm() {
    if (this.appointmentForm) {
      this.appointmentForm.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  showBookingForm = false;

  openBookingForm() {
    this.currentPackage = {
      ...this.currentPackage,
      title: this.currentPackage.heading,
      packageId: this.currentPackage.packageId
    };
    this.showBookingForm = true;
  }


  closeBookingForm() {
    this.showBookingForm = false;
  }

  handleFormSubmission(data: any): void {
    console.log('Form submitted:', data);
    this.closeBookingForm(); 
  }



  pages = [
    {
      slug: 'annual-master-diabetes-care',
      metaTitle: "Annual Diabetic Health Check | Rashtrotthana Hospital Bangalore",
      metaDescription: "Affordable annual diabetic health check at Rashtrotthana Hospital, Bangalore. Includes HbA1c, sugar profile, kidney screening & doctor consultation at budget-friendly rates.",

      // title: 'Annual Master Diabetes Care',
      packageId:2,
      price: 5999,
      testsCount: 128,
      heroImg: "assets/health-package/banner.png",
      heroAlt: "",
      tagLine: "One",
      tagLine1: "Package",
      tagLine2: "Payment",
      tagLine3: "Full year of care",
      heading: "Annual Master Diabetes Care",
      heroText: "Track your blood sugar, heart, kidney, liver and overall health through a single, annual diabetes package - designed to prevent complications and support long-term wellbeing.",
      aboutheading: "Diabetes affects more than just your sugar.",
      lead: "It can silently damage your kidneys, eyes, nerves, heart, joints, and immunity without showing symptoms.",
      subtext: "That’s why your check-up must be full-body, not just a sugar test.Our Annual Master Diabetes Care Package covers everything diabetes touches - helping you catch problems early and stay in control.",
      aboutImg: "assets/health-package/top-view-diabetic-woman-checking-her-glucose-level.jpg",
      aboutAlt: "Diabetes multi-organ impact illustration",
      badge: [
        { title: '128 tests', para: 'Complete diabetic evaluation' },
        { title: 'Type 1 & Type 2', para: 'Suitable for all diabetics' },
        { title: 'Year-round care', para: 'Multiple visits included' },
      ],
      highlights: [
        '128 tests + specialist consultations',
        'Quarterly sugar monitoring & HbA1c',
        'Kidney, liver, lipid & thyroid profile',
        'Cardiac, radiology & ultrasound screening',
      ],

      choosetitle: "Why choose this diabetes package?",
      choosepara: "Specially curated for long-term diabetes management, complication prevention and holistic lifestyle support.",

      whyChoose: [
        'Integrated approach to diabetic care under one roof',
        'Designed by experienced diabetologists & physicians',
        'Prevention-focused: catch complications early',
        'Ideal for diabetics, prediabetics & high-risk individuals',
      ],

      sectionHeading: "What’s included in the package?",
      sectionPara: "Structured into investigations, imaging, cardiac care and specialist consultations.",

      sections: [
        {
          title: 'Speciality Consultations',
          subtitle: 'Holistic diabetes care',
          badge: 'Up to 4 visits / year',
          icon: "assets/health-package/Ellipse 101.png",
          items: [
            'Physiotherapy Consultation (if required – once / year)',
            'Physician / Diabetologist Consultation (4 times / year)',
            'Lifestyle Consultation (4 times / year)',
            'Lifestyle Management Sessions (4 times / year)',
            'Nutrition & Dietetics Consultation (4 times / year)',
          ],
        },
        {
          title: 'Radiology',
          subtitle: 'Imaging for deeper insights',
          badge: 'Yearly',
          icon: "assets/health-package/Ellipse 103.png",
          items: ['Chest X-Ray (once / year)'],
        },
        {
          title: 'Cardiac Evaluation',
          subtitle: 'Protect your heart',
          badge: 'Twice a year',
          icon: "assets/health-package/Ellipse 105.png",
          items: ['ECG (2 times / year)'],
        },
        {
          title: 'Laboratory Investigations',
          subtitle: 'Core blood & urine tests',
          badge: 'Multiple times / year',
          icon: "assets/health-package/Ellipse 102.png",
          items: [
            'Complete Blood Count with ESR (2 times / year)',
            'Fasting Blood Sugar (4 times / year)',
            'Post-Prandial Blood Sugar (4 times / year)',
            'HbA1c (4 times / year)',
            'Urine Microalbumin (4 times / year)',
            'Renal Function Test – RFT (3 times / year)',
            'Lipid Profile (2 times / year)',
            'Liver Function Test – LFT (2 times / year)',
            'TSH – Thyroid Stimulating Hormone (2 times / year)',
            'TMT (once / year)',
            'USG Abdomen & Pelvis + 2D Echo (once / year)',
          ],
        },

      ],


      steps: [
        { stepImg: 'assets/health-package/medical-chart-pen-icons 1.png', stepPara: 'Book your slot online or via call' },
        { stepImg: 'assets/health-package/b3560a31-ed57-42ee-b0b8-f42d6485e249 1.png', stepPara: 'Visit the center fasting, as advised by our team' },
        { stepImg: 'assets/health-package/medicine-icon-27 1.png', stepPara: 'Sample collection & scans as per package' },
        { stepImg: 'assets/health-package/3d-healthcare-icon-with-medic 1.png', stepPara: 'Consultation with our specialist doctors' },
        { stepImg: 'assets/health-package/3d-cartoon-salad-bowl-with-fresh-vegetables-icon 1.png', stepPara: 'Personalised lifestyle & diet plan' },
      ],
      stpestitle: "Your care journey with us",
      stpedpara: "Simple, guided and patient-friendly at every step.",
      doctors: [
        {
          doctor_image: '../../assets/Dr-H-M-Krishnamurthy.png',
          doctor_name: 'Dr. H. M. Krishnamurthy',
          slug: 'dr-h-m-krishnamurthy',
          experience: '37+',
          docalt: 'Dr. H. M. Krishnamurthy | Consultant - Internal Medicine in Bangalore | Rashtrotthana Hospital',
        },
        {
          doctor_name: 'Dr. Suhas Raj S',
          experience: '10+',
          doctor_image: '../../assets/Dr-Suhas-Raj-S.png',
          slug: 'dr-suhas-raj-s',
          docalt: 'Dr. Suhas Raj S | Best Cardiologist in Bangalore | Rashtrotthana Hospital',
        },
        {
          doctor_image: '../../assets/Dr-Sowmya-Bhat-S.png',
          doctor_name: 'Dr. Sowmya S. Bhat',
          experience: '16+',
          docalt: 'Dr. Sowmya S. Bhat | Best Ophthalmologist in Bangalore | Rashtrotthana Hospital',
          slug: 'dr-sowmya-bhat-s',
        },
        {
          doctor_image: '../../assets/dr-limesh-dr-page.png',
          doctor_name: 'Dr. Limesh M',
          experience: '16+',
          docalt: 'Dr. Limesh M | Nephrologist & Transplant Physician Bangalore',
          slug: 'dr-limesh-m',
        },
        {
          doctor_image: '../../assets/Dr-Kalyani-Dilip-Karkare.png',
          doctor_name: 'Dr. Kalyani Dilip Karkare',
          experience: '16+',
          docalt: 'Dr. Kalyani Dilip Karkare | Best Neurologist in Bangalore | Rashtrotthana Hospital',
          slug: 'dr-kalyani-dilip-karkare',
        },
        {
          doctor_image: '../../assets/Ms-Archana-Karthick.png',
          doctor_name: 'Ms. Archana Karthick',
          experience: '19+',
          docalt: 'Ms. Archana Karthick | Best Clinical Dietician in Bangalore',
          slug: 'ms-archana-karthick',
        },
      ],
      faqs: [
        {
          q: 'Who should opt for the Annual Master Diabetes Care Package?',
          a: 'Anyone with diabetes, prediabetes, family history of diabetes, obesity, or lifestyle risk factors will benefit from this annual package.',
        },
        {
          q: 'How many visits are covered in a year?',
          a: 'The package covers multiple lab visits, cardiac evaluations twice a year, radiology once a year and up to four specialist consultations depending on the service.',
        },
        {
          q: 'Do I need to come fasting?',
          a: 'Yes, for accurate blood sugar and lipid profile results, you will be advised to come fasting for specific visits. Our team will guide you when you book.',
        },
        {
          q: 'Is this package suitable for elderly patients?',
          a: 'Yes. In fact, regular monitoring through this package is highly recommended for elderly patients with diabetes or multiple risk factors.',
        },
      ],

      ctaTitle: "Ready to take charge of your diabetes?",
      catpara: `Book your Annual Master Diabetes Care package and start your journey towards better sugar control and a healthier life.`,
      detailsImg: "assets/health-package/3d-human-body-parts-background 1.png",



    }



  ]
  activeIndex = 0;


}

