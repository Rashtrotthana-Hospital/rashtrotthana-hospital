import { Component } from '@angular/core';
import { SafeHtml,DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-emergency-medicine',
  templateUrl: './emergency-medicine.component.html',
  styleUrl: './emergency-medicine.component.css'
})

export class EmergencyMedicineComponent {
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
  constructor(private sanitizer: DomSanitizer) {
  }
  ngOnInit(): void {
    this.specialities=[
      {
        main_heading:'Emergency Medicine',
        content:`The <a href="https://en.wikipedia.org/wiki/Emergency_medicine">Emergency Medicine</a> Department at Rashtrotthana Hospital provides immediate, expert care for patients in critical conditions, ensuring high standards of emergency medical support. Our team of specialized emergency physicians, nurses and support staff is trained to handle a broad spectrum of urgent medical needs, including trauma, cardiac emergencies, respiratory distress and acute illnesses. With state-of-the-art equipment and advanced monitoring systems, we prioritize swift assessment, intervention and stabilization, offering 24/7 availability for critical cases. Our facility is designed to manage life-threatening situations, enabling efficient, high-quality care at every stage of the emergency process.`,
        heading:'Emergency Medicine',
        content_1:'Our department also focuses on preventive measures, conducting educational initiatives to raise awareness about emergency preparedness and response. From managing minor injuries to complex, multi-disciplinary interventions, we emphasize compassionate, patient-centered care. We aim to support families during distressing times and ensure that each patient receives rapid treatment with the highest level of medical professionalism. By fostering collaborations with other departments and continuously improving our protocols, the Emergency Medicine Department at Rashtrotthana Hospital remains a trusted choice for emergency healthcare in Bangalore.',
        image:'emergency medicine.png',
        Doctors:[
          {
            doctor_image:'',
            doctor_name:'',
            experience : ''
          }
          // {
          //   doctor_image:'Dr.Geethanjali K G.png',
          //   doctor_name:'Dr. Geethanjali K G'
          // }
        ]}];
  }

}
