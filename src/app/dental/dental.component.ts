import { Component } from '@angular/core';
import { Title,Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dental',
  templateUrl: './dental.component.html',
  styleUrl: './dental.component.css'
})
export class DentalComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
  ngOnInit(): void {
    this.specialities=[
      {
        main_heading:'Dental Sciences',
        content:`The Dental Sciences Department at Rashtrotthana Hospital offers a comprehensive range of services dedicated to restoring and maintaining oral health. Equipped with state-of-the-art technology, our facility provides treatments for everything from routine dental care to advanced procedures. Our skilled team of dentists and specialists covers all aspects of dental care, including preventive, restorative, cosmetic and surgical treatments. Services like cavity restoration, tooth extractions and complex procedures, such as <a href="https://en.wikipedia.org/wiki/Dental_implant">dental implants</a> and oral surgeries, are available at accessible prices, ensuring patients receive top-quality care.`,
        content_1:'We offer sub-specializations within dentistry, including Orthodontics, Pedodontics, Periodontics, Prosthodontics, Endodontics and Implantology. Our in-house Oral & Maxillofacial Surgery team provides 24/7 trauma care for accident-related dental injuries, enhancing our commitment to emergency support. In addition to patient care, we conduct dental health camps with local communities, emphasizing the importance of oral hygiene and preventive care. At Rashtrotthana Hospital, our Dental Sciences Department is dedicated to delivering high-quality, patient-centered dental solutions for a healthier smile.',
        heading:'Dental Sciences',
        image:'Dental Sciences.png',
        Doctors:[
          {
            doctor_image:'Dr. H N Shyla.png',
            doctor_name:'Dr. H. N. Shyla',
            experience : "20"
          },
          {
            doctor_image:'Dr.Geethanjali K G.png',
            doctor_name:'Dr. Geethanjali K. G',
            experience : "16"
          },
          {
            doctor_image:'../../assets/doctor-36.png',
            doctor_name:'Dr. Vishnuvardhan V',
            experience : "6"
          }
        ]}];
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
          this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0 ].content_1);
  }

}
