import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-pulmonology',
  templateUrl: './pulmonology.component.html',
  styleUrl: './pulmonology.component.css'
})
export class PulmonologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Pulmonology Hospital in bangalore India ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best pulmonology hospital in India with experienced pulmonologists providing lungs care and respiratory related problems.' });

  this.metaService.updateTag({ name: 'keywords', content: 'pulmonology hospital near me,pulmonology, pulmonologist, breathing problems, breathing difficulty, respiratory problems, bronchial asthma, bronchial atresia, bronchiectasis, bronchiolitis, lungs, breathe' });
  this.specialities=[
    {
      main_heading:'Pulmonology',
      content:`The Pulmonology Department at Rashtrotthana Hospital offers specialized care for a variety of respiratory and lung-related conditions. Led by a team of highly skilled pulmonologists, we focus on diagnosing and treating issues affecting the respiratory system, including the sinuses, lungs and airways. Our department is equipped with advanced diagnostic tools such as CT scans, X-rays, spirometry and bronchoscopy, allowing for precise evaluation of thoracic and pulmonary disorders. From managing common conditions like <a href="https://en.wikipedia.org/wiki/Asthma">asthma</a> and chronic obstructive pulmonary disease (COPD) to handling complex issues, our team ensures high-quality, patient-centered care.`,
      content_1:'We provide a comprehensive range of treatments, including pulmonary hygiene, airway ablation and biopsy services. Our state-of-the-art facilities support minimally invasive procedures that promote faster recovery and improved patient outcomes. Whether it’s long-term care for chronic respiratory issues or critical support in our ICU for severe conditions, Rashtrotthana Hospital’s Pulmonology Department is committed to delivering the best in respiratory healthcare to help our patients breathe easier.',
      heading:'Pulmonology',
      image:'Pulmonology.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-32.png',
          doctor_name:'Dr. Kolla Vinod',
          experience : "15"
        }
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

}
