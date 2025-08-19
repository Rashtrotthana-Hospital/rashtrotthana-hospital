import { Component, OnInit, Input } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;


@Component({
  selector: 'app-orthopedics',
  templateUrl: './orthopedics.component.html',
  styleUrl: './orthopedics.component.css'
})
export class OrthopedicsComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best orthopaedics Hospital in Bangalore, India - Rashtrotthana Hospital");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best orthopaedics hospital in Bangalore, India with highly experienced orthopaedics/ortho doctor providing orthopaedic treatment & surgeries.' });

    this.metaService.updateTag({ name: 'keywords', content: 'orthopaedics hospital near me, orthopaedics, knee, knee pain, shoulder pain, bone fractures, joint pains, ortho, knee pain causes' });


    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

  formDoctors: any = ['Dr. Mahesh Kulkarni', 'Dr. Sujayendra D. M', 'Dr. Nikhil Hegde', 'Dr. Hemanth Kumar Venkatesh']
  
doctors: any = [
  {
    id: 1,
    name: 'Dr. Mahesh Kulkarni',
    experience: '15+ Years',
    image: '../../assets/Dr-Mahesh-Kulkarni.png',
    slug: '/doctor/dr-mahesh-kulkarni'
  },
  {
    id: 2,
    name: 'Dr. Sujayendra D. M',
    experience: '11 Years',
    image: '../../assets/Dr-Sujayendra-D-M.png',
    slug: '/doctor/dr-sujayendra-d-m'
  },
  {
    id: 3,
    name: 'Dr. Nikhil Hegde',
    experience: '6 Years',
    image: '../../assets/Dr-Nikhil-Hegde.png',
    slug: '/doctor/dr-nikhil-hegde'
  },
  // {
  //   id: 4,
  //   name: 'Dr. Hemanth Kumar Venkatesh',
  //   experience: '20 Years',
  //   image: '../../assets/Dr-Hemanth-kumar-Venkatesh.png',
  //   slug: '/doctor/dr-hemanth-kumar-venkatesh'
  // }
];


  faqs = [
    {
      ques: "What services does the Best Orthopedic Hospital in RR Nagar Bangalore offer?",
      ans: "At Rashtrotthana Hospital, recognized as the Best Orthopedic Hospital in RR Nagar Bangalore, we provide comprehensive services including joint replacement surgeries, minimally invasive spine surgeries, arthroscopy, fracture care and specialized treatments for various musculoskeletal conditions."
    },
    {
      ques: "How can I find an Orthopedic Specialist in RR Nagar?",
      ans: "You can find experienced Orthopedic Specialists in RR Nagar at Rashtrotthana Hospital. Our team comprises highly qualified professionals dedicated to providing personalized care for all orthopedic concerns."
    },
    {
      ques: "Who are the Best Orthopedic Surgeons in RR Nagar?",
      ans: "Rashtrotthana Hospital boasts some of the Best Orthopedic Surgeons in RR Nagar, renowned for their expertise in performing complex orthopedic surgeries with high success rates."
    },
    {
      ques: "What conditions do Bone Specialists in RR Nagar treat?",
      ans: "Our Bone Specialists in RR Nagar diagnose and treat a wide range of conditions, including fractures, osteoporosis, bone infections and tumors, ensuring comprehensive bone health management."
    },
    {
      ques: "How do I locate the Best Orthopedic Hospital near me?",
      ans: "If you're searching for the Best Orthopedic Hospital near you, Rashtrotthana Hospital in RR Nagar is a leading choice, offering state-of-the-art facilities and a team of expert orthopedic professionals."
    },
    {
      ques: "Where can I find the Best Orthopedic Doctors near me?",
      ans: "Rashtrotthana Hospital in RR Nagar is home to some of the Best Orthopedic Doctors near you, providing exceptional care for all orthopedic conditions."
    },
    {
      ques: "How can I consult an orthopedic doctor near me?",
      ans: "To consult an orthopedic specialist near you, visit Rashtrotthana Hospital in RR Nagar, where our team is ready to assist with your musculoskeletal health needs."
    },
    {
      ques: "What should I consider when choosing an orthopedic surgeon?",
      ans: "When selecting an orthopedic surgeon, consider their qualifications, experience, specialization and patient reviews. Rashtrotthana Hospital's orthopedic surgeons are highly esteemed in these aspects."
    },
    {
      ques: "How do I find an orthopedic surgeon near me?",
      ans: "For those seeking an orthopedic surgeon nearby, Rashtrotthana Hospital in RR Nagar offers access to top-tier surgeons specializing in various orthopedic procedures."
    },
    {
      ques: "What does a bone doctor do?",
      ans: "A bones doctor, or orthopedic specialist, diagnoses and treats conditions related to the skeletal system, including fractures, bone diseases and joint disorders."
    },
    {
      ques: "Who is the Best Knee Replacement Surgeon in RR Nagar?",
      ans: "Rashtrotthana Hospital is proud to have some of the Best Knee Replacement Surgeons in RR Nagar, offering advanced surgical techniques for optimal patient outcomes."
    },
    {
      ques: "What makes Rashtrotthana Hospital the Best Bone Hospital in RR Nagar Bangalore?",
      ans: "Rashtrotthana Hospital is considered the Best Bone Hospital in RR Nagar Bangalore due to our comprehensive bone health services, advanced technology and a team of expert specialists dedicated to patient care."
    },
    {
      ques: "Which is the Best Bone Surgery Hospital in RR Nagar Bangalore?",
      ans: "Rashtrotthana Hospital stands out as the Best Bone Surgery Hospital in RR Nagar Bangalore, equipped with state-of-the-art surgical facilities and a team of highly skilled surgeons."
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
