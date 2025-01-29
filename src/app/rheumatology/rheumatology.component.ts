import { Component } from '@angular/core';

@Component({
  selector: 'app-rheumatology',
  templateUrl: './rheumatology.component.html',
  styleUrl: './rheumatology.component.css'
})
export class RheumatologyComponent {

  doctors = [
    {
      doctor_name : "Dr. Matam Sri Anusha",
      experience : "8",
      doctor_image : "../../assets/Dr-Matam-Sri-Anusha.png",
      docalt : "Dr. Matam Sri Anusha| Top rheumatology in banaglore | Rashtrotthana Hospital"
    }
  ]

}
