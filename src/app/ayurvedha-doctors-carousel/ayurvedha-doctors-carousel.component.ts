import { Component } from '@angular/core';
import { image } from 'html2canvas/dist/types/css/types/image';

@Component({
  selector: 'app-ayurvedha-doctors-carousel',
  templateUrl: './ayurvedha-doctors-carousel.component.html',
  styleUrl: './ayurvedha-doctors-carousel.component.css'
})
export class AyurvedhaDoctorsCarouselComponent {
  doctors = [
    {
      image : '../../assets/Ayurveda-doctors/Dr.RohithKR.png',
      name : "Dr. Rohith K R",
      section : "BAMS",
      designation : "Resident Medical Officer ",
      Department : "Agnivesha Institute Of Ayurveda",
      experience : "3"
    },

    // {
    //   image : '../../assets/Ayurveda-doctors/Dr.Alekhya.png',
    //   name : "Dr. Alekhya R",
    //   section : "BAMS",
    //   designation : "Resident Medical Officer",
    //   Department : "Agnivesha Institute Of Ayurveda",
    //   experience : "2"
    // },


    {
      image: '../../assets/doctor-61.jpg',
      name: "Dr. H. S Venkatesh",
      section: "BSc, BAMS, FAHO, FAGE",
      designation: "Ayurveda Specialist",
      Department: "Agnivesha Institute Of Ayurveda",
      experience: "25"
    },
    {
      image: '../../assets/doctor-60.jpg',
      name: "Dr. Sapna S",
      section: "MD (Ayu) in Rasa Shastra and Bhaishajya Kalpana, PG Dip (Yoga) Diploma in Medical Astrology",
      designation: "Ayurveda Specialist",
      Department: "Agnivesha Institute Of Ayurveda",
      experience: "20"

    },
  ]
}
