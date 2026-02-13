import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-paediatrics',
  templateUrl: './paediatrics.component.html',
  styleUrl: './paediatrics.component.css'
})
export class PaediatricsComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Child Hospital in Bangalore | Paediatric Hospital in Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best paediatric hospital or child speciality hospital in Bangalore with skilled paediatricians.' });

    this.metaService.updateTag({ name: 'keywords', content: 'best child hospital near me,paediatrician, children, kids, child\'s health, paediatrics, neonatology, baby, newborn' });

    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

  doctors = [
    // {
    //   doctor_image: '../../assets/Dr-Vishwanath-Sanagoudar.png',
    //   doctor_name: 'Dr. Vishwanath Sanagoudar',
    //   experience: "8",
    //   docalt: 'Dr. Vishwanath Sanagoudar | Best Paediatrician and Neonatologist in Bangalore | Rashtrotthana Hospital'
    // },
    // {
    //   doctor_image: '../../assets/Dr-Niveditha-C.png',
    //   doctor_name: 'Dr. Niveditha C',
    //   experience: "7",
    //   docalt: 'Dr. Niveditha C | Best Pediatrician in Bangalore | Rashtrotthana Hospital'
    // },
    {
      doctor_image: '../../assets/Dr-Dhanyatha-Muninarayan.png',
      doctor_name: 'Dr. Dhanyatha Muninarayan',
      experience: "11+",
      docalt: 'Dr. Dhanyatha Muninarayan | Best Pediatrician in Bangalore | Rashtrotthana Hospital'
    },
    {
      doctor_image: 'assets/new-doctor-imgs/dr-ashis-doc-page.png',
      doctor_name: 'Major (Dr.) Ashish S. Mallige',
      experience: "15",
      docalt: 'Major (Dr.) Ashish S. Mallige | Best Pediatrician in Bangalore | Rashtrotthana Hospital'
    }
  ]

  faqs = [
    {
      ques: 'Which is the best pediatric hospital in Bangalore?',
      ans: 'Rashtrotthana Hospital is recognized as one of the best pediatric hospitals in Bangalore, providing expert care for infants, children and adolescents. With a team of experienced pediatricians and neonatologists, we ensure comprehensive treatment for various pediatric conditions'
    },
    {
      ques: 'Who are the best pediatricians in RR Nagar, Bangalore?',
      ans: 'At Rashtrotthana Hospital, our team includes some of the best pediatricians in RR Nagar, Bangalore, dedicated to providing top-quality child healthcare services. We specialize in preventive care, early diagnosis and advanced treatments for children of all ages.'
    },
    {
      ques: 'What treatments does Rashtrotthana Hospital provide for children?',
      ans: `<p class = 's_para'>We offer a range of pediatric services, including</p>
             <ul>
              <li class = 's_para'>Child health care for newborns, infants and adolescents</li>
              <li class = 's_para'>Treatment for fever, common cold, cough and stomach pain</li>
              <li class = 's_para'>Pediatric hospital for diarrhea treatment in RR Nagar</li>
              <li class = 's_para'>Specialized care for allergies, asthma and respiratory conditions</li>
              <li class = 's_para'>Neonatal Intensive Care Unit (NICU) for premature and high-risk newborns</li>
              <li class = 's_para'>Pediatric Intensive Care Unit (PICU) for critically ill children</li>
             </ul>
      `
    },
    {
      ques: 'Where can I find the best hospital for kids in Rajarajeshwari Nagar, Bangalore?',
      ans: 'If you are looking for the best hospital for kids in Rajarajeshwari Nagar, Bangalore, Rashtrotthana Hospital is the preferred choice for pediatric and neonatal care. Our expert team ensures the best treatment for children in a safe and child-friendly environment.'
    },
    {
      ques: 'Who is the best pediatric doctor in Rajarajeshwari Nagar, Bangalore?',
      ans: 'Our hospital has some of the best pediatric doctors in Rajarajeshwari Nagar, Bangalore, offering personalized care for children’s health and wellness. Whether it’s a routine check-up or specialized treatment, our experienced pediatricians provide compassionate and expert care.'
    },
    {
      ques: 'Which hospital has the best child doctors for cold and cough treatment in RR Nagar?',
      ans: "Rashtrotthana Hospital is known as a top children's hospital for cold and cough treatment in RR Nagar, providing effective and timely treatment for common pediatric illnesses."
    },
    {
      ques: 'Where can I find expert pediatric doctors for fever and common cold in RR Nagar?',
      ans: 'Our experienced pediatric doctors for fever and common cold in RR Nagar ensure accurate diagnosis and treatment, helping your child recover quickly.'
    },
    {
      ques: 'Why choose Rashtrotthana Hospital for pediatric and neonatal care?',
      ans: `
        <p class = 's_para'>Our experienced pediatric doctors for fever and common cold in RR Nagar ensure accurate diagnosis and treatment, helping your child recover quickly.</p>
        <ul>
          <li class = 's_para'>Top pediatric specialists in RR Nagar</li>
          <li class = 's_para'>Expert child doctors in RR Nagar Bangalore</li>
          <li class = 's_para'>State-of-the-art NICU and PICU facilities</li>
          <li class = 's_para'>24/7 emergency pediatric care</li>
          <li class = 's_para'>Holistic child healthcare services</li>
        </ul>
      `
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
