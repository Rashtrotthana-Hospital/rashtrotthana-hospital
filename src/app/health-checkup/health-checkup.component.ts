import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PackageFormComponent } from '../package-form/package-form.component';

interface PackageDetails {
  title: string;
  items: string[];
  icon: string;
}

interface Package {
  title: string;
  price: number;
  package: PackageDetails[];
  test: string;
  packageId?: number;
  ageGroup?: string;
  validTill?: string;
}

@Component({
  selector: 'app-health-checkup',
  templateUrl: './health-checkup.component.html',
  styleUrl: './health-checkup.component.css',
})
export class HealthCheckupComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private sanitizer: DomSanitizer
  ) {}
  showBookingForm = false; // Flag to show the booking form
  selectedPackage: Package | null = null; // Selected package
  ngOnInit(): void {
    this.titleService.setTitle(
      'Health Check-Up Packages | Rashtrotthana Hospital'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Schedule your preventive health check-up at Rashtrotthana Hospital, Bangalore, with our comprehensive packages tailored to your needs.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'health check-up packages, preventive health care, regular check-ups Bangalore',
    });
  }
  activeIndex: number | null = null;

  packages: Package[] = [
    {
      title: 'Senior Citizen Health Package',
      price: 1999,
      packageId: 11,
      package: [
        {
          title: 'BLOOD TEST',
          items: [
            'Blood Sugar - Fasting',
            'Blood Sugar - Post Prandial',
            'Complete Blood Count',
            'HBA1C',
            'TSH',
            'Creatinine',
            'SGOT',
            'SGPT',
            'Total Cholesterol',
            'PSA (For Men)',
            'Urine Complete Analysis',
          ],
          icon: 'blood',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo Cardiogram', 'Audiometry'],
          icon: 'cardiac',
        },
        {
          title: 'RADIOLOGY',
          items: [
            'X-ray - Chest',
            'Ultrasound Whole Abdomen',
            'Mammography - Bilateral (For Women)',
          ],
          icon: 'radiology',
        },
        {
          title: 'CONSULTATIONS',
          items: ['Physician', 'Ayurveda', 'Lifestyle', 'ENT', 'Homeopathy'],
          icon: 'speciality',
        },
      ],
      ageGroup: '55 Years & Above',
      validTill: "31st December, 2025",
      test: '22',
    },
    {
      title: 'Basic Diabetic Care',
      price: 599,
      packageId: 1,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: ['FBS', 'Lipid profile', 'PPBS', 'Serum Creatinine', ' HBA1C'],
          icon: 'blood',
        },
      ],
      test: '15',
    },
    {
      title: 'Annual Master Diabetes Care',
      price: 5999,
      packageId: 2,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [
            'Complete Blood count with ESR (Avail 2 times a year)',
            'Fasting Blood Sugar (Avail 4 times a year)',
            'Post prandial blood sugar (Avail 4 times a year)',
            'Urine Microalbumin (Avail 4 times a year)',
            ' Lipid profile (Avail 2 times a year)',
            'HBA1C (Avail 4 times a year)',
            'RFT (Avail 3 times a year)',
            'TSH (Avail 2 times a year)',
            'LFT (Avail 2 times a year)',
            'TMT (Avail once a year)',
            'USG Abdomen & Pelvis 2D Echo (Avail once a year)',
          ],
          icon: 'blood',
        },
        {
          title: 'RADIOLOGY',
          items: ['Chest X-Ray (Avail once a year)'],
          icon: 'radiology',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG (Avail 2 times a year)'],
          icon: 'cardiac',
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: [
            'Physiotherapy Consultation (if required) (Avail once a year)',
            'Physician / Diabetologist Consultation (Avail 4 times a year)',
            'Lifestyle Consultation (Avail 4 times a year)',
            'Lifestyle Management (Avail 4 times a year)',
            'Nutrition & Dietetics Consultation (Avail 4 times a year)',
          ],
          icon: 'speciality',
        },
      ],
      test: '128',
    },
    {
      title: 'Senior Citizen Health (Male)',
      price: 5500,
      packageId: 3,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [
            'Complete Blood count with ESR',
            'Fasting Blood Sugar',
            'Post prandial blood sugar',
            'Complete Urine Examination',
            'Complete Stool Examination Including occult blood',
            ' Lipid profile',
            'Serum Creatinine',
            'Vitamin D',
            'HBA1C',
            'TFT',
            'Liver function test',
            'PSA (For Male)',
          ],
          icon: 'blood',
        },
        {
          title: 'RADIOLOGY',
          items: [
            'Ultrasound (Abd & Plv)',
            'Chest X-Ray',
            'Bone mineral Densitometry (Single Region)',
          ],
          icon: 'radiology',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo'],
          icon: 'cardiac',
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style', 'Dental'],
          icon: 'speciality',
        },
      ],
      test: '23',
    },
    {
      title: 'Senior Citizen Health Check (Female)',
      price: 5500,
      packageId: 4,
      package: [
        {
          title: 'LABORATORY Investigations',
          items: [
            'Complete Blood count with ESR',
            'Fasting Blood Sugar',
            'Post prandial blood sugar',
            'Complete Urine Examination',
            'Complete Stool Examination Including occult blood',
            ' Lipid profile',
            'Serum Creatinine',
            'Vitamin D',
            'HBA1C',
            'TFT',
            'Liver function test',
            'Pap Smear',
          ],
          icon: 'blood',
        },
        {
          title: 'RADIOLOGY',
          items: [
            'Ultrasound (Abd & Plv)',
            'Chest X-Ray',
            'Bone mineral Densitometry (Single Region)',
          ],
          icon: 'radiology',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo'],
          icon: 'cardiac',
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: [
            'Physician',
            'Ophthalmology',
            'ENT',
            'Life Style - Cognetive Fitness',
            'Diet Counselling',
            'Dental Check up',
            'Gynecology',
          ],
          icon: 'speciality',
        },
      ],
      test: '24',
    },
    {
      title: 'Basic Health Check Up',
      price: 950,
      packageId: 5,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [
            'Complete Blood count with ESR',
            'Fasting Blood Sugar',
            'Total Cholesterol',
            ' Urine Routine',
            'Blood grouping & RH Typing',
            'Serum Creatinine',
            'TSH',
          ],
          icon: 'blood',
        },
        {
          title: 'RADIOLOGY',
          items: ['Chest X-Ray'],
          icon: 'radiology',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG'],
          icon: 'cardiac',
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: [
            'Physician',
            'Eye Check / Vision Test',
            'Life Style Consultation',
          ],
          icon: 'speciality',
        },
      ],
      test: '11',
    },
    {
      title: 'Executive Health Check Up (Male)',
      price: 4200,
      packageId: 6,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [
            'Complete Blood count',
            'Fasting Blood Sugar',
            'Complete Urine Examination',
            'PPBS',
            ' Lipid profile',
            'Serum Creatinine',
            'Vitamin D',
            'TFT',
            'LFT',
            'PSA',
          ],
          icon: 'blood',
        },
        {
          title: 'RADIOLOGY',
          items: ['USG (Abd & Plv)', 'Chest X-Ray'],
          icon: 'radiology',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo'],
          icon: 'cardiac',
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: [
            'Physician',
            'Ophthalmology',
            'ENT',
            'Specialist of Choice',
            'Life Style',
            'Dental',
          ],
          icon: 'speciality',
        },
      ],
      test: '23',
    },
    {
      title: 'Master Health Check Up',
      price: 2600,
      packageId: 7,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [
            'Complete Blood count with ESR',
            'Fasting Blood Sugar',
            'Post prandial blood sugar',
            'Complete Urine Examination',
            ' Lipid profile',
            'Serum Creatinine',
            'LFT',
            'TSH',
          ],
          icon: 'blood',
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray'],
          icon: 'radiology',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo'],
          icon: 'cardiac',
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'Life Style', 'Dental'],
          icon: 'speciality',
        },
      ],
      test: '18',
    },
    {
      title: 'Executive Health Check Up (Female)',
      price: 4500,
      packageId: 8,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [
            'Fasting Blood Sugar',
            'Post prandial blood sugar',
            'Complete Urine Examination',
            'Creatinine',
            'Vitamin D ',
            ' Lipid profile',
            'Pap Smear',
            'TFT',
            'LFT',
          ],
          icon: 'blood',
        },
        {
          title: 'RADIOLOGY',
          items: ['USG (Abd & Plv)', 'Chest X-Ray', 'MammoGraphy'],
          icon: 'radiology',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo'],
          icon: 'cardiac',
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: [
            'Physician',
            'Ophthalmology',
            'ENT',
            'Life Style',
            'Speciality of Choice',
            'Dental',
          ],
          icon: 'speciality',
        },
      ],
      test: '20',
    },
    {
      title: 'Well Women check up',
      price: 3000,
      packageId: 9,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [
            'Fasting Blood Sugar',
            'Post prandial blood sugar',
            'CBC',
            'Sr. Creatinine',
            'Urine Routine',
            'Lipid profile',
            'Pap Smear',
            'TFT',
            'LFT',
          ],
          icon: 'blood',
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray', 'Breast Imaging'],
          icon: 'radiology',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG'],
          icon: 'cardiac',
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Gynecologist', 'Life Style', 'Dental'],
          icon: 'speciality',
        },
      ],
      test: '19',
    },
    {
      title: 'Comprehensive Diabetic check',
      price: 4000,
      packageId: 10,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [
            'Fasting Blood Sugar',
            'Uric Acid',
            'Complete Blood Count with ESR',
            'Post prandial blood sugar',
            'Complete Urine Examination',
            'Serum Creatinine',
            'HBA1C',
            'TSH',
            'Blood Urea',
            'Electrolytes',
            'Urine Microalbumin',
            'Urine Creatinine',
            'Microalbumin / Creatinine Ratio (random Urine)',
            ' Lipid profile',
            'Blood Urea Nitrogen',
            'TFT',
            'LFT',
          ],
          icon: 'blood',
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray'],
          icon: 'radiology',
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo'],
          icon: 'cardiac',
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: [
            'Ophthalmology',
            'ENT',
            'Life Style',
            'Dental',
            'Diabetologist / Physician',
          ],
          icon: 'speciality',
        },
      ],
      test: '27',
    },
  ];

  getItemsCount(packages: PackageDetails[]): number {
    return packages.reduce((acc, curr) => acc + curr.items.length, 0);
  }

  toggleTab(event: Event, index: number) {
    event.stopPropagation();
    if (this.activeIndex === index) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  isTabActive(index: number): boolean {
    return this.activeIndex === index;
  }

  openBookingForm(packageData: any): void {
    this.selectedPackage = packageData; // Set the selected package
    this.showBookingForm = true; // Show the booking form
    console.log(this.showBookingForm);
  }

  closeBookingForm(): void {
    this.selectedPackage = null; // Clear selected package
    this.showBookingForm = false; // Hide the booking form
  }

  handleFormSubmission(data: any): void {
    console.log('Form submitted:', data);
    this.closeBookingForm(); // Close the booking form after submission
  }
}
