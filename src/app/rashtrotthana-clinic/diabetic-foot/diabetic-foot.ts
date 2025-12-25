import { Component } from '@angular/core';

@Component({
  selector: 'app-diabetic-foot',
  standalone: false,
  templateUrl: './diabetic-foot.html',
  styleUrl: './diabetic-foot.css'
})
export class DiabeticFoot {
  showPopup = false

  openPopup() {
    this.showPopup = true
  }

  closePopup() {
    this.showPopup = false
  }

  doctorCard = {
    title: 'Diabetic Foot',
    name: 'Dr. Sameer M. Halageri',
    degree: `MBBS, MS, MCH,
     Plastic and Reconstructive Surgery`,
    experience: '8+ Years',
    timings: 'Every Tuesday & Saturday, | 9:00 AM – 11:00 AM',
    speciality: 'ENT & Allergy Care',
    image: 'assets/Doc-Inv-Page/Dr-Sameer-M-Halageri.png',
    slug: 'dr-sameer-m-halageri',

    icons: {
      experience: 'assets/allergy-clinic/icon-park-solid_loading-three.png',
      timings: 'assets/allergy-clinic/mdi_clock.png',
      speciality: 'assets/allergy-clinic/Vector.png'
    }
  };
}
