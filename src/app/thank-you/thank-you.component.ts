import { Component } from '@angular/core';

declare function gtag(command: string, eventName: string, params?: any): void;

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent {

  ngOnInit() {
    this.trackConversion()
  }

  trackConversion() {
    console.log('g-tag event triggered');
    gtag('event', 'conversion', {
      send_to: 'AW-16656770043/x-W0COOwn-gaEPvHyIY-'
    });
  }

}
