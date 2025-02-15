import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-oncology',
  templateUrl: './oncology.component.html',
  styleUrl: './oncology.component.css'
})
export class OncologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  specialities:any[] = [];

  ngOnInit(): void {
    this.titleService.setTitle("Medical Oncology Hospital in Bangalore | Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Find the Medical Oncology Hospital in Bangalore. Book an appointment now at Rashtrotthana Hospital.' });

  this.metaService.updateTag({ name: 'keywords', content: 'oncology hospital near me, cancer, cancer treatment surgery, radiation therapy, chemotherapy, immunotherapy, Medical oncologists, oncology, cancer symptoms, cancer care, hope' });
  this.specialities=[
    {
      main_heading:'Oncology',
      content:'The Oncology Department at Rashtrotthana Hospital is committed to offering comprehensive care to patients suffering from various types of cancer. We understand the challenges associated with cancer diagnosis and treatment and we strive to offer personalized care and support to our patients and their families throughout their journey to recovery. One of India\'s major challenges is the lack of awareness and screening programs for cancer, which leads to delayed diagnosis and treatment. Through various initiatives and awareness programs, we are committed to raising awareness about cancer and the importance of early detection.',
      heading:'Oncology',
      image:'Oncology.png',
      alt:'oncology',
      Doctors:[
        {
          doctor_image:'../../assets/Dr-Shekar-Patil.png',
          doctor_name:'Dr. Shekar Patil',
          alt : 'Dr. Shekar Patil | Best Medical Oncologist Doctor in Bangalore | Rashtrotthana Hospital'
        },
        {
          doctor_image:'../../assets/Dr-Pramod-S-Chinder.png',
          doctor_name:'Dr. Pramod S. Chinder',
          alt : 'Dr. Pramod S. Chinder | Best Orthopaedic Oncosurgeon in Bangalore | Rashtrotthana Hospital'
        },
        {
          doctor_image:'../../assets/Dr-Rajeev-Vijayakumar.png',
          doctor_name:'Dr. Rajeev Vijayakumar',
          alt : 'Dr. Rajeev Vijayakumar | Best Medical Oncologist in Bangalore | Rashtrotthana Hospital'
        },
        {
          doctor_image:'../../assets/Dr-Ravi-T.png',
          doctor_name:'Dr. Ravi T',
          alt : 'Dr. Ravi T | Best Cancer Doctor in Bangalore | Rashtrotthana Hospital'
        },
        {
          doctor_image:'../../assets/Dr-Nagesh-R.png',
          doctor_name:'Dr. G. V. Giri',
          alt : 'Dr. G. V. Giri | Best Cancer Doctor in Bangalore | Rashtrotthana Hospital'
        }
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
  }

}