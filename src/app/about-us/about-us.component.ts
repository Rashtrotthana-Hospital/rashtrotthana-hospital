import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {}
  ngOnInit(): void {
  this.titleService.setTitle("About Rashtrotthana Hospital, RR Nagar Bangalore India");  

  this.metaService.updateTag({ name: 'description', content: 'Holistic care at Rashtrotthana Hospital: Modern Medicine, Ayurveda, Homeopathy, Yoga & Naturopathy.' });

  this.metaService.updateTag({ name: 'keywords', content: 'rashtrotthana hospital, modern medicine, ayurveda, homeopathy, yoga, naturopathy, affordable healthcarae' });


}

navigateToPage() {
    this.router.navigate(['/samraksha']);
    console.log('About Us');
  }

}
