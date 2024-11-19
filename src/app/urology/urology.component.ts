import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-urology',
  templateUrl: './urology.component.html',
  styleUrl: './urology.component.css'
})
export class UrologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];  
  ngOnInit(): void {
    this.titleService.setTitle("Best Urology Hospital in Bangalore | Kidney Specialist Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best urology hospital in Bangalore, India with experienced top urologists providing urology treatment.' });

  this.metaService.updateTag({ name: 'keywords', content: 'best urology hospital near me,urology, urinary problems, UTI, kidney stones, urinary incontinence, urine' });

  this.specialities=[
    {
      main_heading:'Urology',
      content:`The Urology Department at Rashtrotthana Hospital provides comprehensive care for both male and female urological conditions. Specializing in the diagnosis and treatment of urinary tract disorders and male reproductive health, our team is equipped to address issues such as kidney stones, prostate enlargement, bladder and kidney cancers and other complex urological concerns. Our department is staffed with highly trained specialists who utilize advanced techniques, including laparoscopic and laser surgeries, to ensure safe and effective treatments. For prostate issues, we offer Transurethral Resection of the <a href="https://en.wikipedia.org/wiki/Prostate">Prostate</a> (TURP) and other minimally invasive procedures, enhancing patient comfort and recovery.`,
      content_1:'Our facilities include state-of-the-art surgical suites, a dedicated ICU and an 8-bed dialysis unit that caters to patients requiring renal replacement therapies. We emphasize a patient-centered approach, offering preventive screenings, diagnostic tests and personalized treatment plans for each patient. Whether managing complex urological conditions or providing routine care, our Urology Department is committed to delivering exceptional, compassionate care that improves quality of life.',
      heading:'Urology',
      image:'Urology.png',
      Doctors:[
        {
          doctor_image:'Dr.Madhu S N .png',
          doctor_name:'Dr. Madhu S. N',
          experience : "14"
        },
        {
          doctor_image:'Dr. Nagaraj Rao.png',
          doctor_name:'Dr. Nagaraj Rao',
          experience : "25"
        }
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);  
  }

}
