import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Ambient declaration for the global fbq function
declare const fbq: Function;

@Injectable({ providedIn: 'root' })
export class FacebookPixelService {
  private pixelId = '1881974392357348';
  private trackingEnabled = true;

  constructor(private router: Router) {
    if (this.trackingEnabled) {
      this.initPixel();
      this.trackRouteChanges();
    }
  }

  private initPixel(): void {
    if (typeof fbq === 'function') {
      fbq('init', this.pixelId);
    }
  }

  private trackRouteChanges(): void {
    this.router.events
      .pipe(
        // --- FIX IS HERE: Add the 'is NavigationEnd' type guard ---
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        // Now, TypeScript knows 'event' is definitely 'NavigationEnd' here.
        if (typeof fbq === 'function') {
          fbq('track', 'PageView');
        }
      });
  }
}
