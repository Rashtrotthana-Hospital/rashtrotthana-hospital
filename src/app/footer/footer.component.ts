import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}
  openLink(type: string) {
    if (type == 'youtube') {
      window.open('https://www.youtube.com/channel/UC5yBntegcZ_lR_IpfkbSVrA', '_blank');
    }
    else if (type == 'facebook') {
      window.open('https://www.facebook.com/rashtrottanahospital', '_blank');
    }
    else if (type == 'twitter') {
      window.open('https://x.com/Jmrhospital', '_blank');
    }
    else if (type == 'instagram') {
      window.open('https://www.instagram.com/rashtrotthanahospital/?fbclid=IwZXh0bgNhZW0CMTEAAR2QboDfEwBQxDe7jIHuAmE-Syn3Y6kRp1NQS6KX71uMpbFO7H-JVHbfYBw_aem_akYFom-c4Mism2XS8h6G-w', '_blank');
    }
    else if (type == 'linkedin') {
      window.open('https://www.linkedin.com/company/89777981/admin/dashboard/', '_blank');
    }
  }
  aboutus() {
    this.router.navigate(['/about-us']);
  }
  home(){
    this.router.navigate(['/']);
  }
  speciality(){
    this.router.navigate(['/specialities']);
  }
  facilities(){
    this.router.navigate(['/facility']);
  }
  doctor(){
    this.router.navigate(['/doctor']);
  }
  health(){
    this.router.navigate(['/health-check-up-packages-bangalore']);
  }
  donation(){
    this.router.navigate(['/donate-to-hospital-bangalore']);
  }
  blog(){
    this.router.navigate(['/']);
  }
  insurance(){
    this.router.navigate(['/facility/health-insurance-plans-bangalore']);
  }
}

