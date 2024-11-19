import { Component,OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-nephrology',
  templateUrl: './nephrology.component.html',
  styleUrl: './nephrology.component.css'
})
export class NephrologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {}
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];  
  ngOnInit(): void {
    this.titleService.setTitle("Best Kidney/Nephrology Hospital in Bangalore, India | Rashtrotthana Hospitals");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best kidney Hospital in Bangalore, India with highly experienced kidney specialists/nephrologists performing surgeries and treatments' });

  this.metaService.updateTag({ name: 'keywords', content: 'nephrology,kidney hospital near me,kidney, kidney pain causes, kidney stones, kidney stone symptoms' });
  this.specialities=[
    {
      main_heading:'Nephrology',
      content:`The Nephrology Department at Rashtrotthana Hospital offers advanced and compassionate care for a range of kidney-related health issues. Led by certified nephrologists and renal specialists, our department provides expert diagnosis and treatment for chronic kidney diseases, electrolyte disorders, hypertension and conditions requiring renal replacement therapies, including <a href="https://en.wikipedia.org/wiki/Dialysis">dialysis</a> and kidney transplantation. Our 8-bed dialysis unit operates in a clean, safe and fully equipped environment, ensuring patients receive top-quality care across all days of the week. The dialysis center is dedicated to maintaining the highest standards of hygiene and care, catering to patients with both acute and chronic kidney needs. For patients requiring comprehensive renal care, our in-house renal transplant physician ensures safe, standardized protocols, providing exceptional outcomes for transplant patients.  `   ,
      content_1:'Our department emphasizes a patient-centered approach, supporting long-term kidney health through preventative care and continuous monitoring. We offer discounted renal profile packages to assist with early diagnosis and provide ongoing support for managing conditions like diabetic nephropathy and hypertension-related kidney disease. With the backing of a dedicated team and state-of-the-art diagnostic tools, our Nephrology Department is committed to improving the quality of life for patients facing kidney challenges.',
      heading:'Nephrology',
      image:'Nephrology.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-16.png',
          doctor_name:'Dr. Santhosh S',
          experience : "14"
        }
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);  
}

}
