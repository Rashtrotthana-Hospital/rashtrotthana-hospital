import { Component } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

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

  faqs = [
    {
      ques : 'What are common signs of a neurological disorder?',
      ans : ' Neurological symptoms vary widely but may include headache, numbness, tingling sensation, muscle weakness, paralysis, tremors, balance issues, memory loss, or changes in speech, mood, or coordination. Early evaluation is key to identifying neuro problems and starting treatment.'
    },
    {
      ques : 'When should I see a neurologist?',
      ans : 'You should consult a neurologist in Bangalore if you experience frequent migraine, seizures, unexplained nerve pain, chronic sleep disorders, or signs of stroke. Our team offers early assessment and advanced neuro diagnostics in RR Nagar, including MRI brain, CT scan, EEG scan, EMG test, and NCV test.'
    },
    {
      ques : 'What is the difference between a neurologist and a neurosurgeon?',
      ans : ' A neurologist focuses on diagnosing and managing brain, nerve, and spine issues through medication and therapy, while a neurosurgeon performs surgeries for conditions like brain tumors, spinal cord injury, or hydrocephalus. At Rashtrotthana Hospital, both specialties collaborate for holistic neuro problem care.'
    },
    {
      ques : 'Does Rashtrotthana Hospital treat nerve pain and injury?',
      ans : 'Yes. We are known for nerve damage after injury treatment in RR Nagar. Whether it’s sciatica, carpal tunnel syndrome, or trigeminal neuralgia, our specialists provide targeted care supported by EMG tests and NCV tests for accurate diagnosis and recovery tracking.'
    },
    {
      ques : 'What services are available for stroke patients?',
      ans : 'We offer full-scale stroke treatment in RR Nagar, including emergency CT scan, MRI brain for diagnosis, inpatient management, and long-term stroke care and rehabilitation. Early intervention reduces the risk of permanent paralysis, memory loss, or balance issues.'
    },
    {
      ques : 'What types of pediatric neurological conditions do you treat?',
      ans : 'Our paediatric neurologist in Bangalore evaluates and treats children with developmental delays, seizures, neuromuscular disorders, sleep disorders, learning challenges, and congenital brain disorders. Parental guidance and follow-up plans are included.'
    },
    {
      ques : 'Can migraines and headaches be treated by a neurologist?',
      ans : 'Yes. Our specialists provide personalized migraine care and headache treatment, focusing on triggers, lifestyle management, and medications to reduce frequency and severity. Chronic headaches may signal deeper neuro problems, which we investigate using modern imaging tools.'
    },
    {
      ques : 'Does the hospital treat nerve damage after injury?',
      ans : 'Yes. We offer specialized nerve damage after injury treatment in RR Nagar, with evaluation through EMG test and NCV test, and management for conditions such as sciatica, neuralgia, and carpal tunnel syndrome. Dr. Kalyani Dilip Karkare oversees comprehensive care for post-injury nerve issues.'
    },
    {
      ques : 'Is neurology consultation affordable?',
      ans : 'Yes. Rashtrotthana Hospital is known for affordable nerve pain consultation in Bangalore. Patients receive expert care for concerns like migraine care, vertigo treatment, seizure management, and general neuro problems with transparent pricing at every step.'
    },
  ]

}
