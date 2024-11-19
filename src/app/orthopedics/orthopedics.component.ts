import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-orthopedics',
  templateUrl: './orthopedics.component.html',
  styleUrl: './orthopedics.component.css'
})
export class OrthopedicsComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];  
  ngOnInit(): void {
    this.titleService.setTitle("Best orthopaedics Hospital in Bangalore, India - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best orthopaedics hospital in Bangalore, India with highly experienced orthopaedics/ortho doctor providing orthopaedic treatment & surgeries.' });

  this.metaService.updateTag({ name: 'keywords', content: 'orthopaedics hospital near me, orthopaedics, knee, knee pain, shoulder pain, bone fractures, joint pains, ortho, knee pain causes' });

  this.specialities=[
    {
      main_heading:'Orthopedics',
      content:`The Orthopedics Department at Rashtrotthana Hospital is dedicated to providing comprehensive care for bone, joint and muscle conditions, supported by a team of highly skilled orthopaedic specialists. With a patient-centered approach, our team is experienced in diagnosing and treating a broad spectrum of musculoskeletal disorders, from arthritis and sports injuries to fractures and degenerative joint conditions. Our department offers specialized treatments and surgeries, including arthroscopy, <a href="https://en.wikipedia.org/wiki/Joint_replacement">joint replacement </a>and minimally invasive spine surgery. Our advanced facilities and state-of-the-art technology allow us to deliver safe, effective and minimally invasive procedures that support faster recovery and long-term outcomes for patients.`,
      content_1:'With a strong emphasis on quality, Rashtrotthana Hospital has become a trusted centre for knee and hip replacement surgeries, achieving consistently high success rates. Our Accident & Trauma Care Unit is available 24/7, ensuring immediate, high-quality care for critical injuries. We offer a full range of services tailored to meet individual needs, from preoperative evaluations to comprehensive post-surgery rehabilitation. Whether it’s restoring mobility, alleviating pain, or enhancing quality of life, our Orthopedics Department is committed to delivering compassionate and high-standard orthopaedic care in Bangalore.',
      heading:'Orthopedics',
      image:'Orthopedics.png',
      alt:'Orthopedics',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-52.png',
          doctor_name:'Dr. Mahesh Kulkarni',
          experience : "15+"
        },
        {
          doctor_image:'../../assets/doctor-21.png',
          doctor_name:'Dr. Sujayendra D. M',
          experience : "11"
        },{
        
        doctor_image:'../../assets/doctor-37.png',
        doctor_name:'Dr. Nikhil Hegde',
        experience : "6"
      }
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

}
