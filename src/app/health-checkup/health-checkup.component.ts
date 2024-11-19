
import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

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
}

@Component({
  selector: 'app-health-checkup',
  templateUrl: './health-checkup.component.html',
  styleUrl: './health-checkup.component.css'
})
export class HealthCheckupComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Health Check-Up Packages - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Schedule your preventive health check-up at Rashtrotthana Hospital, Bangalore, with our comprehensive packages tailored to your needs.' });

  this.metaService.updateTag({ name: 'keywords', content: 'health check-up packages, preventive health care, regular check-ups Bangalore' });

  }
  activeIndex: number | null = null

  packages: Package[] = [
    {
      title: 'Integrated Diabetic Care',
      price: 599,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: ['Basic Vitals Check','FBS', 'Lipid profile', 'PPBS', 'Serum Creatinine', ' HBA1C'],
          icon: 'blood'
        },
        {
          title:' SPECIALITY CONSULTATIONS',
          items: ['General Physician','Ayurveda', 'Lifestyle'],
          icon: 'speciality'
        } 
      ],
      test: '15'
    },
    {
      title: 'Annual Master Diabetes Care',
      price: 5999,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Post prandial blood sugar', 'Urine Microalbumin (Avail 4 times a year)',' Lipid profile (Avail 2 times a year)', 'HBA1C', 'TFT','TSH', 'TMT', 'USG Abdomen & Pelvis 2D Echo'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Chest X-Ray'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALITY CONSULTATIONS',
          items: ['Physiotherapy Consultation (if required) (Avail once a year)','Physician / Diabetologist Consultation', 'Lifestyle Consultation', 'Lifestyle Management', 'Nutrition & Dietetics Consultation (Avall 4 times a year)'],
          icon: 'speciality'
        } 
      ],
      test: '128'
    },
    {
      title: 'Senior Citizen Health (Male)',
      price: 5500,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Post prandial blood sugar', 'Complete Urine Examination', 'Complete Stool Examination Including occult blood', ' Lipid profile', 'Serum Creatinine', 'Vitamin D', 'HBA1C', 'TFT', 'Liver function test', 'PSA (For Male)'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray', 'Bone mineral Densitometry (Single Region)'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo OR TMT'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ],
      test: '23'
    },
    {
      title: 'Senior Citizen Health Check (Female)',
      price: 5500,
      package: [
        {
          title: 'LABORATORY Investigations',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Post prandial blood sugar', 'Complete Urine Examination', 'Complete Stool Examination Including occult blood', ' Lipid profile', 'Serum Creatinine', 'Vitamin D', 'HBA1C', 'TFT', 'Liver function test', 'PSA (For Male)'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray', 'Bone mineral Densitometry (Single Region)'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo OR TMT'],
          icon: 'cardiac'
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up','Gynecology'],
          icon: 'speciality'
        } 
      ],
      test: '24'
    },
    {
      title: 'Basic Health Check Up',
      price: 950,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Total Cholesterol', ' Urine Routine', 'Blood grouping & RH Typing', 'Serum Creatinine', 'TSH'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: [ 'Chest X-Ray'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG'],
          icon: 'cardiac'
        },
        {
          title: ' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Eye Check / Vision Test'],
          icon: 'speciality'
        } 
      ],
      test: '11'
    },
    {
      title: 'Executive Health Check Up (Male)',
      price: 4200,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Post prandial blood sugar','Complete Hemogram ', 'Complete Urine Examination', 'Complete Stool Examination Including occult blood', ' Lipid profile', 'Serum Creatinine', 'Vitamin D', 'HBA1C', 'TFT', 'Liver function test', 'PSA (For Male)'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo OR TMT'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ],
      test: '23'
    },
    {
      title: 'Master Health Check Up',
      price: 2600,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: ['Complete Blood count with ESR', 'Fasting Blood Sugar', 'Post prandial blood sugar', 'Complete Urine Examination', ' Lipid profile', 'Serum Creatinine','TFT','TSH'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo OR TMT'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ],
      test: '18'
    },
    {
      title: 'Executive Health Check Up (Female)',
      price: 4500,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [ 'Fasting Blood Sugar', 'Post prandial blood sugar', 'Complete Urine Examination','Creatinine','Complete Hemogram', ' Lipid profile', 'Pap Smear','TFT','LFT'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray','MamoGraphy'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo OR TMT'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ],
      test: '20'
    },
    {
      title: 'Well Women check up',
      price: 3000,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [ 'Fasting Blood Sugar', 'Post prandial blood sugar','CBC','Sr Creatinine','Urine Routine', ' Lipid profile', 'Pap Smear','TFT','LFT'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray','Thermal Breast Creaming'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Gynecologist', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ],
      test: '19'
    },
    {
      title: 'Comprehensive Diabetic check',
      price: 4000,
      package: [
        {
          title: 'LABORATORY INVESTIGATIONS',
          items: [ 'Fasting Blood Sugar','Uric Acid','Complete Blood Count with ESR', 'Post prandial blood sugar','Complete Urine Examination','Sr Creatinine','HBA1C','TSH','Blood Urea','Electrolytes','Urine Microalbumin','Urine Creatinine', 'Microalbumin / Creatinine Ratio (random Urine)',' Lipid profile', 'Pap Smear','TFT','LFT'],
          icon: 'blood'
        },
        {
          title: 'RADIOLOGY',
          items: ['Ultrasound (Abd & Plv)', 'Chest X-Ray'],
          icon: 'radiology'
        },
        {
          title: 'CARDIAC EVALUATION',
          items: ['ECG', 'Echo or TMT'],
          icon: 'cardiac'
        },
        {
          title:' SPECIALITY CONSULTATIONS',
          items: ['Physician', 'Ophthalmology', 'ENT', 'Life Style - Cognetive Fitness', 'Diet Counselling', 'Dental Check up'],
          icon: 'speciality'
        } 
      ],
      test: '27'
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
}
