import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';


@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.css'
})
export class LaboratoryComponent {
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  facilities:any[] = [];
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Advanced Laboratory Services - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital\'s laboratory offers accurate and prompt diagnostic testing services in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'lab tests, diagnostic lab, hospital lab Bangalore, pathology services' });

  
  this.facilities=[
    {
      main_heading:'Laboratory Services',
      heading:'Laboratory Services',
     content:`Rashtrotthana Hospital’s Laboratory Services are committed to providing high-quality, precise diagnostics to support patient care and enable informed healthcare decisions. Equipped with cutting-edge technology and staffed by skilled technicians, our laboratory delivers accurate, timely results that serve as a foundation for effective treatment. From routine blood tests to specialized diagnostics in haematology, biochemistry, microbiology and <a href="https://en.wikipedia.org/wiki/Immunology">immunology</a>, our lab covers a wide range of testing needs with a focus on reliability and accuracy.`,
     content_1:`Our patient-centered approach ensures personalized service, allowing individuals to choose from a variety of diagnostic tests based on their health requirements. Rashtrotthana Hospital’s laboratory team works closely with medical professionals to provide diagnostic support that enhances treatment outcomes. Our lab services are a trusted component of healthcare at Rashtrotthana, empowering patients with the knowledge and confidence to make well-informed decisions about their health journey.`,
      image_1:'lab-service-1.png',
      image_2:'lab-service-2.png',
       bg_image:'lab-bg.png'
    }
  ];
  
  // Sanitizing the content for safe HTML rendering
  this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content);
  this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content_1);



}

}
