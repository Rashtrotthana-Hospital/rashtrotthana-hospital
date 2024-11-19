import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-cardiac',
  templateUrl: './cardiac.component.html',
  styleUrl: './cardiac.component.css'
})
export class CardiacComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Heart | Cardiology Hospital in bangalore India ");  

  this.metaService.updateTag({ name: 'description', content: 'Discover world-class cardiac care at Rashtrotthana Hospital, the best heart hospital in India. Offering advanced treatments and expert cardiologists for your heart health.' });

  this.metaService.updateTag({ name: 'keywords', content: 'cardiology, heart hospital,cardiology hospital near me,heart hospital near me, cardiologists, heart attack, heart failure, heart pain, heart valve disease, congenital heart disease, coronary artery disease, heart rhythm disorders, disorders of heart failure, valvular disease' });
  this.specialities=[
    {
      main_heading:'Cardiac Sciences',
      content:`The Cardiac Sciences Department at Rashtrotthana Hospital is committed to delivering specialized care for heart and vascular health. Our team of highly skilled cardiologists and cardiovascular surgeons provides thorough diagnostics, treatment and preventive care for a range of cardiovascular conditions, including <a href="https://simple.wikipedia.org/wiki/Heart_disease">heart disease</a>, hypertension and complex coronary conditions. With access to advanced diagnostic tools such as Echocardiogram (ECHO), Treadmill Test (TMT), Electrocardiogram (ECG) and Holter Monitoring, we ensure precise and timely diagnosis, allowing our specialists to create effective, personalized treatment plans. From managing chronic heart conditions to emergency care for acute cardiac events, we are equipped to support each patient\'s heart health journey.`,
      content_1:'Our comprehensive cardiac care services include medical, interventional and surgical treatments tailored to individual patient needs. Equipped with state-of-the-art technology, our department specializes in minimally invasive and catheter-based interventions, supporting patients through every step of their treatment and recovery. Whether addressing arrhythmias, structural heart issues or preventive cardiology, our Cardiac Sciences Department is dedicated to improving patient outcomes with compassionate and advanced cardiovascular care.',
      heading:'Cardiac Sciences',
      image:'Cardiac Sciences.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-22.png',
          doctor_name:'Dr. Suhas Raj S',
          experience : '8'
        },
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

}
