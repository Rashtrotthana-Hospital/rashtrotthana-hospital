import { Component } from '@angular/core';

declare function gtag(command: string, eventName: string, params?: any): void;
declare const qp: any;

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent {

  ngOnInit() {
    this.trackConversion()
    this.trackQuoraConversion() 
  }

  trackConversion() {
    console.log('g-tag event triggered');
    gtag('event', 'conversion', {
      send_to: 'AW-16656770043/x-W0COOwn-gaEPvHyIY-'
    });
  }

  trackQuoraConversion() {
    if (typeof qp === 'function') {
      qp('track', 'GenerateLead');
    } else {
      console.error('Quora Pixel not loaded.');
    }
  }

}
