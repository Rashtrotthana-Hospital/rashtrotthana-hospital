import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-urology',
  templateUrl: './urology.component.html',
  styleUrl: './urology.component.css'
})
export class UrologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];

  ngOnInit(): void {
    this.titleService.setTitle("Best Urology Hospital in Bangalore | Kidney Specialist Hospital Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best urology hospital in Bangalore, India with experienced top urologists providing urology treatment.' });

    this.metaService.updateTag({ name: 'keywords', content: 'best urology hospital near me,urology, urinary problems, UTI, kidney stones, urinary incontinence, urine' });
  }

  doctors = [
    {
      doctor_image: '../../assets/doctor-31.png',
      doctor_name: 'Dr. Nagaraj Rao',
      experience: "25",
      docalt: "Dr. Nagaraj Rao is the best urologist in Bangalore | Rashtrotthana Hospital Bangalore"
    },
    {
      doctor_image: '../../assets/Dr-Madhu-S-N.png',
      doctor_name: 'Dr. Madhu S. N',
      experience: "14",
      docalt: "Dr.Madhu S N Rao is the best urologist in Bangalore | Rashtrotthana Hospital Bangalore"
    },

  ]

  formDoctors = ['Dr. Nagaraj Rao', 'Dr. Madhu S. N']

  faqs = [
    {
      ques : "What is genito-urinary reconstruction surgery?",
      ans : "Genito-urinary reconstruction is a specialized surgical field focused on repairing, rebuilding, or replacing parts of the urinary or reproductive systems that have been damaged by disease, injury, or are congenitally malformed."
    },
    {
      ques : "Who is a candidate for genito-urinary reconstruction?",
      ans : "Patients who may benefit from this surgery include those with congenital abnormalities, men who have suffered trauma to the urinary system, or patients who need their urinary organs reconstructed after cancer surgery. Our specialists in Bangalore can provide a thorough evaluation to determine if you are a suitable candidate."
    },
    {
      ques : "Is genito-urinary reconstruction a major surgery?",
      ans : "The scope of the surgery varies depending on the condition being treated. Our surgeons at Rashtrotthana Hospital are highly skilled in a range of advanced, often minimally invasive, techniques to ensure the best possible outcome with a focus on a safe and comfortable recovery."
    },
    {
      ques : "What types of conditions does this surgery treat?",
      ans : "This surgery can treat a wide range of conditions, including urethral strictures, bladder exstrophy, penile deformities and injuries to the kidneys, bladder, and urethra."
    },
    {
      ques : "How long is the recovery time?",
      ans : "Recovery time is unique to each patient and the specific procedure performed. Our team will provide a personalized recovery plan and care to help you return to your daily activities as quickly and safely as possible. We offer a holistic approach to healing to support your well-being."
    },
    {
      ques : "What kind of technology do you use for diagnosis and treatment?",
      ans : "We use state-of-the-art technology for accurate diagnosis and effective, minimally invasive treatments. For example, our department is equipped for advanced endoscopic and laser treatments for kidney stones, which ensures a faster recovery and less discomfort for our patients."
    },
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
