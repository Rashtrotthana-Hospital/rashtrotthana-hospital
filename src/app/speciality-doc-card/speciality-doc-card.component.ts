import { Component, Input } from '@angular/core';
declare var gtag: Function;


@Component({
  selector: 'app-speciality-doc-card',
  templateUrl: './speciality-doc-card.component.html',
  styleUrl: './speciality-doc-card.component.css'
})
export class SpecialityDocCardComponent {

  @Input() doctors: any

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
