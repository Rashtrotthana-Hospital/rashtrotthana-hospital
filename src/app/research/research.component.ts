import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent {
  constructor(private router: Router, private titleService: Title,  
    private metaService: Meta) {}
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
      image : "../../assets/member_15.png",
      name : "Dr. Kavyashree Kulamarva",
      qualification : "BAMS, MD",
      designation : "Research Officer",
      address : "Former Senior Resident, NIMHANS, Bengaluru",
      role : "",
      roleDesv : "Former Senior Research Fellow, CCRAS",
      description : "",
      role_2 : "Research Officer"
    },
    {
      image : "../../assets/member_16.png",
      name : "Dr. Sooraj Mohan R",
      qualification : "BAMS",
      designation : "Research Officer",
      address : "Former Senior Research fellow, National ayurveda Research Institute for Panchakarma",
      role : "",
      roleDesv : "Former Research Fellow, Dept. of  Ethno medicine, JNTBGRI",
      description : "",
      role_2 : "Research Officer"
    },
    {
      image : "../../assets/member_14.png",
      name : "Dr. Rohith K. R",
      qualification : "BAMS",
      designation : "Research Co-ordinator",
      address : "",
      role : "",
      roleDesv : "",
      description : "",
      role_2 : "Research Co-ordinator"
    }
  ]

  navigateToPage(page:string) {
    this.router.navigate([`/${page}`]);
    console.log(`Navigating to ${page}`);

  }

  ngOnInit(): void {
    this.titleService.setTitle("Rashtrotthana Hospital Research Centre | Clinical Research Bangalore");  

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital Research Centre is a state-of-the-art facility that conducts clinical research in Bangalore, India, with a focus on traditional and modern medicine.' });

    this.metaService.updateTag({ name: 'keywords', content: 'clinical research, research centre, research facility, research activities, research team, research investigators, research library, research lab' });
  }

  selectedPopUp:any = null

  popUpInfo(team : any){
      this.selectedPopUp =team;
  }

  closeInfo(){
    this.selectedPopUp =null;
  }
}
