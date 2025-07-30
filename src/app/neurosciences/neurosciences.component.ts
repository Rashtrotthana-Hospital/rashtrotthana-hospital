import { Component } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-neurosciences',
  templateUrl: './neurosciences.component.html',
  styleUrl: './neurosciences.component.css'
})
export class NeurosciencesComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Neurology Hospital In Bangalore | Neuro Treatment - Rashtrotthana Hospital");
    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana is the best neurology hospital in Bangalore, India with experienced neurologists providing neuro care treatments and surgeries.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Neurology, nerve problems, nerve hospital near me, neurological disorders, acute stroke and cerebrovascular diseases, paediatric and adult epilepsy, neuromuscular diseases, Parkinson’s disease and related disorder, Alzheimer’s disease and other disorders of cognition, multiple sclerosis and other demyelinating disorders' });
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

  doctors: any = [
    {
      doctor_image: '../../assets/Dr-Kalyani-Dilip-Karkare.png',
      doctor_name: 'Dr. Kalyani Dilip Karkare',
      experience: "14+",
      alt: 'Dr. Kalyani Dilip Karkare | Best Neurologist in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image: '../../assets/Dr-Jaidev-S.png',
      doctor_name: 'Dr. Jaidev S',
      experience: "4",
      docalt: 'Dr. Jaidev S | Best Neurosurgeon in Bangalore | Rashtrotthana Hospital'
    }
  ]

  formDoctors: any = ["Dr. Kalyani Dilip Karkare", "Dr. Jaidev S"]

  faqs = [
    {
      ques: "What conditions does your Neurosciences Department treat?",
      ans: "We manage stroke, brain tumors, migraine headaches, radiculopathy, spinal cord injuries and peripheral nerve disorders for adults and children."
    },
    {
      ques: "Who is the best doctor for migraine and nerve pain in Bangalore?",
      ans: "Our team includes the best neuroscience doctor for migraine headache and nerve pain in Bangalore, offering personalized and cost-effective solutions"
    },
    {
      ques: "Do you have experienced neurosurgeons for brain cancer?",
      ans: "Yes. We provide care from an experienced neurosurgeon for brain cancer surgery in Bangalore, supported by advanced technology for precise outcomes."
    },
    {
      ques: "Are migraine treatments affordable?",
      ans: "We focus on affordable migraine treatments and headache care in Bangalore, balancing cost with high-quality neurological care."
    },
    {
      ques: "How do you manage stroke recovery?",
      ans: "We combine comprehensive stroke and migraine treatment by neurologists in Bangalore with rehabilitation programs to restore mobility, balance and speech."
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
