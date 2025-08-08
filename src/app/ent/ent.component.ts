import { Component } from '@angular/core';
import { Title, Meta, SafeHtml, DomSanitizer } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-ent',
  templateUrl: './ent.component.html',
  styleUrl: './ent.component.css'
})
export class ENTComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("ENT Specialist In Bangalore | ENT Specialist In R R Nagar - Rashtrotthana Hospital");
    this.metaService.updateTag({ name: 'description', content: 'Looking for the best ENT Specialist In R R Nagar or Bangalore? Then look no fur and visit us today. We are the best ENT hospital.' });
    this.metaService.updateTag({
      name: 'keywords', content: 'ENT, ear, nose, throat, sinusitis, ear infections, hearing loss, throat infections, tonsillectomy, sinus surgery, adenoids'

    });

    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

  doctors: any = [
    {
      id: 1,
      name: 'Dr. Sunil Kumar C',
      experience: '10+ Years',
      image: '../../assets/Dr-Sunil-Kumar-C.png',
      slug: '/doctor/dr-sunil-kumar-c'
    },
    {
      id: 2,
      name: 'Dr. Narendranath A',
      experience: '10 Years',
      image: '../../assets/Dr-Narendranath-A.png',
      slug: '/doctor/dr-narendranath-a'
    },
    {
      id: 3,
      name: 'Dr. Manasa N. A',
      experience: '7 Years',
      image: '../../assets/Dr-Manasa-N-A.png',
      slug: '/doctor/dr-manasa-n-a'
    },
    {
      id: 4,
      name: 'Dr. Sandhya S. Patil',
      experience: '10+ Years',
      image: '../../assets/dr-sandhya-dr-page.png',
      slug: '/doctor/dr-sandhya-s-patil'
    }
  ];


  formDoctors = ["Dr. Sunil Kumar C", "Dr. Narendranath A", "Dr. Manasa N. A", "Dr. Sandhya S. Patil"]

  faqs = [
    {
      ques : "Who are the Best ENT Specialists in Bangalore?",
      ans : "Rashtrotthana Hospital is home to some of the best ENT specialists in Bangalore, including Dr. Manasa N. A., Dr. Narendranath A., and Dr. Sunil Kumar. They are highly experienced in diagnosing and treating conditions such as ear pain, nasal congestion, sinus infections, and head and neck cancers using advanced diagnostic and surgical techniques.  "
    },
    {
      ques : "Why is Rashtrotthana Hospital considered the Best ENT Hospital in Bangalore?",
      ans : "Our hospital stands out for offering comprehensive ENT care delivered by a team of expert ENT doctors in Bangalore. We provide specialized treatments such as endoscopic sinus surgery, snoring treatment, and effective solutions for throat pain and nasal polyps, supported by state-of-the-art equipment and personalized care."
    },
    {
      ques : "What treatments are available for ear pain at Rashtrotthana Hospital?",
      ans : "We offer expert treatment for ear pain caused by conditions like Otitis Media and Tinnitus. Our ENT specialists, including Dr. Manasa N. A. and Dr. Narendranath A., perform procedures such as mastoidectomy, ear tube surgery, and micro ear surgery for hearing restoration."
    },
    {
      ques : "Who provides the best care for sinus infections in Bangalore?",
      ans : "Dr. Sunil Kumar specializes in sinus infection treatment in Bangalore. He performs advanced procedures like endoscopic sinus surgery and FESS (Functional Endoscopic Sinus Surgery) to offer long-term relief from chronic sinus conditions."
    },
    {
      ques : "Can Rashtrotthana Hospital treat throat-related conditions like chronic coughing?",
      ans : "Yes, our hospital is well-equipped to treat throat-related conditions including chronic cough, tonsillitis, sore throat, and throat cancer. Dr. Manasa N. A. and Dr. Narendranath A. provide a comprehensive approach to throat care and long-term treatment solutions."
    },
    {
      ques : "What ENT services are available for nasal blockage or nasal discharge?",
      ans : "Our ENT team, including Dr. Sunil Kumar, offers advanced care for nasal issues such as nasal congestion, nasal blockage, and nasal polyps. Surgical options like nasal septum correction surgery are available for patients requiring long-term relief."
    },
    {
      ques : "What advanced ENT surgeries are performed at Rashtrotthana Hospital?",
      ans : "We provide a wide range of advanced ENT surgeries including endoscopic sinus surgery, tracheotomy, adenoidectomy, and tonsillectomy. Dr. Narendranath A. is skilled in mastoidectomy and tympanoplasty, while Dr. Manasa N. A. specializes in voice restoration and head and neck tumor surgeries."
    },
    {
      ques : "How does Rashtrotthana Hospital treat hearing loss?",
      ans : "As one of the best hospitals for ENT care in Bangalore, we offer cutting-edge treatment for hearing loss, including cochlear implants and micro ear surgery. Dr. Manasa N. A. and Dr. Sunil Kumar provide personalized solutions for both temporary and chronic hearing conditions."
    },
    {
      ques : "Who provides snoring treatment at Rashtrotthana Hospital?",
      ans : "Dr. Sunil Kumar is an expert in diagnosing and treating snoring and obstructive sleep apnea. He uses advanced diagnostic tools and customized therapies to help patients improve sleep quality and manage related ENT conditions effectively."
    },
    {
      ques : "What care is available for head and neck cancers in Bangalore?",
      ans : "Dr. Manasa N. A. and Dr. Narendranath A. lead our head and neck cancer treatment program in Bangalore. Using the latest surgical techniques and personalized treatment plans, they provide high-quality care focused on the best outcomes for patients."
    }
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
