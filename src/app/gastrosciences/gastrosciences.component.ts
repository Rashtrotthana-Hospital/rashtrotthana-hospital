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
      image:'best_gastrosciences_treatment_in_bengaluru.png',
      alt : "Best Gastrosciences Treatment in Bengaluru",
      Doctors:[
        {
          doctor_image:'../../assets/Dr-Ajay-N.png',
          doctor_name:'Dr. Ajay N',
          experience : "2",
          docalt : 'Dr. Ajay N | Best Gastro Doctor in Bangalore | Rashtrotthana Hospital'
        },
        {
          doctor_image : '../../assets/Dr-Man-Mohan-U-S.png',
          doctor_name : 'Dr. Man Mohan U. S',
          experience : '8+',
          docalt : 'Dr. Man Mohan U. S | Best Gastroenterologist in Bangalore | Rashtrotthana Hospital'
        },
        {
          doctor_image : "../../assets/Dr-Sunil-Shenvi.png",
          doctor_name : 'Dr. Sunil Shenvi',
          experience : "15+",
          docalt : "Dr. Sunil Shenvi | Best General Surgery and Gastroenterology doctor in Bngalore | Rajarajeshwari Nagar"
        }
      ]}];
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
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