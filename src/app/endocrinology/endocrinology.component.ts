import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-endocrinology',
  templateUrl: './endocrinology.component.html',
  styleUrl: './endocrinology.component.css'
})
export class EndocrinologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Endocrinology Hospital in India: Hormonal Imbalance, Endocrinology Treatment ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana hospital is one of the best Endocrinology hospitals in India and specializes in all types of hormonal imbalance and Endocrinology treatments, making it the best Endocrinology Hospital in India. ' });

  this.metaService.updateTag({ name: 'keywords', content: 'endocrinology, diabetic hospital near me, hormonal imbalance, hormones, hormonal problems, thyroid carcinoma/tumors, Hypopituitarism, Hyperthyroidism, Hypothyroidism, Turner syndrome, Type 1 and 2 diabetes, Adrenal Gland disorders, Ambiguous genitalia, Klinefelter syndrome, Thyroid cancer issues, childhood Obesity, Pituitary disorders, Parathyroid issues, Bone and mineral issues, Lipid disorders, Prader-Willi syndrome' });

  }



}
