import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-obstetrics-gynaecology',
  templateUrl: './obstetrics-gynaecology.component.html',
  styleUrl: './obstetrics-gynaecology.component.css'
})
export class ObstetricsGynaecologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Obstetrics & Gynecologist Hospital in Bangalore ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the Best Obstetrics & Gynecologist Hospital in Bangalore, India with renowned top obstetrician offer gynaecological & maternity services.' });

  this.metaService.updateTag({ name: 'keywords', content: 'gynaecologist, gynaecologist hospital near me,pcod, thyroid, abdominal pain, fibroids, menstrual problems, best, care, periods, periods problem' });

  }

  doctors = [
    {
      doctor_name : "Dr. Latha Venkataram",
      experience : "32",
      doctor_image : "../../assets/Dr-Latha-Venkataram.png",
      docalt : "Dr. Latha Venkataram | Top Obstetrics & Gynaecologist in banaglore | Rashtrotthana Hospital"
    },
    {
      doctor_name : "Dr. Prakruthi",
      experience : "16",
      doctor_image : "../../assets/Dr-Prakruthi.png",
      docalt : "Dr. Prakruthi | Best Gynaec Doctor in Bangalore | Rashtrotthana Hospital"
    },
    {
      doctor_name : "Dr. Neelam",
      experience : "9",
      doctor_image : "../../assets/Dr-Neelam-Saraswat.png",
      docalt : "Dr. Neelam Saraswat | Best Gynaecology Consultant in Bangalore | Rashtrotthana Hospital"
    },
    {
      doctor_name : "Dr. Vinutha Udupa",
      experience : "7",
      doctor_image : "../../assets/Dr-Vinita-Udupa.png",
      docalt : "Dr. Vinita Udupa | Best OBG in Bangalore | Rashtrotthana Hospital"
    },
    {
      doctor_name : "Dr. Ashwitha Gundmi",
      experience : "7",
      doctor_image : "../../assets/Dr-Ashwitha-Gundmi.png",
      docalt : "Dr. Ashwitha Gundmi | Best Obstetrics & Gynaecologist in Bangalore | Rashtrotthana Hospital"
    },
  ]

  faqs = [
    {
      ques : "Which is the Best Gynaecology Hospital in RR Nagar Bangalore?",
      ans : "Rashtrotthana Hospital is widely recognized as the Best Gynaecology Hospital in RR Nagar Bangalore for its comprehensive care for women at all stages of life. With services ranging from maternity care to advanced treatments for gynecological conditions, our hospital offers personalized care, led by experienced specialists like Dr. Latha Venkataraman."
    },
    {
      ques : "Who is the Best Gynecologist in Bangalore?",
      ans : "Dr. Latha Venkataraman, with over 30 years of experience, is regarded as one of the Best Obstetrics and Gynecology doctors in Bangalore. She specializes in managing high-risk pregnancies, normal deliveries and complex gynecological conditions, making her a trusted name for women’s health."
    },
    {
      ques : "Why is Rashtrotthana Hospital considered the Best Maternity Hospital in Rajarajeshwari Nagar Bangalore?",
      ans : "Rashtrotthana Hospital offers top-tier maternity services, making it the Best Maternity Hospital in Rajarajeshwari Nagar Bangalore. From Affordable Maternity Packages in RR Nagar Bangalore to expert care for high-risk pregnancies, our hospital ensures mothers and babies receive exceptional care."
    },
    {
      ques : "What makes Rashtrotthana Hospital one of the Best Pregnancy Hospitals in RR Nagar Bangalore?",
      ans : "Our hospital provides holistic maternity care, including pregnancy counseling, antenatal packages and Ayurvedic Pregnancy Therapies. Our focus on natural birthing practices and personalized care plans makes us a leading choice among the Best Pregnancy Hospitals in RR Nagar Bangalore."
    },
    {
      ques : "What are the specialties of Dr. Latha Venkataraman at Rashtrotthana Hospital?",
      ans : "Dr. Latha Venkataraman, a renowned gynecologist, specializes in high-risk pregnancy treatment, recurrent pregnancy loss treatment and diabetes in pregnancy. Her expertise in handling complex cases and focus on natural deliveries make her a trusted name in Maternity Care Bangalore."
    },
    {
      ques : "Do you provide Affordable Pregnancy Packages in Bangalore?",
      ans : "Yes, Rashtrotthana Hospital offers Affordable Pregnancy Packages in Bangalore that include prenatal, delivery and postnatal care. Our Best Maternity Packages in Bangalore ensure high-quality care at accessible prices."
    },
    {
      ques : "What gynecological conditions are treated at Rashtrotthana Hospital?",
      ans : "As the Best Gynaecology Hospital in RR Nagar Bangalore, we provide treatments for conditions like PCOS, fibroids, endometriosis and menopausal symptoms. Our team of highly qualified gynecologists in RR Nagar Bangalore ensures personalized care for every patient."
    },
    {
      ques : "What services make Rashtrotthana Hospital the Best Obstetrics and Gynecology Hospital in Bangalore?",
      ans : "Our hospital provides end-to-end services, including pregnancy care, normal deliveries, high-risk pregnancy support and advanced gynecological treatments. With experienced and skilled gynecologists, such as Dr. Latha Venkataraman, we are a trusted name in women’s health."
    },
    {
      ques : "Do you provide Neonatal Care Services?",
      ans : "Yes, Rashtrotthana Hospital has Neonatal Specialists in Bangalore to provide expert care for newborns. Our neonatal care team ensures that babies born prematurely or with health complications receive specialized attention."
    },
    {
      ques : "What makes Rashtrotthana Hospital a top choice for normal deliveries?",
      ans : "Rashtrotthana Hospital is one of the best hospitals for normal delivery in Bangalore, focusing on safe, natural birthing practices. Our team of highly qualified pregnancy doctors ensures a positive birthing experience for every mother."
    },
  ]
  
}
