import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-homeopathy',
  templateUrl: './homeopathy.component.html',
  styleUrl: './homeopathy.component.css'
})
export class HomeopathyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Homeopathic Care - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers comprehensive homeopathic treatments in Bangalore, focusing on holistic and natural healing.' });

  this.metaService.updateTag({ name: 'keywords', content: 'homeopathic treatment, alternative medicine, homeopathy clinic Bangalore' });

  }

  doctors =[
    {
      image : '../../assets/doctor-39.png',
      name : "Dr. Anusha Mutalik Desai",
      section : "BHMS, MD(HOM)",
      designation : "HOMEOPATHY",
      experience : "8"
    }
  ]

}
