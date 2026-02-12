import { Component } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
@Component({
  selector: 'app-ayurveda-thyroid',
  templateUrl: './ayurveda-thyroid.component.html',
  styleUrl: './ayurveda-thyroid.component.css'
})
export class AyurvedaThyroidComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {}
    ngOnInit(): void {
    this.titleService.setTitle("Ayurvedic Thyroid Care in Bangalore | Rashtrotthana Hospital");  
  
    this.metaService.updateTag({ name: 'description', content: 'Natural Ayurvedic thyroid treatment in RR Nagar, Bangalore, focusing on holistic care for hypothyroidism and hyperthyroidism at Rashtrotthana Hospital.' });
  
    this.metaService.updateTag({ name: 'keywords', content: 'Ayurvedic Thyroid Treatment in RR nagar Bangalore, thyroid treatment in Bangalore, Ayurveda for thyroid, Ayurvedic cure for thyroid, Ayurveda for hypothyroidism, Ayurvedic treatment for hyperthyroidism, Herbal solutions for thyroid disorders, Thyroid care with Ayurveda, Holistic thyroid treatment, Manage thyroid naturally, Best Ayurvedic remedies for thyroid, Thyroid detox in Ayurveda, Ayurvedic lifestyle for thyroid balance, Healing thyroid disorders with Ayurveda, Ayurvedic thyroid management' });
  }
  doctors = [
      {
        doctor_image:'../../assets/Dr-Venkatesh-H-S.jpg',
        doctor_name:'Dr. Venkatesh H. S',
        experience : "25+",
        docalt:'Dr. Venkatesh H. S | Best Ayurveda Endocrinologist in Bangalore | Rashtrotthana Hospital | Rajarajeshwari Nagar Bangalore'
      },
  ]

  faqs = [
    {
      ques : "Why should I choose Ayurvedic Thyroid Treatment at RR Nagar, Bangalore?",
      ans : "Rashtrotthana Hospital offers personalized Ayurvedic care tailored to your specific thyroid condition. Our treatments are led by Dr. Venkatesh H.S., a leading Ayurvedic specialist with decades of experience, and focus on balancing hormones naturally."
    },
    {
      ques : "How does Ayurvedic Thyroid Treatment in Bangalore differ from conventional treatments?",
      ans : "Ayurveda treats thyroid disorders by addressing the root causes of hormonal imbalances. The treatment includes herbal remedies like Ashwagandha and Guggul, detox therapies such as Panchakarma, and dietary adjustments to restore balance and improve overall health."
    },
    {
      ques : "Do you provide treatments for all types of thyroid disorders?",
      ans : "Yes, we treat all major thyroid disorders, including hypothyroidism, hyperthyroidism, and goiter. We also offer specialized procedures like thyroid gland removal surgery in RR Nagar, if necessary."
    },
    {
      ques : "What makes Rashtrotthana Hospital the Best Hospital for Thyroid in RR Nagar, Bangalore?",
      ans : "Our hospital combines the expertise of seasoned specialists, advanced diagnostic tools, and holistic Ayurvedic therapies to deliver the most effective thyroid care. We are also committed to providing affordable thyroid treatment in Bangalore without compromising on quality."
    },
    {
      ques : "Are your treatments suitable for women experiencing thyroid disorders due to hormonal changes?",
      ans : "Absolutely. Thyroid disorders are more common in women, especially during pregnancy, menopause, or puberty. Our Ayurvedic therapies focus on balancing hormones naturally and effectively."
    },
    {
      ques : "How does Ayurvedic Thyroid Treatment in Bangalore help with long-term management?",
      ans : "Ayurvedic treatments provide sustainable results by addressing the root causes of thyroid disorders. This approach includes lifestyle modifications, detox therapies, and the use of natural herbs to maintain balance and prevent recurrence."
    },
    {
      ques : "What role does diet play in Ayurvedic Thyroid Treatment in Bangalore?",
      ans : "Diet plays a crucial role in managing thyroid disorders. Our experts recommend warm, nourishing foods, including whole grains, cooked vegetables, and spices like turmeric and cumin, while avoiding processed and cold foods. This helps balance the doshas and supports thyroid function."
    },
    {
      ques : "Can Ayurvedic treatments replace thyroid medications?",
      ans : "Ayurvedic treatments aim to restore hormonal balance naturally and can often complement conventional treatments. However, medication changes should always be made under medical supervision."
    },
    {
      ques : "How effective is Ayurvedic Thyroid Treatment at RR Nagar, Bangalore?",
      ans : "Our Ayurvedic Thyroid Treatment at RR Nagar, Bangalore has helped numerous patients manage their thyroid disorders effectively. The holistic approach ensures sustainable results by addressing the root cause of the problem."
    },
    {
      ques : "Are there any side effects of Ayurvedic Thyroid Treatment in Bangalore?",
      ans : "Ayurvedic treatments are natural and free from harmful chemicals, minimizing the risk of side effects. Our therapies focus on restoring balance in the body through safe and effective herbal remedies."
    },
    {
      ques : "How do Panchakarma therapies help in thyroid care?",
      ans : "<p>Panchakarma detox therapies, such as Virechana and Nasya, help eliminate toxins from the body and restore hormonal balance. These therapies are an integral part of Ayurvedic Thyroid Treatment in Bangalore.</p><p>For those seeking reliable and effective Ayurvedic Thyroid Treatment at RR Nagar, Bangalore, Rashtrotthana Hospital is your go-to destination for comprehensive care and holistic healing. Book your consultation today and experience the benefits of Ayurvedic wisdom combined with modern expertise!</p>"
    },
  ]
}
