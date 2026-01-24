import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-form',
  standalone: false,
  templateUrl: './popup-form.html',
  styleUrl: './popup-form.css'
})
export class PopupForm {
 @Input() doctor : any
 @Input() doctorName : any

 @Output() close = new EventEmitter<void>()

  appointmentForm!: FormGroup;
  // apiUrl:string= 'https://rashtrotthana-backend-812956739285.us-east4.run.app/api/email'
   apiUrl:string = 'https://docmindsjmrh.imapps.in/api/email'
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      // doctor: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Form Submitted:', this.appointmentForm.value);
      const emailRequest = {
        to: "patientservices@rashtrotthanahospital.com",
        appointmentDetails: this.appointmentForm.value,
      };

      // Fetch the doctor ID by name
      this.http.post(`${this.apiUrl}/send-website-email`, emailRequest)
              .subscribe({
                next: (emailResponse) => {
                  console.log('Email sent successfully:', emailResponse);
                  this.router.navigate(['/thank-you']);
                },
                error: (emailError) => {
                  console.error('Error sending email:', emailError);
                },
              });
    } else {
      this.appointmentForm.markAllAsTouched(); // show all validation messages
    }
  }


  closePopup(){
    this.close.emit()
  }

onOverlayClick(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
    this.closePopup();
  }
}

}
