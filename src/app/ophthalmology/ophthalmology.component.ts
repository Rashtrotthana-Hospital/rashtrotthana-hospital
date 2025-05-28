import { Component } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-ophthalmology',
  templateUrl: './ophthalmology.component.html',
  styleUrl: './ophthalmology.component.css'
})
export class OphthalmologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Ophthalmology Hospital in Bangalore | Rashtrotthana Hospital");
    this.metaService.updateTag({ name: 'description', content: 'Rashtrotrhana Hospital is the Best Ophthalmology Hospital in Bangalore, India with renowned top ophthalmologist offer eye care services.' });
    this.metaService.updateTag({ name: 'keywords', content: 'ophthalmology hospital near me, eye care, cataracts, glaucoma, diabetic retinopathy, macular degeneration, ophthalmologist, optometrists, eye care services, vision care, eye disease, vision health' });
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

  doctors = [
    {
      doctor_image: '../../assets/Dr-Sowmya-Bhat-S.png',
      doctor_name: 'Dr. Sowmya Bhat S',
      experience: "10",
      docalt: 'Dr. Sowmya Bhat S | Best Ophthalmologist in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image: '../../assets/dr-dona-susan-john-dr-page.png',
      doctor_name: 'Dr. Dona Susan John ',
      experience: "18+",
      docalt: 'Dr. Dona Susan John | Best Ophthalmology doctor in Bangalore | Rashtrotthana Hospital'
    }
  ];

  faqs = [
    {
      ques: "1. What age is best for a pediatric eye checkup?",
      ans: "We recommend screenings at 6 months, 3 years, and 4-5 years. Visit earlier if your child shows eye pain, itchy eyes, or frequent blinking."
    },
    {
      ques: "Is glaucoma screening necessary even without symptoms?",
      ans: "Yes. Start at age 40, earlier if you're diabetic or have family history. Glaucoma eye checkup helps prevent irreversible damage."
    },
    {
      ques: "What symptoms signal cataracts?",
      ans: "Cloudy vision, glare at night, eye pain, or burning sensation in eyes. We offer complete cataract evaluations without surgery."
    },
    {
      ques: "How often should diabetic patients have retina checks?",
      ans: "Every year. We’re known for reliable diabetic retinopathy screening in RR Nagar Bangalore."
    },
    {
      ques: "What causes red eyes and how is it treated?",
      ans: "Red eyes can be caused by dryness, infection, or allergies. We offer medical care and eye irritation home remedies for relief."
    },
    {
      ques: "Can macular degeneration be stopped?",
      ans: "It can't be reversed, but early diagnosis helps control it. We recommend screenings from age 50+."
    },
    {
      ques: "What helps with itchy eyes and watery eyes?",
      ans: "Avoid allergens, use prescribed drops, and limit screen exposure. If it persists, consult our best eye doctor in RR Nagar Bangalore."
    },
    {
      ques: "Who is the best eye doctor in RR Nagar for complete eye care?",
      ans: "At Rashtrotthana Hospital, Dr. Sowmya Bhat S is widely regarded as one of the best eye doctors in RR Nagar. With over 10 years of experience, she provides personalized care for everything from pediatric vision concerns to glaucoma and diabetic eye management."
    },
  ]

}
