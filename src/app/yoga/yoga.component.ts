import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrl: './yoga.component.css'
})
export class YogaComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Therapeutic Yoga & Wellness | Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Enhance your well-being with therapeutic yoga sessions at Rashtrotthana Hospital in Bangalore, designed for holistic health.' });

  this.metaService.updateTag({ name: 'keywords', content: 'yoga therapy, wellness programs, yoga classes Bangalore' });

  }

  doctors =[
    {
      image : '../../assets/yoga/Dr-Suvarnini-Konale.png',
      name : "Dr. Suvarnini Konale",
      section : "BNYS",
      designation : "LIFESTYLE",
      experience : "15",
      alt : 'Dr. Suvarnini Konale | Best Lifestyle Consultant in Bangalore | Rashtrotthana Hospital'
    },
    {
      image : '../../assets/Dr-Varsha-P.png',
      name : "Dr. Varsha P",
      section : "BAMS, MD(Ayu),YIC",
      designation : "LIFESTYLE",
      experience : "5",
      alt : 'Dr. Varsha P | Best Yoga & Lifestyle Consultant in Bangalore | Rashtrotthana Hospital'
    },
  ]
}
