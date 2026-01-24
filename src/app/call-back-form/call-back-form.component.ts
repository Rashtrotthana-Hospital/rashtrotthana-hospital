import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environment';
import { ChatbotServiceService } from '../chatbot-service.service';
import { CallBackFormService } from '../call-back-form.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-call-back-form',
  templateUrl: './call-back-form.component.html',
  styleUrl: './call-back-form.component.css',
  providers:[MessageService]
})
export class CallBackFormComponent {
  @Input() pageName: string = 'Website';

  apiUrl = environment.apiurl;
  hsiteKey = environment.hcaptchaSiteKey_static;

  formData = {
    name: '',
    mobile: '',
    otp: '',
  };

  userAddress = 'Fetching location...';

  showOTP = false;
  successMessage: string | null = null;

  otpSent = false;
  otpVerified = false;

  isSending = false;
  isVerifying = false;

  resendTimer = 0;
  resendInterval: any;
  captchaResponse: string | null = null;
  captchaVerified = false;
  captchaSession: string | null = null;
  captchaToken: string | null = null;


  constructor(
    private http: HttpClient,
    private router: Router,
    private chatbotService: ChatbotServiceService,
    private callbackService: CallBackFormService,
    private messageService: MessageService
    // private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.fetchUserLocation()
  }


  onCaptchaVerify(token: string | any) {
    const captchaToken = typeof token === 'string' ? token : token?.token;
    // console.log('Captcha token received:', captchaToken);

    this.http.post<any>(`${this.apiUrl}/api/email/captcha/verify`, {
      captchaToken
    }).subscribe({
      next: (res) => {
        this.captchaVerified = true;
        this.captchaSession = res.captchaSession;
      },
      error: () => {
        this.captchaVerified = false;
        alert('Captcha verification failed');
      }
    });
  }

  onCaptchaExpire() {
    this.captchaVerified = false;
    this.captchaSession = null;
  }


  onCaptchaError(err: any) {
    console.error('hCaptcha error:', err);
    this.captchaVerified = false;
    this.captchaSession = null;
  }



  onCaptchaResolved(token: any) {
    // console.log('Captcha verified, token:', token);
    this.captchaResponse = token; // ✅ set captcha response here

    // (your existing logic)
    if (!this.formData.name || !this.formData.mobile) {
      alert('Please fill name and mobile number first!');
      return;
    }

    // this.isSending = true;

    this.http
      .post(`${this.apiUrl}/email/verify`, {
        name: this.formData.name,
        mobile: this.formData.mobile,
        token: token,
      })
      .subscribe({
        next: (res: any) => {
          // this.isSending = false;
        },
        error: (err) => {
          // this.isSending = false;
          alert('Server error, please try again.');
          console.error(err);
        },
      });
  }




  fetchUserLocation(): void {
    if (!navigator.geolocation) {
      this.userAddress = 'Location unavailable';
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
        )
          .then(res => res.json())
          .then(data => {
            const addr = data.address || {};
            this.userAddress =
              `${addr.city || addr.town || ''}, ${addr.state || ''}, ${addr.country || ''}`.trim();
          });
      },
      () => this.fetchSecondaryLocation(),
      { enableHighAccuracy: true, timeout: 20000 }
    );
  }

  fetchSecondaryLocation(): void {
    this.http.get<any>('https://ipapi.co/json/').subscribe({
      next: (data) => {
        this.userAddress = `${data.city}, ${data.region}, ${data.country_name}`;
      },
      error: () => {
        this.userAddress = 'Unknown Location';
      }
    });
  }


  sendOtp(form: any) {
    if (form.invalid || !this.captchaVerified) {
      // if (form.invalid) {
      alert('Please fill details & complete captcha');
      return;
    }

    this.fetchUserLocation();

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // TEMP (frontend only)
    localStorage.setItem('callback_otp', otp);
    localStorage.setItem(
      'callback_otp_expiry',
      (Date.now() + 2 * 60 * 1000).toString()
    );

    const payload = {
      patientName: this.formData.name,
      patientPhoneNumber: '91' + this.formData.mobile,
      service: this.pageName,
      otp,
      captchaSession: this.captchaSession

    };

    this.isSending = true;

    // ✅ USE SERVICE
    this.chatbotService.otpSms(payload).subscribe({
      next: () => {
        this.isSending = false;
        this.otpSent = true;
        this.showOTP = true;
        this.startResendTimer();
        this.messageService.add({severity:'success', summary:'Success', detail:'OTP sent successfully!'});
        // alert('OTP sent successfully');
      },
      error: (err) => {
        console.error('OTP error:', err);
        this.isSending = false;
        // alert('OTP send failed');
              this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Otp send failed!, Try again",
      });
      }
    });
  }


  verifyOtp() {
    const savedOtp = localStorage.getItem('callback_otp');
    const expiry = Number(localStorage.getItem('callback_otp_expiry'));

    if (!savedOtp || Date.now() > expiry) {
      alert('OTP expired');
      return;
    }

    if (this.formData.otp === savedOtp) {
      this.otpVerified = true;
      this.showOTP = false;
      localStorage.clear();
      // ✅ SAVE CALLBACK REQUEST
      this.saveCallbackRequest();
      this.sendEmail();
    } else {
      alert('Invalid OTP');
    }
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

  get formattedResendTime(): string {
    const m = Math.floor(this.resendTimer / 60);
    const s = this.resendTimer % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }


  sendEmail() {
    this.successMessage = 'Thank you! We will call you back shortly.';

    const appointmentDetails = {
      name: this.formData.name,
      phone: this.formData.mobile,
      address: this.userAddress,
      page: this.pageName
    };

    const emailRequest = {
      // to: ['patientservices@rashtrotthanahospital.com', 'frontoffice@rashtrotthanahospital.com'],
      to: ['patientservices@rashtrotthanahospital.com'],
      // to:['keerthanasaminathan0805@gmail.com'],
      status: 'Call Back Request',
      appointmentDetails: appointmentDetails,
      // whatsappNumber: ['919164840378']
      // whatsappNumber: ['916382348092']
    };

    this.http.post(`${this.apiUrl}/api/email/send-email`, emailRequest)
      .subscribe({
        next: (emailResponse) => {
          console.log('Email sent successfully:', emailResponse);
          this.router.navigate(['/thank-you']);
        },
        error: (emailError) => {
          console.error('Error sending email:', emailError);
        },
      });
  }
  saveCallbackRequest() {
    const payload = {
      name: this.formData.name,
      mobile: this.formData.mobile,
      address: this.userAddress,
      pageName: this.pageName
    };

    this.callbackService.createCallback(payload).subscribe({
      next: () => {
        console.log('Callback request saved');
      },
      error: (err) => {
        console.error('Failed to save callback request', err);
      }
    });
  }

}
