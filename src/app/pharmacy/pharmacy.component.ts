import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { Facility } from '../facility.model';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrl: './pharmacy.component.css'
})
export class PharmacyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  sanitizedContent2: SafeHtml = '';
  facilities:Facility[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("24/7 Pharmacy Services at Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers 24-hour pharmacy services in Bangalore for all your medicinal needs, available round-the-clock.' });

  this.metaService.updateTag({ name: 'keywords', content: '24/7 pharmacy, hospital pharmacy, Bangalore pharmacy services' });

  
  this.facilities=[
    {
      main_heading:'Pharmacy',
      heading:'Pharmacy',
      image_1:'patient-service-1.png',
      image_2:'patient-service-2.png',
      subFacilities:[{
        subHeading:'Convenient Pharmacy Solutions at Rashtrotthana Hospital:',
        subContent:`Discover convenience and reliability with our 24X7 <a href="https://en.wikipedia.org/wiki/Pharmacy">Pharmacy</a> services at Rashtrotthana Hospital. Our pharmacy is committed to providing FDA-approved medications and prioritizes GMP-certified drugs to ensure your safety and well-being. With a focus on accessibility and affordability, we offer a 10% discount on outpatient drug prescriptions and vaccinations, making quality healthcare more accessible to all.`
      },
      {
        subHeading:'Personalized Care and Home Delivery Options:',
        subContent:'Experience personalized care and convenience with Rashtrotthana Hospital s pharmacy services. Our dedicated team is here to assist you in selecting the right medications and answering any questions you may have. For added convenience, we offer home delivery within a 5-kilometer radius, ensuring that you have access to essential medications without leaving the comfort of your home. Plus, enjoy an additional 10% discount on drugs delivered to your doorstep.'
      },

    ],
      bg_image:'pharmacy-bg.png'
    }
    ];
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].subFacilities[0].subContent);
  this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].subFacilities[1].subContent);
  this.sanitizedContent2 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].subFacilities[2].subContent);
}

}