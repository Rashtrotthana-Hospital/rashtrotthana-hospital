import { Component ,  OnInit} from '@angular/core';
import { SafeHtml,DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-general-surgery',
  templateUrl: './general-surgery.component.html',
  styleUrl: './general-surgery.component.css'
})
export class GeneralSurgeryComponent  implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
  ngOnInit(): void {
    this.specialities=[
      {
        main_heading:'General Surgery',
        content:'The General Surgery Department at Rashtrotthana Hospital is a tertiary care center dedicated to high-quality surgical care across a wide range of complex and routine procedures. Our experienced team of board-certified surgeons specialises in advanced surgical techniques, including minimally invasive and <a href="https://en.wikipedia.org/wiki/Laparoscopy">laparoscopic</a> procedures, to ensure the best outcomes for our patients. Equipped with modular operating theatres and a state-of-the-art Surgical ICU, the department is designed to provide seamless and safe surgical experiences from preoperative to postoperative care.',
        content_1:'Our general surgeons treat conditions involving the alimentary canal and abdominal organs, including the oesophagus, stomach, liver, pancreas, gallbladder and intestines, with special expertise in thyroid and breast surgeries as well. Each patient receives a personalised treatment plan and our multidisciplinary approach ensures that every case benefits from the expertise of various specialists. For patients with critical needs, our 24/7 emergency surgical services are equipped to handle urgent conditions promptly. At Rashtrotthana Hospital, patient-centered care is our priority. From diagnosis to recovery, our compassionate nursing staff and specialised surgeons work together to provide safe, effective and comfortable surgical care. Whether it’s managing chronic conditions or performing intricate procedures, we are committed to upholding excellence and innovation in surgical care.',
        heading:'General Surgery',
        image:'best-general-surgery-hospital-bengaluru-rrnagar.png',
        alt : 'Best General Surgery Hospital in RR Nagar Bengaluru',
        Doctors:[
          // {
          //   doctor_image:'../../assets/doctor-5.png',
          //   doctor_name:'Dr. Shashi Vadhanan',
          //   experience : " 20+"
          // },
          {
            doctor_image:'../../assets/Dr-Atmaram-D-C.png',
            doctor_name:'Dr. Atmaram D. C',
            experience : "18",
            docalt : 'Dr. Atmaram D. C | Best laparoscopic Surgeon in Bangalore | Rashtrotthana Hospital'
          },
          {
            doctor_image:'../../assets/Dr-Nishanth-Lakshmikantha.png',
            doctor_name:'Dr. Nishanth Lakshmikanth',
            experience : "5",
            docalt:'Dr. Nishanth Lakshmikantha | Best General & GI Surgeon in Bangalore | Rashtrotthana Hospital'
          }    
        ],
        Doctors_2:[
          {
            doctor_image:'../../assets/doctor-65.png',
            doctor_name:'Dr. Vivekanand',
            experience : " 25+"
          },
 
        ]
      }];
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
        this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);  
  }

}
