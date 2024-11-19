import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }
  public sendPageView(url: string) {
    gtag('config', 'G-6T1G50PFJK', {
      'page_path': url
    });
  }

  public sendEvent(action: string, category: string, label?: string, value?: number) {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
}
