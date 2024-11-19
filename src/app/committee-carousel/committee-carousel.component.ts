import { Component } from '@angular/core';

@Component({
  selector: 'app-committee-carousel',
  templateUrl: './committee-carousel.component.html',
  styleUrl: './committee-carousel.component.css'
})
export class CommitteeCarouselComponent {
  members = [
    {
      image : "../../assets/member_1.png",
      name : "Dr. B. R RAMAKRISHNA",
      qualification : "BAMS, MD, PhD",
      designation : "Pro-Chancellor",
      address : "Swami Vivekananda Yoga Anusandhana Samsthana Bengaluru, Karnataka 560105,",
      role : "Former Vice President,",
      roleDesv : "Central Council for Indian Medicine",
      description : "Designation/ role of member in Ethics Committee : Chairperson",
      role_2 : "Chair Person" 
    },
    {
      image : "../../assets/member_2.png",
      name : "Dr. Swarnarekha Bhat",
      qualification : "MBBS (MD PAEDIATRICS)",
      designation : "Chairperson,",
      address : "Clinical Audit Committee, Jayadev Memorial Rashtrotthana Hospital and Research Centre, 5th Stage, Rajarajeshwari Nagar, Bengaluru 560098",
      role : "",
      roleDesv : "",
      description : "Designation/ role of member in Ethics Committee : Member Secretary ",
      role_2 : "Member Secretary" 
    },
    {
      image : "../../assets/member_3.png",
      name : "Dr. T. N Sathyaprabha",
      qualification : "MBBS MD PhD",
      designation : "Professor,",
      address : "Dept of Neurophysiology, National Institute of Mental Health and Neurosciences (NIMHANS)",
      role : "",
      roleDesv : "",
      description : "Designation/ role of member in Ethics Committee : Basic Medical Scientist",
      role_2 : "Member Secretary"
    },
    {
      image : "../../assets/member_4.png",
      name : "Dr. Bhagya Venkanna Rao",
      qualification : "PhD",
      designation : "Associate Professor,",
      address : "KLE College of Pharmacy, KLE University, Bengaluru 560021",
      role : "",
      roleDesv : "",
      description : "Designation/ role of member in Ethics Committee : Basic Medical Scientist",
      role_2 : "Basic Medical Scientist "
    },
    {
      image : "../../assets/member_5.png",
      name : "Dr. Neetina Kumar Patil",
      qualification : "BAMS, PhD",
      designation : "Associate Professor,",
      address : "(Yoga Therapy & Ayurveda Consultant)",
      role : "",
      roleDesv : "Centre for Integrative Medicine & Research (CIMR) Manipal Academy Of Higher Education",
      description : "Designation/ role of member in Ethics Committee : Clinician",
      role_2 : "Clinician"
    },
    {
      image : "../../assets/member_7.png",
      name : "Dr. Suchithra S Patil",
      qualification : "BAMS MD PhD",
      designation : "Assistant Professor, ",
      address : "Swami Vivekananda Yoga Anusandhana Samsthana Bengaluru, Karnataka 560105",
      role : "",
      roleDesv : "",
      description : "Designation/ role of member in Ethics Committee : Clinician",
      role_2 : "Clinician"
    },
    {
      image : "../../assets/member_8.png",
      name : "Mr. Jagdisha Sharma",
      qualification : "",
      designation : "",
      address : "Social activist and Writer",
      role : "",
      roleDesv : "",
      description : "Designation/ role of member in Ethics Committee : Social Scientist",
      role_2 : "Social Scientist"
    },
    {
      image : "../../assets/member_9.png",
      name : "Mr. Subrahmanya Bharati Konale",
      qualification : "",
      designation : "",
      address : "Chair Man, BISKUROM Foundation",
      role : "",
      roleDesv : "",
      description : "Designation/ role of member in Ethics Committee : Social Scientist ",
      role_2 : "Social Scientist"
    },
    {
      image : "../../assets/member_11.png",
      name : "Adv. Vishwajith K",
      qualification : "",
      designation : "",
      address : "Advocate",
      role : "",
      roleDesv : "",
      description : "Designation/ role of member in Ethics Committee : Legal Expert ",
      role_2 : "Legal Expert"
    },
    {
      image : "../../assets/member_10.png",
      name : "Mr. Durganna D",
      designation : "",
      address : "Rt. Teacher",
      role : "",
      roleDesv : "",
      description : "Designation/ role of member in Ethics Committee : Lay Person ",
      role_2 : "Lay Person"
    },
    {
      image : "../../assets/member_12.png",
      name : "Dr. Shubha Madhusudhan",
      qualification : "",
      designation : "Director, ",
      address : "Manasvi Dynamics Pvt Ltd",
      role : "",
      roleDesv : "",
      description : "Designation/ role of member in Ethics Committee : Member ",
      role_2 : "Member"
    },
    {
      image : "../../assets/member_13.png",
      name : "Dr. Vinodkumar T. G Nair",
      qualification : "BAMS",
      designation : "Senior Scientist ",
      address : "Jawaharlal Nehru Tropical Botanic Garden and Research Institute Karimancode, Palode, Kerala 695562",
      role : "",
      roleDesv : "Former Member, Board of Governors,CCIM, GOI",
      description : "Designation/ role of member in Ethics Committee : Member"
    }
]


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
