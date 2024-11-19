import { Component } from '@angular/core';
import { Title, Meta,DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-anesthesiology',
  templateUrl: './anesthesiology.component.html',
  styleUrl: './anesthesiology.component.css'
})
export class AnesthesiologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Anesthesiology Department/Hospital in India | Pain Management Anesthesia  ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital has the Best Anesthesiology Department/Hospital and Pain Management Anesthesia center in India. Our experienced anesthesiologists provide anesthesia services across all surgical specialties, prioritizing patient safety and well-being.' });

  this.metaService.updateTag({ name: 'keywords', content: 'anesthesiology hospital near me, spinal anesthesia, general anesthesia drugs, local anesthesia, pain medicine, intensive care medicine, critical emergency medicine' });

  }
}
