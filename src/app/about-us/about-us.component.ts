import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
  this.titleService.setTitle("About Rashtrotthana Hospital, R R Nagar Bangalore India");  

  this.metaService.updateTag({ name: 'description', content: ' Rashtrotthana Hospital affiliated with Rashtrotthana Trust, we dedicate ourselves to providing exceptional healthcare services. Within our 162-bed facility, we prioritize holistic care, offering specialized treatments in Modern Medicine, Ayurveda, Homeopathy, Yoga & Naturopathy.' });

  this.metaService.updateTag({ name: 'keywords', content: 'rashtrotthana hospital, modern medicine, ayurveda, homeopathy, yoga, naturopathy, affordable healthcarae' });
}}
