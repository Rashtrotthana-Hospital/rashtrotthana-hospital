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

      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
      this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

  doctors:any = [ 
    {
      doctor_image:'../../assets/Dr-Gopal-Das-C-M.png',
      doctor_name:'Dr. Gopal Das C M',
      experience : "11",
      docalt : "Best psychiatrist in RR Nagar Bangalore | Dr. Gopal Das C M' | Rashtrotthana Hospital"
    },
  ];

  faqs : any = [
    {
      ques : "What is mental health?",
      ans : "Mental health refers to emotional, psychological, and social well-being, affecting how we think, feel, and respond to stress and relationships."
    },
    {
      ques : "How do I know if I need psychiatric help?",
      ans : "Signs like persistent sadness, anxiety, sleep trouble, or mood swings may suggest the need for help. Visit Rashtrotthana Hospital’s Psychiatry Department for a professional evaluation"
    },
    {
      ques : "What causes mental health problems?",
      ans : "Genetics, life stress, trauma, chemical imbalances, and environmental triggers are common causes."
    },
    {
      ques : "Can mental health issues be treated?",
      ans : "Yes, with the right combination of therapy, medication, and support, most mental health conditions can be effectively managed or fully treated."
    },
    {
      ques : "How can I support someone struggling emotionally?",
      ans : "Be present, listen patiently, and encourage them to seek expert help. Our psychiatrists also offer family counseling sessions."
    },
    {
      ques : "Is therapy really effective?",
      ans : "Absolutely. Therapies like CBT, offered by our psychiatry team, are highly effective in treating anxiety, depression, and stress-related issues."
    },
    {
      ques : "Will medication be necessary?",
      ans : "Not always. Treatment is personalized. Some may improve with therapy alone; others may benefit from medication. Our psychiatrist will guide you accordingly."
    },
    {
      ques : "How can I improve my mental health naturally?",
      ans : "Good sleep, healthy eating, physical activity, and mindfulness practices help. But if symptoms persist, consult our Department of Psychiatry without delay."
    },
    {
      ques : "Who is the best psychiatrist in RR Nagar Bangalore?",
      ans : "One of the most respected names in the field is Dr. Gopal Das C M, a senior consultant in the Department of Psychiatry at Rashtrotthana Hospital. With over 11 years of experience, he is known for his patient-centered approach, clinical accuracy, and compassionate care. Patients appreciate his expertise in managing conditions like depression, anxiety, stress, and complex mood disorders, making him one of the best psychiatrists in RR Nagar Bangalore."
    }
  ]

}
