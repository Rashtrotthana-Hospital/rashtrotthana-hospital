
import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';


@Component({
  selector: 'app-icu',
  templateUrl: './icu.component.html',
  styleUrl: './icu.component.css'
})
export class IcuComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  facilities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Premier Intensive Care Unit in Bangalore - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Get advanced critical care services at Rashtrotthana Hospital\'s top-rated Intensive Care Unit in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'intensive care unit, critical care, ICU Bangalore, multispeciality hospital' });

  
  this.facilities=[
    {
      main_heading:'I.C.U',
      heading:'I.C.U',
      content:'Rashtrotthana Hospital’s state-of-the-art <a  target="_blank" href="https://en.wikipedia.org/wiki/Intensive_care_unit">Intensive Care Unit (ICU)</a> in Bangalore is equipped with over 30 specialized beds, supporting comprehensive critical care for various medical emergencies. Our ICU facility includes dedicated units: Medical ICU, Surgical ICU, Pediatric ICU, Neonatal ICU and Cardiac ICU, each designed for focused, specialized care with advanced life-support systems and continuous monitoring.',
      content_1:'Under the 24/7 guidance of qualified and experienced intensivists, Rashtrotthana Hospital’s ICU is prepared for complex medical needs, providing high-quality emergency care that patients and families can trust. With cutting-edge equipment, strict infection control and round-the-clock staffing, our ICU is a leading choice for critical care in Bangalore.',
      image_1:'best-multispeciality-ICU-in-bangalore-rashtrotthana-hospital.jpeg',
      image_2:'advanced-critical-care-at-rashtrotthana-hospital.jpeg',
      bg_image:'advanced-critical-care-at-rashtrotthana-hospital.png',
      alt1 : 'Rashtrotthana Hospital Intensive Care Unit',
      alt2 : 'Best Multispeciality ICU in Bangalore - Rashtrotthana Hospital',
      alt3 : 'Advanced Critical Care at Rashtrotthana Hospital'
    }
  ];
  this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content);
  this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content_1);
}
}
