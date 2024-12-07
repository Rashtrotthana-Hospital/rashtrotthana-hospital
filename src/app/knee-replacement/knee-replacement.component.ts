import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-knee-replacement',
  templateUrl: './knee-replacement.component.html',
  styleUrl: './knee-replacement.component.css'
})
export class KneeReplacementComponent implements OnInit {
  constructor(  
    private titleService: Title,  
    private metaService: Meta,
    private router: Router
  ) { } 
  ngOnInit() {  
    this.titleService.setTitle(" Advanced Total Knee Replacement Surgery - Rashtrotthana Hospital");  
    
  // Set the meta description
  this.metaService.updateTag({ name: 'description', content: 'Experience pain-free mobility with advanced total knee replacement surgery at Rashtrotthana Hospital, Bangalore\'s leading orthopedic center.' });

  // Optionally set other meta tags
  this.metaService.updateTag({ name: 'keywords', content: 'knee replacement surgery, orthopedic care, best knee surgery Bangaloret' }); 
        
  }  
  contactus(){
    this.router.navigate(['/contact-us-bangalore']);
  }



  doctors =[
    {
      image : 'assets/Dr-Mahesh-Kulkarni.png',
      name : 'Dr. Mahesh Kulkarni',
      designation : 'Orthopaedics',
      alt : 'Dr. Mahesh Kulkarni | Best Ortho Doctor in Bangalore | Rashtrotthana Hospital'
    },
    {
      image : 'assets/Dr-Sujayendra-D-M.png',
      name : 'Dr. Sujayendra D. M',
      designation : 'Orthopaedics',
      alt : 'Dr. Sujayendra D. M | Best Orthopaedic Doctor in Bangalore | Rashtrotthana Hospital'
    },{
      image : 'assets/Dr-Nikhil-Hegde.png',
      name : 'Dr. Nikhil Hegde',
      designation : 'Orthopaedics',
      alt: 'Dr. Nikhil Hegde | Best Orthopaedic Consultant in Bangalore | Rashtrotthana Hospital'
    }
  ]

}
