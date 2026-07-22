import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-new-research-page',
  templateUrl: './new-research-page.component.html',
  styleUrl: './new-research-page.component.css'
})
export class NewResearchPageComponent {
  constructor(private router: Router, private titleService: Title,
    private metaService: Meta, private sanitizer: DomSanitizer) { }
  specialFeatures = [
    {
      title: "Experienced and GCP-Trained Team: ",
      description: "Our research investigators are highly experienced and trained in Good Clinical Practice (GCP), supported by a dedicated full-time GCP-trained research team."
    },
    {
      title: "Updated SOPs: ",
      description: "Our research-related activities adhere to Standard Operating Procedures (SOPs) that are regularly updated in accordance with national and international regulations"
    },
    {
      title: "Institutional Ethical Committee: ",
      description: " Our Ethical Committee comprises experienced experts from various fields dedicated to ensuring the integrity and ethical standards of our research."
    },
    {
      title: "Scientific Advisory Board: ",
      description: "Distinguished scholars from various branches of science contribute their valuable knowledge to the planning and designing of systematized proposals."
    },
    {
      title: "Advanced Data Monitoring System: ",
      description: "We employ a well-designed data monitoring system to ensure accuracy and reliability in our research activities."
    },
    {
      title: "Extensive Library Resources: ",
      description: "Our library houses a vast collection of books on both traditional and modern medicine, providing a rich resource for researchers."
    },
    {
      title: "Online Journal Access: ",
      description: "We offer online access to a variety of indexed international journals, keeping our researchers updated with the latest scientific advancements."
    },
    {
      title: "Fully Equipped Laboratory: ",
      description: "The Centre boasts fully equipped lab facilities for various investigations and includes sample storage units to support extensive research activities."
    },
    {
      title: "Collaborative Trials: ",
      description: "We collaborate with sister institutes to conduct comprehensive in vitro and in vivo trials, enhancing the scope and impact of our research."
    },


  ]

  researchTeam = [
    {
      image: "../../assets/Dr-Kavya-Research.png",
      name: "Dr. Kavya N ",
      qualification: "BAMS, MD (Ay), (PhD)",
      designation: "Research Manager",
      address: "Former Senior research fellow, Central Ayurveda Research Institute, CCRAS, Bengaluru",
      role: "",
      roleDesv: "Former Consultant and Head, Centre of Excellence in Research and Clinical services in Diabetes Mellitus, Ministry of AYUSH, Govt of India",
      description: "",
      role_2: "Research Manager"
    },
    
    {
      image: "../../assets/vrinda.png",
      name: "Dr. Vrinda",
      qualification: "BAMS MD (Ayu)",
      designation: "Research Officer",
      address: "Former Senior Research Fellow, CCRAS - Central Ayurveda Research Institute, Bengaluru",
      role: "",
      roleDesv: "Former Research consultant at Greenspace Herbs.",
      description: "",
      role_2: "Research Officer"
    },
    
    {
      image: "../../assets/Chaitra.png",
      name: "Dr. Chaithra Rao P",
      qualification: " BAMS, MD (Ayu)",
      designation: "Research Assistant",
      address: "Former Consultant, Centre of Excellence in Research and Clinical services in Diabetes Mellitus, Ministry of Ayush, Govt of India ",
      role: "",
      roleDesv: " Former Senior Research Fellow, CCRAS-Central Ayurveda Research Institute, Bengaluru",
      description: "",
      role_2: "Research Assistant"
    },
    {
      image: "../../assets/gopika.png",
      name: "Dr. Gopika. C",
      qualification: "BAMS, MD (Ayu), CRN",
      designation: "Research Assistant",
      address: "Former Researcher & Assistant Professor at Sri Paripoorna Sanathana Ayurveda Medical College Hospitals & Research Centre, Bengaluru ",
      role: "",
      roleDesv: "",
      description: "",
      role_2: "Research Assistant"
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
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
    <path d="M19.4634 35.7004L7.68291 29.2977V19.783L1.94385 16.671L19.4634 7.15625L36.9829 16.671V29.2074H35.0195V17.7744L31.2439 19.783V29.2977L19.4634 35.7004ZM19.4634 23.9356L32.8735 16.671L19.4634 9.40632L6.05328 16.671L19.4634 23.9356ZM19.4634 33.4621L29.2805 28.1609V20.8628L19.4634 26.1798L9.64632 20.8628V28.1609L19.4634 33.4621Z" fill="#008080"/>
  </svg>`
    },
    {
      heading: 'Institutional Ethical Committee',
      para: 'A DHR registered robust Ethics committee to streamline the research programme',
      style: 2,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
    <g clip-path="url(#clip0_23058_1989)">
      <path d="M27.3334 37.5834H13.6667C13.3647 37.5834 13.075 37.4635 12.8614 37.2499C12.6478 37.0363 12.5278 36.7466 12.5278 36.4446C12.5278 36.1425 12.6478 35.8528 12.8614 35.6392C13.075 35.4257 13.3647 35.3057 13.6667 35.3057H27.3334C27.6354 35.3057 27.9251 35.4257 28.1387 35.6392C28.3523 35.8528 28.4723 36.1425 28.4723 36.4446C28.4723 36.7466 28.3523 37.0363 28.1387 37.2499C27.9251 37.4635 27.6354 37.5834 27.3334 37.5834Z" fill="#008080"/>
      <path d="M19.3611 10.25H21.6389V35.875H19.3611V10.25Z" fill="#008080"/>
      <path d="M31.8888 7.97211H9.11106C8.809 7.97211 8.51932 7.85212 8.30574 7.63854C8.09216 7.42496 7.97217 7.13528 7.97217 6.83322C7.97217 6.53117 8.09216 6.24149 8.30574 6.02791C8.51932 5.81433 8.809 5.69434 9.11106 5.69434H31.8888C32.1909 5.69434 32.4806 5.81433 32.6942 6.02791C32.9077 6.24149 33.0277 6.53117 33.0277 6.83322C33.0277 7.13528 32.9077 7.42496 32.6942 7.63854C32.4806 7.85212 32.1909 7.97211 31.8888 7.97211Z" fill="#008080"/>
      <path d="M30.6704 28.2329C29.3873 28.2378 28.1208 27.9427 26.9719 27.3713C25.8231 26.7998 24.8237 25.9678 24.0535 24.9415L23.3701 24.0304L25.181 22.6523L25.8643 23.5635C26.425 24.3042 27.1497 24.905 27.9816 25.3187C28.8135 25.7324 29.7299 25.9476 30.659 25.9476C31.5881 25.9476 32.5045 25.7324 33.3364 25.3187C34.1683 24.905 34.893 24.3042 35.4537 23.5635L36.1371 22.6523L37.9479 24.0304L37.2646 24.9415C36.4966 25.9647 35.5009 26.7948 34.3563 27.3661C33.2117 27.9375 31.9497 28.2342 30.6704 28.2329Z" fill="#008080"/>
      <path d="M34.7474 21.9233C34.5708 21.9226 34.3981 21.8705 34.2505 21.7735C34.1029 21.6764 33.9867 21.5385 33.916 21.3766L30.6702 13.8941L27.4244 21.3766C27.3277 21.5986 27.1468 21.7732 26.9215 21.8618C26.6962 21.9504 26.4449 21.9459 26.2228 21.8493C26.0008 21.7526 25.8263 21.5717 25.7377 21.3464C25.649 21.1211 25.6536 20.8697 25.7502 20.6477L29.8388 11.2405C29.9189 11.0878 30.0393 10.96 30.1868 10.8707C30.3343 10.7815 30.5035 10.7344 30.6759 10.7344C30.8483 10.7344 31.0175 10.7815 31.165 10.8707C31.3126 10.96 31.4329 11.0878 31.513 11.2405L35.5902 20.6477C35.6506 20.7861 35.6757 20.9373 35.6631 21.0878C35.6506 21.2382 35.6009 21.3832 35.5185 21.5097C35.436 21.6362 35.3234 21.7402 35.1908 21.8124C35.0583 21.8846 34.9098 21.9227 34.7588 21.9233H34.7474Z" fill="#008080"/>
      <path d="M11.0245 28.2332C9.74329 28.2363 8.47904 27.9404 7.33231 27.369C6.18558 26.7976 5.188 25.9665 4.41893 24.9418L3.7356 24.0307L5.53504 22.6641L6.21837 23.5752C6.77908 24.316 7.50381 24.9168 8.33571 25.3304C9.1676 25.7441 10.084 25.9593 11.0131 25.9593C11.9422 25.9593 12.8586 25.7441 13.6905 25.3304C14.5224 24.9168 15.2471 24.316 15.8078 23.5752L16.4912 22.6641L18.302 24.0421L17.6187 24.9532C16.8495 25.9743 15.8533 26.8023 14.7087 27.3716C13.5642 27.9409 12.3028 28.2359 11.0245 28.2332Z" fill="#008080"/>
      <path d="M15.1018 21.9233C14.9251 21.9226 14.7525 21.8705 14.6049 21.7735C14.4572 21.6764 14.341 21.5385 14.2704 21.3766L11.0245 13.8941L7.7901 21.3766C7.69344 21.5986 7.51255 21.7732 7.28722 21.8618C7.06189 21.9504 6.81058 21.9459 6.58857 21.8493C6.36656 21.7526 6.19205 21.5717 6.10341 21.3464C6.01477 21.1211 6.01928 20.8697 6.11593 20.6477L10.1932 11.2405C10.2733 11.0878 10.3936 10.96 10.5411 10.8707C10.6887 10.7815 10.8578 10.7344 11.0302 10.7344C11.2027 10.7344 11.3718 10.7815 11.5193 10.8707C11.6669 10.96 11.7872 11.0878 11.8673 11.2405L15.9445 20.6477C16.0049 20.7861 16.03 20.9373 16.0175 21.0878C16.0049 21.2382 15.9552 21.3832 15.8728 21.5097C15.7904 21.6362 15.6778 21.7402 15.5452 21.8124C15.4126 21.8846 15.2641 21.9227 15.1132 21.9233H15.1018Z" fill="#008080"/>
    </g>
    <defs>
      <clipPath id="clip0_23058_1989">
        <rect width="41" height="41" fill="white"/>
      </clipPath>
    </defs>
  </svg>`
    },
    {
      heading: 'Multidisciplinary Team',
      para: 'Partaking of qualified professionals from versatile medical streams at the hospital, thus expanding the research horizons',
      style: 2,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M18.75 22.5C20.0761 22.5 21.3479 23.0268 22.2855 23.9645C23.2232 24.9021 23.75 26.1739 23.75 27.5C23.75 29.9125 22.27 31.825 20.2225 33.075C18.175 34.32 15.4375 35 12.5 35C9.5625 35 6.825 34.32 4.7775 33.075C2.7275 31.825 1.25 29.9125 1.25 27.5C1.25 26.1739 1.77678 24.9021 2.71447 23.9645C3.65215 23.0268 4.92392 22.5 6.25 22.5H18.75ZM6.25 25C5.58696 25 4.95107 25.2634 4.48223 25.7322C4.01339 26.2011 3.75 26.837 3.75 27.5C3.75 28.77 4.51 29.98 6.08 30.9375C7.65 31.895 9.915 32.5 12.5 32.5C15.085 32.5 17.35 31.895 18.92 30.9375C20.49 29.98 21.25 28.77 21.25 27.5C21.25 26.837 20.9866 26.2011 20.5178 25.7322C20.0489 25.2634 19.413 25 18.75 25H6.25ZM35.38 22.52C36.3039 22.6141 37.16 23.0477 37.7825 23.7367C38.4051 24.4258 38.7498 25.3213 38.75 26.25C38.75 28.1775 37.575 29.7725 35.9975 30.825C34.4075 31.885 32.2825 32.5 30 32.5C28.2525 32.5 26.6 32.135 25.2075 31.4925C25.6075 30.775 25.9075 29.99 26.0825 29.135C27.14 29.66 28.4925 30 30 30C31.8575 30 33.485 29.495 34.61 28.745C35.7425 27.99 36.25 27.0825 36.25 26.25C36.2501 25.9618 36.1506 25.6825 35.9683 25.4593C35.7861 25.236 35.5323 25.0826 35.25 25.025L35 25H25.815C25.496 24.1001 25.0081 23.2694 24.3775 22.5525C24.5824 22.5179 24.7897 22.5003 24.9975 22.5H34.9975L35.38 22.52ZM30.58 8.77C31.9664 8.91291 33.2507 9.56479 34.1844 10.5996C35.1181 11.6344 35.6349 12.9787 35.635 14.3725L35.605 14.9475C35.4616 16.3331 34.8098 17.6163 33.7755 18.5495C32.7413 19.4826 31.398 19.9994 30.005 20L29.43 19.97C28.1421 19.8386 26.9389 19.267 26.0235 18.3515C25.108 17.4361 24.5364 16.2329 24.405 14.945L24.375 14.37C24.3743 13.6305 24.5195 12.8981 24.8022 12.2147C25.0849 11.5314 25.4996 10.9104 26.0225 10.3875C26.5454 9.8646 27.1664 9.44992 27.8497 9.16722C28.5331 8.88452 29.2655 8.73934 30.005 8.74L30.58 8.77ZM12.5 6.25C14.3234 6.25 16.072 6.97433 17.3614 8.26364C18.6507 9.55295 19.375 11.3016 19.375 13.125C19.375 14.9484 18.6507 16.697 17.3614 17.9864C16.072 19.2757 14.3234 20 12.5 20C10.6766 20 8.92795 19.2757 7.63864 17.9864C6.34933 16.697 5.625 14.9484 5.625 13.125C5.625 11.3016 6.34933 9.55295 7.63864 8.26364C8.92795 6.97433 10.6766 6.25 12.5 6.25ZM30.005 11.2425C29.1749 11.2425 28.3787 11.5723 27.7918 12.1593C27.2048 12.7462 26.875 13.5424 26.875 14.3725C26.875 15.2026 27.2048 15.9988 27.7918 16.5857C28.3787 17.1727 29.1749 17.5025 30.005 17.5025C30.8351 17.5025 31.6313 17.1727 32.2182 16.5857C32.8052 15.9988 33.135 15.2026 33.135 14.3725C33.135 13.5424 32.8052 12.7462 32.2182 12.1593C31.6313 11.5723 30.8351 11.2425 30.005 11.2425ZM12.5 8.75C11.3397 8.75 10.2269 9.21094 9.40641 10.0314C8.58594 10.8519 8.125 11.9647 8.125 13.125C8.125 14.2853 8.58594 15.3981 9.40641 16.2186C10.2269 17.0391 11.3397 17.5 12.5 17.5C13.6603 17.5 14.7731 17.0391 15.5936 16.2186C16.4141 15.3981 16.875 14.2853 16.875 13.125C16.875 11.9647 16.4141 10.8519 15.5936 10.0314C14.7731 9.21094 13.6603 8.75 12.5 8.75Z" fill="#008080"/>
  </svg>`
    },
    {
      heading: 'Administration',
      para: 'Comprehensive Administrative support for research activities',
      style: 1,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
    <path d="M13.6666 8.54199H10.2499C9.34376 8.54199 8.47472 8.90196 7.83397 9.54271C7.19322 10.1835 6.83325 11.0525 6.83325 11.9587V32.4587C6.83325 33.3648 7.19322 34.2339 7.83397 34.8746C8.47472 35.5154 9.34376 35.8753 10.2499 35.8753H19.9823M30.7499 23.917V30.7503H37.5833M30.7499 18.792V11.9587C30.7499 11.0525 30.3899 10.1835 29.7492 9.54271C29.1085 8.90196 28.2394 8.54199 27.3333 8.54199H23.9166" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.6665 18.7917H20.4998M13.6665 25.625H18.7915M13.6665 8.54167C13.6665 7.63551 14.0265 6.76647 14.6672 6.12572C15.308 5.48497 16.177 5.125 17.0832 5.125H20.4998C21.406 5.125 22.275 5.48497 22.9158 6.12572C23.5565 6.76647 23.9165 7.63551 23.9165 8.54167C23.9165 9.44782 23.5565 10.3169 22.9158 10.9576C22.275 11.5984 21.406 11.9583 20.4998 11.9583H17.0832C16.177 11.9583 15.308 11.5984 14.6672 10.9576C14.0265 10.3169 13.6665 9.44782 13.6665 8.54167ZM23.9165 30.75C23.9165 32.5623 24.6364 34.3004 25.9179 35.5819C27.1994 36.8634 28.9375 37.5833 30.7498 37.5833C32.5621 37.5833 34.3002 36.8634 35.5817 35.5819C36.8632 34.3004 37.5832 32.5623 37.5832 30.75C37.5832 28.9377 36.8632 27.1996 35.5817 25.9181C34.3002 24.6366 32.5621 23.9167 30.7498 23.9167C28.9375 23.9167 27.1994 24.6366 25.9179 25.9181C24.6364 27.1996 23.9165 28.9377 23.9165 30.75Z" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
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

  navigateToPage(page: string) {
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

  selectedPopUp: any = null

  popUpInfo(team: any) {
    this.selectedPopUp = team;
  }

  closeInfo() {
    this.selectedPopUp = null;
  }
}
