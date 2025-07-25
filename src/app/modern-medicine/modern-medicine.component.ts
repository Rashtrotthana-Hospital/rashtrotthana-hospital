import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-modern-medicine',
  templateUrl: './modern-medicine.component.html',
  styleUrl: './modern-medicine.component.css'
})
export class ModernMedicineComponent {
  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title, private metaService: Meta) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkIfChildRouteActive();
    });
  }
  ngOnInit(): void {
    this.titleService.setTitle("Rashtrotthana Hospital Medical Specialities List and Departments");  

  this.metaService.updateTag({ name: 'description', content: 'Browse through the list of specialties that Rashtrotthana Hospital provide, world-class treatment options &amp; experienced doctors in Bangalore which makes it Indias top multi-specialty hospital.' });

  this.metaService.updateTag({ name: 'keywords', content: ' general medicine, internal medicine, cardiology, nephrology, urology, dermatology, gynaecology, pulmonology' });
  }
  box =[
    {
      name: 'card',
      image: '../../assets/internal_medicine_hospital_in_bangalore.png',
      title: 'Internal medicine',
      button_text: 'Read More',
      route: 'internal-medicine-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Internal Medicine Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_general_surgery_hospital_in_bangalore.png',
      title: 'General Surgery',
      button_text: 'Read More',
      route: 'best-general-surgery-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best General Surgery Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_obstetrics_and_gynecologist_hospital_in_bangalore.png',
      title: 'Obstetrics & Gynecology',
      button_text: 'Read More',
      route: 'best-obstetrics-and-gynecologist-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Obstetrics and Gynecologist Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_paediatric_hospital_in_bangalore.png',
      title: 'Paediatrics & Neonatology',
      button_text: 'Read More',
      route: 'best-paediatric-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Paediatric Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_nephrology_hospital_in_bangalore.png',
      title: 'Nephrology',
      button_text: 'Read More',
      route: 'best-nephrology-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Nephrology Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_urology_hospital_in_bangalore.png',
      title: 'Urology',
      button_text: 'Read More',
      route: 'best-urology-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Urology Hospital in Bangalore'

    },
    {
      name: 'card',
      image: '../../assets/best_orthopaedics_hospital_in_bangalore.png',
      title: 'Orthopedics',
      button_text: 'Read More',
      route:'best-orthopaedics-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Orthopaedics Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_gastroenterology_hospital_in_bangalore.png',
      title: 'Gastro Sciences',
      button_text: 'Read More',
      route:'best-gastroenterology-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Gastroenterology Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_cardiology_hospital_in_bangalore.png',
      title: 'Cardiac sciences',
      button_text: 'Read More',
      route:'best-cardiology-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Cardiology Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_pulmonology_hospital_in_bangalore.png',
      title: 'Pulmonology',
      button_text: 'Read More',
      route:'best-pulmonology-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Pulmonology Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_eye_hospital_in_bangalore.png',
      title: 'Ophthalmology',
      button_text: 'Read More',
      route:'best-eye-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Eye Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_dental_hospital_in_bangalore.png',
      title: 'Dental Sciences',
      button_text: 'Read More',
      route:'best-dental-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Dental Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_ent_hospital_in_bangalore.png',
      title: 'ENT Specialty',
      button_text: 'Read More',
      route:'best-ent-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best ENT Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_neurology_hospital_in_bangalore.png',
      title: 'Neurosciences',
      button_text: 'Read More',
      route:'best-neurology-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Neurology Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_endocrinology_hospital_in_bangalore.png',
      title: 'Endocrinology',
      button_text: 'Read More',
      route:'best-endocrinology-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Endocrinology Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_pshychiatry_hospital_in_bangalore.png',
      title: 'Psychiatry',
      button_text: 'Read More',
      route:'best-pshychiatry-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Pshychiatry Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_oncology_hospital_in_bangalore.png',
      title: 'Oncology',
      button_text: 'Read More',
      route:'best-oncology-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Oncology Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/best_anesthesiology_hospital_in_bengaluru.png',
      title: 'Anesthesiology',
      button_text: 'Read More',
      route:'best-anesthesiology-hospital-in-india',
      alt : 'Rashtrotthana Hospital | Best Anesthesiology Hospital in India'
    },
    {
      name: 'card',
      image: '../../assets/best_emergency_medicine_hospital_in_bangalore.png',
      title: 'Emergency Medicine',
      button_text: 'Read More',
      route:'best-emergency-medicine-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Emergency Medicine Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/rheumatology-bangalore.png',
      title: 'Rheumatology',
      button_text: 'Read More',
      route:'rheumatology-hospital-bangalore',
      alt : 'Rashtrotthana Hospital | Best Rheumatology  Hospital in Bangalore'
    },
    {
      name: 'card',
      image: '../../assets/vascular-bangalore.png',
      title: 'Vascular Surgeries',
      button_text: 'Read More',
      route:'best-vascular-surgery-hospital-in-bangalore',
      alt : 'Rashtrotthana Hospital | Best Vascular Surgeries Hospital in Bangalore'
    },
    
  ]
  hoverBoxes = [
    { image: 'assets/internal_medicine_hospital_in_rrnagar.png' },
    { image: 'assets/best_general_surgery_hospital_in_rrnagar.png' },
    { image: 'assets/best_obstetrics_and_gynecologist_hospital_in_rrnagar.png' },
    { image: 'assets/best_paediatric_hospital_in_rrnagar.png' },
    { image: 'assets/best_nephrology_hospital_in_rrnagar.png' },
    { image: 'assets/best_urology_hospital_in_rrnagar.png' },
    { image: 'assets/best_orthopaedics_hospital_in_rrnagar.png' },
    { image: 'assets/best_gastroenterology_hospital_in_rrnagar.png' },
    { image: 'assets/best_cardiology_hospital_in_rrnagar.png' },
    { image: 'assets/best_pulmonology_hospital_in_rrnagar.png' },
    { image: 'assets/best_eye_hospital_in_rrnagar.png' },
    { image: 'assets/best_dental_hospital_in_rrnagar.png' },
    { image: 'assets/best_ent_hospital_in_rrnagar.png' },
    { image: 'assets/best_neurology_hospital_in_rrnagar.png' },
    { image: 'assets/best_endocrinology_hospital_in_rrnagar.png' },
    { image: 'assets/best_pshychiatry_hospital_in_rrnagar.png' },
    { image: 'assets/best_oncology_hospital_in_rrnagar.png' },
    { image: 'assets/best_anesthesiology_hospital_in_rrnagar.png' },
    { image: 'assets/best_emergency_medicine_hospital_in_rrnagar.png' },
    { image: 'assets/rheumatology-treatment.png'},
    { image: 'assets/best-vascular-surgery-hospital-in-bangalore.png' }
  ];
  activeHoverIndex: number | null = null;

    
  private childRouteActive = false;
  onMouseOver(index: number) {
    this.activeHoverIndex = index;
  }
  isChildRouteActive(): boolean {
    return this.childRouteActive;
  }

  private checkIfChildRouteActive() {
    this.childRouteActive = !!this.route.firstChild;
  }
  onMouseOut() {
    this.activeHoverIndex = null;
  }
  onButtonClick(route?: string) {
    if (route) {
      this.router.navigate([`/specialities//${route}`]);
    } else {
      console.error('No route provided');
    }
  }
}
