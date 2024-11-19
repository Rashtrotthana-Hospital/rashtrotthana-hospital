
import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 



@Component({
  selector: 'app-emergency-facility',
  templateUrl: './emergency-facility.component.html',
  styleUrl: './emergency-facility.component.css'
})
export class EmergencyFacilityComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  facilities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Emergency & Trauma Care Hospital in Bangalore - Rashtrotthana");  

  this.metaService.updateTag({ name: 'description', content: 'Discover top-tier emergency and trauma care services at Rashtrotthana Hospital, Bangalore\'s leading multispeciality healthcare provider.' });

  this.metaService.updateTag({ name: 'keywords', content: 'emergency care, trauma center, best hospital Bangalore, 24/7 emergency services' });

  

this.facilities=[
  {
    main_heading:'Emergency & Trauma Care',
    heading:'Emergency & Trauma Care',
    content:`The Emergency and Trauma Care Department at Rashtrotthana Hospital offers 24/7 specialized services to handle critical medical situations with speed and efficiency. Our team of experienced emergency physicians, trauma specialists and support staff is trained to manage a range of emergencies, including severe injuries, cardiac events,<a href="https://en.wikipedia.org/wiki/Stroke">strokes</a>  and respiratory crises. Equipped with state-of-the-art technology, we provide rapid assessments, accurate diagnoses and immediate interventions to stabilize patients in critical conditions. Each patient receives individualized attention and care from admission through treatment, ensuring the highest standards of emergency care in a compassionate environment.`,
    content_1:'Our facility is designed to handle complex trauma cases, with advanced resuscitation equipment, intensive care units and access to surgical teams for urgent interventions. By implementing internationally recognized protocols and collaborating with other specialties, we maximize recovery outcomes for each patient. Beyond urgent care, we emphasize public awareness and preparedness, promoting community understanding of early intervention in emergencies. At Rashtrotthana Hospital, our commitment to patient-centered care, advanced technology and round-the-clock support makes us a trusted leader in emergency and trauma care in Bangalore.',
    image_1:'emergency-facility.png',
    image_2:'emergency-facility-1.png',
     bg_image:'emergency-bg.png'
  }
];
this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content);
  this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content_1);
}
}