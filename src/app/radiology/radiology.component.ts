
import { Facility } from '../facility.model';
import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrl: './radiology.component.css'
})
export class RadiologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  sanitizedContent2: SafeHtml = '';
  facilities:Facility[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Diagnostics & Radiology Services - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides top diagnostics and radiology services in Bangalore, ensuring accurate results and quality care.' });

  this.metaService.updateTag({ name: 'keywords', content: 'diagnostic services, radiology, multispeciality hospital, best diagnostics Bangalore' });

  
  this.facilities=[
    {
      main_heading:'Radiology Services',
      heading:'Radiology Services',
      image_1:'radiology-facility-service-1.jpeg',
      image_2:'radiology-facility-service-2.jpeg',
      subFacilities:[
        {subHeading:'', subContent:`Rashtrotthana Hospital offers a wide range of radiology services to assist in accurate diagnosis and treatment planning. Cutting-edge imaging technology, including <a href="https://en.wikipedia.org/wiki/X-ray">X-rays</a>, ultrasounds, MRIs and CT scans, equips our advanced radiology department. Our team of experienced radiologists conducts each procedure with precision and care, providing reliable results for informed decision-making by our medical professionals.`}
        ,{
          subHeading:'Comprehensive diagnostic imaging solutions:',
          subContent:'Our radiology department provides comprehensive diagnostic imaging solutions to meet various medical needs. From detecting fractures and internal injuries to screening for underlying health conditions, our advanced imaging services offer invaluable insights. With a focus on timely and accurate diagnosis, we aim to support effective healthcare management and improve patient outcomes.'
        },
        {
          subHeading:'Patient-Focused Approach and Timely Results:',
          subContent:'At Rashtrotthana Hospital, we prioritize patient satisfaction and well-being. We have designed our radiology services with your comfort and convenience in mind. From scheduling appointments to delivering prompt results, we ensure a seamless experience for our patients. With our patient-focused approach and commitment to excellence, you can rely on us for accurate diagnostics and personalized care.'
        }
    ],
    bg_image:'radiology-bg.png'
    }
  ];
  this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].subFacilities[0].subContent);
  this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].subFacilities[1].subContent);
  this.sanitizedContent2 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].subFacilities[2].subContent);
}
}