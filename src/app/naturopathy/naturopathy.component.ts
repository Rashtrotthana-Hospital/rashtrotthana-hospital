import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-naturopathy',
  templateUrl: './naturopathy.component.html',
  styleUrl: './naturopathy.component.css'
})
export class NaturopathyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Lifestyle - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers expert lifestyle services in Bangalore, focusing on preventive care through healthy lifestyle changes.' });

  this.metaService.updateTag({ name: 'keywords', content: 'lifestyle, preventive care, holistic health, lifestyle changes Bangalore' });

  }
  doctors =[
    {
      image : '../../assets/doctor-14.png',
      name : "Dr. Suvarnini Konale",
      section : "BNYS",
      designation : "LIFESTYLE",
      experience : "15"
    },
    {
      image : '../../assets/doctor-43.png',
      name : "Dr. Varsha P",
      section : "BAMS, MD(Ayu),YIC",
      designation : "LIFESTYLE",
      experience : "4"
    },
    {
      image : 'assets/doctor-54.png',
      name : "Dr. Shamantha",
      section : "BAMS",
      designation : "LIFESTYLE",
      experience : "3"
    }
  ]
}
