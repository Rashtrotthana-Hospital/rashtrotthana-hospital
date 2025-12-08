import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-pulmonology',
  templateUrl: './pulmonology.component.html',
  styleUrl: './pulmonology.component.css'
})
export class PulmonologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {

  }
  sanitizedContent: SafeHtml = '';
  sanitizedContent1: SafeHtml = '';
  specialities: any[] = [];
  ngOnInit(): void {
    this.titleService.setTitle("Best Pulmonology Hospital in bangalore India ");
    this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the best pulmonology hospital in India with experienced pulmonologists providing lungs care and respiratory related problems.' });
    this.metaService.updateTag({ name: 'keywords', content: 'pulmonology hospital near me,pulmonology, pulmonologist, breathing problems, breathing difficulty, respiratory problems, bronchial asthma, bronchial atresia, bronchiectasis, bronchiolitis, lungs, breathe, Asthma Specialist Near Me ,Lung Function Test (PFT) ,Chronic Cough Treatment ,Wheezing Problem Specialist ,Best hospital for wheezing problem ,Treatment for Lung Infection ,Tuberculosis (TB) Treatment ,Breathing Problem Doctor in RR Nagar Bangalore ,Lung cancer treatment  ,Flu Specialist Doctor ,Pulmonologist near me ,Treatment for Lung Damage Problem ,Treatment for breathing difficulty ,Wheezing and Breathlessness Treatment ,Chest Congestion Problem ,Dust allergy cough ,COPD Cough Treatment ,COPD' });
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content);
    this.sanitizedContent1 = this.sanitizer.bypassSecurityTrustHtml(this.specialities[0].content_1);
  }

  doctors = [
    {
      id: 1,
      name: 'Dr. Kolla Vinod',
      experience: '18+ Years',
      image: '../../assets/Dr-Kolla-Vinod.png',
      slug: '/doctor/dr-kolla-vinod',
      docalt : 'Dr. Kolla Vinod | Best Pulmonologist in Bangalore | Rashtrotthana Hospital'
    },
  ];

  faqs = [
    {
      ques : 'What are the common symptoms of lung diseases?',
      ans : 'Lung diseases often present with chronic cough, wheezing, breathlessness, chest congestion, and persistent respiratory infections. If you experience recurring breathing problems, consult Dr. Kolla Vinod, best pulmonologist in RR Nagar Bangalore, for early diagnosis and treatment.'
    },
    {
      ques : ' How is COPD diagnosed and treated?',
      ans : 'COPD (Chronic Obstructive Pulmonary Disease) is diagnosed using Lung Function Tests (PFT), spirometry, and imaging tests. Treatment includes inhalers, medication, pulmonary rehabilitation and lifestyle modifications to improve breathing. At Rashtrotthana Hospital, the best lung hospital in RR Nagar Bangalore, Dr. Kolla Vinod provides comprehensive COPD cough treatment and breathlessness management.'
    },
    {
      ques : 'What is the best treatment for chronic cough?',
      ans : 'Chronic cough can result from asthma, COPD, lung infections or acid reflux. Our lungs specialist, Dr. Kolla Vinod, in Bangalore, provides advanced chronic cough treatment tailored to the underlying cause.'
    },
    {
      ques : 'When should I see a doctor for breathing difficulties?',
      ans : 'If you experience shortness of breath, wheezing, chest tightness, or difficulty breathing, it’s important to seek medical attention immediately. Dr. Kolla Vinod specializes in effective treatment for breathing difficulty, wheezing, and lung infections.'
    },
    {
      ques : 'What treatments are available for tuberculosis (TB)?',
      ans : 'Tuberculosis (TB) treatment includes antibiotic therapy, lung function monitoring, and supportive care. Our expert pulmonologist, Dr. Kolla Vinod, ensures precise diagnosis and effective treatment plans for TB patients in Bangalore.'
    },
    {
      ques : 'How can I prevent lung infections and respiratory diseases?',
      ans : 'Preventing lung diseases involves avoiding allergens, quitting smoking, maintaining good hygiene, and getting vaccinated against flu and pneumonia. Regular lung check-ups with Dr. Kolla Vinod at the best pulmonology hospital in Bangalore can help detect issues early.'
    },
    // {
    //   ques : 'What tests are done to diagnose lung diseases?',
    //   ans : 'Common diagnostic tests include CT scans, X-rays, Lung Function Tests (PFT), bronchoscopy and blood tests to assess lung health. Our expert pulmonologist for lung diseases, Dr. Kolla Vinod, ensures accurate diagnosis and effective treatment.'
    // },
    {
      ques : 'What are the symptoms of tuberculosis (TB)?',
      ans : `
        <div class = "s_para">Tuberculosis (TB) is a serious lung infection that requires timely diagnosis and treatment. Common symptoms of tuberculosis (TB) include:</div>
        <ul>
          <li class = "s_para">Persistent cough lasting more than three weeks (may indicate the need for chronic cough treatment).</li>
          <li class = "s_para">Chest pain and breathing difficulty (requires immediate attention from a breathing problem doctor in RR Nagar Bangalore).</li>
          <li class = "s_para">Wheezing and breathlessness (consult a wheezing problem specialist for early intervention).</li>
          <li class = "s_para">Unexplained weight loss and fatigue (may indicate a worsening lung condition).</li>
          <li class = "s_para">Fever, chills, and night sweats (requires flu specialist doctor consultation for proper evaluation).</li>
          <li class = "s_para">Coughing up blood (hemoptysis) (seek urgent care from an expert pulmonologist for lung diseases).</li>
        </ul>
      `
    },
  ]


  formDoctors : any = ["Dr. Kolla Vinod"]

    trackPhoneClick() {
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-16656770043/-YEMCITg09IZEPvHyIY-',
        'event_callback': () => {
          console.log('Phone call conversion tracked!');
        }
      });
    }
  }
}
