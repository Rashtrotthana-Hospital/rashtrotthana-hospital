import { Component,OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-ayurveda',
  templateUrl: './ayurveda.component.html',
  styleUrl: './ayurveda.component.css'
})
export class AyurvedaComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.titleService.setTitle(" Holistic Ayurvedic Treatment - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: ' Discover holistic healing with traditional Ayurvedic treatments at Rashtrotthana Hospital, blending ancient wisdom with modern care.' });

  this.metaService.updateTag({ name: 'keywords', content: 'ayurvedic treatment, natural healing, ayurveda hospital Bangalore' });
  }

}
