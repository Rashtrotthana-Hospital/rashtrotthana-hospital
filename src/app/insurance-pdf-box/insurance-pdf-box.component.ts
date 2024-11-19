import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-insurance-pdf-box',
  templateUrl: './insurance-pdf-box.component.html',
  styleUrl: './insurance-pdf-box.component.css'
})
export class InsurancePdfBoxComponent {
@Input() image:any="";
@Input() pdfUrl!: string;

  downloadPdf() {
    window.open(this.pdfUrl, '_blank');
  }

}
