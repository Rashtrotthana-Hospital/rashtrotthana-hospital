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
    this.titleService.setTitle("Best Neurology Hospital In Bangalore | Neuro Treatment - Rashtrotthana Hospital");
    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana is the best neurology hospital in Bangalore, India with experienced neurologists providing neuro care treatments and surgeries.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Neurology, nerve problems, nerve hospital near me, neurological disorders, acute stroke and cerebrovascular diseases, paediatric and adult epilepsy, neuromuscular diseases, Parkinson’s disease and related disorder, Alzheimer’s disease and other disorders of cognition, multiple sclerosis and other demyelinating disorders' });
    this.specialities=[
      {
        main_heading:'Neurosciences',
        content:'The Neurosciences Department at Rashtrotthana Hospital is dedicated to delivering specialized, compassionate care for a wide array of neurological conditions affecting the brain, spine and nervous system. Our experienced team of neurologists and neurosurgeons utilizes advanced diagnostic tools, including MRI, CT scans and neurophysiological tests, to provide precise and timely diagnosis. This enables our experts to create individualized treatment plans for various conditions, such as migraines, epilepsy, movement disorders and neurodegenerative diseases like Parkinson’s and Alzheimer’s. By blending cutting-edge technology with a patient-centered approach, our specialists ensure that patients receive the best possible care tailored to their unique neurological needs.',
        content_1:`In addition to treatment for common conditions, our Neurosciences Department excels in managing complex <a href="https://en.wikipedia.org/wiki/Neurological_disorder">neurological issues</a>, including stroke rehabilitation, spinal cord injuries and neurosurgical interventions. Our team offers minimally invasive procedures whenever possible, promoting faster recovery times and reduced discomfort for patients. With comprehensive post-operative care and support from our multidisciplinary staff, we are committed to ensuring each patient’s journey to recovery is both effective and comfortable. The Neurosciences Department at Rashtrotthana Hospital is dedicated to enhancing the quality of life for patients through expert, empathetic and innovative neurological care.`,
        heading:'Neurosciences',
        image:'best_neurosciences_treatment_in_bengaluru.png',
        alt : 'Best Neurosciences Treatment in Bengaluru',
        Doctors:[
          {
            doctor_image:'../../assets/Dr-Jaidev-S.png',
            doctor_name:'Dr. Jaidev S',
            experience : "4",
            docalt : 'Dr. Jaidev S | Best Neurosurgeon in Bangalore | Rashtrotthana Hospital'
          },
          {
            doctor_image:'../../assets/Dr-S-Shashivadhanan.png',
            doctor_name:'Brig (Dr) S. Shashivadhanan',
            experience : "30+",
            alt : 'Brig (Dr) S. Shashivadhanan | Best Neurospine Surgeon in Bangalore | Rashtrotthana Hospital'
          },
          {
            doctor_image:'../../assets/Dr-Kalyani-Dilip-Karkare.png',
            doctor_name:'Dr. Kalyani Dilip Karkare',
            experience : "14+",
            alt : 'Dr. Kalyani Dilip Karkare | Best Neurologist in Bangalore | Rashtrotthana Hospital'
          },
          {
            doctor_image:'../../assets/doctor-38.png',
            doctor_name:'Dr. Jaidev S',
            experience : "4"
          },
          
        ]}];
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
          this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

}
