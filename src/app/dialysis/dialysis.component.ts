import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-dialysis',
  templateUrl: './dialysis.component.html',
  styleUrl: './dialysis.component.css'
})
export class DialysisComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Leading Kidney Dialysis Hospital in Bangalore - Rashtrotthana");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers expert kidney dialysis and comprehensive nephrology care in Bangalore\'s top multispeciality hospital.' });

  this.metaService.updateTag({ name: 'keywords', content: 'kidney dialysis, nephrology care, multispeciality hospital, Bangalore dialysis center' });

  }

}
