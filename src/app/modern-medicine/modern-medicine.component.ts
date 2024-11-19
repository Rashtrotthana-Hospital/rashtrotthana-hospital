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
      image: '../../assets/modern-1.png',
      title: 'Internal medicine',
      button_text: 'Read More',
      route: 'internal-medicine-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-2.png',
      title: 'General Surgery',
      button_text: 'Read More',
      route: 'best-general-surgery-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-3.png',
      title: 'Obstetrics & Gynecology',
      button_text: 'Read More',
      route: 'best-obstetrics-and-gynecologist-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-4.png',
      title: 'Paediatrics & Neonatology',
      button_text: 'Read More',
      route: 'best-paediatric-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-5.png',
      title: 'Nephrology',
      button_text: 'Read More',
      route: 'best-nephrology-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-6.png',
      title: 'Urology',
      button_text: 'Read More',
      route: 'best-urology-hospital-in-bangalore'

    },
    {
      name: 'card',
      image: '../../assets/modern-7.png',
      title: 'Orthopedics',
      button_text: 'Read More',
      route:'best-orthopaedics-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-8.png',
      title: 'Gastro Sciences',
      button_text: 'Read More',
      route:'best-gastroenterology-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-9.png',
      title: 'Cardiac sciences',
      button_text: 'Read More',
      route:'best-cardiology-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-10.png',
      title: 'Pulmonology',
      button_text: 'Read More',
      route:'best-pulmonology-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-11.png',
      title: 'Ophthalmology',
      button_text: 'Read More',
      route:'best-eye-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-12.png',
      title: 'Dental Sciences',
      button_text: 'Read More',
      route:'best-dental-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-13.png',
      title: 'ENT Specialty',
      button_text: 'Read More',
      route:'best-ent-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-14.png',
      title: 'Neurosciences',
      button_text: 'Read More',
      route:'best-neurology-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-15.png',
      title: 'Endocrinology',
      button_text: 'Read More',
      route:'best-endocrinology-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-16.png',
      title: 'Psychiatry',
      button_text: 'Read More',
      route:'best-pshychiatry-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-17.png',
      title: 'Oncology',
      button_text: 'Read More',
      route:'best-oncology-hospital-in-bangalore'
    },
    {
      name: 'card',
      image: '../../assets/modern-18.png',
      title: 'Anesthesiology',
      button_text: 'Read More',
      route:'best-anesthesiology-hospital-in-india'
    },
    {
      name: 'card',
      image: '../../assets/modern-19.png',
      title: 'Emergency Medicine',
      button_text: 'Read More',
      route:'best-emergency-medicine-hospital-in-bangalore'
    }

    
  ]
  hoverBoxes = [
    { image: 'assets/modern-hover-1.png' },
    { image: 'assets/modern-hover-2.png' },
    { image: 'assets/modern-hover-3.png' },
    { image: 'assets/modern-hover-4.png' },
    { image: 'assets/modern-hover-5.png' },
    { image: 'assets/modern-hover-6.png' },
    { image: 'assets/modern-hover-7.png' },
    { image: 'assets/modern-hover-8.png' },
    { image: 'assets/modern-hover-9.png' },
    { image: 'assets/modern-hover-10.png' },
    { image: 'assets/modern-hover-11.png' },
    { image: 'assets/modern-hover-12.png' },
    { image: 'assets/modern-hover-13.png' },
    { image: 'assets/modern-hover-14.png' },
    { image: 'assets/modern-hover-15.png' },
    { image: 'assets/modern-hover-16.png' },
    { image: 'assets/modern-hover-17.png' },
    { image: 'assets/modern-hover-18.png' },
    { image: 'assets/modern-hover-19.png' },
    
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
