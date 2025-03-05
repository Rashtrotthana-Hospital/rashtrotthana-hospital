import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-general-medicine',
  templateUrl: './general-medicine.component.html',
  styleUrl: './general-medicine.component.css'
})
export class GeneralMedicineComponent {


  constructor(private route: ActivatedRoute,private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle("Internal Medicine Hospital in Bangalore | Internal Medicine Doctor    ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is one of the top internal medicine hospital in Bangalore, India with experienced internal medicine doctor offer best treatments.' });

  this.metaService.updateTag({ name: 'keywords', content: 'diabetes, internal medicine, hypertension, general medicine' });
  }

  doctors:any = [
    {
      name : 'Dr. H. M. Krishnamurthy',
      experience : '36',
      alttext : 'Dr. H. M. Krishnamurthy | Best General Physicians in RR Nagar Bangalore | Rashtrotthana Hospital',
      image : '../../assets/Dr-H-M-Krishnamurthy.png'
    },
    {
      name : 'Dr. Sindhu P. Madanshetty',
      experience : '7',
      alttext : 'Dr. Sindhu P. Madanshetty | Best General Physicians in RR Nagar Bangalore | Rashtrotthana Hospital',
      image : '../../assets/Dr-Sindhu-P-Madanshetty.png'
    },
    {
      name : 'Dr. Bhavya',
      experience : '9',
      alttext : 'Dr. Bhavya | Best General Physicians in RR Nagar Bangalore | Rashtrotthana Hospital',
      image : '../../assets/Dr-Bhavya.png'
    },
    {
      name : 'Dr. C Rajendran',
      experience : '27',
      alttext : 'Dr. C Rajendran | Best General Physicians in RR Nagar Bangalore | Rashtrotthana Hospital',
      image : '../../assets/Dr-Rajendran.png'
    },
  ]

  faqs : any = [
    {
      ques : 'Who are the best physicians at Rashtrotthana Hospital?',
      ans : 'At Rashtrotthana Hospital, we have a team of highly skilled internal medicine specialists. Our expert doctors, including Dr. H. M. Krishnamurthy, Dr. Bhavya, and Dr. C. Rajendran, provide comprehensive care for a wide range of health conditions.'
    },
    {
      ques : 'Which is the best Internal Medicine hospital in Bangalore?',
      ans : 'Rashtrotthana Hospital is considered one of the best Internal Medicine hospitals in Bangalore, offering advanced diagnostics, personalized treatment plans and expert care for both acute and chronic conditions.'
    },
    {
      ques : 'Which hospital in RR Nagar is best for Internal Medicine?',
      ans : 'Rashtrotthana Hospital is recognized as one of the best Internal Medicine hospitals in RR Nagar, Bangalore. Our team of general physicians and health consultants ensures accurate diagnosis, personalized treatment and effective disease management.'
    },
    {
      ques : 'Can I consult a family health specialist at Rashtrotthana Hospital?',
      ans : 'Yes! Our experienced general physicians in RR Nagar, Bangalore, including Dr. H. M. Krishnamurthy, Dr. Bhavya, and Dr. C. Rajendran, offers family health consultations, managing common illnesses, chronic diseases and preventive healthcare needs.'
    },
    {
      ques : 'Who is the best doctor for diabetes treatment in RR Nagar?',
      ans : 'If you are looking for the best diabetes hospital in RR Nagar, Bangalore, Rashtrotthana Hospital provides specialized diabetes care. Our internal medicine doctors, including Dr. H. M. Krishnamurthy and Dr. Bhavya, focus on effective diabetes management and long-term wellness.'
    },
    {
      ques : 'Which hospital is best for fever, cold, and flu treatment in RR Nagar?',
      ans : 'Rashtrotthana Hospital is among the best hospitals in RR Nagar, Bangalore, for fever, cold, and flu treatment. Our doctors, including Dr. C. Rajendran and Dr. H. M. Krishnamurthy, provides expert care for viral infections, respiratory illnesses and seasonal flu.'
    },
  ]
}
