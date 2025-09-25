import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css',
})
export class FacilitiesComponent implements OnInit {
  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkIfChildRouteActive();
    });
  }
  isMobile: boolean = false;
  ngOnInit(): void {

    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.checkIfChildRouteActive();
    //   });
  
    this.observeLaptopSizeChanges();

    this.titleService.setTitle('Medical Services - Rashtrotthana Hospital');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Facility | Our aim at Rashtrotthana hospital is to provide high quality, most advanced diagnostic and treatment facilities at affordable price.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'facilities, hospital facilities, emergency, emergency care, emergency & trauma, radiology, pharmacy, dialysis, physiotherapy',
    });
  }

  observeLaptopSizeChanges(): void {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  private childRouteActive = false;

  box = [
    {
      name: 'card',
      image:
        '../../assets/rashtrotthana_hospital_in_patient_Facility_bengaluru.png',
      title: 'In patient facility',
      button_text: 'Read More',
      route: 'inpatient-facility-bangalore',
      alt: 'Rashtrotthana Hospital | Patient Facility Bengaluru',
    },
    {
      name: 'card',
      image:
        '../../assets/rashtrotthana_hospital_emergency_and_trauma_care_bengaluru.png',
      title: 'Emergency & Trauma Care',
      button_text: 'Read More',
      route: 'best-emergency-trauma-multispeciality-hospital-bangalore',
      alt: 'Rashtrotthana Hospital | Emergency and Trauma Care Bengaluru',
    },
    {
      name: 'card',
      image:
        '../../assets/rashtrotthana_hospital_insurance_service_bengaluru.png',
      title: 'Insurance',
      button_text: 'Read More',
      route: 'health-insurance-plans-bangalore',
      alt: 'Rashtrotthana Hospital | Insurance Service Bengaluru',
    },
    {
      name: 'card',
      image:
        '../../assets/rashtritthana_hospital_dialysis_facility_bengaluru.png',
      title: 'Dialysis Unit',
      button_text: 'Read More',
      route: 'best-kidney-dialysis-multispeciality-hospital-bangalore',
      alt: 'Rashtrotthana Hospital | Dialysis Facility Bengaluru',
    },
    {
      name: 'card',
      image: '../../assets/rashtrottha_operation_theater_bengaluru.png',
      title: 'Operation Theatre',
      button_text: 'Read More',
      route: 'operation-theatre-bangalore',
      alt: 'Rashtrotthana Hospital | Best Operation Theater Bengaluru',
    },
    {
      name: 'card',
      image: '../../assets/rashtrotthana_icu_facility_bengaluru.png',
      title: 'I.C.U',
      button_text: 'Read More',
      route: 'best-intensive-care-unit-multispeciality-hospital-bangalore',
      alt: 'Rashtrotthana Hospital | Best ICU Facility Bengaluru',
    },
    {
      name: 'card',
      image: '../../assets/rashtrotthana_radiology_service_bengaluru.png',
      title: 'Radiology Services',
      button_text: 'Read More',
      route: 'top-diagnostics-multi-speciality-hospital-bangalore',
      alt: 'Rashtrotthana Hospital | Best Radiology Service Bengaluru',
    },
    {
      name: 'card',
      image: '../../assets/rashtrotthana_pharmacy_facility_bengaluru.png',
      title: 'Pharmacy',
      button_text: 'Read More',
      route: '24-hours-pharmacy-store-bangalore',
      alt: 'Rashtrotthana Hospital | Best Pharmacy Facility Bengaluru',
    },
    {
      name: 'card',
      image: '../../assets/rashtrotthana_hospital_ambulance_service.png',
      title: 'Ambulance Services',
      button_text: 'Read More',
      route: 'best-ambulance-service-rashtrotthana-hospital-bangalore',
      alt: 'Rashtrotthana Hospital | Ambulance Service Bengaluru',
    },
    {
      name: 'card',
      image:
        '../../assets/rashtrotthana_hospital_dietary_facility_bengaluru.png',
      title: 'Dietary',
      button_text: 'Read More',
      route: 'dietary-services-bangalore',
      alt: 'Rashtrotthana Hospital | Dietary Facility Bengaluru',
    },
    {
      name: 'card',
      image:
        '../../assets/rashtrotthana_hospital_physiotherapy_facility_bengaluru.png',
      title: 'Physiotherapy',
      button_text: 'Read More',
      route: 'physiotherapy-services-bangalore',
      alt: 'Rashtrotthana Hospital | Physiotherapy Facility Bengaluru',
    },
    {
      name: 'card',
      image:
        '../../assets/rashtrotthana_hospital_laboratory-services-bangalore.png',
      title: 'Laboratory Services',
      button_text: 'Read More',
      route: 'laboratory-services-bangalore',
      alt: 'Rashtrotthana Hospital | Best Laboratory Services Bangalore',
    },
    {
      name: 'card',
      image:
        '../../assets/rashtrotthana_hospital_endoscopy_services_bangalore.png',
      title: 'Endoscopy',
      button_text: 'Read More',
      route: 'endoscopy-services-bangalore',
      alt: 'Rashtrotthana Hospital | Best Endoscopy Services Bengaluru',
    },
    {
      name: 'card',
      image:
        '../../assets/rashtrotthana_hospital_nutrition_dietetics-services_bangalore.png',
      title: 'Nutrition & Dietetics',
      button_text: 'Read More',
      route: 'nutrition-dietetics-services-bangalore',
      alt: 'Rashtrotthana Hospital | Best Nutrition Dietetics Services Bangalore',
    },
  ];
  hoverBoxes = [
    { image: 'assets/inpatient-facility-bangalore.png' },
    {
      image:
        'assets/best-emergency-trauma-multispeciality-hospital-bangalore.png',
    },
    { image: 'assets/health-insurance-plans-bangalore.png' },
    {
      image:
        'assets/best-kidney-dialysis-multispeciality-hospital-bangalore.png',
    },
    { image: 'assets/operation-theatre-bangalore.png' },
    {
      image:
        'assets/best-intensive-care-unit-multispeciality-hospital-bangalore.png',
    },
    { image: 'assets/top-diagnostics-multi-speciality-hospital-bangalore.png' },
    { image: 'assets/24-hours-pharmacy-store-bangalore.png' },
    {
      image:
        'assets/best-ambulance-service-rashtrotthana-hospital-bangalore.png',
    },
    { image: 'assets/dietary-services-bangalore.png' },
    { image: 'assets/physiotherapy-services-bangalore.png' },
    { image: 'assets/endoscopy-services-bangalore.png' },
    { image: 'assets/laboratory-services-bangalore.png' },
    { image: 'assets/nutrition-dietetics-services-bangalore.png' },
  ];
  activeHoverIndex: number | null = null;

  onMouseOver(index: number) {
    // console.log(this.isMobile)

    this.activeHoverIndex = index;
  }
  isChildRouteActive(): boolean {
    return this.childRouteActive;
  }

private checkIfChildRouteActive() {
  // This will be truthy if there is an active child route
  this.childRouteActive = !!this.route.firstChild;
}


  onMouseOut() {
    this.activeHoverIndex = null;
  }
  onButtonClick(route?: string) {
    if (route) {
      this.router.navigate([`/facility/${route}`]);
    } else {
      console.error('No route provided');
    }
  }
}
