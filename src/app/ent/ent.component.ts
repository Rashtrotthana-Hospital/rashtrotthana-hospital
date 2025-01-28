import { Component } from '@angular/core';
import { Title,Meta,SafeHtml,DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ent',
  templateUrl: './ent.component.html',
  styleUrl: './ent.component.css'
})
export class ENTComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("ENT Specialist In Bangalore | ENT Specialist In R R Nagar - Rashtrotthana Hospital");
    this.metaService.updateTag({ name: 'description', content: 'Looking for the best ENT Specialist In R R Nagar or Bangalore? Then look no fur and visit us today. We are the best ENT hospital.' });
    this.metaService.updateTag({ name: 'keywords', content: 'ENT, ear, nose, throat, sinusitis, ear infections, hearing loss, throat infections, tonsillectomy, sinus surgery, adenoids' 

    });
            
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

  doctors = [
    {
      doctor_image:'../../assets/Dr-Sunil-Kumar-C.png',
      doctor_name:'Dr. Sunil Kumar C',
      experience : "10+",
      docalt:'Dr. Sunil Kumar C | Best  ENT, Head and Neck Surgeon in Bangalore | Rashtrotthana Hospital'
    },

    {
      doctor_image:'../../assets/Dr-Narendranath-A.png',
      doctor_name:'Dr. Narendranath A',
      experience : "10",
      docalt : 'Dr. Narendranath A | Best ENT Doctor in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image:'../../assets/Dr-Manasa-N-A.png',
      doctor_name:'Dr. Manasa N. A',
      experience : "7",
      docalt : 'Dr. Manasa N. A | Best ENT Consultant in Bangalore | Rashtrotthana Hospital'
    },   
    {
      doctor_image:'../../assets/dummy.png',
      doctor_name:'Dr. S K Ranjani',
      experience : "2",
      docalt : 'Dr. S K Ranjani| Best ENT Consultant in Bangalore | Rashtrotthana Hospital'
    },  
  ]

  faqs = [
    {
      ques : "Who are the Best ENT Specialists in Rajarajeshwari Nagar?",
      ans : "Rashtrotthana Hospital is home to the Best ENT Specialists in Rajarajeshwari Nagar, including Dr. Manasa N. A., Dr. Narendranath A. and Dr. Sunil Kumar. They specialize in treating conditions such as ear pain, nasal congestion, sinus infections and head and neck cancers treatment in Rajarajeshwari Nagar Bangalore with advanced diagnostic and surgical techniques."
    },
    {
      ques : "Why is Rashtrotthana Hospital considered the Best ENT Hospital in RR Nagar Bangalore?",
      ans : "Our hospital stands out as the Best ENT Hospital in RR Nagar Bangalore for offering comprehensive care by a team of Expertise ENT doctors in RR Nagar Bangalore. We provide specialized treatments, including endoscopic sinus surgery, snoring treatment ENT services and solutions for throat pain and nasal polyps treatment in RR Nagar Bangalore."
    },
    {
      ques : "What treatments are available for ear pain at Rashtrotthana Hospital?",
      ans : "Our hospital specializes in the treatment for ear pain, including conditions like Otitis Media and Tinnitus. Dr. Manasa N. A. and Dr. Narendranath A. are experts in procedures such as mastoidectomy surgeries, ear tube surgery and micro ear surgery for hearing restoration."
    },
    {
      ques : "Who provides the best care for sinus infections in Rajarajeshwari Nagar?",
      ans : "Dr. Sunil Kumar is a specialist in sinus infection treatment in Rajarajeshwari Nagar. He performs advanced procedures like endoscopic sinus surgery and FESS (nasal polyp surgery) to provide long-term relief for chronic sinus issues."
    },
    {
      ques : "Can Rashtrotthana Hospital treat throat-related conditions like chronic coughing?",
      ans : "Yes, our hospital is recognized as the best hospital for chronic cough treatment in Rajarajeshwari Nagar Bangalore. Dr. Manasa N. A. and Dr. Narendranath A. are experts in treating conditions like tonsillitis, sore throat and throat cancer treatments in Bangalore, ensuring a comprehensive approach to throat care."
    },
    {
      ques : "What ENT services are available for nasal blockage or nasal discharge?",
      ans : "Our team, including Dr. Sunil Kumar, specializes in the treatment for nasal congestion, nasal blockage treatment in Bangalore and nasal polyps treatment in RR Nagar Bangalore. Advanced surgical options like nasal septum correction surgery are offered for effective relief."
    },
    {
      ques : "What advanced surgeries are performed at Rashtrotthana Hospital for ENT conditions?",
      ans : "Our hospital provides cutting-edge ENT procedures such as endoscopic sinus surgery, tracheotomy, adenoidectomy and tonsillectomy. Dr. Narendranath A. is particularly skilled in mastoidectomy surgeries and tympanoplasty, while Dr. Manasa N. A. specializes in voice restoration surgery and head and neck tumor surgeries."
    },
    {
      ques : "How does Rashtrotthana Hospital treat hearing loss?",
      ans : "As the best hospital for ENT in Bangalore, we offer advanced care for hearing loss or impairment. Dr. Manasa N. A. and Dr. Sunil Kumar specialize in cochlear implants, micro ear surgery for hearing restoration and treatments for persistent ear aches or pain."
    },
    {
      ques : "Who provides snoring treatment at Rashtrotthana Hospital?",
      ans : "Dr. Sunil Kumar is an expert in snoring treatment ENT services and management of obstructive sleep apnea. With advanced diagnostic tools and personalized therapies, he helps patients improve their quality of sleep and overall health."
    },
    {
      ques : "What care is available for head and neck cancers in Rajarajeshwari Nagar?",
      ans : "Dr. Manasa N. A. and Dr. Narendranath A. specialize in head and neck cancer treatment in Rajarajeshwari Nagar Bangalore. Using advanced surgical techniques and personalized care plans, they ensure the best possible outcomes for patients."
    }
  ]

}
