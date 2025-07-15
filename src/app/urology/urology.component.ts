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
      ques: " Why am I seeing blood in my urine?",
      ans: "Blood in urine, also called hematuria, can be a sign of several underlying health conditions, including kidney stones, bladder infection, urinary tract infection (UTI), prostate issues, or even bladder cancer. Sometimes, it may result from strenuous exercise or certain medications, but persistent cases should be evaluated immediately. At Rashtrotthana Hospital, our expert urologists, Dr. Nagaraj Rao and Dr. Madhu S. N, use advanced diagnostic tests like urine analysis, ultrasound and cystoscopy to determine the exact cause and provide the best treatment."
    },

    {
      ques: "What causes painful urination and burning urine?",
      ans: `
        <p class = "s_para"><b>Painful urination (dysuria) and burning urine</b> are often caused by:</p>
        <ul>
          <li class = "s_para"><b>Urinary tract infections (UTIs)</b> - Common in both men and women, causing frequent urination and bladder pain.</li>
          <li class = "s_para"><b>Bladder infections</b> - Can lead to severe pelvic pain and urine blockage</li>
          <li class = "s_para"><b>Kidney stones - </b>Can irritate the urinary tract, causing burning sensations.</li>
          <li class = "s_para"><b>Prostate problems</b> - Enlarged prostate or prostate cancer can lead to painful urination.</li>
        </ul>
        <p class = "s_para">If you experience burning urine, pain while peeing, or frequent urination, consult our urology specialists for a personalized treatment plan.</p>
      `
    },
    {
      ques: "What are the symptoms of a urinary infection (UTI)?",
      ans: `
        <ul>
          <li class = "s_para">A urinary infection can cause:</li>
          <li class = "s_para">Frequent urination (needing to urinate often, even at night)</li>
          <li class = "s_para">Burning urine or pain while urinating</li>
          <li class = "s_para">Bladder pain and pelvic discomfort</li>
          <li class = "s_para">Cloudy, strong-smelling, or blood in urine</li>
          <li class = "s_para">Fever or lower back pain (if the infection reaches the kidneys)</li>
        </ul>
        <p class = "s_para">At Rashtrotthana Hospital, we offer specialized UTI treatment, including antibiotic therapy and urine culture tests for accurate diagnosis.</p>
      `
    },
    {
      ques: "How is kidney stone removal done?",
      ans: `
        <p class = "s_para">Kidney stones can cause severe back pain, nausea, vomiting and difficulty passing urine. Treatment options include:</p>
        <ul>
          <li class = "s_para"><b>Medication to dissolve small stones</b></li>
          <li class = "s_para"><b>Shock wave lithotripsy (ESWL)</b> - Non-surgical procedure to break stones</li>
          <li class = "s_para"><b>Ureteroscopy with laser treatment</b> - Removes medium-sized stones</li>
          <li class = "s_para"><b>Minimally invasive kidney stone surgery</b> for large or complex stones</li>
        </ul>
        <p class = "s_para">Our urology surgeons, Dr. Nagaraj Rao and Dr. Madhu S. N, specialize in kidney stone removal using the latest techniques for faster recovery and minimal discomfort.</p>
      `
    },
    {
      ques: "What is the best treatment for prostate cancer?",
      ans: `
        <p class = "s_para">Prostate cancer treatment depends on factors like age, cancer stage, and overall health. Common treatments include:</p>
        <ul>
          <li class = "s_para"><b>Active Surveillance</b> - For slow-growing cases</li>
          <li class = "s_para"><b>Surgery (Prostatectomy)</b> - Removal of the prostate gland</li>
          <li class = "s_para"><b>Radiation Therapy</b> - High-energy beams to kill cancer cells</li>
          <li class = "s_para"><b>Hormone Therapy</b> - Slows cancer growth</li>
        </ul>
        <p class = "s_para">Early detection saves lives! Our urology team offers prostate screenings, PSA tests, and advanced prostate cancer treatments for better health outcomes.</p>
      `
    },
    {
      ques: "Can bladder stones cause bladder pain?",
      ans: `
        <p class = "s_para">Yes, bladder stones can cause:</p>
        <ul>
          <li class = "s_para">Bladder pain and discomfort</li>
          <li class = "s_para">Frequent urination (especially at night)</li>
          <li class = "s_para">Painful urination and urine blockage</li>
          <li class = "s_para">Blood in urine and infections</li>
        </ul>
        <p class = "s_para">If left untreated, bladder stones can lead to serious complications, including bladder infections or kidney problems. Our experts offer safe and effective bladder stone treatments, including non-invasive procedures and surgical removal.</p>
      `
    },
    {
      ques: "Where can I find the best urology surgery in Bangalore?",
      ans: `
        <p class = "s_para">If you're looking for the best urologist in Bangalore for treatments like kidney stone removal, prostate surgery, or bladder cancer treatment, Rashtrotthana Hospital provides:</p>
        <ul>
          <li class = "s_para"><b>Experienced Urology Surgeons</b> - Dr. Nagaraj Rao and Dr. Madhu S. N</li>
          <li class = "s_para"><b>State-of-the-art technology</b> for accurate diagnosis and effective treatment</li>
          <li class = "s_para"><b>Personalized care</b> for all urinary and kidney-related issues</li>
        </ul>
        <p class = "s_para">Book a consultation today and get expert guidance on prostate health, urinary infections, kidney stones, bladder cancer and urology surgery!</p>
      `
    },
  ]

  trackPhoneClick() {
    gtag('event', 'conversion', {
      'send_to': 'AW-16656770043/-YEMCITg09IZEPvHyIY-'
    });
  }

}
