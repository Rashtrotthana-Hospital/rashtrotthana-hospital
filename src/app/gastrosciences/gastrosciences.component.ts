import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
declare var gtag: Function;

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

  }

  doctors = [
    // {
    //   doctor_image:'../../assets/Dr-Ajay-N.png',
    //   doctor_name:'Dr. Ajay N',
    //   experience : "2",
    //   docalt : 'Dr. Ajay N | Best Gastro Doctor in Bangalore | Rashtrotthana Hospital'
    // },
    {
      doctor_image : '../../assets/Dr-Man-Mohan-U-S.png',
      doctor_name : 'Dr. Man Mohan U. S',
      experience : '8+',
      docalt : 'Dr. Man Mohan U. S | Best Gastroenterologist in Bangalore | Rashtrotthana Hospital'
    },
  ]

  faqs = [
    {
      ques : 'Who is the best gastroenterologist in RR Nagar, Bangalore?',
      ans : 'If you are looking for the best gastroenterologist in RR Nagar, Bangalore, Dr. Man Mohan U. S. is a highly experienced specialist at Rashtrotthana Hospital. He treats stomach pain, acid reflux, bloating, constipation, liver diseases, gastritis and other digestive disorders.'
    },
    {
      ques : 'Where can I find the best hospital for stomach pain treatment in RR Nagar, Bangalore?',
      ans : 'Rashtrotthana Hospital is a leading center for treating stomach diseases, digestive disorders, acidity, gastric problems and gut-related health issues. With expert stomach specialists and gastroenterologists in RR Nagar, Bangalore, we offer advanced treatment for stomach pain, ulcers and liver problems.'
    },
    {
      ques : 'What causes stomach pain, and when should I see a doctor?',
      ans : 'Stomach pain can be caused by gastritis, indigestion, ulcers, infections, acidity, constipation, or liver disease. If you experience severe abdominal pain, bloating, or recurring stomach issues, visit Dr. Man Mohan U. S., a top stomach specialist in RR Nagar, Bangalore.'
    },
    {
      ques : 'Where can I find a stomach doctor in Rajarajeshwari Nagar, Bangalore?',
      ans : 'For expert treatment of stomach disorders, acidity, gas problems, and digestive diseases, visit Dr. Man Mohan U. S. at Rashtrotthana Hospital, a trusted stomach doctor in RR Nagar, Bangalore.'
    },
    {
      ques : 'What is the best treatment for stomach pain and gastric problems?',
      ans : 'Treatment depends on the cause. Common treatments include antacids, dietary changes, medication for infections, or endoscopic procedures. Our top-rated stomach doctor in RR Nagar, Bangalore, provides expert care for stomach pain, acidity, ulcers and digestive health problems.'
    },
    {
      ques : 'Where can I find the best doctor for liver disease in RR Nagar, Bangalore?',
      ans : 'Dr. Man Mohan U. S. is a leading liver specialist in RR Nagar, Bangalore, treating fatty liver, hepatitis, liver cirrhosis, jaundice and liver infections at Rashtrotthana Hospital.'
    },
    {
      ques : 'What is laparoscopic surgery, and who is the best laparoscopic surgeon in RR Nagar, Bangalore?',
      ans : 'Laparoscopic surgery is a minimally invasive procedure used for conditions like hernia, gallstones, and digestive disorders. Rashtrotthana Hospital has expert laparoscopic surgeons in RR Nagar, Bangalore, offering safe and effective treatments.'
    },
    {
      ques : 'Where can I find the best hospital for hernia surgery in Rajarajeshwari Nagar, Bangalore?',
      ans : 'Rashtrotthana Hospital provides the best hernia treatment in Rajarajeshwari Nagar, Bangalore, with advanced laparoscopic surgery techniques ensuring faster recovery and minimal scarring.'
    },
    {
      ques : 'What are the symptoms of acidity and how can I treat it?',
      ans : 'Common symptoms of acidity include heartburn, chest pain, bloating, nausea, and acid reflux. Treatments include antacids, dietary modifications, and medication. For severe acidity problems in RR Nagar, Bangalore, consult Dr. Man Mohan U. S. at Rashtrotthana Hospital.'
    },
    {
      ques : 'Where can I find an endoscopy specialist in RR Nagar, Bangalore?',
      ans : 'If you need endoscopic surgery in RR Nagar, Bangalore, Rashtrotthana Hospital provides advanced diagnostic and treatment procedures for stomach diseases, acidity and gut disorders.'
    },
  ]

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

  

}



// {
//   name: "Dr ManMohan",
//   image : "assets/Dr-Man-Mohan-U-S.png",
//   desgination : "Gastroenterologist",
//   about : "Dr. Man Mohan U.S. is a highly qualified gastroenterologist with extensive experience in managing complex gastrointestinal and hepatology conditions. Currently serving as an Assistant Professor at the Institute of Gastroenterology and Organ Transplant (IGOT), he has a keen interest in clinical research, with multiple publications and presentations at prestigious national and international conferences. He specializes in advanced diagnostic and therapeutic procedures, focusing on patient-centered care and innovative treatments in medical gastroenterology.",
//   speciality : "Medical Gastroenterology and Hepatology",
//   areasOfExpertise : ["Acid reflux/GERD","Gastritis and peptic ulcers","Celiac disease","Crohn's diseaseIrritable Bowel Syndrome (IBS)","Colitis and colon polyps","Fatty liver disease and hepatitis","Cirrhosis and liver fibrosis","Pancreatitis","Gallstones and bile duct infections","Abdominal pain, bloating, and nausea","Rectal bleeding","Chronic constipation/diarrhea"],
//   expertise : "",
//   qualification : "MBBS, MD in General Medicine, Dr.N.B in Medical Gastroenterology",
//   time : "",
//   date : ""
// },