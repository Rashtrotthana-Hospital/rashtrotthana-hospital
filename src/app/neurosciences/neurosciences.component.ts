import { Component } from '@angular/core';
import { Title,Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-neurosciences',
  templateUrl: './neurosciences.component.html',
  styleUrl: './neurosciences.component.css'
})
export class NeurosciencesComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml ='';
  sanitizedContent1: SafeHtml = '';
  specialities:any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Ophthalmology Hospital in Bangalore | Rashtrotthana Hospital");
    this.metaService.updateTag({ name: 'description', content: 'Rashtrotrhana Hospital is the Best Ophthalmology Hospital in Bangalore, India with renowned top ophthalmologist offer eye care services.' });
    this.metaService.updateTag({ name: 'keywords', content: 'ophthalmology hospital near me, eye care, cataracts, glaucoma, diabetic retinopathy, macular degeneration, ophthalmologist, optometrists, eye care services, vision care, eye disease, vision health' });
    this.specialities=[
      {
        main_heading:'Neurosciences',
        content:'The Neurosciences Department at Rashtrotthana Hospital is dedicated to delivering specialized, compassionate care for a wide array of neurological conditions affecting the brain, spine and nervous system. Our experienced team of neurologists and neurosurgeons utilizes advanced diagnostic tools, including MRI, CT scans and neurophysiological tests, to provide precise and timely diagnosis. This enables our experts to create individualized treatment plans for various conditions, such as migraines, epilepsy, movement disorders and neurodegenerative diseases like Parkinson’s and Alzheimer’s. By blending cutting-edge technology with a patient-centered approach, our specialists ensure that patients receive the best possible care tailored to their unique neurological needs.',
        content_1:`In addition to treatment for common conditions, our Neurosciences Department excels in managing complex <a href="https://en.wikipedia.org/wiki/Neurological_disorder">neurological issues</a>, including stroke rehabilitation, spinal cord injuries and neurosurgical interventions. Our team offers minimally invasive procedures whenever possible, promoting faster recovery times and reduced discomfort for patients. With comprehensive post-operative care and support from our multidisciplinary staff, we are committed to ensuring each patient’s journey to recovery is both effective and comfortable. The Neurosciences Department at Rashtrotthana Hospital is dedicated to enhancing the quality of life for patients through expert, empathetic and innovative neurological care.`,
        heading:'Neurosciences',
        image:'Neurosciences.png',
        Doctors:[
          {
            doctor_image:'../../assets/doctor-38.png',
            doctor_name:'Dr. Jaidev S',
            experience : "4"
          },
          {
            doctor_image:'../../assets/doctor-5.png',
            doctor_name:'Brig (Dr) S. Shashivadhanan',
            experience : "30+"
          },
        ]}];
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
          this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

}
