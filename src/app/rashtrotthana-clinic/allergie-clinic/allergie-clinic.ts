import { Component } from '@angular/core';

@Component({
  selector: 'app-allergie-clinic',
  standalone: false,
  templateUrl: './allergie-clinic.html',
  styleUrl: './allergie-clinic.css'
})
export class AllergieClinic {
  showPopup = false

  openPopup() {
    this.showPopup = true
  }

  closePopup() {
    this.showPopup = false
  }

  doctorCard = {
    title: 'Allergy & ENT',
    name: 'Dr. Sandhya S. Patil',
    degree: `MBBS, DLO, DNB (ENT),
     AASC Consultant – ENT and Head & Neck Surgery`,
    experience: '10+ Years',
    timings: 'Every Friday, 3 PM – 4 PM',
    speciality: 'ENT & Allergy Care',
    image: 'assets/Doc-Inv-Page/dr-sandhya-s-sq.png',
    slug: 'dr-sandhya-s-patil',

    icons: {
      experience: 'assets/allergy-clinic/icon-park-solid_loading-three.png',
      timings: 'assets/allergy-clinic/mdi_clock.png',
      speciality: 'assets/allergy-clinic/Vector.png'
    }
  };

}
