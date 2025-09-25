import { Component } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samraksha',
  templateUrl: './samraksha.component.html',
  styleUrl: './samraksha.component.css'
})
export class SamrakshaComponent {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) { }
  ngOnInit() {
    this.titleService.setTitle("Samraksha – Thalassemia Day Care Centre | Rashtrotthana Blood Centre");
    // Set the meta description
    this.metaService.updateTag({ name: 'description', content: 'Samraksha, Rashtrotthana Blood Centre’s Thalassemia Day Care, provides free transfusions, medication, and care to 400+ children.' });
  }
} 
