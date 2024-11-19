import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-hernia',
  templateUrl: './hernia.component.html',
  styleUrl: './hernia.component.css'
})
export class HerniaComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Effective Hernia Treatment & Surgery - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers effective hernia treatment and surgery options in Bangalore with advanced surgical care.' });

  this.metaService.updateTag({ name: 'keywords', content: 'hernia surgery, hernia treatment, best hospital for hernia Bangalore' });

  }

  doctors =[
    {
      image: 'assets/doctor-5.png',
      name: 'Dr. Shashi Vadhanan',
    },
    {
      image: 'assets/doctor-3.png',
      name: 'Dr. Atmaram D. C',
    },
    {
      image: 'assets/doctor-25.png',
      name: 'Dr. Nishanth Lakshmikanth',
    }
  ]

  // doctors =[
  //   {
  //     image : '../../assets/doctor-14.png',
  //     name : "Dr. Suvarnini Konale",
  //     section : "BAMS, M.D. (Ayurveda)",
  //     designation : "LIFESTYLE",
  //   }
  // ]

}
