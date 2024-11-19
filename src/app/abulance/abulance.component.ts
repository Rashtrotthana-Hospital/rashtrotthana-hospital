
import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-abulance',
  templateUrl: './abulance.component.html',
  styleUrl: './abulance.component.css'
})
export class AbulanceComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  sanitizedContent2: SafeHtml = '';
  facilities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Reliable Ambulance Service in Bangalore - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides fast and reliable ambulance services across Bangalore, ensuring timely medical transport.' });

  this.metaService.updateTag({ name: 'keywords', content: 'ambulance service, emergency transport, best ambulance Bangalore' });

  
  this.facilities=[
    {
      main_heading:'Ambulance Services',
      heading:'Ambulance Services',
     content:`Rashtrotthana Hospital provides 24/7 ambulance services with two fully equipped Advanced Life Support (ALS) ambulances to respond promptly to <a href="https://en.wikipedia.org/wiki/Critical_emergency_medicine">critical emergencies</a> across Bangalore. Each ALS ambulance is equipped with advanced life-saving equipment, including cardiac monitors, oxygen support and defibrillators, ensuring thorough pre-hospital care. Trained medical professionals accompany each ambulance, delivering safe and reliable transport to patients in need.`,
     content_1:'Additionally, our Clinic on Wheels is a mobile healthcare solution that brings essential medical services to rural communities. Equipped for outpatient consultations, health examinations, sample collection and medication dispensing, this innovative initiative expands high-quality healthcare accessibility in underserved areas. Through this program, Rashtrotthana Hospital enhances proactive health management, ensuring that even remote areas benefit from comprehensive healthcare support. Both our ALS ambulance and Clinic on Wheels services demonstrate Rashtrotthana Hospital’s commitment to accessible, community-focused care across all regions.',
      image_1:'abulance-service-3.jpeg',
      image_2:'abulance-service-2.jpg',
       bg_image:'ambulance-bg.png'
    }
  ];
  this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content);
  this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content_1);
  
}
}