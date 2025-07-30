import { Component } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-dental',
  templateUrl: './dental.component.html',
  styleUrl: './dental.component.css'
})
export class DentalComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  ngOnInit(): void {
    Doctors: [
      {
        doctor_image: 'Dr. H N Shyla.png',
        doctor_name: 'Dr. H. N. Shyla',
        experience: "20"
      },
      {
        doctor_image: '../../assets/Dr-Geethanjali-K-G.png',
        doctor_name: 'Dr. Geethanjali K. G',
        experience: "18",
        docalt: 'Dr. Geethanjali K. G | Best Dental Surgery Doctor in Bangalore | Rashtrotthana Hospital'
      },
      {
        doctor_image: '../../assets/Dr-Vishnuvardhan-V.png',
        doctor_name: 'Dr. Vishnuvardhan V',
        experience: "6",
        docalt: 'Dr. Vishnuvardhan V | Best Orthodontics in Bangalore | Rashtrotthana Hospital'
      },
    ];
  }

  doctors : any = [
    {
      doctor_image: '../../assets/Dr-H-N-Shyla.png',
      doctor_name: 'Dr. H. N. Shyla',
      experience: "20",
      docalt: 'Dr. Sushmitha Raj R | Best Dental Surgery in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image: '../../assets/Dr-Sushmitha-Raj-R.png',
      doctor_name: 'Dr. Sushmitha Raj R',
      experience: "3",
      docalt: 'Dr. Sushmitha Raj R | Best Dental Surgery in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image: '../../assets/Dr-Geethanjali-K-G.png',
      doctor_name: 'Dr. Geethanjali K. G',
      experience: "18",
      docalt: 'Dr. Geethanjali K. G | Best Dental Surgery Doctor in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image: '../../assets/Dr-Vishnuvardhan-V.png',
      doctor_name: 'Dr. Vishnuvardhan V',
      experience: "6",
      docalt: 'Dr. Vishnuvardhan V | Best Orthodontics in Bangalore | Rashtrotthana Hospital'
    },
  ]

  faqs = [
    {
      ques : 'What causes recurring tooth pain?',
      ans : 'Decay, infection, or a damaged nerve could be the cause. We offer effective dental cavity treatment, root canal or restoration depending on your condition.'
    },
    {
      ques : 'How often should I get my teeth cleaned?',
      ans : 'We recommend cleaning every six months. Our team provides professional teeth cleaning and plaque removal in RR Nagar Bangalore with precision.'
    },
    {
      ques : 'What dental clip or braces options do you offer?',
      ans : 'We offer full dental braces treatment plans, including dental clip treatment for teeth alignment in Bangalore using metal, ceramic or invisible systems.'
    },
    {
      ques : 'Which is the best dental hospital in RR Nagar for root canal and implants?',
      ans : 'Rashtrotthana Hospital is widely regarded as the best dental hospital in RR Nagar Bangalore, especially for patients seeking ethical, expert-led care for conditions like tooth pain, dental cavities, and root canal infections. Our Dental Sciences Department is known for advanced diagnostic tools, painless dental root canal treatment, and high-quality restorations. While we do not perform surgical dental implants, we provide detailed evaluations, guide you on dental implant cost in RR Nagar Bangalore, and connect you with reliable implantologists when needed.'
    },
    {
      ques : 'Do you offer laser treatment for dental cavities?',
      ans : 'Yes. Our dental laser treatment for cavities in RR Nagar Bangalore provides a painless and effective solution for deep decay.'
    },
    {
      ques : 'What are the signs of gum problems?',
      ans : 'Swollen gums, bleeding gums, gum pain and persistent teeth plaque are early signs of periodontal issues. Timely care prevents complications.'
    },
    {
      ques : 'Is Rashtrotthana Hospital good for root canal and dental implants?',
      ans : 'Yes. Rashtrotthana Hospital is considered the best dental hospital for root canal in RR Nagar Bangalore, known for precision, painless procedures, and excellent outcomes. While we do not perform surgical dental implant placements, we provide accurate pre-implant evaluations and refer patients to trusted specialists. Our team ensures you understand the dental implant cost in RR Nagar Bangalore and guides you on choosing the right treatment pathway.'
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
