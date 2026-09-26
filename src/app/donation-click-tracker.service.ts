import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';

declare let gtag: Function;

/**
 * Opens the donation portal and records every Donate button click.
 *
 * Each click is written to the Google Sheet behind the Apps Script web app in
 * environment.donationClickLogUrl (see donation-click-tracker.gs for the script).
 * The site has no login, so a visitor is identified by IP, approximate location,
 * browser and a per-browser id rather than by name.
 */
@Injectable({
  providedIn: 'root'
})
export class DonationClickTrackerService {

  private readonly donateUrl = environment.donateUrl;
  private readonly logUrl = environment.donationClickLogUrl;

  constructor(private http: HttpClient) { }

  /** Opens the donation portal in a new tab. Logging never delays the click. */
  openDonatePage(source: string): void {
    this.logClick(source);
    window.open(this.donateUrl, '_blank', 'noopener');
  }

  private logClick(source: string): void {
    if (typeof gtag === 'function') {
      gtag('event', 'donate_click', {
        event_category: 'Donation',
        event_label: source
      });
    }

    // no web app URL configured yet - the button still works, nothing is logged
    if (!this.logUrl) {
      return;
    }

    // the browser cannot read its own public IP, so ask an IP lookup service
    this.http.get<any>('https://ipapi.co/json/').subscribe({
      next: (info) => this.sendToSheet(source, info),
      error: () => this.sendToSheet(source, null)
    });
  }

  private sendToSheet(source: string, info: any): void {
    const now = new Date();

    const payload = {
      date: now.toLocaleDateString('en-IN'),
      time: now.toLocaleTimeString('en-IN'),
      timestamp: now.toISOString(),
      source: source,
      pageUrl: window.location.href,
      ip: info?.ip || 'unknown',
      city: info?.city || '',
      region: info?.region || '',
      country: info?.country_name || '',
      visitorId: this.getVisitorId(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct'
    };

    // text/plain keeps this a "simple" request - Apps Script web apps reject
    // the CORS preflight that an application/json body would trigger
    this.http.post(this.logUrl, JSON.stringify(payload), {
      headers: new HttpHeaders({ 'Content-Type': 'text/plain;charset=utf-8' }),
      responseType: 'text'
    }).subscribe({
      error: (err) => console.error('Donation click log failed', err)
    });
  }

  /** Same browser keeps the same id, so repeat clicks by one person are visible. */
  private getVisitorId(): string {
    try {
      let id = localStorage.getItem('visitor_id');
      if (!id) {
        id = `v-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
        localStorage.setItem('visitor_id', id);
      }
      return id;
    } catch {
      return 'unavailable';
    }
  }
}
