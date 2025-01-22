import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-homeopathy',
  templateUrl: './homeopathy.component.html',
  styleUrl: './homeopathy.component.css'
})
export class HomeopathyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Homeopathic Care - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers comprehensive homeopathic treatments in Bangalore, focusing on holistic and natural healing.' });

  this.metaService.updateTag({ name: 'keywords', content: 'homeopathic treatment, alternative medicine, homeopathy clinic Bangalore' });

  }

  doctors =[
    {
      image : '../../assets/Dr-Anusha-Mutalik-Desai.png',
      name : "Dr. Anusha Mutalik Desai",
      section : "BHMS, MD(HOM)",
      designation : "HOMEOPATHY",
      experience : "8",
      alt : 'Dr. Anusha Mutalik Desai | Best Homeopathy Doctor in Bangalore | Rashtrotthana Hospital'
    }
  ]

  faqs = [
    {
      questions : "Why is Rashtrotthana Hospital the Best Homeopathy Hospital in RR Nagar Bangalore?",
      answer : "Rashtrotthana Hospital is recognized as the Best Homeopathy Hospital in RR Nagar Bangalore for its holistic approach to healthcare. Led by Dr. Anusha Mutalik Desai, a highly skilled practitioner, we specialize in advanced homeopathy treatment in Bangalore, focusing on conditions like diabetes, PCOD, and other chronic illnesses. Our hospital combines traditional medicine with modern techniques to ensure effective and long-lasting results."
    },
    {
      questions : "What is the best homeopathy treatment for diabetes in RR Nagar Bangalore?",
      answer : "At Rashtrotthana Hospital, we provide the best homeopathy treatment for diabetes in RR Nagar Bangalore, addressing the root causes of the condition through natural healing and herbal-based treatment in RR Nagar Bangalore. With a personalized approach by Dr. Anusha Mutalik Desai, we help patients manage blood sugar levels effectively, ensuring improved overall health and wellness."
    },
    {
      questions : "What is the best homeopathy treatment for PCOD in RR Nagar Bangalore?",
      answer : "Our hospital is renowned for offering the best homeopathy treatment for PCOD in RR Nagar Bangalore. Using natural homeopathy treatment in Rajarajeshwari Nagar Bangalore, our experts, including Dr. Anusha Mutalik Desai, design tailored treatments to regulate hormonal imbalances and provide relief from PCOD symptoms without side effects."
    },
    {
      questions : "Why choose homeopathy for chronic conditions like diabetes and PCOD?",
      answer : "Homeopathy focuses on treating the root causes of illnesses rather than just the symptoms. At Rashtrotthana Hospital, our advanced homeopathy treatment in Bangalore is effective for managing chronic conditions like diabetes and PCOD. With a focus on energy-based healing, our treatments restore balance and promote long-term health."
    },
    {
      questions : "What makes Rashtrotthana Hospital’s homeopathy care unique?",
      answer : "As the Best Homeopathy Hospital in RR Nagar Bangalore, we provide affordable homeopathy treatment in Bangalore for a wide range of conditions. Our treatments are customized for each patient, combining herbal-based treatments in RR Nagar Bangalore with a focus on holistic wellness, ensuring optimal outcomes."
    },
    {
      questions : "Who is Dr. Anusha Mutalik Desai, and what is her expertise?",
      answer : "Dr. Anusha Mutalik Desai, one of the Best Homeopathy Doctors in Bangalore, has extensive experience in managing conditions like diabetes, PCOD, and other chronic disorders. Her expertise in natural homeopathy treatment in Rajarajeshwari Nagar Bangalore ensures personalized care that addresses the root causes of ailments for long-lasting relief."
    },
    {
      questions : "What conditions can be treated with homeopathy at Rashtrotthana Hospital?",
      answer : "<p>Homeopathy at Rashtrotthana Hospital is effective for a wide range of conditions, including:</p><ul><li>Diabetes</li><li>PCOD</li><li>Skin disorders such as eczema and psoriasis</li><li>Allergies and respiratory conditions</li><li>Stress-related disorders</li></ul><p>With Dr. Anusha Mutalik Desai’s guidance, our highly experienced homeopathy treatment in RR Nagar Bangalore ensures that patients receive holistic care tailored to their specific needs.</p>"
    },
    {
      questions : " How does homeopathy address hormonal imbalances like PCOD?",
      answer : "Homeopathy is a natural and non-invasive way to manage hormonal imbalances. At Rashtrotthana Hospital, our homeopathy treatment for PCOD in RR Nagar Bangalore helps regulate hormones and improve overall health through herbal-based treatments in RR Nagar Bangalore, ensuring safe and effective results."
    },
    {
      questions : "Why should I choose homeopathy for diabetes care?",
      answer : "Homeopathy offers a gentle and holistic approach to managing diabetes by addressing the root cause of the condition. Our homeopathy treatment for diabetes in RR Nagar Bangalore combines natural healing with personalized remedies, designed to improve blood sugar management and enhance overall health."
    },
    {
      questions : "What makes Rashtrotthana Hospital a top choice for homeopathy in Bangalore?",
      answer : "Rashtrotthana Hospital is one of the leading homeopathy centres in RR Nagar Bangalore, providing advanced homeopathy treatment in Bangalore that integrates traditional medicine with modern practices. With the expertise of Dr. Anusha Mutalik Desai, we ensure affordable, personalized, and effective treatments for every patient."
    },
  ]
}