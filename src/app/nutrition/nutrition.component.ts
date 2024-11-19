import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
import { Facility } from '../facility.model';
import { SubFacility } from '../sub-facility.model';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.css'
})
export class NutritionComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  sanitizedSubFacilities: SubFacility[] = [];

  ngOnInit(): void {
    this.titleService.setTitle("Comprehensive Nutrition & Dietetics Services - Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides personalized nutrition and dietetic consultations for patients in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'nutrition services, dietetics, patient nutrition, hospital dietitian Bangalore' });

  this.sanitizeSubFacilitiesContent();
  }
  facilities=[
    {
      main_heading:'Nutrition & Dietetics',
      heading:'Nutrition & Dietetics',
      image_1:'nutrition-service-1.png',
      image_2:'nutrition-service-2.png',
      subFacilities:[
        {
          subHeading:'Optimizing Health Through Nutrition at Rashtrotthana Hospital:',
        subContent:'At Rashtrotthana Hospital, we recognize the vital role that nutrition plays in overall health and well-being. We dedicate our Nutrition & Dietetics facility to creating personalized nutrition plans that cater to each patient s unique needs. Our team of experienced dietitians works closely with patients to develop comprehensive nutrition strategies aimed at promoting optimal health and recovery. Whether you re managing a chronic condition, recovering from surgery, or simply looking to improve your overall wellness, our expert guidance can help you achieve your nutritional goals.'
        },
        {
          subHeading:'Customized Nutrition Plans for Your Unique Needs',
        subContent:'Understanding that every individual has unique nutritional requirements, our dietitians take a personalized approach to nutrition planning. Through thorough assessments and consultations, we develop customized nutrition plans that take into account your medical history, lifestyle and personal preferences. Whether you require specialized dietary modifications or simply need guidance on healthy eating habits, our team is here to support you every step of the way. By empowering you with the knowledge and tools to make informed food choices, we aim to help you achieve long-term success in managing your health through nutrition.'
        },
        {
          subHeading:'Education and support empower healthier lifestyles.',
        subContent:`At Rashtrotthana Hospital, we believe that education and support are essential components of successful nutrition management. Our Nutrition & <a href="https://en.wikipedia.org/wiki/Dietitian">Dietetics</a> facility offers educational resources and ongoing support to help you make lasting changes to your diet and lifestyle. We provide you with the knowledge and skills you need to adopt healthier habits and maintain them for life. By empowering you to take control of your nutritional health, we strive to make a positive impact on your overall well-being and quality of life.`
        }
      ],
      bg_image:'dietician-bg.png'
    
    }
    ];
    sanitizeSubFacilitiesContent(): void {
      console.log(this.facilities[0].subFacilities);
      // Sanitize each subContent for rendering safely with links
      this.sanitizedSubFacilities = this.facilities[0].subFacilities.map(subFacility => {
        console.log(subFacility.subContent);
        return {
          ...subFacility,
          subContent: this.sanitizer.bypassSecurityTrustHtml(subFacility.subContent) as string
        };
      });
    }
}
