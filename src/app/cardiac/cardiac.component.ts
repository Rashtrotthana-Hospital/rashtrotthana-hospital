import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
declare var gtag: Function;

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
    this.titleService.setTitle("Cardiology & Heart Care in Bangalore | Rashtrotthana Hospital ");  

  this.metaService.updateTag({ name: 'description', content: 'Comprehensive cardiology care in Bangalore with expert heart specialists offering diagnosis, treatment, and long-term management at Rashtrotthana Hospital.' });

  this.metaService.updateTag({ name: 'keywords', content: 'cardiology, heart hospital,cardiology hospital near me,heart hospital near me, cardiologists, heart attack, heart failure, heart pain, heart valve disease, congenital heart disease, coronary artery disease, heart rhythm disorders, disorders of heart failure, valvular disease' });

  }

  formDoctors : any = ["Dr. Suhas Raj S"]

  doctors = [
    {
      id: 1,
      name: 'Dr. Suhas Raj S',
      experience: '8+ Years',
      image: '../../assets/Dr-Suhas-Raj-S.png',
      slug: '/doctor/dr-suhas-raj-s',
      docalt : 'Dr. Suhas Raj S | Best Cardiologist in Bangalore | Rashtrotthana Hospital'
    },
  ]

  faqs = [
    {
      ques : "Who is the best cardiologist in RR Nagar, Bangalore?",
      ans : "At Rashtrotthana Hospital, our best cardiologists in Bangalore provide advanced cardiac care for heart conditions such as hypertension, chest pain, and cardiovascular disease. Patients searching for a good cardiologist near me often choose our facility for its combination of expertise, technology and affordable cardiology treatment in Bangalore."
    },
    {
      ques : "When should I see a cardiologist?",
      ans : "You should consult a heart specialist in Bangalore if you experience symptoms like chest discomfort, irregular heartbeat, shortness of breath, or high blood pressure. These may indicate heart problems and symptoms requiring early diagnosis and treatment. Regular visits also help in preventing congestive heart disease or complications from atrial fibrillation."
    },
    {
      ques : "What are the early symptoms of heart disease?",
      ans : "Early warning signs include fatigue, swelling in the legs, dizziness, palpitations, and chest tightness. These symptoms may point to conditions like congestive heart failure or cardiac valve problems. Our best hospital for congestive heart failure treatment in Bangalore offers early detection and intervention to prevent progression."
    },
    {
      ques : "What tests are done to diagnose heart problems?",
      ans : `<p class = "s_para">We provide advanced cardiac cycle and heart circulation checkups in Bangalore, including:</p>
              <ul>
                <li class = "s_para">ECG (Electrocardiogram) to check heart rhythm</li>
                <li class = "s_para">Echocardiogram (ECHO) to assess valve and cardiac muscle function</li>
                <li class = "s_para">Stress/Treadmill Test (TMT) to evaluate heart response during exertion</li>
                <li class = "s_para">Angiography for artery blockages</li>
                <li class = "s_para">Holter Monitoring for normal heart beat rate variations</li>
              </ul>
              <p class = "s_para">These tests help our heart specialists for cardiovascular disease in Bangalore make accurate diagnoses.</p>
      `
      
    },
    {
      ques : "How often should I get my heart checked?",
      ans : "If you’re over 40 or have risk factors like diabetes, high blood pressure, high cholesterol, or family history of heart disease, annual cardiac checkups are advised. Others can undergo screening every 2-3 years. Preventive monitoring ensures timely management of cardiovascular disease and reduces the risk of cardiac arrest."
    },
    {
      ques : "What are the common risk factors for heart disease?",
      ans : "Major risk factors include uncontrolled blood pressure, diabetes, smoking, obesity, high cholesterol and sedentary lifestyle habits. These can lead to cardiorespiratory arrest, congestive heart failure and atrial fibrillation over time. Regular screenings at our cardiac hospital in Bangalore help manage these risks effectively."
    },
    {
      ques : "Can heart disease be reversed?",
      ans : "While not all conditions - like congestive heart disease or valvular defects - can be fully reversed, affordable cardiovascular disease management in Bangalore at Rashtrotthana Hospital can improve heart function. Our approach includes lifestyle guidance, medication and advanced heart surgery in Bangalore when required."
    },
    {
      ques : "What are the different types of heart diseases treated at Rashtrotthana Hospital?",
      ans : `<p class = "s_para">Our cardiology department in Bangalore treats multiple conditions, including:</p>
              <ul>
                <li class = "s_para">Coronary artery disease (CAD): Blocked arteries leading to heart attacks</li>
                <li class = "s_para">Arrhythmias: Irregular or fast heartbeats, including atrial fibrillation</li>
                <li class = "s_para">Heart failure: Weak cardiac muscle impacting pumping efficiency</li>
                <li class = "s_para">Congenital heart defects: Structural heart problems present at birth</li>
                <li class = "s_para">Valvular heart disease: Dysfunctional cardiac valves affecting blood flow</li>
              </ul>
              <p class = "s_para">We provide complete heart care from diagnosis to surgery in Bangalore, ensuring long-term recovery and monitoring.</p>
      `
    },
  ]

  trackPhoneClick(){
    if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-16656770043/-YEMCITg09IZEPvHyIY-',
      'event_callback': () => {
        console.log('Phone call conversion tracked!');
      }
    });
  }
  }

};


