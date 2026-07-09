import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent {
  constructor(private router: Router, private titleService: Title,
    private metaService: Meta, private sanitizer: DomSanitizer) {}
  specialFeatures = [
    {
      title : "Experienced and GCP-Trained Team: ",
      description : "Our research investigators are highly experienced and trained in Good Clinical Practice (GCP), supported by a dedicated full-time GCP-trained research team."
    },
    {
      title : "Updated SOPs: ",
      description : "Our research-related activities adhere to Standard Operating Procedures (SOPs) that are regularly updated in accordance with national and international regulations"
    },
    {
      title : "Institutional Ethical Committee: ",
      description : " Our Ethical Committee comprises experienced experts from various fields dedicated to ensuring the integrity and ethical standards of our research."
    },
    {
      title : "Scientific Advisory Board: ",
      description : "Distinguished scholars from various branches of science contribute their valuable knowledge to the planning and designing of systematized proposals."
    },
    {
      title : "Advanced Data Monitoring System: ",
      description : "We employ a well-designed data monitoring system to ensure accuracy and reliability in our research activities."
    },
    {
      title : "Extensive Library Resources: ",
      description : "Our library houses a vast collection of books on both traditional and modern medicine, providing a rich resource for researchers."
    },
    {
      title : "Online Journal Access: ",
      description : "We offer online access to a variety of indexed international journals, keeping our researchers updated with the latest scientific advancements."
    },
    {
      title : "Fully Equipped Laboratory: ",
      description : "The Centre boasts fully equipped lab facilities for various investigations and includes sample storage units to support extensive research activities."
    },
    {
      title : "Collaborative Trials: ",
      description : "We collaborate with sister institutes to conduct comprehensive in vitro and in vivo trials, enhancing the scope and impact of our research."
    },

    
  ]

  researchTeam = [
    {
      image : "../../assets/Dr-Kavya-Research.png",
      name : "Dr. Kavya N ",
      qualification : "BAMS, MD (Ay), (PhD)",
      designation : "Research Manager",
      address : "Former Senior research fellow, Central Ayurveda Research Institute, CCRAS, Bengaluru",
      role : "",
      roleDesv : "Former Consultant and Head, Centre of Excellence in Research and Clinical services in Diabetes Mellitus, Ministry of AYUSH, Govt of India",
      description : "",
      role_2 : "Research Manager"
    },
    // {
    //   image : "../../assets/member_15.png",
    //   name : "Dr. Kavyashree Kulamarva",
    //   qualification : "BAMS, MD",
    //   designation : "Research Officer",
    //   address : "Former Senior Resident, NIMHANS, Bengaluru",
    //   role : "",
    //   roleDesv : "Former Senior Research Fellow, CCRAS",
    //   description : "",
    //   role_2 : "Research Officer"
    // },
    // {
    //   image : "../../assets/member_16.png",
    //   name : "Dr. Sooraj Mohan R",
    //   qualification : "BAMS",
    //   designation : "Research Officer",
    //   address : "Former Senior Research fellow, National ayurveda Research Institute for Panchakarma",
    //   role : "",
    //   roleDesv : "Former Research Fellow, Dept. of  Ethno medicine, JNTBGRI",
    //   description : "",
    //   role_2 : "Research Officer"
    // },
    // {
    //   image : "../../assets/member_14.png",
    //   name : "Dr. Rohith K. R",
    //   qualification : "BAMS",
    //   designation : "Research Co-ordinator",
    //   address : "",
    //   role : "",
    //   roleDesv : "",
    //   description : "",
    //   role_2 : "Research Co-ordinator"
    // }
    {
      image : "../../assets/vrinda.png",
      name : "Dr. Vrinda",
      qualification : "BAMS MD (Ayu)",
      designation : "Research Officer",
      address : "Former Senior Research Fellow, CCRAS - Central Ayurveda Research Institute, Bengaluru",
      role : "",
      roleDesv : "Former Research consultant at Greenspace Herbs.",
      description : "",
      role_2 : "Research Officer"
    },
    // {
    //   image : "../../assets/vairamuthu.png",
    //   name : "Dr. Vairamuthu. K",
    //   qualification : "BAMS, MA (Sanskrit)",
    //   designation : "Research Assistant",
    //   address : "Former Senior Research Fellow, CCRAS-National Institute of Indian Medical Heritage, Hyderabad",
    //   role : "",
    //   roleDesv : "",
    //   description : "",
    //   role_2 : "Research Assistant"
    // },
    {
      image : "../../assets/Chaitra.png",
      name : "Dr. Chaithra Rao P",
      qualification : " BAMS, MD (Ayu)",
      designation : "Research Assistant",
      address : "Former Consultant, Centre of Excellence in Research and Clinical services in Diabetes Mellitus, Ministry of Ayush, Govt of India ",
      role : "",
      roleDesv : " Former Senior Research Fellow, CCRAS-Central Ayurveda Research Institute, Bengaluru",
      description : "",
      role_2 : "Research Assistant"
    },
    {
      image : "../../assets/gopika.png",
      name : "Dr. Gopika. C",
      qualification : "BAMS, MD (Ayu), CRN",
      designation : "Research Assistant",
      address : "Former Researcher & Assistant Professor at Sri Paripoorna Sanathana Ayurveda Medical College Hospitals & Research Centre, Bengaluru ",
      role : "",
      roleDesv : "",
      description : "",
      role_2 : "Research Assistant"
    }
  ]

  objectiveIndex = 1;

  objectiveCards = [
    {
      img: 'assets/research-page/objective-img-1.png',
      heading: 'Establishing Research-Conducive Environment',
      para: 'Creating an institutional ecosystem that nurtures innovation, interdisciplinary collaboration, and scientific rigor in integrative medicine.'
    },
    {
      img: 'assets/research-page/objective-img-2.png',
      heading: 'Healthcare Integrated Researches',
      para: 'Advancing research that bridges biomedicine with Ayurveda, Yoga, Naturopathy, and Homeopathy to develop holistic, evidence-based healthcare solutions.'
    },
    {
      img: 'assets/research-page/objective-img-3.png',
      heading: 'Community-Oriented Researches',
      para: 'Designing and implementing studies that address real-world health challenges, ensuring accessibility and relevance for diverse communities.'
    },
    {
      img: 'assets/research-page/objective-img-4.png',
      heading: 'Knowledge Dissemination',
      para: 'Sharing research outcomes through publications, workshops, and outreach programs to promote awareness and acceptance of integrative healthcare.'
    }
  ];

  scrollToPublications() {
    document.getElementById('publications-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  prevObjective() {
    if (this.objectiveIndex > 0) this.objectiveIndex--;
  }

  nextObjective() {
    if (this.objectiveIndex < this.objectiveCards.length - 1) this.objectiveIndex++;
  }

  featureIndex = 0;
  featDirection: 'next' | 'prev' = 'next';

  featureCards: { heading: string; para: string; style: number; safeSvg: SafeHtml }[] = [];

  private featureRawCards = [
    {
      heading: 'Scientific Advisory Board',
      para: 'A strong Scientific Advisory board with experts from diverse fields to guide the functioning of the Research Centre',
      style: 1,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><path d="M19.4634 35.7004L7.68291 29.2977V19.783L1.94385 16.671L19.4634 7.15625L36.9829 16.671V29.2074H35.0195V17.7744L31.2439 19.783V29.2977L19.4634 35.7004ZM19.4634 23.9356L32.8735 16.671L19.4634 9.40632L6.05328 16.671L19.4634 23.9356ZM19.4634 33.4621L29.2805 28.1609V20.8628L19.4634 26.1798L9.64632 20.8628V28.1609L19.4634 33.4621Z" fill="#008080"/></svg>`
    },
    {
      heading: 'Institutional Ethical Committee',
      para: 'A DHR registered robust Ethics committee to streamline the research programme',
      style: 2,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><path d="M27.3334 37.5834H13.6667C13.3647 37.5834 13.075 37.4635 12.8614 37.2499C12.6478 37.0363 12.5278 36.7466 12.5278 36.4446C12.5278 36.1425 12.6478 35.8528 12.8614 35.6392C13.075 35.4257 13.3647 35.3057 13.6667 35.3057H27.3334C27.6354 35.3057 27.9251 35.4257 28.1387 35.6392C28.3523 35.8528 28.4723 36.1425 28.4723 36.4446C28.4723 36.7466 28.3523 37.0363 28.1387 37.2499C27.9251 37.4635 27.6354 37.5834 27.3334 37.5834Z" fill="#008080"/><path d="M19.3611 10.25H21.6389V35.875H19.3611V10.25Z" fill="#008080"/><path d="M31.8888 7.97211H9.11106C8.809 7.97211 8.51932 7.85212 8.30574 7.63854C8.09216 7.42496 7.97217 7.13528 7.97217 6.83322C7.97217 6.53117 8.09216 6.24149 8.30574 6.02791C8.51932 5.81433 8.809 5.69434 9.11106 5.69434H31.8888C32.1909 5.69434 32.4806 5.81433 32.6942 6.02791C32.9077 6.24149 33.0277 6.53117 33.0277 6.83322C33.0277 7.13528 32.9077 7.42496 32.6942 7.63854C32.4806 7.85212 32.1909 7.97211 31.8888 7.97211Z" fill="#008080"/></svg>`
    },
    {
      heading: 'Multidisciplinary Team',
      para: 'Partaking of qualified professionals from versatile medical streams at the hospital, thus expanding the research horizons',
      style: 2,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M18.75 22.5C20.0761 22.5 21.3479 23.0268 22.2855 23.9645C23.2232 24.9021 23.75 26.1739 23.75 27.5C23.75 29.9125 22.27 31.825 20.2225 33.075C18.175 34.32 15.4375 35 12.5 35C9.5625 35 6.825 34.32 4.7775 33.075C2.7275 31.825 1.25 29.9125 1.25 27.5C1.25 26.1739 1.77678 24.9021 2.71447 23.9645C3.65215 23.0268 4.92392 22.5 6.25 22.5H18.75ZM12.5 6.25C14.3234 6.25 16.072 6.97433 17.3614 8.26364C18.6507 9.55295 19.375 11.3016 19.375 13.125C19.375 14.9484 18.6507 16.697 17.3614 17.9864C16.072 19.2757 14.3234 20 12.5 20C10.6766 20 8.92795 19.2757 7.63864 17.9864C6.34933 16.697 5.625 14.9484 5.625 13.125C5.625 11.3016 6.34933 9.55295 7.63864 8.26364C8.92795 6.97433 10.6766 6.25 12.5 6.25Z" fill="#008080"/></svg>`
    },
    {
      heading: 'Administration',
      para: 'Comprehensive Administrative support for research activities',
      style: 1,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><path d="M13.6666 8.54199H10.2499C9.34376 8.54199 8.47472 8.90196 7.83397 9.54271C7.19322 10.1835 6.83325 11.0525 6.83325 11.9587V32.4587C6.83325 33.3648 7.19322 34.2339 7.83397 34.8746C8.47472 35.5154 9.34376 35.8753 10.2499 35.8753H19.9823M30.7499 23.917V30.7503H37.5833M30.7499 18.792V11.9587C30.7499 11.0525 30.3899 10.1835 29.7492 9.54271C29.1085 8.90196 28.2394 8.54199 27.3333 8.54199H23.9166" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.6665 18.7917H20.4998M13.6665 25.625H18.7915M13.6665 8.54167C13.6665 7.63551 14.0265 6.76647 14.6672 6.12572C15.308 5.48497 16.177 5.125 17.0832 5.125H20.4998C21.406 5.125 22.275 5.48497 22.9158 6.12572C23.5565 6.76647 23.9165 7.63551 23.9165 8.54167C23.9165 9.44782 23.5565 10.3169 22.9158 10.9576C22.275 11.5984 21.406 11.9583 20.4998 11.9583H17.0832C16.177 11.9583 15.308 11.5984 14.6672 10.9576C14.0265 10.3169 13.6665 9.44782 13.6665 8.54167ZM23.9165 30.75C23.9165 32.5623 24.6364 34.3004 25.9179 35.5819C27.1994 36.8634 28.9375 37.5833 30.7498 37.5833C32.5621 37.5833 34.3002 36.8634 35.5817 35.5819C36.8632 34.3004 37.5832 32.5623 37.5832 30.75C37.5832 28.9377 36.8632 27.1996 35.5817 25.9181C34.3002 24.6366 32.5621 23.9167 30.7498 23.9167C28.9375 23.9167 27.1994 24.6366 25.9179 25.9181C24.6364 27.1996 23.9165 28.9377 23.9165 30.75Z" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    }
  ];

  prevFeature() {
    if (this.featureIndex > 0) {
      this.featDirection = 'prev';
      this.featureIndex--;
    }
  }

  nextFeature() {
    if (this.featureIndex < this.featureCards.length - 1) {
      this.featDirection = 'next';
      this.featureIndex++;
    }
  }

  navigateToPage(page:string) {
    this.router.navigate([`/${page}`]);
    console.log(`Navigating to ${page}`);

  }

  ngOnInit(): void {
    this.titleService.setTitle("Rashtrotthana Hospital Research Centre | Clinical Research Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital Research Centre is a state-of-the-art facility that conducts clinical research in Bangalore, India, with a focus on traditional and modern medicine.' });

    this.metaService.updateTag({ name: 'keywords', content: 'clinical research, research centre, research facility, research activities, research team, research investigators, research library, research lab' });

    this.featureCards = this.featureRawCards.map(c => ({
      heading: c.heading,
      para: c.para,
      style: c.style,
      safeSvg: this.sanitizer.bypassSecurityTrustHtml(c.svg)
    }));
  }

  selectedPopUp:any = null

  popUpInfo(team : any){
      this.selectedPopUp =team;
  }

  closeInfo(){
    this.selectedPopUp =null;
  }
}
