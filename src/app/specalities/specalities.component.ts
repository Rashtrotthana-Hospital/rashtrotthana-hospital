import { Component } from '@angular/core';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-specalities',
  templateUrl: './specalities.component.html',
  styleUrl: './specalities.component.css'
})
export class SpecalitiesComponent {
  constructor(private router: Router,private route: ActivatedRoute,private titleService: Title, private metaService: Meta) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkIfChildRouteActive();
    });
  }
    
  private childRouteActive = false;
  
  modernMedicine(){
    this.router.navigate(['best-general-medicine-hospital-in-bangalore'], {relativeTo:this.route});
    console.log('Modern Medicine');
  }
  yoga(){
    this.router.navigate(['yoga-therapy-bangalore'], {relativeTo:this.route});
  }
  ayurveda(){
    this.router.navigate(['ayurvedic-treatment-bangalore'], {relativeTo:this.route});
  }
  homeopathy(){
    this.router.navigate(['homeopathy-treatment-bangalore'], {relativeTo:this.route});
  }
  naturopathy(){
    this.router.navigate(['lifestyle-medicine-bangalore'], {relativeTo:this.route});
  }
  isChildRouteActive(): boolean {
    return this.childRouteActive;
  }
  home(){
    this.router.navigate(['research-center'], {relativeTo:this.route});
    console.log('clicked')
  }

  private checkIfChildRouteActive() {
    this.childRouteActive = this.route.firstChild !== null;
  }
  ngOnInit(): void {
    this.titleService.setTitle("Rashtrotthana Hospital Medical Specialities List and Departments");  

  this.metaService.updateTag({ name: 'description', content: 'Browse through the list of specialties that Rashtrotthana Hospital provide, world-class treatment options; experienced doctors in Bangalore which makes it Indias top multi-specialty hospital.' });

  this.metaService.updateTag({ name: 'keywords', content: 'specialities, modern medicine, ayurveda, lifestyle, yoga, homeopathy, doctors, medical specialities' });
  }
}
