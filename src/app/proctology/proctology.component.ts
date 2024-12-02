import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-proctology',
  templateUrl: './proctology.component.html',
  styleUrl: './proctology.component.css'
})
export class ProctologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Specialized Proctology Services - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Get expert care for anorectal conditions with specialized proctology services at Rashtrotthana Hospital in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'proctology services, anorectal care, specialist proctology Bangalore' });

  }
  contactus(){
    this.router.navigate(['/contact-us-bangalore']);
  }
}
