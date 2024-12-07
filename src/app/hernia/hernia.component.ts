import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-hernia',
  templateUrl: './hernia.component.html',
  styleUrl: './hernia.component.css'
})
export class HerniaComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer, private router: Router) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Effective Hernia Treatment & Surgery - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers effective hernia treatment and surgery options in Bangalore with advanced surgical care.' });

  this.metaService.updateTag({ name: 'keywords', content: 'hernia surgery, hernia treatment, best hospital for hernia Bangalore' });

  }

  doctors =[
    // {
    //   image: 'assets/Dr-S-Shashivadhanan.png',
    //   name: 'Dr. Shashi Vadhanan',
    // },
    {
      image: 'assets/Dr-Atmaram-D-C.png',
      name: 'Dr. Atmaram D. C',
      department : 'GASTROENTEROLOGLIST',
      alt : 'Dr. Atmaram D. C | Best laparoscopic Surgeon in Bangalore | Rashtrotthana Hospital'
    },
    {
      image: 'assets/Dr-Nishanth-Lakshmikantha.png',
      name: 'Dr. Nishanth Lakshmikanth',
      department : 'SURGERY/GASTROSCIENCES',
      alt : 'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital'
    }
  ]
  contactus(){
    this.router.navigate(['/contact-us-bangalore']);
  }

  // doctors =[
  //   {
  //     image : '../../assets/yoga/Dr-Suvarnini-Konale.png',
  //     name : "Dr. Suvarnini Konale",
  //     section : "BAMS, M.D. (Ayurveda)",
  //     designation : "LIFESTYLE",
  //   }
  // ]

}
