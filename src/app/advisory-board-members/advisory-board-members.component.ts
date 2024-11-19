import { Component } from '@angular/core';

@Component({
  selector: 'app-advisory-board-members',
  templateUrl: './advisory-board-members.component.html',
  styleUrl: './advisory-board-members.component.css'
})
export class AdvisoryBoardMembersComponent {
  photos = [
    { url: '../../assets/mem-1.png', alt: 'Photo 1' },
    { url: '../../assets/mem-5.png', alt: 'Photo 2' },
    { url: '../../assets/mem-8.png', alt: 'Photo 3' },
    { url: '../../assets/mem-2.png', alt: 'Photo 3' },
    { url: '../../assets/mem-6.png', alt: 'Photo 3' },
    { url: '../../assets/mem-9.png', alt: 'Photo 3' },
    { url: '../../assets/mem-3.png', alt: 'Photo 3' },
    { url: '../../assets/mem-7.png', alt: 'Photo 3' },
    { url: '../../assets/mem-10.png', alt: 'Photo 3' },
    { url: '../../assets/mem-4.png', alt: 'Photo 3' },
  ];
  
  boardMembers = [
    {
        name : "Dr. B. N Gangadhar",
        photo: '../../assets/rc-member-4.png',
        designation : "Chairman",
        department : "National Medical Commission, Government of India",
        role : " Former Director",
        place : "National Institute of Mental Health and Neuro Sciences",
        speciality : "Psychiatry, Yoga, Ayurveda"
    },
    {
        name : "Dr. H. S Subramanya",
        photo: '../../assets/rc-member-1.png',
        designation : "Dean",
        department : "School of Biosciences Chanakya university Bengaluru",
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
        designation : "Professor and Head",
        department : "Department of Integrative Medicine",
        role : "",
        place : "National Institute of Mental Health and Neurosciences",
        speciality : "Ayurveda, Neurophysiology and Yoga"
    },
    {
        name : "Dr. Girish Tillu",
        photo: '../../assets/rc-member-10.png',
        designation : "Assistant Professor",
        department : "Department of Health Sciences, Savitribai Phule Pune University ",
        role : "Principal Investigator",
        place : "AYUSH Centre of Excellence",
        speciality : "Ayurveda, Complementary and Integrative Health"
    },  
    {
        name : "Dr. B Ravishankar",
        photo: '../../assets/rc-member-6.png',
        designation : "Former Head",
        department : "Pharmacology Laboratory, IPGT & RA, Gujarat",
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
        designation : "Medical Director and Consultant",
        department : "Samatvam Endocrinology Diabetes Centre",
        role : "",
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
]
  selectedMember: any = null;

  showPopup(member: any) {
    this.selectedMember = member;
  }

  closePopup() {
    this.selectedMember = null;
  }
}
