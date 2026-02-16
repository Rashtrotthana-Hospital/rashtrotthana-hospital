import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-nephrology',
  templateUrl: './nephrology.component.html',
  styleUrl: './nephrology.component.css'
})
export class NephrologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) { }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Nephrology Hospital | Rashtrotthana Bangalore");
    this.metaService.updateTag({ name: 'description', content: 'Looking for the best nephrology hospital in Bangalore? Get expert kidney care, dialysis and kidney failure treatment from top nephrologists in RR Nagar.' });
    this.metaService.updateTag({ name: 'keywords', content: 'nephrology, kidney hospital near me, kidney, kidney pain causes, kidney stones, kidney stone symptoms, Best Nephrology hospital in Rajarajeshwari nagar Bangalore, Nephrologists in RR nagar Bangalore, Kidney Stones treatment in RR nagar bangalore, Best hospital Kidney Dialysis hospital in Rajarajeshwari nagar bangalore, best hospital for nephrology, Kidney Specialist Near Me, Best doctors for Kidney problems in RR Nagar Bangalore, Best Kidney Care Centers in Bangalore, Renal Failure treatment in Bangalore, Kidney Failure treatment in RR Nagar Bangalore, Best hospital for Dialysis Treatment in RR nagar Bangalore, Affordable Kidney failure treatment in Bangalore, Expert Nephrologists in Rajarajeshwari Nagar bangare, Best Kidney Specialists Near Me, Top-rated Nephrologists in Bangalore, Experienced Kidney Specialists for Dialysis' });
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

  doctors = [
    // {
    //   doctor_image:'../../assets/Dr-Santhosh-S.png',
    //   doctor_name:'Dr. Santhosh S',
    //   experience : "14",
    //   docalt : 'Dr. Santhosh S | Best Nephrologist in Bangalore | Rashtrotthana Hospital'
    // },
    {
      doctor_image:'../../assets/dr-nithin-j-dr-page.png',
      doctor_name:'Dr. Nithin J',
      experience : "15+",
      docalt : 'Dr. Nithin J | Best Nephrology doctor in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image:'../../assets/dr-limesh-dr-page.png',
      doctor_name:'Dr. Limesh M',
      experience : "16+",
      docalt : 'Dr. Limesh M | Nephrologist & Transplant Physician Bangalore'
    }
  ]

  faqs = [
    {
      ques : 'Who is the best nephrologist in RR Nagar Bangalore?',
      ans : 'If you are looking for the best nephrologist in RR Nagar Bangalore, Dr. Santhosh S at Rashtrotthana Hospital is an experienced specialist with 14 years of expertise in treating Kidney Disease, Kidney Failure, Kidney Stones, and Kidney Transplants.'
    },
    {
      ques : 'What are the common symptoms of kidney disease?',
      ans : `
        <div class = 's_para'>Common signs of Kidney Disease include:</div>
        <ul>
          <li class = 's_para'>Persistent stomach pain, swelling in the legs, and changes in urination</li>
          <li class = 's_para'>High blood pressure and fatigue</li>
          <li class = 's_para'>Recurrent kidney infections or blood in the urine</li>
        </ul>
        <div class = 's_para'>If you experience these symptoms, consult Dr. Santhosh S, one of the Best Kidney Specialists Near Me at Rashtrotthana Hospital.</div>
      `
    },
    {
      ques : 'Where can I get the best kidney dialysis treatment in RR Nagar Bangalore?',
      ans : 'Rashtrotthana Hospital is known as the Best Hospital for Dialysis Treatment in RR Nagar Bangalore, offering an 8-bed dialysis unit with high safety standards and expert nephrologists.'
    },
    {
      ques : 'Can kidney failure be treated?',
      ans : `
        <div class = 's_para'>Yes! Kidney Failure Treatment in RR Nagar Bangalore includes:</div>
        <ul>
          <li class = 's_para'>Kidney Dialysis (Hemodialysis or Peritoneal Dialysis)</li>
          <li class = 's_para'>Kidney Transplant for advanced-stage patients</li>
          <li class = 's_para'>Medication and lifestyle management to slow progression</li>
        </ul>
        <div class = 's_para'>Dr. Santhosh S and our Expert Nephrologists in Rajarajeshwari Nagar Bangalore provide affordable kidney failure treatment with personalized care.</div>
      `
    },
    {
      ques : 'What is the best hospital for nephrology in Bangalore?',
      ans : 'Rashtrotthana Hospital is rated as the Best Nephrology Hospital in Bangalore, providing advanced treatment for Kidney Stones in RR Nagar Bangalore, Renal Failure, and Kidney Cancer.  '
    },
    {
      ques : 'How can I prevent kidney disease?',
      ans : `
        <div class = 's_para'>To maintain Kidney Health, follow these tips:</div>
        <ul>
          <li class = 's_para'>Stay hydrated and maintain a balanced diet</li>
          <li class = 's_para'>Control blood pressure and diabetes</li>
          <li class = 's_para'>Avoid excessive painkillers and processed foods</li>
          <li class = 's_para'>Consult a Top-rated Nephrologist in Bangalore like Dr. Santhosh S for regular check-ups</li>
        </ul>
      `
    },
    {
      ques : 'Where can I get affordable kidney failure treatment in Bangalore?',
      ans : 'Rashtrotthana Hospital offers Affordable Kidney Failure Treatment in Bangalore with expert guidance from Dr. Santhosh S and a dedicated nephrology team.'
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
