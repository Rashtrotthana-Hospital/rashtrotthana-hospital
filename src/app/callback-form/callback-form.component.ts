import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-callback-form',
  templateUrl: './callback-form.component.html',
  styleUrl: './callback-form.component.css'
})
export class CallbackFormComponent {

 @Input() pageName: string = 'Website';

  apiUrl = '';

  formData = {
    name: '',
    mobile: '',
    otp: ''
  };

  
  isSending = false;
  isVerifying = false;
  showOTP = false;
  otpVerified = false;
  successMessage: string | null = null;

  resendTimer = 0;
  resendInterval: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}


  sendOtp(form: any) {
    if (form.invalid) {
      alert('Please enter valid name and mobile number');
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem('callback_otp', otp);
    localStorage.setItem(
      'callback_otp_expiry',
      (Date.now() + 2 * 60 * 1000).toString()
    );

    this.isSending = true;

    this.http.post(`${this.apiUrl}/sms/send-otp-vasavi`, {
      patientName: this.formData.name,
      patientPhoneNumber: '91' + this.formData.mobile,
      service: this.pageName,
      otp
    }).subscribe({
      next: () => {
        this.isSending = false;
        this.showOTP = true;
        this.startResendTimer();
        alert('OTP sent successfully');
      },
      error: () => {
        this.isSending = false;
        alert('Failed to send OTP');
      }
    });
  }

  

  verifyOtp() {
    const savedOtp = localStorage.getItem('callback_otp');
    const expiry = Number(localStorage.getItem('callback_otp_expiry'));

    if (!savedOtp || Date.now() > expiry) {
      alert('OTP expired. Please resend.');
      return;
    }

    this.isVerifying = true;

    setTimeout(() => {
      if (this.formData.otp === savedOtp) {
        this.otpVerified = true;
        this.showOTP = false;
        localStorage.clear();
        this.sendEmail();
      } else {
        alert('Invalid OTP');
      }
      this.isVerifying = false;
    }, 700);
  }

 

  resendOtp() {
    if (this.resendTimer > 0) return;
    this.sendOtp({ valid: true });
  }

  startResendTimer() {
    this.resendTimer = 120;
    clearInterval(this.resendInterval);
    this.resendInterval = setInterval(() => {
      this.resendTimer--;
      if (this.resendTimer <= 0) clearInterval(this.resendInterval);
    }, 1000);
  }

 

  sendEmail() {
    const emailRequest = {
      whatsappNumber: ['916382348092'],
      to: ['govindarajk8092@gmail.com'],
      status: 'Callback-Form',
      appointmentDetails: {
        name: this.formData.name,
        phone: this.formData.mobile,
        page: this.pageName
      }
    };

    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest)
      .subscribe({
        next: () => {
          this.successMessage = '✅ Thank you! We will call you back shortly.';
          this.router.navigate(['/thank-you']);
        },
        error: () => {
          alert('Failed to submit request');
        }
      });
  }
}