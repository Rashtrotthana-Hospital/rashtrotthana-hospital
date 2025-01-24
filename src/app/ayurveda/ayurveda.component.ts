import { Component,OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-ayurveda',
  templateUrl: './ayurveda.component.html',
  styleUrl: './ayurveda.component.css'
})
export class AyurvedaComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.titleService.setTitle(" Holistic Ayurvedic Treatment - Rashtrotthana Hospital Bangalore");  

  this.metaService.updateTag({ name: 'description', content: ' Discover holistic healing with traditional Ayurvedic treatments at Rashtrotthana Hospital, blending ancient wisdom with modern care.' });

  this.metaService.updateTag({ name: 'keywords', content: 'ayurvedic treatment, natural healing, ayurveda hospital Bangalore' });
  }

  faqs = [
    {
      questions : "What makes Rashtrotthana Hospital the Best Ayurvedic Hospital in RR Nagar Bangalore?",
      answer : "At Rashtrotthana Hospital, we offer authentic and holistic Ayurvedic treatments under the guidance of experienced Ayurvedic doctors. Our personalized therapies, including Panchakarma treatments in Bangalore, are designed to promote natural healing and wellness, ensuring comprehensive care for every individual."
    },
    {
      questions : "What services are provided at your Ayurveda hospital in Rajarajeshwari Nagar Bangalore?",
      answer : "We provide a wide range of services, including Kaya Chikitsa treatments, Ayurvedic internal medicine, Shalakya Tantra Treatment in Bangalore, detoxification therapies like Panchakarma, and rejuvenation therapies. Additionally, our Ayurvedic spa in Bangalore offers relaxing and therapeutic massages."
    },
    {
      questions : "How does Ayurveda promote natural healing therapy?",
      answer : "Ayurveda focuses on the body’s innate ability to heal itself through natural methods. Our treatments utilize herbal medicines, detoxification processes like Panchakarma, and rejuvenation therapies to restore balance and promote long-lasting wellness."
    },
    {
      questions : "Do you provide affordable Ayurvedic treatment?",
      answer : "Yes, Rashtrotthana Hospital offers affordable Ayurvedic treatments without compromising quality. Our therapies, including Ayurvedic massages in RR Nagar Bangalore and wellness programs, are designed to fit various budgets."
    },
    {
      questions : "What is Panchakarma, and how can it help me?",
      answer : "Panchakarma is a comprehensive detoxification and rejuvenation therapy that eliminates toxins from the body, balances the doshas, and promotes overall health. At our panchkarma centre in Bangalore, we offer customized treatments for detoxification and rejuvenation under expert supervision."
    },
    {
      questions : "Who is Dr. Sapna S., and what is her expertise in Ayurveda?",
      answer : "Dr. Sapna S. is a renowned Ayurvedic professional with over 20 years of teaching and practice. She specializes in Rasa Shastra and Bhaishajya Kalpana, Panchakarma, Medical Astrology (Daiva Vyapashraya Chikitsa), infertility cases, and chronic conditions like PCOD and hypothyroidism. At Rashtrotthana Hospital, her expertise plays a crucial role in offering personalized and effective Ayurvedic treatments."
    },
    {
      questions : "What services does Dr. H. S. Venkatesh provide at Rashtrotthana Hospital?",
      answer : "Dr. H. S. Venkatesh, with over 25 years of experience, is a leading practitioner in Ayurveda Endocrinology, specializing in managing thyroid disorders, arthritis, and conducting extensive research in Ayurvedic treatment and therapies. His contributions to natural healing therapy have been widely recognized, making him a trusted name in the field."
    },
    {
      questions : "Can Dr. Sapna S. help with infertility and hormonal issues like PCOD?",
      answer : "Yes, Dr. Sapna S. is highly experienced in treating infertility cases and managing hormonal conditions like PCOD through holistic Ayurvedic treatments. Using therapies such as Panchakarma, along with personalized herbal remedies and lifestyle guidance, she helps patients achieve better reproductive health."
    },
    {
      questions : "How does Dr. H. S. Venkatesh treat thyroid disorders?",
      answer : "Dr. H. S. Venkatesh is an expert in treating thyroid disorders through Ayurvedic internal medicine and therapies aimed at balancing the endocrine system. His research-backed approach combines detoxification therapies like Panchakarma with herbal medications to address thyroid imbalances effectively."
    },
    {
      questions : "Does Rashtrotthana Hospital offer treatments for chronic skin diseases?",
      answer : "Yes, under the guidance of Dr. Sapna S., the hospital provides specialized Ayurvedic treatments for chronic skin diseases. Her expertise in Rasa Shastra ensures that patients receive safe and effective remedies tailored to their needs."
    },
    {
      questions : "What is Dr. Sapna S.’s contributions to Medical Astrology in Ayurveda?",
      answer : "Dr. Sapna S. is proficient in Medical Astrology (Daiva Vyapashraya Chikitsa), which integrates traditional astrology with Ayurveda to address psychosomatic and chronic conditions. Her knowledge helps in providing holistic healing to patients."
    },
    {
      questions : "What makes Rashtrotthana Hospital the Best Ayurvedic Hospital in RR Nagar Bangalore?",
      answer : "Rashtrotthana Hospital is home to leading Ayurvedic experts like Dr. Sapna S. and Dr. H.S. Venkatesh. With specialties ranging from Panchakarma treatment in Bangalore to managing thyroid disorders, infertility, and chronic skin diseases, the hospital offers a comprehensive range of holistic healthcare services."
    },
    {
      questions : "How does Dr. Sapna S. help with geriatric care?",
      answer : "Dr. Sapna S. specializes in geriatric care, focusing on managing age-related conditions through Ayurvedic internal medicine and rejuvenation therapies like Rasayana. Her personalized approach ensures improved quality of life for elderly patients."
    },
    {
      questions : "Why should I choose Dr. H. S. Venkatesh for Ayurvedic endocrine treatments?",
      answer : "Dr. H. S. Venkatesh is a pioneer in Ayurveda Endocrinology, offering effective solutions for hormonal imbalances, including thyroid disorders. With over 25 years of expertise, his treatments are rooted in traditional Ayurvedic practices, ensuring safe and natural healing."
    },
    {
      questions : "Do Ayurveda hospitals in Bangalore treat chronic conditions?",
      answer : "Yes, most Ayurveda hospitals in Bangalore specialize in treating chronic conditions such as thyroid disorders, arthritis, PCOD, infertility and chronic skin diseases. Expert doctors, like Dr. Sapna S. and Dr. H. S. Venkatesh at Rashtrotthana Hospital, uses holistic therapies to address these issues effectively."
    },
    {
      questions : "Can I find affordable treatments in Ayurveda hospitals in Bangalore?",
      answer : "Many Ayurveda hospitals in Bangalore offer affordable Ayurvedic treatments without compromising on quality. Rashtrotthana Hospital is a great example, providing cost-effective therapies such as Panchakarma, Ayurvedic massages, and wellness programs."
    },
  ]

  

}
