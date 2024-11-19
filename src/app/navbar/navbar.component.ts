import { Component,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ContactFormService } from '../contact-form.service';

interface City {
  name: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  visible: boolean = false;

  // showDialog() {
  //     this.visible = true;
  // }
  close(){
    this.visible= false;
  }

    contactForm:any = FormGroup;
    subjects = [
      { name: 'General Inquiry' },
      { name: 'Support' },
      { name: 'Feedback' },
    ];
    cities: City[] | undefined;
  
    selectedCity: City | undefined;
    constructor(private router: Router,
      private renderer: Renderer2,private fb: FormBuilder,
      private messageService: MessageService,
      private contactFormService: ContactFormService) { }
    ngOnInit() {
        this.cities = [
            { name: 'General Medicine'},
            { name: 'Rome' },
            { name: 'London'},
            { name: 'Istanbul' },
            { name: 'Paris' }
        ];
        this.contactForm = this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          contactNumber: ['', Validators.required],
          subject: ['', Validators.required],
          message: ['', Validators.required],
        });
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactFormService.submitForm(this.contactForm.value).subscribe(
        response => {
          console.log('Server response:', response);
      console.log('Form Submitted', this.contactForm.value);
        },
        error => {
          console.error('Error submitting form:', error);
          // Handle error if necessary
        }
        
      );
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted Successfully ' });
      this.contactForm.reset();
      
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

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
  isIframeVisible: boolean = false;

  showDialog() {
    this.isIframeVisible = true;
  }
  closeIframe() {
    this.isIframeVisible = false;
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
  closeMenu() {
    const navbarCollapse = document.getElementById('navbarText');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}
