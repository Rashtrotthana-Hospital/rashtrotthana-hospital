import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser'; 
declare var gtag: Function;

@Component({
  selector: 'app-winter-cardiology',
  templateUrl: './winter-cardiology.component.html',
  styleUrl: './winter-cardiology.component.css'
})
export class WinterCardiologyComponent {
constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {}
  
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  
  ngOnInit(): void {
    this.titleService.setTitle("Winter Heart Health – Risks and Care | Rashtrotthana Hospital");  

    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Expert winter heart health care at Rashtrotthana Hospital. Learn about winter cardiac risks, symptoms, and preventive care. Book your winter heart check-up today.' 
    });

    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'winter heart health, winter cardiac care, heart problems in winter, winter heart attack, blood pressure in winter, heart health check-up, cardiology bangalore' 
    });
  }

  formDoctors: any = ["Dr. Suhas Raj S"];

  doctors = [
    {
      id: 1,
      name: 'Dr. Suhas Raj S',
      experience: '10+ Years',
      image: '../../assets/Dr-Suhas-Raj-S.png',
      slug: '/doctor/dr-suhas-raj-s',
      docalt: 'Dr. Suhas Raj S | Best Cardiologist in Bangalore | Rashtrotthana Hospital'
    },
    // {
    //   id: 2,
    //   name: 'Dr. Vinod Kolla',
    //   experience: '10+ Years',
    //   image: '../../assets/Dr-Vinod-Kolla.png',
    //   slug: '/doctor/dr-vinod-kolla',
    //   docalt: 'Dr. Vinod Kolla | Pulmonologist & Sleep Medicine Specialist | Rashtrotthana Hospital'
    // }
  ];

  faqs = [
    {
      ques: "Why do heart problems increase during winter?",
      ans: "Cold weather causes blood vessels to constrict, making the heart work harder to pump blood. This increases blood pressure and can trigger chest pain, heart attacks, and other cardiac events. Additionally, winter air has lower oxygen levels, blood becomes thicker, and people tend to be less active - all factors that strain the heart."
    },
    {
      ques: "What are the warning signs of heart problems in winter?",
      ans: "Key symptoms include chest pressure or tightness, breathlessness during cold mornings, unusual fatigue, palpitations, pain radiating to the jaw or left arm, light-headedness, difficulty climbing stairs, and swelling in feet or ankles. Even mild symptoms should not be ignored as they may indicate cardiac strain."
    },
    {
      ques: "Who is at higher risk for winter heart problems?",
      ans: "Individuals above 35, people with high blood pressure, diabetes, thyroid disorders, obesity, respiratory conditions like asthma or COPD, smokers, those with family history of heart disease, and people recovering from COVID-related complications are at increased risk during winter months."
    },
    {
      ques: "What tests are included in a winter heart health check-up?",
      ans: "A comprehensive winter cardiac evaluation typically includes ECG (Electrocardiogram), 2D Echocardiogram, blood pressure monitoring, oxygen saturation measurement, and specialist consultation. Based on initial findings, additional tests may be recommended for thorough assessment."
    },
    {
      ques: "How can I protect my heart during winter?",
      ans: "Stay warm, especially when going outdoors. Avoid sudden exposure to cold air. Continue regular physical activity indoors. Take prescribed medications on time. Monitor your blood pressure regularly. Eat a balanced diet and stay hydrated. Most importantly, don't ignore subtle symptoms and schedule a preventive cardiac check-up."
    },
    {
      ques: "When should I seek immediate medical attention for heart symptoms?",
      ans: "Seek immediate medical care if you experience severe chest pain or pressure, difficulty breathing, pain radiating to arm, jaw or back, excessive sweating with chest discomfort, sudden dizziness or fainting, or irregular heartbeat. These could be signs of a heart attack or serious cardiac event."
    },
    {
      ques: "Can winter worsen existing heart conditions?",
      ans: "Yes, winter can significantly worsen existing conditions like coronary artery disease, high blood pressure, heart failure, arrhythmias, and angina. Cold weather increases the workload on an already compromised heart, making symptoms more pronounced and increasing the risk of complications."
    },
    {
      ques: "What makes Rashtrotthana Hospital's winter cardiac care special?",
      ans: "Our hospital offers 24/7 emergency cardiac care, experienced cardiologists specializing in winter-related heart issues, state-of-the-art diagnostic facilities, immediate response for chest pain and breathlessness, affordable seasonal check-up packages, and collaborative care with pulmonology specialists for comprehensive winter health management."
    }
  ];

  trackPhoneClick() {
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-16656770043/-YEMCITg09IZEPvHyIY-',
        'event_callback': () => {
          console.log('Phone call conversion tracked!');
        }
      });
    }
  }

  @ViewChild('formSection') formSection!: ElementRef;

  scrollToForm() {
    this.formSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
