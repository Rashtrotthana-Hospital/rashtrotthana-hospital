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
    {
      image: '../../assets/Dr-Venkatesh-H-S.jpg',
      name: "Dr. H. S Venkatesh",
      section: "BSc, BAMS, FAHO, FAGE",
      designation: "Ayurveda Specialist",
      Department: "Agnivesha Institute Of Ayurveda",
      experience: "26+",
      alt : 'Dr. Venkatesh H. S | Best Ayurveda Endocrinologist in Bangalore | Rashtrotthana Hospital'
    },
  ]
}
