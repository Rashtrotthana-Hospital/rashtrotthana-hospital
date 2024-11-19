import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-gastrosciences',
  templateUrl: './gastrosciences.component.html',
  styleUrl: './gastrosciences.component.css'
})
export class GastrosciencesComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];  
  ngOnInit(): void {
    this.titleService.setTitle("Best Gastroenterology Hospital in bangalore India | Best liver Hospital in India");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best Gastro hospital in India with experienced gastroenterologists providing digestive and stomach related problems.' });

  this.metaService.updateTag({ name: 'keywords', content: 'Gastroenterology stomach,gastroenterology hospital near me, stomach pain, digestion, digestive care, digestive system, gut, gut health, gut care' });

  this.specialities=[
    {
      main_heading:'Gastrosciences',
      content:`The Gastroenterology Department at Rashtrotthana Hospital is dedicated to providing complete medical and surgical care for a range of gastrointestinal and liver conditions. Staffed by a team of highly skilled gastroenterologists, our department offers specialized treatment for digestive health issues using advanced, minimally invasive techniques to ensure patient safety and comfort. Equipped with high-precision diagnostic tools like <a href="https://en.wikipedia.org/wiki/Endoscopy">endoscopy</a>, colonoscopy, sigmoidoscopy and video proctoscopy, we address conditions such as acid reflux, ulcers, inflammatory bowel disease, liver disorders and more. Our emphasis on using state-of-the-art technology, like video navigation tools, allows us to deliver effective and precise diagnoses, minimizing patient discomfort.`,
      content_1:'In addition to diagnostics, we offer a range of surgical solutions, including laparoscopic cholecystectomy for gallbladder issues, hernia repairs and other essential gastrointestinal procedures. Our commitment to comprehensive, high-quality care enables us to manage even complex cases within a compassionate and patient-centered environment. With specialized services available under one roof, our Gastroenterology Department ensures that patients receive timely, accessible and world-class care to support lifelong digestive health.',
      heading:'Gastrosciences',
      image:'Gastrosciences.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-28.png',
          doctor_name:'Dr. Ajay N',
          experience : "2"
        }
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

}
