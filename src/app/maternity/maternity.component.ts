import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-maternity',
  templateUrl: './maternity.component.html',
  styleUrl: './maternity.component.css'
})
export class MaternityComponent {
  constructor(private router: Router,private titleService: Title, private metaService: Meta) { 
    this.titleService.setTitle("Comprehensive Maternity Care | Rashtrotthana Hospital");  

    this.metaService.updateTag({ name: 'description', content: 'Trusted maternity care with advanced prenatal services, labor support and postpartum care for mother and baby safety.' });
  
    this.metaService.updateTag({ name: 'keywords', content: 'Maternity care, prenatal care, delivery services, postnatal care, maternity hospital, Rashtrotthana Hospital, yoga benefits, pregnancy care' });
  }
  contact(){
    this.router.navigate(['/contact-us-bangalore']);
  }
    doctors = [
      {
        image : "assets/Dr-Latha-Venkataram.png",
        name : "Dr. Latha Venkataram",
        experience : "Years of Experience: 32",
        alt : 'Dr. Latha Venkataram | Top Obstetrics & Gynaecologist in banaglore | Rashtrotthana Hospital',
      },
      {
        image : "assets/Dr-Prakruthi.png",
        name : "Dr. Prakruthi",
        experience : "Years of Experience: 16",
        alt : "Dr. Prakruthi | Best Gynaec Doctor in Bangalore | Rashtrotthana Hospital"
      }
    ]
    doctors2 = [
      {
        image : "assets/Dr-Neelam-Saraswat.png",
        name : "Dr. Neelam Saraswat",
        experience : "Years of Experience: 10",
        alt : 'Dr. Neelam Saraswat | Best Gynaecology Consultant in Bangalore | Rashtrotthana Hospital',
      },
      {
        image : "assets/Dr-Ashwitha-Gundmi.png",
        name : "Dr. Ashwitha Gundmi",
        experience : "Years of Experience: 7+",
        alt : 'Dr. Ashwitha Gundmi | Best Obstetrics & Gynaecologist in Bangalore | Rashtrotthana Hospital',
      },
      {
        image : "assets/Dr-Vinita-Udupa.png",
        name : "Dr. Vinita Udupa",
        experience : "Years of Experience: 8",
        alt : 'Dr. Vinita Udupa | Best OBG in Bangalore | Rashtrotthana Hospital',
      }
    ]

    doc_expertise = [
      "30+ years of experience",
      "50k+ successful deliveries",
      "80% success rate on Normal Delivery",
      "Skilled in vaginal surgeries",
      "Specializes in safe and normal (vaginal) deliveries",
      "Focused on menopause management and related health issues",
      "Expertise in managing high-risk pregnancies",
      "Provides care for diabetes and medical disorders in pregnancy",
      "Offers treatment for recurrent pregnancy loss"
    ]

    contactus(){
      this.router.navigate(['/contact-us-bangalore']);
    }
}
