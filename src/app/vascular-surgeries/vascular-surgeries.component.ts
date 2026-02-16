import { Component } from '@angular/core';
import { Title, Meta, SafeHtml, DomSanitizer } from '@angular/platform-browser';
declare let gtag: Function;

@Component({
  selector: 'app-vascular-surgeries',
  templateUrl: './vascular-surgeries.component.html',
  styleUrl: './vascular-surgeries.component.css'
})
export class VascularSurgeriesComponent {

  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
  
    }
    sanitizedContent: SafeHtml = '';
    sanitizedContent1: SafeHtml = '';
    specialities: any[] = [];
    ngOnInit(): void {
      this.titleService.setTitle("Vascular Surgery in Bangalore | Advanced Vascular Care");
      this.metaService.updateTag({ name: 'description', content: 'Manage diabetes, thyroid & hormonal disorders with expert endocrinologists in Bangalore. Book your consultation today.' });
  
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
      this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
    }
  

  doctors: any = [
    {
      doctor_image: '../../assets/Dr-Vivekanad.png',
      doctor_name: 'Dr. Vivekanand',
      experience: "26+",
      docalt: 'Dr. Vivekanand | Best Vascular Surgeon in Bangalore | Rashtrotthana Hospital'
    },
  ]

  faqs: any = [
    {
      ques : "What’s the difference between a vascular surgeon and a cardiologist?",
      ans : "Cardiologists focus on diagnosing and treating conditions related to the heart. Vascular surgeons, on the other hand, specialize in treating diseases of the blood vessels - including arteries, veins, and lymphatic vessels - outside the heart. They also perform both open and minimally invasive surgeries."
    },
    {
      ques : "How long is the recovery time after vascular surgery?",
      ans : " Recovery time depends on the type of procedure and your overall health. Minimally invasive surgeries like EVAR or angioplasty often allow quicker recovery, sometimes even same-day discharge. Open surgeries may require longer hospitalization and a few weeks of healing."
    },
    {
      ques : "Can lifestyle changes reduce the need for vascular surgery?",
      ans : "Yes. Healthy habits such as quitting smoking, eating a balanced diet, controlling blood pressure and diabetes, and regular physical activity can significantly reduce your risk of vascular complications and sometimes delay or eliminate the need for surgery."
    },
    {
      ques : "Are there alternatives to vascular surgery?",
      ans : "There are - depending on the condition. Medications, compression stockings, exercise therapy, and dietary changes may help manage certain vascular problems. But in advanced cases, surgery may be the most effective option."
    },
    {
      ques : "When should I consult a vascular surgeon?",
      ans : "If you’re experiencing symptoms like leg pain when walking, visible varicose veins, non-healing wounds, numbness or tingling in limbs, or have a known aneurysm or a family history of vascular disease, it’s advisable to consult a vascular surgeon."
    },
    {
      ques : "Who is the best vascular surgeon in Bangalore?",
      ans : "Dr. Vivekanand, Consultant Vascular Surgeon at Rashtrotthana Hospital, with over 25 years of experience, is widely regarded as one of the leading vascular specialists in Bangalore. Known for his expertise in both open and endovascular procedures, he is trusted for his evidence-based approach, surgical skill, and compassionate patient care."
    }

  ]

  formDoctors: any = ['Dr. Vivekanand']

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
