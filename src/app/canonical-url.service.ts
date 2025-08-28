import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanonicalUrlService {
  private customRules = new Map<string, string>();
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    this.setupCustomRules();
    this.initializeCanonicalTracking();
  }

  private setupCustomRules() {
    // DUPLICATE URLs (shorter paths) should point to CANONICAL URLs (full paths)
    
    // Specialities duplicates → Point to canonical specialities URLs
    this.customRules.set('/yoga-therapy-bangalore', '/specialities/yoga-therapy-bangalore');
    this.customRules.set('/ayurvedic-treatment-bangalore', '/specialities/ayurvedic-treatment-bangalore');
    this.customRules.set('/homeopathy-treatment-bangalore', '/specialities/homeopathy-treatment-bangalore');
    this.customRules.set('/lifestyle-medicine-bangalore', '/specialities/lifestyle-medicine-bangalore');
    
    // Facility duplicates → Point to canonical facility URLs
    this.customRules.set('/laboratory-services-bangalore', '/facility/laboratory-services-bangalore');
    this.customRules.set('/best-kidney-dialysis-multispeciality-hospital-bangalore', '/facility/best-kidney-dialysis-multispeciality-hospital-bangalore');
    this.customRules.set('/24-hours-pharmacy-store-bangalore', '/facility/24-hours-pharmacy-store-bangalore');
    this.customRules.set('/top-diagnostics-multi-speciality-hospital-bangalore', '/facility/top-diagnostics-multi-speciality-hospital-bangalore');
    this.customRules.set('/best-emergency-trauma-multispeciality-hospital-bangalore', '/facility/best-emergency-trauma-multispeciality-hospital-bangalore');
    
    // Insurance duplicate → Point to canonical facility URL
    this.customRules.set('/insurance', '/facility/health-insurance-plans-bangalore');
  }

  private initializeCanonicalTracking() {
    // Set initial canonical URL
    this.updateCanonicalForCurrentRoute();
    
    // Listen to route changes - FIX: Proper type casting
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCanonicalForRoute(event.urlAfterRedirects);
      });
  }

  private updateCanonicalForCurrentRoute() {
    this.updateCanonicalForRoute(this.router.url);
  }

  private updateCanonicalForRoute(url: string) {
    // Remove query parameters (including UTM) and fragments for canonical URL
    const cleanUrl = this.cleanUrlForCanonical(url);
    
    // Check if we have a custom rule for this URL
    const canonicalUrl = this.customRules.get(cleanUrl) || cleanUrl;
    
    this.setCanonicalUrl(canonicalUrl);
  }

  private cleanUrlForCanonical(url: string): string {
    // Parse the URL to separate path from query parameters
    const [path, queryString] = url.split('?');
    const cleanPath = path.split('#')[0]; // Also remove fragments
    
    if (!queryString) {
      return cleanPath;
    }

    // Parse query parameters
    const params = new URLSearchParams(queryString);
    const preservedParams = new URLSearchParams();

    // Define which parameters to preserve in canonical URLs (if any)
    const preservableParams: string[] = [
      // 'page',     // Uncomment if you want to preserve pagination
      // 'category', // Uncomment if you want to preserve category filters
      // 'sort',     // Uncomment if you want to preserve sorting
    ];

    // UTM parameters and other tracking parameters to ALWAYS remove
    const trackingParams = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'utm_id', 'utm_source_platform',
      'fbclid', 'gclid', 'msclkid', 'twclid',
      'ref', 'referrer', 'source',
      '_ga', '_gl', '_ke',
      'mc_cid', 'mc_eid', // MailChimp
      'campaign_id', 'ad_id', 'adset_id',
      'hsCtaTracking', 'hsCta', // HubSpot
    ];

    // Preserve only allowed parameters
    params.forEach((value, key) => {
      if (preservableParams.includes(key) && !trackingParams.includes(key)) {
        preservedParams.set(key, value);
      }
    });

    // Return clean URL with preserved parameters (if any)
    const preservedQuery = preservedParams.toString();
    return preservedQuery ? `${cleanPath}?${preservedQuery}` : cleanPath;
  }

  private setCanonicalUrl(url: string) {
    // Remove existing canonical link
    const existingLink = this.document.querySelector('link[rel="canonical"]');
    if (existingLink) {
      existingLink.remove();
    }

    // Create new canonical link
    const link = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    
    // Get base URL (replace with your actual domain)
    const baseUrl = this.getBaseUrl();
    const canonicalUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
    
    link.setAttribute('href', canonicalUrl);
    this.document.head.appendChild(link);
  }

  private getBaseUrl(): string {
    // Replace with your actual domain in production
    if (typeof window !== 'undefined') {
      const { protocol, hostname, port } = window.location;
      const portString = port && port !== '80' && port !== '443' ? `:${port}` : '';
      return `${protocol}//${hostname}${portString}`;
    }
    return 'https://yourdomain.com'; // Fallback for SSR
  }

  // Method for manual override (use sparingly)
  setCustomCanonical(url: string) {
    this.setCanonicalUrl(url);
  }

  // Add custom rule dynamically
  addCustomRule(fromUrl: string, toUrl: string) {
    this.customRules.set(fromUrl, toUrl);
  }

  // Method to handle specific UTM scenarios (if needed)
  handleUtmRedirect(currentUrl: string, canonicalPath: string) {
    const cleanPath = this.cleanUrlForCanonical(currentUrl);
    if (cleanPath !== canonicalPath) {
      this.addCustomRule(cleanPath, canonicalPath);
    }
  }

  // Get clean URL without tracking parameters (utility method)
  getCleanUrl(url: string): string {
    return this.cleanUrlForCanonical(url);
  }
}