import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoSchema {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setSchema(schema: object) {
    // Remove existing schema
    const existing = this.document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existing) {
      existing.remove();
    }

    // Add new schema
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }  
}
