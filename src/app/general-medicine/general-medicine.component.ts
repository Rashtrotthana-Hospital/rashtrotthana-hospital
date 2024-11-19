import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-general-medicine',
  templateUrl: './general-medicine.component.html',
  styleUrl: './general-medicine.component.css'
})
export class GeneralMedicineComponent {
  specialities=[
    {
      main_heading:'Internal Medicine',
      content:'Internal Medicine dept also provides advanced medical treatment for Infectious diseases, metabolic disorders, lifestyle diseases & co-management of respiratory, gastro, cardiac, nephrology & neuro cases. For handling critical medical cases - dedicated 6 bedded Medical ICU is available & a High dependency unit (HDU) is also available for patients requiring continuous monitoring. Internal Medicine, also referred to as Internal Medicine, is a branch of medicine that deals with the prevention, diagnosis and the non-surgical treatments of diseases that are related to the internal organs.',
      heading:'Internal Medicine',
      image:'Gm_page_img.jfif',
      Doctors:[
        {
          doctor_image:'gm_doctor.png',
          doctor_name:'Dr. Sindhu P Madanshetty'
        },
        {
          doctor_image:'gm_doctor.png',
          doctor_name:'Dr. Sindhu P Madanshetty'
        },
        {
          doctor_image:'gm_doctor.png',
          doctor_name:'Dr. Sindhu P Madanshetty'
        },
        {
          doctor_image:'gm_doctor.png',
          doctor_name:'Dr. Sindhu P Madanshetty'
        }
      ]}];
      currentSpecialty = '';

  constructor(private route: ActivatedRoute,private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentSpecialty = params['specialty'] || '';
    });
    this.titleService.setTitle("Internal Medicine Hospital in Bangalore | Internal Medicine Doctor    ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is one of the top internal medicine hospital in Bangalore, India with experienced internal medicine doctor offer best treatments.' });

  this.metaService.updateTag({ name: 'keywords', content: 'diabetes, internal medicine, hypertension, general medicine' });
  }
}
