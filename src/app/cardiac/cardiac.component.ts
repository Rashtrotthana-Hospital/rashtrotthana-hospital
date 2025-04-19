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

  }

  doctors = [
    {
      doctor_image:'../../assets/Dr-Suhas-Raj-S.png',
      doctor_name:'Dr. Suhas Raj S',
      experience : '8',
      docalt : 'Dr. Suhas Raj S | Best Cardiologist in Bangalore | Rashtrotthana Hospital'
    },
  ]

  faqs = [
    {
      ques : "Who is the best cardiologist in RR Nagar, Bangalore?",
      ans : "At Rashtrotthana Hospital, our team of experienced heart specialists provides advanced cardiac care. Our specialists are known for their expertise in diagnosing and treating heart diseases, hypertension, and chest pain."
    },
    {
      ques : "When should I see a cardiologist?",
      ans : "You should consult a cardiologist if you experience chest pain, shortness of breath, irregular heartbeat, or high blood pressure. Regular check-ups can help detect heart conditions early and ensure proper treatment."
    },
    {
      ques : "What are the early symptoms of heart disease?",
      ans : "Common early signs include chest discomfort, fatigue, dizziness, swelling in the legs, and palpitations. If you notice any of these symptoms, visiting a heart specialist is highly recommended. Consult our cardiologist, Dr. Suhas Raj S, at Rashtrotthana Hospital for expert diagnosis and personalized care."
    },
    {
      ques : "What tests are done to diagnose heart problems?",
      ans : "A cardiologist may recommend tests such as ECG, echocardiogram, stress test, angiography, and lipid profile to assess heart health. Advanced diagnostic tools help detect heart conditions accurately."
    },
    {
      ques : "How often should I get my heart checked?",
      ans : "For individuals above 40 years or those with risk factors like diabetes, hypertension, or a family history of heart disease, an annual check-up is advised. Younger individuals should get screened every 2-3 years."
    },
    {
      ques : "What are the common risk factors for heart disease?",
      ans : "Risk factors include high blood pressure, diabetes, high cholesterol, obesity, smoking, excessive alcohol consumption, and a sedentary lifestyle. Regular screenings can help assess your risk and take preventive measures."
    },
    {
      ques : "Can heart disease be reversed?",
      ans : "While some forms of heart disease can’t be completely reversed, lifestyle modifications, medications, and advanced treatments can help improve heart health. Cardiologists work closely with patients to manage and prevent complications."
    },
    {
      ques : "What are the different types of heart diseases?",
      ans : `
        <div class = "s_para">Common heart conditions include:</div>
        <ul class = "s_para">
          <li class = "s_para"><b>Coronary artery disease (CAD) - </b>Blocked arteries leading to heart attacks.</li>
          <li class = "s_para"><b>Arrhythmia - </b>Irregular heartbeats.</li>
          <li class = "s_para"><b>Heart failure - </b>Weak heart muscles reducing pumping efficiency.</li>
          <li class = "s_para"><b>Congenital heart disease - </b>Birth defects affecting heart structure.</li>
          <li class = "s_para"><b>Valvular heart disease - </b> Issues with heart valves affecting blood flow.</li>
        </ul>
      `
    },
  ]

};


