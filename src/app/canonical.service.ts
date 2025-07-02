import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CanonicalService {
  constructor(@Inject(DOCUMENT) private dom: Document) {}

  setCanonical(url: string) {
    let link: HTMLLinkElement = this.dom.querySelector("link[rel='canonical']") || this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    if (!link.parentElement) {
      this.dom.head.appendChild(link);
    }
  }
}