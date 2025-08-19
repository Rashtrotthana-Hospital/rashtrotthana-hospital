import { Component } from '@angular/core';
import { Title, Meta,DomSanitizer } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-anesthesiology',
  templateUrl: './anesthesiology.component.html',
  styleUrl: './anesthesiology.component.css'
})
export class AnesthesiologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Anesthesiology Department/Hospital in India | Pain Management Anesthesia  ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital has the Best Anesthesiology Department/Hospital and Pain Management Anesthesia center in India. Our experienced anesthesiologists provide anesthesia services across all surgical specialties, prioritizing patient safety and well-being.' });

  this.metaService.updateTag({ name: 'keywords', content: 'anesthesiology hospital near me, spinal anesthesia, general anesthesia drugs, local anesthesia, pain medicine, intensive care medicine, critical emergency medicine' });

  }

  doctors : any = [
    {
      doctor_image: '../../assets/Dr-Anand-Shankar.png',
      doctor_name: 'Col (Dr) Anand Shankar K',
      experience: "31",
      docalt: 'Best Anesthediology Doctor in RR Nagar Bangalore'
    }
  ]

  faqs : any = [
    {
      ques : "What are the different types of anesthesia used in surgeries?",
      ans : "Anesthesia types include general anesthesia (inducing unconsciousness), regional anesthesia (numbing a specific body region), and local anesthesia (numbing a small area). The choice depends on the procedure and patient health.​"
    },
    {
      ques : "How is anesthesia administered?",
      ans : "Anesthesia can be administered through inhalation, intravenous (IV) injection, or regional blocks. The method is selected based on the type of surgery and patient needs.​"
    },
    {
      ques : "What should I expect during a pre-anesthesia consultation?",
      ans : "During the consultation, the anesthesiologist will review your medical history, discuss anesthesia options, explain potential risks and answer any questions to prepare you for surgery."
    },
    {
      ques : "Are there risks associated with anesthesia?",
      ans : "While modern anesthesia is generally safe, risks can include allergic reactions, breathing difficulties, or postoperative nausea. Our team takes all necessary precautions to minimize these risks.​"
    },
    {
      ques : "How can I prepare for anesthesia?",
      ans : "Preparation may involve fasting, adjusting medications, and following specific instructions provided by your healthcare team to ensure safety during the procedure.​"
    },
    {
      ques : "Will I feel pain during or after the surgery?",
      ans : "Anesthesia is designed to prevent pain during surgery. Postoperative pain is managed with appropriate medications and techniques to ensure comfort during recovery.​"
    },
    {
      ques : "How long does it take to recover from anesthesia?",
      ans : "Recovery time varies based on the type of anesthesia used and individual patient factors. Most patients regain full alertness within a few hours post-surgery.​"
    },
    {
      ques : "Can I discuss anesthesia options with my doctor before surgery?",
      ans : "Absolutely. It's important to have an open discussion with your anesthesiologist to understand the anesthesia plan and address any concerns prior to surgery.​"
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
