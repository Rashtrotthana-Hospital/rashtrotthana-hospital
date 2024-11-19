import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-psychiatry',
  templateUrl: './psychiatry.component.html',
  styleUrl: './psychiatry.component.css'
})
export class PsychiatryComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
    ngOnInit(): void {
    this.titleService.setTitle("Psychiatric Hospital in Bangalore | Mental Disorders Treatment in Bangalore   ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana is the best psychiatric hospital in Bangalore with a team of psychiatrists; therapists providing mental, behavioral disorders & psychiatry treatment.' });

  this.metaService.updateTag({ name: 'keywords', content: 'psychiatric hospital near me,mental problems, mental disorders, depression, schizophrenia, anxiety, substance use disorder, dementia, ADHD, autism, learning disorders, sleep disorders, behavioral issues, any illness of the mind.' });

  this.specialities=[
    {
      main_heading:'Psychiatry',
      content:'At Rashtrotthana Hospital, our Psychiatry Department is committed to providing an all-encompassing approach to mental health. Mental well-being is a crucial aspect of overall health and we understand the impact that mental disorders can have on individuals and their families. Our team of experienced psychiatrists, therapists and support staff offers compassionate, high-quality care for a wide spectrum of mental health issues, including <a href="https://en.wikipedia.org/wiki/Anxiety">anxiety</a>, depression, bipolar disorder, schizophrenia and other complex conditions. Utilizing advanced diagnostic tools and evidence-based treatment methods, we work to create individualized care plans for each patient, aiming to address their unique needs and promote long-term recovery.Our department places a strong emphasis on early intervention, recognizing that timely support can lead to better outcomes. This is especially important for children and adolescents, who may experience mental health issues due to various factors. Studies have shown that one in five young people globally are affected by mental health disorders, highlighting the need for specialized care.',
      content_1:' At Rashtrotthana Hospital, we offer programs specifically designed for young individuals, focusing on resilience-building and emotional health. Our services for children and adolescents include personalized counseling sessions, group therapy and family support initiatives that ensure a safe and nurturing environment.In addition to catering to younger patients, we also offer a wide range of services for adults, including crisis intervention, cognitive behavioural therapy (CBT), medication management and holistic therapies. Family involvement is an essential part of our approach; therefore, we provide counselling and guidance for family members to better understand and support their loved ones on the road to recovery. We believe that mental health treatment goes beyond just addressing symptoms-it requires a comprehensive strategy that takes the patient’s personal, social and familial context into account. Whether you\'re seeking support for a specific condition or general mental health guidance, Rashtrotthana Hospital’s Psychiatry Department is here to help you or your loved ones find a path towards mental wellness. With an empathetic and professional approach, we ensure that every patient receives the care and support they need for a healthier, balanced life.',
      heading:'Psychiatry',
      image:'Psychiatry.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-27.png',
          doctor_name:'Dr. Valli Kiran',
          experience : "20"
        },
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

}
