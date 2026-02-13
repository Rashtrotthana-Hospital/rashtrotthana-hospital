import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-endocrinology',
  templateUrl: './endocrinology.component.html',
  styleUrl: './endocrinology.component.css'
})
export class EndocrinologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Endocrinology Care in Bangalore | Hormone Health Experts");
    this.metaService.updateTag({ name: 'description', content: 'Manage diabetes, thyroid & hormonal disorders with expert endocrinologists in Bangalore. Book your consultation today.' });
    this.metaService.updateTag({ name: 'keywords', content: 'endocrinology, diabetic hospital near me, hormonal imbalance, hormones, hormonal problems, thyroid carcinoma/tumors, Hypopituitarism, Hyperthyroidism, Hypothyroidism, Turner syndrome, Type 1 and 2 diabetes, Adrenal Gland disorders, Ambiguous genitalia, Klinefelter syndrome, Thyroid cancer issues, childhood Obesity, Pituitary disorders, Parathyroid issues, Bone and mineral issues, Lipid disorders, Prader-Willi syndrome' });
  }


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

  doctors = [
    {
      id: 1,
      name: 'Dr. Manasa M. G',
      experience: '10+ Years',
      image: '../../assets/dr-manasa-m-g.jpg',
      slug: '/doctor/dr-manasa-m-g'
    },
  ]

  formDoctors = ['Dr. Manasa M. G']
}