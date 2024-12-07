import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-physiotherapy',
  templateUrl: './physiotherapy.component.html',
  styleUrl: './physiotherapy.component.css'
})
export class PhysiotherapyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  facilities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Expert Physiotherapy & Rehabilitation - Rashtrotthana Hospital Bangalore");

    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital offers specialized physiotherapy and rehabilitation services to aid your recovery in Bangalore.' });

    this.metaService.updateTag({ name: 'keywords', content: 'physiotherapy services, rehabilitation, multispeciality hospital Bangalore' });


    this.facilities = [
      {
        main_heading: 'Physiotherapy',
        heading: 'Physiotherapy',
        content: `The Department of Physiotherapy addresses problems associated with movement dysfunction and pain that can arise from <a href="https://en.wikipedia.org/wiki/Musculoskeletal_injury">musculoskeletal</a>, neurological, respiratory and chronic disability conditions or from mental illness and intellectual impairment. The physiotherapy department at Rashtrotthana Hospital strives to provide an outpatient service that is based on high standards of care and quality. Treatment Goals are achieved through comprehensive assessment with individual treatment combining education, continuous support, home exercises programs and advice.`,
        image_1: 'rashtrotthana-hospital-physiotherapy-services.jpeg',
        image_2: 'best-physiotherapy-in-bangalore-rashtrotthana-hospital.jpeg',
        bg_image: 'physiotherapy-for-pain-relief-rashtrotthana-hospital.png',
        alt1 : 'Rashtrotthana Hospital Physiotherapy Services',
        alt2 : 'Best Physiotherapy in Bangalore - Rashtrotthana Hospital',
        alt3 : 'Physiotherapy for Pain Relief - Rashtrotthana Hospital',
      }
    ];
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content_1);
  }
}