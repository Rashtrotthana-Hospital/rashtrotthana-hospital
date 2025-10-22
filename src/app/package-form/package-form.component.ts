import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChatbotServiceService } from '../chatbot-service.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrl: './package-form.component.css'
})
export class PackageFormComponent {
  @Input() selectedPackage: any; // Receive selected package data
  @Output() closeForm = new EventEmitter<void>(); // Notify parent to close form
  @Output() formSubmit = new EventEmitter<any>(); // Notify parent of form submission
  formData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    appointmentDate: ''
  };
  today: string = '';
  constructor(private chatbotService: ChatbotServiceService, private router: Router) { }
  ngOnInit() {
    const now = new Date();
    this.today = now.toISOString().split('T')[0]; // Format today's date as YYYY-MM-DD
    console.log('Selected package:', this.selectedPackage);
  }
  submitForm(): void {
    const formDetails = {
      ...this.formData,
      packageName: this.selectedPackage?.title, // Include package name
      packageId: this.selectedPackage?.packageId, // Include package ID
      requestVia: 'Online', // Include request source
      appointmentStatus: 'pending', // Include appointment status
      repeatChecked: false,
      daysInterval: 0,
      numberOfTimes: 0,
      repeatedDates: [],
    };
    const payload = {
      packageName: this.selectedPackage?.title,
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      phoneNumber: this.formData.phoneNumber,
      email: this.formData.email,
      appointmentDate: this.formData.appointmentDate,

    }
    this.chatbotService.createService(formDetails).subscribe({
      next: (response) => {
        console.log('Appointment created successfully:', response);
        // this.chatbotService.sendWhatsappMessageForService(payload).subscribe({
        //   next: (response) => {
        //     console.log('Whatsapp message sent successfully:', response);
        //   },
        //   error: (error) => {
        //     console.error('Failed to send whatsapp message:', error);
        //   }
        // });
        
        const smsPayload ={
          packageName: this.selectedPackage?.title,
          patientName: this.formData.firstName + ' ' + this.formData.lastName,
          patientPhoneNumber: this.formData.phoneNumber,
          status: 'pending'
        }
        this.chatbotService.sendMailtoHospital(payload).pipe(first()).subscribe({
          next: (response) => {
            console.log('Email sent successfully:', response);
          },
          error: (error) => {
            console.error('Failed to send email:', error);
          }
        });
        this.chatbotService.sendSMSMessageForService(smsPayload).subscribe({
          next: (response) => {
            console.log('SMS message sent successfully:', response);
          },
          error: (error) => {
            console.error('Failed to send SMS message:', error);
          }
        });
        this.closeForm.emit(); // Emit close form event
        this.router.navigate(['/thank-you'])
      },
      error: (error) => {
        console.error('Failed to create appointment:', error);
      }
    })
      

    console.log('Submitting form with details:', formDetails);
    // this.formSubmit.emit(formDetails); // Emit form submission event

  }

  cancelForm(): void {
    this.closeForm.emit(); // Emit close form event
  }
}
