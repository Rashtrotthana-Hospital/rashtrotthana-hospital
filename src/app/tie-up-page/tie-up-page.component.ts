import { Component, ElementRef, ViewChild, Renderer2  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-tie-up-page',
  templateUrl: './tie-up-page.component.html',
  styleUrl: './tie-up-page.component.css'
})
export class TieUpPageComponent {

  @ViewChild('knowMoreSection') knowMoreSection!: ElementRef;

  scrollToSection() {
    this.knowMoreSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // elfsightUrl: SafeResourceUrl;

  constructor(private renderer: Renderer2) {
    // this.elfsightUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   'https://apps.elfsight.com/p/platform/?p=delay&app=7759e6bd-a4b0-4835-bad7-66c88fc58ec3'
    // );
  } 


  ngOnInit() {
    this.loadElfsightScript();
  }

  loadElfsightScript() {
    // Check if script already exists to avoid duplicates
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = this.renderer.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      this.renderer.appendChild(document.body, script);
    }
  }

  


  cards = [
    {
      bgColor: '#FF4F4F',
      hoverBg: '#FFAEAE',
      heading: 'Annual & Periodic Health Check-ups',
      para: 'Standardized and customized health check-up packages for employees to support preventive care, early diagnosis and health monitoring.',
      icon: `assets/tie-up-page/mdi_kids-room.png`
    },
    {
      bgColor: '#42ED33',
      hoverBg: '#B3FFAC',
      heading: 'Outpatient & Inpatient Care',
      para: 'Access to OPD consultations, diagnostic services, and inpatient treatment across hospital departments as per agreed terms under the corporate tie-up.',
      icon: `assets/tie-up-page/mdi_patient.png`
    },
    {
      bgColor: '#F476FF',
      hoverBg: '#F8A7FF',
      heading: 'Emergency & First Aid Services',
      para: 'Emergency medical care for accidents and acute medical conditions, including immediate stabilization and further management when required.',
      icon: `assets/tie-up-page/bxs_first-aid.png`
    },
    {
      bgColor: '#DCF900',
      hoverBg: '#F4FFB3',
      heading: 'Health Screening & Awareness Programs',
      para: 'Organization-level health camps, screening programs and awareness sessions focusing on lifestyle diseases, occupational health, and preventive healthcare.',
      icon: `assets/tie-up-page/ri_mini-program-fill.png`
    },
    {
      bgColor: '#00E1F6',
      hoverBg: '#A6F8FF',
      heading: 'Employee Family Benefits',
      para: 'Healthcare services and health check-up packages can be extended to employees’ family members, subject to the terms of the corporate agreement.',
      icon: `assets/tie-up-page/vaadin_family.png`
    },
    {
      bgColor: '#9476FF',
      hoverBg: '#BEACFF',
      heading: 'Corporate Concessions',
      para: 'Preferential pricing on consultations, investigations, and select services for employees of empanelled organizations.',
      icon: `assets/tie-up-page/ic_baseline-business-center.png`
    },
  ];

  card1 = [
  { name: 'Toyota Kirloskar Motor Private Limited', image: 'assets/tie-up-page/img-1.png' },
  { name: 'Arvind Limited', image: 'assets/tie-up-page/img-4.png' },
  { name: 'Chinmaya Vidyalaya, Banashankari', image: 'assets/tie-up-page/img-3.png' },
  { name: 'Good Shepherd Institution', image: 'assets/tie-up-page/img-6.png' },
  { name: 'Kanti Sweets', image: 'assets/tie-up-page/img-14.png' },
  { name: 'Staff Discount Policy of Rashtrotthana Parishat', image: 'assets/tie-up-page/img-9.png' },
  { name: 'Staff Discount Policy of Rashtrotthana Vidya Kendra', image: 'assets/tie-up-page/img-16.png' }
];


card2 = [
  { name: 'Aryan Opulence', image: 'assets/tie-up-page/img-2.png' },
  { name: 'Federal Bank', image: 'assets/tie-up-page/img-5.png' },
  { name: 'Indo American High Breed Seeds', image: 'assets/tie-up-page/img-8.png' },
  { name: 'IKA - India Private Limited', image: 'assets/tie-up-page/img-10.png' },
  { name: 'Suguna Upper Crest', image: 'assets/tie-up-page/img-11.png' },
  { name: 'Suguna Pristine Square', image: 'assets/tie-up-page/img-12.png' },
  { name: 'Vijaya Bharathi Vidhyalaya', image: 'assets/tie-up-page/img-13.png' }
];


}
