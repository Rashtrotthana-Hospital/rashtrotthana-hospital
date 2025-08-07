import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-oncology',
  templateUrl: './oncology.component.html',
  styleUrl: './oncology.component.css'
})
export class OncologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  specialities: any[] = [];

  ngOnInit(): void {
    this.titleService.setTitle("Medical Oncology Hospital in Bangalore | Rashtrotthana Hospital");
    this.metaService.updateTag({ name: 'description', content: 'Find the Medical Oncology Hospital in Bangalore. Book an appointment now at Rashtrotthana Hospital.' });
    this.metaService.updateTag({ name: 'keywords', content: 'oncology hospital near me, cancer, cancer treatment surgery, radiation therapy, chemotherapy, immunotherapy, Medical oncologists, oncology, cancer symptoms, cancer care, hope' });
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
  }

  doctors: any = [
    {
      doctor_image: '../../assets/Dr-Shekar-Patil.png',
      doctor_name: 'Dr. Shekar Patil',
      alt: 'Dr. Shekar Patil | Best Medical Oncologist Doctor in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image: '../../assets/Dr-Pramod-S-Chinder.png',
      doctor_name: 'Dr. Pramod S. Chinder',
      alt: 'Dr. Pramod S. Chinder | Best Orthopaedic Oncosurgeon in Bangalore | Rashtrotthana Hospital'
    },
    // {
    //   doctor_image: '../../assets/Dr-Rajeev-Vijayakumar.png',
    //   doctor_name: 'Dr. Rajeev Vijayakumar',
    //   alt: 'Dr. Rajeev Vijayakumar | Best Medical Oncologist in Bangalore | Rashtrotthana Hospital'
    // },
    {
      doctor_image: '../../assets/Dr-Ravi-T.png',
      doctor_name: 'Dr. Ravi T',
      alt: 'Dr. Ravi T | Best Cancer Doctor in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image: '../../assets/Dr-Giri.png',
      doctor_name: 'Dr. G. V. Giri',
      alt: 'Dr. G. V. Giri | Best Cancer Doctor in Bangalore | Rashtrotthana Hospital'
    }
  ];

  faqs : any = [
    {
      ques : "What types of cancer do you treat at Rashtrotthana Hospital?",
      ans : "We offer diagnosis and treatment for a wide range of cancers including breast, lung, cervical, skin, blood, oral, liver colorectal and prostate cancers. Each case is handled by experienced oncologists who follow evidence-based protocols and personalized care plans."
    },
    {
      ques : "What symptoms should prompt a cancer screening?",
      ans : "If you're experiencing unexplained weight loss, persistent fatigue, swelling or lumps, non-healing sores, prolonged cough, changes in skin texture, or abnormal bleeding, it’s best to consult an oncologist. Early evaluation helps in timely diagnosis and better treatment outcomes."
    },
    {
      ques : "How is cancer diagnosed at your hospital?",
      ans : "Our diagnostic process involves a combination of physical evaluation, imaging (like CT and MRI), blood investigations and biopsy when required. This helps us confirm the presence of cancer and determine its stage and spread for effective planning."
    },
    {
      ques : "Are there specialized services for specific types of cancer?",
      ans : "Yes. We have focused programs for each cancer type - for example, breast cancer, blood cancer and oral cancer are managed with specialized protocols. Our consultants have deep experience in handling these conditions through targeted diagnostics and supportive therapies."
    },
    {
      ques : "What support is provided for patients during treatment?",
      ans : "We offer a range of support services including psychological counseling, nutrition planning, pain management and patient education. Our multidisciplinary team works closely with families to ensure patients feel supported throughout their journey."
    },
    {
      ques : "Do you conduct cancer screening or awareness programs?",
      ans : "Yes. We regularly conduct community outreach and awareness drives to educate the public on cancer risk factors, warning signs and the importance of early screening. We also run screening programs for cervical, breast and colorectal cancers."
    },
    {
      ques : "How do I book an appointment with an oncologist?",
      ans : "You can book a consultation through our website or by calling 080 6923 9999. Our coordination team ensures timely appointments for both new evaluations and follow-ups."
    },
    {
      ques : "What makes Rashtrotthana Hospital a reliable choice for cancer care?",
      ans : "Our hospital is guided by experienced doctors, accurate diagnostics, a compassionate care model and modern treatment facilities. With a patient-first mindset and accessible care options, we strive to offer trusted cancer care for every individual and family."
    },
  ]

}