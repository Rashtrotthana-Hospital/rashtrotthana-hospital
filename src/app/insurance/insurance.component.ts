import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle(" Comprehensive Health Insurance Plans at Rashtrotthana Hospital");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital partners with major insurance providers to offer extensive health coverage for all patients in Bangalore.' });

  this.metaService.updateTag({ name: 'keywords', content: 'health insurance, hospital insurance plans, insurance coverage Bangalore' });

  }
insurance:any=[
  {
    image:'../../assets/aditya-birla.png',
    pdfUrl:'../../assets/Insurance PDF/Aditya Birla.pdf'
  },
  {
    image:'../../assets/Bajaj.png',
    pdfUrl:'../../assets/Insurance PDF/BBajaj_Alliance_General_Insurance_Co.pdf'
  },
  {
    image:'../../assets/chola.png',
    pdfUrl:'../../assets/Insurance PDF/Chola MS.pdf'
  },
  {
    image:'../../assets/FHPL.png',
    pdfUrl:'../../assets/Insurance PDF/Family Health.pdf'

  },
  {
    image:'../../assets/Future.png',
    pdfUrl:'../../assets/Insurance PDF/Future General Insurance.pdf'
  },
  {
    image:'../../assets/good_health.png',
    pdfUrl:'../../assets/Insurance PDF/GOOD HEALTH Insurance.pdf'
  },
  {
    image:'../../assets/digit.png',
    pdfUrl:'../../assets/Insurance PDF/GO_DIGIT_GENERAL.pdf'
  },
  {
    image:'../../assets/hdfc.png',
    pdfUrl:'../../assets/Insurance PDF/HDFC ERGO.pdf'
  },
  {
    image:'../../assets/health_india.png',
    pdfUrl:'../../assets/Insurance PDF/HEALTH INDIA Insurance.pdf'
  },
  {
    image:'../../assets/heritage_health.png',
    pdfUrl:'../../assets/Insurance PDF/HERITAGE Health Insurance.pdf'
  },
  {
    image:'../../assets/health_insurance.png',
    pdfUrl:'../../assets/Insurance PDF/Health Insurance.pdf'
  },
  {
    image:'../../assets/icici.png',
    pdfUrl:'../../assets/Insurance PDF/ICICI.pdf'
  },
  {
    image:'../../assets/iffco-tokio.png',
    pdfUrl:'../../assets/Insurance PDF/IFFCO-TOKIO.pdf'

  },
  {
    image:'../../assets/liberty.png',
    pdfUrl:'../../assets/Insurance PDF/Liberty General.pdf'
  },
  {
    image:'../../assets/md.png',
    pdfUrl:'../../assets/Insurance PDF/MD-INDIA Health Insurance.pdf'
  },
  {
    image:'../../assets/manipal.png',
    pdfUrl:'../../assets/Insurance PDF/Manipal-Cigna.pdf'
  },
  {
    image:'../../assets/medsave.png',
    pdfUrl:'../../assets/Insurance PDF/MedSave Health Insurance.pdf'
  },
  {
    image:'../../assets/niva.png',
    pdfUrl:'../../assets/Insurance PDF/NivaBupa.pdf'
  },
  {
    image:'../../assets/paramount.png',
    pdfUrl:'../../assets/Insurance PDF/Paramount.pdf'
  },
  {
    image:'../../assets/oriental.png',
    pdfUrl:'../../assets/Insurance PDF/Oriental Insuarnace-Paramount Health Services & Insurance.pdf'
  },
  {
    image:'../../assets/reliance.png',
    pdfUrl:'../../assets/Insurance PDF/Reliance_General_Insurance.pdf'
  },
  {
    image:'../../assets/unitedhealth.png',
    pdfUrl:'../../Insurance PDF/United Health Care Parekh Insurance.pdf'
  },
  {
    image:'../../assets/unitedindia.png',
    pdfUrl:'../../assets/Insurance PDF/United India.pdf'
  },
  {
    image:'../../assets/universal_sompo.png',
    pdfUrl:'../../assets/Insurance PDF/Universal Sompo.pdf'
  },
  {
    image:'../../assets/vidal.png',
    pdfUrl:'../../assets/Insurance PDF/VIDAL HEALTH.pdf'
  },
  {
    image:'../../assets/care.png',
    pdfUrl:'../../assets/Insurance PDF/care-health-insurance.pdf'
  },
  {
    image:'../../assets/national.png',
    pdfUrl:'../../assets/Insurance PDF/National Insurance-Paramount.pdf'
  },
  {
    image:'../../assets/raksha.png',
    pdfUrl:'../../assets/Insurance PDF/Raksha Health Insurance.pdf'
  },
]
}
