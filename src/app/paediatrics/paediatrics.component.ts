import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-paediatrics',
  templateUrl: './paediatrics.component.html',
  styleUrl: './paediatrics.component.css'
})
export class PaediatricsComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Child Hospital in Bangalore | Paediatric Hospital in Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best paediatric hospital or child speciality hospital in Bangalore with skilled paediatricians.' });

  this.metaService.updateTag({ name: 'keywords', content: 'best child hospital near me,paediatrician, children, kids, child\'s health, paediatrics, neonatology, baby, newborn' });

  
  this.specialities=[
    {
      main_heading:'Paediatrics & Neonatology',
      content:'The Pediatrics & Neonatology Department at Rashtrotthana Hospital is dedicated to comprehensive, compassionate care for infants, children and adolescents. Our skilled paediatricians are available round-the-clock, ensuring that our young patients receive continuous, expert care tailored to their unique needs. We emphasize preventive care, early diagnosis and advanced treatment plans for various paediatric conditions, from common illnesses to complex medical issues. Our department includes a fully equipped 6-bed Pediatric Intensive Care Unit (PICU), providing critical care for children with serious health concerns. Our child-friendly environment, paired with a dedicated team of specialists, ensures that every child feels safe and supported throughout their treatment.',
      content_1:`Our Neonatology services provide specialized care for newborns, particularly those born prematurely or with high-risk medical needs. With a well-equipped <a href="https://en.wikipedia.org/wiki/Pediatric_intensive_care_unit">Neonatal Intensive Care Unit (NICU)</a> and experienced neonatologists, we manage a wide range of neonatal conditions, offering the highest level of care for our smallest patients. Our neonatal team collaborates with paediatric sub-specialists and utilizes state-of-the-art medical equipment to deliver integrated care for newborns facing critical health challenges. From respiratory support and infection management to advanced nutrition plans, we are committed to providing holistic care that promotes the growth and development of each baby in our care.`,
      heading:'Paediatrics & Neonatology',
      image:'Paediatrics & Neonatology.jfif',
      Doctors:[
        // {
        //   doctor_image:'../../assets/doctor-11.png',
        //   doctor_name:'Dr. Savinay S. Kanchibail',
        //   experience : "20"
        // },
        {
          doctor_image:'../../assets/doctor-29.png',
          doctor_name:'Dr. Vishwanath Sanagoudar',
          experience : "8"
        },
        {
          doctor_image:'../../assets/doctor-30.png',
          doctor_name:'Dr. Niveditha C',
          experience : "7"
        }    
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);  
}}
