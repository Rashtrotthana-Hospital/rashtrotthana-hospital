import { Component } from '@angular/core';
declare var gtag: Function;


@Component({
  selector: 'app-speciality-doc-card',
  templateUrl: './speciality-doc-card.component.html',
  styleUrl: './speciality-doc-card.component.css'
})
export class SpecialityDocCardComponent {
doctors: any = [
    {
      id: 1,
      name: 'Dr. Nagaraj Rao',
      qualification: 'MBBS, MS, MCH',
      department: 'UROLOGY',
      experience: '26+ Years',
      image: '../../assets/doctor-31.png',
      slug : '/doctor/dr-nagaraj-rao'
    },
    {
      id: 2,
      name: 'Dr. Madhu S. N',
      qualification: 'MBBS, DNB (Urology)',
      department: 'UROLOGIST & ANDROLOGIST',
      experience: '14+ years',
      image: 'assets/Dr-Madhu-S-N.png',
      slug : '/doctor/dr-madhu-s-n'
    }
  ];

    trackPhoneClick() {
    if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-16656770043/-YEMCITg09IZEPvHyIY-',
      'event_callback': () => {
        console.log('Phone call conversion tracked!');
      }
    });
  }
  }
}
