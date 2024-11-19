import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-operation-theatre',
  templateUrl: './operation-theatre.component.html',
  styleUrl: './operation-theatre.component.css'
})
export class OperationTheatreComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  facilities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Advanced Operation Theatres for Safe Surgeries - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Experience safe and precise surgeries at Rashtrotthana Hospital\'s state-of-the-art operation theatres in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'advanced operation theatre, surgical care, best hospital Bangalore, multispeciality surgery' });

  
  this.facilities=[
    {
      main_heading:'Operation Theatre',
      heading:'Operation Theatre',
      content: `Rashtrotthana Hospital’s Operation Theatre (OT) facilities are designed to support <a href="https://en.wikipedia.org/wiki/Surgery">complex surgeries</a> with precision and safety. With five major and one minor modular OT, our facility is fully equipped with advanced medical technology, ensuring all essential surgical procedures are carried out seamlessly. Our modular OTs meet high standards of hygiene, efficiency and safety, making them ideal for various major surgeries across specialities. Each OT is staffed by certified and experienced professionals trained to manage surgical needs round the clock.`,
      content_1:'Our OT facility prioritizes patient safety and optimal outcomes by maintaining stringent infection control measures and utilizing state-of-the-art equipment for high precision. The dedicated OT staff, including expert surgeons, anesthesiologists and nurses, are committed to providing reliable and compassionate care. Rashtrotthana Hospital’s modular OT setup ensures patients have access to top-tier surgical services, reinforcing our mission to deliver accessible, high-quality healthcare in Bangalore.',
      image_1:'operation-theatre-1.png',
      image_2:'operation-theatre-2.png',
       bg_image:'facilities-bg.png'
    }
  ];
  this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content);
  this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content_1);
}
}
