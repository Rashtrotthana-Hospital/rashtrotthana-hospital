import { Component } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser';  
declare var gtag: Function;

@Component({
  selector: 'app-rheumatology',
  templateUrl: './rheumatology.component.html',
  styleUrl: './rheumatology.component.css'
})
export class RheumatologyComponent {

  constructor(  
      private titleService: Title,  
      private metaService: Meta,
    ) { } 
    ngOnInit() {  
      this.titleService.setTitle("Rheumatology hospital | Arthritis & Joint Pain Treatment Bangalore");  
      
    // Set the meta description
    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers expert rheumatology care for arthritis, joint pain, and autoimmune diseases, with advanced rheumatoid arthritis treatment.' });
  
    // Optionally set other meta tags
    this.metaService.updateTag({ name: 'keywords', content: '' }); 
          
    }

  doctors = [
    {
      doctor_name : "Dr. Matam Sri Anusha",
      experience : "8",
      doctor_image : "../../assets/dummy.png",
      docalt : "Dr. Matam Sri Anusha| Top rheumatology in banaglore | Rashtrotthana Hospital"
    }
  ]

  trackPhoneClick() {
    if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-16656770043/-YEMCITg09IZEPvHyIY-',
      'event_callback': () => {
        console.log('Phone call conversion tracked!');
      }
    });
  }
  }
}
