import { Component } from '@angular/core';

@Component({
  selector: 'app-advisory-carousel',
  templateUrl: './advisory-carousel.component.html',
  styleUrl: './advisory-carousel.component.css'
})
export class AdvisoryCarouselComponent {
  members = [
      {
          name : "Dr. B. N Gangadhar",
          photo: '../../assets/rc-member-4.png',
          designation : "Chairman",
          department : "NIMHANS",
          role : " Former Director",
          place : "National Medical Commission, New Delhi",
          speciality : "Psychiatry, Yoga, Ayurveda"
      },
      {
          name : "Dr. H. S Subramanya",
          photo: '../../assets/rc-member-1.png',
          designation : "HOD and Professor",
          department : "Dept. of Biosciences, Chanakya University",
          role : "Former Director",
          place : "Institute of Bioinformatics and Biotechnology, Bengaluru",
          speciality : "Bioinformatics and Biotechnology"
      },
      {
          name : "Dr. Shivarama Varambally",
          photo: '../../assets/rc-member-2.png',
          designation : "Professor of Psychiatry ",
          department : "National Institute of Mental Health and Neurosciences, Bengaluru",
          role : "",
          place : "",
          speciality : "Yoga and Psychiatry"
      },
      {
          name : "Dr. Kishore Kumar Ramakrishna",
          photo: '../../assets/rc-member-9.png',
          designation : "Professor of Ayurveda",
          department : "Department of Integrative Medicine",
          role : "",
          place : "National Institute of Mental Health and Neurosciences",
          speciality : "Ayurveda, Neurophysiology and Yoga"
      },
      {
          name : "Dr. Girish Tillu",
          photo: '../../assets/rc-member-10.png',
          designation : "Assistant Professor",
          department : "Department of Health Sciences Savitribai Phule Pune University ",
          role : "Principal Investigator",
          place : "AYUSH Center of Excellence",
          speciality : "Ayurveda, Complementary and Integrative Health"
      },  
      {
          name : "Dr. B Ravishankar",
          photo: '../../assets/rc-member-6.png',
          designation : "Former Head",
          department : "Pharmacology Laboratory, IPGT & RA, Gujarat,",
          role : "Former Director",
          place : "SDM Research Centre , Currently an advisor to various Research institutes including CCRAS",
          speciality : "Modern Pharmacology, Ayurveda research"
      },
      {
          name : "Dr. Vaibhavi Joshipura",
          photo: '../../assets/rc-member-7.png',
          designation : "Dental surgeon & Periodontist",
          department : "",
          role : "",
          place : "",
          speciality : "Integration of Ayurveda in Dentistry "
      },
      {
          name : "Dr. S. N Omkar",
          photo: '../../assets/rc-member-8.png',
          designation : "Chief Research Scientist",
          department : "Department of Aerospace Engineering Indian Institute of Science",
          role : "",
          place : "",
          speciality : "Yoga Research, Engineer"
      },
      {
          name : "Dr. S Srikanta",
          photo: '../../assets/rc-member-5.jpeg',
          designation : "Medical Director",
          department : "",
          role : "Distinguished Consultant Endocrinology Diabetes",
          place : "",
          speciality : "Internal Medicine, Endocrinology, Diabetes, Yoga, Ayurveda"
      },
      {
          name : "Dr. S. R Narahari",
          photo: '../../assets/rc-member-3.png',
          designation : "Director",
          department : "Institute of Applied Dermatology, Kasaragod",
          role : "",
          place : "",
          speciality : "Modern Dermatology, Ayurveda and Yoga"
      },
      {
          name : "Dr. Ashwini Godbole",
          photo: '../../assets/rc-member-11.png',
          designation : "Associate Professor",
          department : "Centre for Ayurveda Biology and Holistic Nutrition, Transdisciplinary University, Bengaluru ",
          role : "",
          place : "",
          speciality : "Botany, Molecular Biology Biophysics"
      }
  ];
  


  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.autoRotate();
  }

  getPositionClass(index: number): string {
    const total = this.members.length;
    const leftIndex = (this.currentIndex - 1 + total) % total;
    const rightIndex = (this.currentIndex + 1) % total;

    if (index === this.currentIndex) {
      return 'active';
    } else if (index === leftIndex) {
      return 'left';
    } else if (index === rightIndex) {
      return 'right';
    }
    return '';
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.members.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.members.length) % this.members.length;
  }

  autoRotate(): void {
    setInterval(() => {
      this.next();
    }, 3000);
  }
}
