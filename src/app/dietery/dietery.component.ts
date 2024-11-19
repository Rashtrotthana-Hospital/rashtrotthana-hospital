import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 


@Component({
  selector: 'app-dietery',
  templateUrl: './dietery.component.html',
  styleUrl: './dietery.component.css'
})
export class DieteryComponent {constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
}
sanitizedContent: SafeHtml ='';
sanitizedContent1: SafeHtml = '';
facilities:any[] = [];
ngOnInit(): void {
  this.titleService.setTitle("Expert Dietary & Clinical Nutrition Services - Rashtrotthana Hospital");  

this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides personalized dietary and clinical nutrition services in Bangalore, tailored to support patient health and recovery.' });

this.metaService.updateTag({ name: 'keywords', content: 'dietary services, clinical nutrition, healthy diet, hospital nutrition Bangalore' });


  this.facilities=[
    {
      main_heading:'Dietary',
      heading:'Dietary',
     content:`At Rashtrotthana Hospital, we prioritize nutritious, hygienic and flavorful meals through our dedicated canteen services. Prepared using high-quality ingredients, our menu caters to patients, visitors and staff, offering a range of wholesome options that support recovery and wellness. Our expert dietary team ensures balanced <a href="https://en.wikipedia.org/wiki/Meal">meal</a> choices for specific dietary needs, all designed to meet hospital-grade standards of health and safety.`,
     content_1:'Whether for a quick snack or a substantial meal, our canteen provides convenient, tasty options throughout the day, enhancing the hospital experience with accessible, satisfying and nourishing food choices.',
      image_1:'dietery-service-1.png',
      image_2:'dietery-service-2.png',
       bg_image:'dietery-bg.png'
    }
  ];
  this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content);
  this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.facilities[0].content_1);
}
}
