import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  insurance: any = [
    {
      image: '../../assets/Aditya_Birla_Health_Insurance_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/Aditya Birla.pdf',
      alt: 'Aditya Birla Health Insurance Ltd'
    },
    {
      image: '../../assets/Bajaj_Allianz_General_Insurance_Company.png',
      pdfUrl: '../../assets/Insurance PDF/Bajaj_Allianz_General_Insurance_Company.pdf',
      alt: "Bajaj Allianz General Insurance Company"
    },
    {
      image: '../../assets/Cholamandalam_MS_General_Insurance_Company Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/Chola MS.pdf',
      alt: 'Cholamandalam MS General Insurance Company Ltd'
    },
    {
      image: '../../assets/Family_Health_Plan_Insurance_TPA_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/Family Health.pdf',
      alt: 'Family Health Plan Insurance TPA Ltd'

    },
    {
      image: '../../assets/Future_Generali_Health_Insurance.png',
      pdfUrl: '../../assets/Insurance PDF/Future General Insurance.pdf',
      alt: 'Future Generali Health Insurance'
    },
    {
      image: '../../assets/Good_Health_TPA_Services_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/GOOD HEALTH Insurance.pdf',
      alt: "Good Health TPA Services Ltd"
    },
    {
      image: '../../assets/Go_Digit_Insurance_Co._Ltd..png',
      pdfUrl: '../../assets/Insurance PDF/GO_DIGIT_GENERAL.pdf',
      alt: 'Go Digit Insurane Co. Ltd.'
    },
    {
      image: '../../assets/HDFC_Ergo_General_Insurance_Company.png',
      pdfUrl: '../../assets/Insurance PDF/HDFC ERGO.pdf',
      alt: 'HDFC Ergo General Insurance Company'
    },
    {
      image: '../../assets/Health_India_Insurance_Tpa.png',
      pdfUrl: '../../assets/Insurance PDF/HEALTH INDIA Insurance.pdf',
      alt: 'Health India Insurance TPA'
    },
    {
      image: '../../assets/Heritage_Health_Insurance_TPA_Pvt_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/HERITAGE Health Insurance.pdf',
      alt: 'Heritage Health Insurance TPA Pvt Ltd'
    },
    {
      image: '../../assets/Health_Insurance_TPA_of_India_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/Health Insurance.pdf',
      alt: 'Health Insurance TPA of India Ltd'
    },
    {
      image: '../../assets/ICICI_Lombard_General_Insurance_Co._Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/ICICI.pdf',
      alt: 'ICICI Lombard General Insurance Co. Ltd'

    },
    {
      image: '../../assets/IFFCO_Tokio_General_Insurance_Co._Ltd..png',
      pdfUrl: '../../assets/Insurance PDF/IFFCO-TOKIO.pdf',
      alt: 'IFFCO Tokio General Insurance Co. Ltd.'

    },
    {
      image: '../../assets/Liberty_General_Insurance_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/Liberty General.pdf',
      alt: 'Liberty General Insurance Ltd'
    },
    {
      image: '../../assets/MDIndia_Health_Insurance_TPA_Pvt_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/MD-INDIA Health Insurance.pdf',
      alt: 'MDIndia Health Insurance TPA Pvt Ltd'
    },
    {
      image: '../../assets/Manipal_Cigna_Health_Insurance_Co._Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/Manipal-Cigna.pdf',
      alt: 'Manipal Cigna Health Insurance Co. Ltd'
    },
    {
      image: '../../assets/Medsave_Health_Insurance_TPA_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/MedSave Health Insurance.pdf',
      alt: 'Medsave_Health_Insurance_TPA_Ltd'
    },
    {
      image: '../../assets/Niva_Bupa_Health_Insurance_Company_(Max_Bupa).png',
      pdfUrl: '../../assets/Insurance PDF/NivaBupa.pdf',
      alt: 'Niva Bupa Health Insurance Company (Max Bupa)'
    },
    {
      image: '../../assets/Paramount_Health_Services_TPA_Pvt_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/Paramount.pdf',
      alt: 'Paramount Health Services TPA Pvt Ltd'
    },
    {
      image: '../../assets/The_Oriental_Insurance_Co._Ltd..png',
      pdfUrl: '../../assets/Insurance PDF/Oriental Insuarnace-Paramount Health Services & Insurance.pdf',
      alt: 'The Oriental Insurance Co. Ltd.'
    },
    {
      image: '../../assets/Reliance_General_Insurance_Co_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/Reliance_General_Insurance.pdf',
      alt: 'Reliance General Insurance Co Ltd'
    },
    {
      image: '../../assets/United_Healthcare_Parekh_Insurance_TPA_Pvt_Ltd.png',
      pdfUrl: '../../Insurance PDF/United Health Care Parekh Insurance.pdf',
      alt: 'United Healthcare Parekh Insurance TPA Pvt Ltd'
    },
    {
      image: '../../assets/United_India_Insurance_Co._Ltd..png',
      pdfUrl: '../../assets/Insurance PDF/United India.pdf',
      alt: 'United India Insurance Co. Ltd.'
    },
    {
      image: '../../assets/Universal_Sompo_General_Insurance.png',
      pdfUrl: '../../assets/Insurance PDF/Universal Sompo.pdf',
      alt: 'Universal Sompo General Insurance'
    },
    {
      image: '../../assets/Vidal_Health_Insurance_TPA_Services.png',
      pdfUrl: '../../assets/Insurance PDF/VIDAL HEALTH.pdf',
      alt: 'Vidal Health Insurance TPA Services'
    },
    {
      image: '../../assets/Care_Health_Insurance_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/care-health-insurance.pdf',
      alt: 'Care Health Insurance Ltd. (Religare Insurance)'
    },
    {
      image: '../../assets/National_Insurance_Company_Limited.png',
      pdfUrl: '../../assets/Insurance PDF/National Insurance-Paramount.pdf',
      alt: 'National Insurance Company Limited'
    },
    {
      image: '../../assets/Raksha_Health_Insurance_TPA_Pvt_Ltd.png',
      pdfUrl: '../../assets/Insurance PDF/Raksha Health Insurance.pdf',
      alt: 'Raksha Health Insurance TPA Pvt Ltd'
    },
  ]
}
