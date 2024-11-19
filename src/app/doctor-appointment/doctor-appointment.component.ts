
import { Component,OnInit,Input,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, timeout, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

 interface City {
   name: string;
}
@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {
  @Input() selectedDoctor: any;
  @Output() close = new EventEmitter<void>();
  availableTimes: { name: string }[] = [];
  slots: {name:string}[] = []; 
  disabledDays: number[] = [];
  minDate: Date = new Date();
  clicked:boolean = true;
  contactForm:any = FormGroup;
  doctorid:any;
  subjects = [
    { name: '10:00 - 11:00' },
    { name: '12:00 - 2:00' },
    { name: '15:00 - 17:00' }
  ];
  cities: City[] | undefined;
  date: Date[] | undefined;
  selectedCity: City | undefined;
  // apiUrl:string = 'https://backend-812956739285.us-east4.run.app/api'
  unavailableSlotsForDate: any[] = [];
  // apiUrl:string = 'http://localhost:3000/api'
  apiUrl:string= 'https://rashtrotthana-backend-812956739285.us-east4.run.app/api'

  constructor(private fb: FormBuilder, private messageService: MessageService, private http: HttpClient) {}

  ngOnInit() {
    // console.log('selected doctor',this.selectedDoctor)
    this.cities = [
      { name: 'General Medicine' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' }
    ];
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber:  ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      time: ['', Validators.required],
      message: ['', Validators.required],
      date_appointment: ['', Validators.required],
    });
    if (this.selectedDoctor && this.selectedDoctor.time) {
      // this.availableTimes = this.selectedDoctor.time.split(',').map((time: string) => ({ name: time }));
    }
    this.setDateConstraints();
  }

  setDateConstraints() {
    if (this.selectedDoctor.date === 'Monday-Saturday') {
      this.disabledDays = [0]; // Disable Sunday (0)
    } else if (this.selectedDoctor.date === 'Friday') {
      this.disabledDays = [0, 1, 2, 3, 4, 6]; // Disable all days except Friday (5)
    } else if (this.selectedDoctor.date === 'Tuesday') {
      this.disabledDays = [0, 1, 5, 3, 4, 6]; // Disable all days except Tuesday (2)
    } else if (this.selectedDoctor.date === 'Wednesday') {
      this.disabledDays = [0, 1, 2, 4, 5, 6]; // Disable all days except Wednesday (3)
    } else if (this.selectedDoctor.date === 'Tuesday and Friday') {
      this.disabledDays = [0, 1, 3, 4, 6]; // Disable all days except Tuesday and Friday
    } else if (this.selectedDoctor.date === 'Tuesday and Thursday') {
      this.disabledDays = [0, 1, 3, 5, 6]; // Disable all days except Tuesday and Thursday
    } 
    else if (this.selectedDoctor.date === 'Monday-Friday') {
      this.disabledDays = [0,6]; // Disable all days except Tuesday and Thursday
    } 
    else if (this.selectedDoctor.date === 'Monday-Thursday') {
      this.disabledDays = [0,5,6]; // Disable all days except Tuesday and Thursday
    }
    else if (this.selectedDoctor.date === 'Wednesday and Friday') {
      this.disabledDays = [0, 1, 2, 4, 6]; // Disable all days except Tuesday and Thursday
    }
    else if (this.selectedDoctor.date === 'Sunday'){
      this.disabledDays = [1,2,3,4,5,6];
    } 
    else if(this.selectedDoctor.date === 'Saturday'){
      this.disabledDays = [0,1,2,3,4,5];
    }
    else if(this.selectedDoctor.date === 'Tuesday,Thursday and Saturday'){
      this.disabledDays = [0,1,3,5];
    }
    else {
      this.disabledDays = [];
    }
  }
 // Fetch doctor ID by name
 getDoctorIdByName(doctorName: string): Observable<number | null> {
  return this.http.get<any[]>(`${this.apiUrl}/doctors`).pipe(
    map((doctors) => {
      if (!Array.isArray(doctors)) {
        throw new Error('Invalid response format');
      }
      const doctor = doctors.find((doc) => doc?.name?.toLowerCase() === doctorName.toLowerCase());
      return doctor ? doctor.id : null;
    })
  );
}
getBookedSlots(doctorId: number, date: string): Observable<string[]> {
  const bookedSlotsUrl = `${this.apiUrl}/doctors/booked-slots?doctorId=${doctorId}&date=${date}`;
  return this.http.get<string[]>(bookedSlotsUrl);
}
getUnavailableDates(doctorId: number): Observable<{ date: string }[]> {
  return this.http.get<{ date: string }[]>(`${this.apiUrl}/doctors/unavailable-dates?doctorId=${doctorId}`);
}
getUnavailableSlots(doctorId: number): Observable<{ [date: string]: string[] }> {
  return this.http.get<{ [date: string]: string[] }>(`${this.apiUrl}/doctors/${doctorId}/unavailableSlots`);
}
getAvailableSlots(doctorId: number, date: string): Observable<any> {
  const availabilityUrl = `${this.apiUrl}/doctors/availability?doctorId=${doctorId}&date=${date}`;
  return this.http.get<any>(availabilityUrl);
}

  // onDateChange(event: any) {
  //   const selectedDate = new Date(event);
  //   const dayOfWeek = selectedDate.getDay();

  //   if (this.selectedDoctor.name === 'Dr. Ashika Bagaria' && dayOfWeek === 2) {
  //     this.availableTimes = this.filterPastTimes([
  //       { name: '10:00 - 10:20' },
  //       { name: '10:20 - 10:40' },
  //       { name: '10:40 - 11:00' },
  //       { name: '11:00 - 11:20' },
  //       { name: '11:20 - 11:40' },
  //       { name: '11:40 - 12:00' },
  //       { name: '12:00 - 12:20' },
  //       { name: '12:20 - 12:40' },
  //       { name: '12:40 - 13:00' },
  //       { name: '13:00 - 13:20' },
  //       { name: '13:20 - 13:40' },
  //       { name: '13:40 - 14:00' },
  //       { name: '14:00 - 14:20' },
  //       { name: '14:20 - 14:40' },
  //       { name: '14:40 - 15:00' },
  //       { name: '15:00 - 15:20' },
  //       { name: '15:20 - 15:40' },
  //       { name: '15:40 - 16:00' }
  //     ], selectedDate);
  //   } else if (this.selectedDoctor.name === 'Dr. Manasa N. A' && dayOfWeek === 6) {
  //     this.availableTimes = this.filterPastTimes([
  //       { name: '13:30-13:50' },
  //       { name: '13:50-14:10' },
  //       { name: '14:10-14:30' },
  //       { name: '14:30-14:50' },
  //       { name: '14:50-15:10' },
  //       { name: '15:10-15:30' }
  //     ], selectedDate);
  //   }
  //   else if(this.selectedDoctor.name === 'Dr. Sapna S' && dayOfWeek === 0){
  //     this.availableTimes = this.filterPastTimes([
  //       { "name": "10:00-10:20" },
  //       { "name": "10:20-10:40" },
  //       { "name": "10:40-11:00" },
  //       { "name": "11:00-11:20" },
  //       { "name": "11:20-11:40" },
  //       { "name": "11:40-12:00" },
  //       { "name": "12:00-12:20" },
  //       { "name": "12:20-12:40" },
  //       { "name": "12:40-13:00" },
  //       { "name": "13:00-13:20" },
  //       { "name": "13:20-13:40" },
  //       { "name": "13:40-14:00" },
  //       { "name": "14:00-14:20" },
  //       { "name": "14:20-14:40" },
  //       { "name": "14:40-15:00" }
  //     ], selectedDate);
  //   } else {
  //     this.availableTimes = this.filterPastTimes(
  //       this.selectedDoctor.time.split(',').map((time: string) => ({ name: time })),
  //       selectedDate
  //     );
  //   }
  // }
  generateTimeSlots(startTime: string, endTime: string, slotDuration: number) : { name: string }[] {

    let slots: { name: string }[] = [];
    let current = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);


    while (current < end) {
      const slotStart = current.toTimeString().substring(0, 5);
      current = new Date(current.getTime() + slotDuration * 60000);

      if (current <= end) {
        const slotEnd = current.toTimeString().substring(0, 5);
        slots.push({ name: `${slotStart}-${slotEnd}` });

      }
    }
    console.log(slots)

    return slots;
  }

  onDateChange(event: any) {
    const selectedDate = new Date(event);
    const formattedDate = this.formatDate(selectedDate);
    this.getDoctorIdByName(this.selectedDoctor.name).subscribe({
      next: (doctorId) => {
        if (doctorId) {
          this.getAvailableSlots(doctorId, formattedDate).subscribe({
            
            next: (availability) => {
              console.log('Available slots:', availability);
              // this.availableTimes = availableSlots.map((time: string) => ({ name: time }));
              if (availability && availability.availableFrom) {
                        const [start, end] = availability.availableFrom.split('-');
                        const slotDuration = availability.slotDuration;
                        this.availableTimes = this.generateTimeSlots(start, end, slotDuration);
              
                        // Remove any already booked slots for that day
                      
                      } else {
                        this.availableTimes = [];
                      }
  
            }
          });
          
          // Fetch unavailable dates using the doctor ID
          this.getUnavailableDates(doctorId).subscribe({
            next: (unavailableDates) => {
              const unavailableDatesList = unavailableDates.map((entry) => {
                return this.formatDate(new Date(entry.date));
              });

              // Check if the selected date is in the unavailable dates list
              if (unavailableDatesList.includes(formattedDate)) {
                this.messageService.add({
                  severity: 'warn',
                  summary: 'Doctor Unavailable',
                  detail: 'The doctor is not available on the selected date. Please choose another date.',
                });
                this.availableTimes = []; // Clear available times since the doctor is unavailable
                return;
              }

              // If the doctor is available on the selected date, fetch booked slots
              this.getBookedSlots(doctorId, formattedDate).subscribe({
                next: (bookedSlots) => {
                  this.filterAvailableTimes(bookedSlots, selectedDate);
                },
                error: (error) => {
                  console.error('Error fetching booked slots:', error);
                  this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to fetch booked slots.',
                  });
                },
              });
            },
            error: (error) => {
              console.error('Error fetching unavailable dates:', error);
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Failed to fetch unavailable dates. Please try again later.',
              });
            },
          });
          const date = this.formatDate(selectedDate);
          this.getUnavailableSlots(doctorId).subscribe({
            next:(unavailableSlots: { [date: string]: string[] }) => {
              this.unavailableSlotsForDate = unavailableSlots[date] || [];
              // console.log('Unavailable slots:', unavailableSlots);
            },
            error: (error) => {
              console.error('Error fetching unavailable slots:', error);
            },
          });
        } else {
          console.warn('Doctor not found');
          this.messageService.add({
            severity: 'warn',
            summary: 'Doctor Not Found',
            detail: 'The selected doctor could not be found. Please select a valid doctor.',
          });
        }
      },
      error: (error) => {
        console.error('Error fetching doctor ID:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to fetch doctor information. Please try again later.',
        });
      },
    });
  

  }
  filterAvailableTimes(bookedSlots: string[], selectedDate: Date) {
    // let allTimes = this.selectedDoctor.time.split(',').map((time: string) => ({ name: time }));

    if (selectedDate.toDateString() === new Date().toDateString()) {
      // Filter past times if the date is today
      this.availableTimes = this.filterPastTimes(this.availableTimes, selectedDate);
    }
    // console.log('All times:', allTimes);
    // Filter out the booked times
    this.availableTimes = this.availableTimes.filter(
      (timeObj:any) => ((!bookedSlots.includes(timeObj.name) && !this.unavailableSlotsForDate.includes(timeObj.name)))
    );
    console.log('Available times:', this.availableTimes);

  }

  filterPastTimes(times: { name: string }[], selectedDate: Date): { name: string }[] {
    const today = new Date();
    
    if (selectedDate.toDateString() === today.toDateString()) {
      const currentTime = today.getHours() * 60 + today.getMinutes();
      return times.filter(timeObj => {
        const [startHour, startMinute] = timeObj.name.split(' - ')[0].split(':');
        const timeInMinutes = parseInt(startHour) * 60 + parseInt(startMinute);
        return timeInMinutes > currentTime;
      });
    }
    
    return times;
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  // onSubmit(): void {
   
  //   if (this.contactForm.valid) {
  //     const dateObj = this.contactForm.value.date_appointment;
  //     const appointmentDate = dateObj ? this.formatDate(new Date(dateObj)) : '';
    
  //     function getDoctorIdByName(doctorName: any, callback: any) {
  //       fetch('${this.apiUrl}/doctors', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       })
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error('Failed to fetch doctors: ' + response.statusText);
  //           }
  //           return response.json();
  //         })
  //         .then((doctors) => {
  //           // Find the doctor based on the doctor name
  //           if (!Array.isArray(doctors)) {
  //             throw new Error('Invalid response format');
  //           }
    
  //           // Find the doctor based on the doctor name
  //           const doctor = doctors.find((doc) => {
  //             if (doc && doc.name) {
  //               return doc.name.toLowerCase() === doctorName.toLowerCase();
  //             }
  //             return false;
  //           });
    
  //           if (doctor) {
  //             console.log('Doctor found:', doctor);
  //             callback(null, doctor.id); // Pass the doctor ID to the callback
  //           } else {
  //             console.warn('Doctor not found');
  //             callback('Doctor not found', null);
  //           }
  //         })
  //         .catch((error) => {
  //           console.error('Error fetching doctors:', error);
  //           callback(error, null);
  //         });
  //     }
    
  //     // Example Usage:
  //     getDoctorIdByName(this.selectedDoctor.name, (error: any, doctorId: any) => {
  //       if (error) {
  //         console.error('Error fetching doctor ID:', error);
  //       } else {
  //         console.log('Doctor ID:', doctorId);
  //         console.log(typeof(doctorId))
  //         // Proceed with form submission using the doctor ID
  //         const appointmentData = {
  //           patientName: this.contactForm.value.name,
  //           phoneNumber: this.contactForm.value.contactNumber,
  //           email: this.contactForm.value.email,
  //           doctorName: this.selectedDoctor.name,
  //           department: this.selectedDoctor.speciality,  // Assuming `speciality` is the department
  //           date: appointmentDate,
  //           time: this.contactForm.value.time.name,
  //           requestVia: 'Website',  // Indicating the source
  //           status: 'pending',  // Default status
  //           smsSent: false,  // Default SMS status
  //           emailSent:false,
  //           doctorId: doctorId,  // Set the fetched doctor ID here
  //         };
  //         console.log('Appointment Data:', appointmentData);
    
  //         // Now make the POST request to create the appointment
  //         fetch('${this.apiUrl}/appointments', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(appointmentData),
  //         })
  //           .then((response) => {
              
  //             if (!response.ok) {
  //               throw new Error('Failed to create appointment: ' + response.statusText);
  //             }
  //             return response.json();
  //           })
  //           .then((appointmentResponse) => {
  //             console.log('Appointment successfully created:', appointmentResponse);
  //             // Send the email after WhatsApp message is sent
  //           const emailRequest = {
  //             to: appointmentData.email,
  //             status: 'received', // Assuming we want to send a "received" email
  //             appointmentDetails: appointmentData,
  //           };

  //           return this.http.post('${this.apiUrl}/email/send', emailRequest).toPromise();
  //         })
  //         .then((emailResponse) => {
  //           console.log('Email sent successfully:', emailResponse);

        
  //             // Send the WhatsApp message after the appointment is successfully created
  //             return this.http.post('${this.apiUrl}/whatsapp/send', appointmentData).toPromise();
  //           })
  //           .then((whatsappResponse) => {
  //             console.log('WhatsApp message sent:', whatsappResponse);
        
  //             // Show success message to the user
  //             this.messageService.add({
  //               severity: 'success',
  //               summary: 'Success',
  //               detail: 'Thank you, we have received your request and will get back to you shortly.',
  //             });
        
  //             // Reset the form and close dialog
  //             this.contactForm.reset();
  //             this.closeDialog();
  //           })
  //           .catch((error) => {
  //             console.error('Error:', error);
  //           });
  //       }
  //     });
  //   }
    
  // }
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.clicked = false;
      const dateObj = this.contactForm.value.date_appointment;
      const appointmentDate = dateObj ? this.formatDate(new Date(dateObj)) : '';
      const firstName = this.contactForm.value.firstName;
      const lastName = this.contactForm.value.lastName;
      this.contactForm.value.contactNumber.startsWith('91') ? this.contactForm.value.contactNumber : '91' + this.contactForm.value.contactNumber;
      // Combine first and last names
      const patientName = `${firstName} ${lastName}`;
      const emailParams = {
        doctorName: this.selectedDoctor.name,
        doctorDesignation: this.selectedDoctor.desgination,
        patientName: patientName,
        patientEmail: this.contactForm.value.email,
        patientContact: this.contactForm.value.contactNumber,
        appointmentTime: this.contactForm.value.time.name,
        appointmentDate: appointmentDate,
        message: this.contactForm.value.message
      };
      const emailRequest = {
        to: 'frontoffice@rashtrotthanahospital.com',
        status: 'frontoffice',
        appointmentDetails: emailParams,
      };

      // Fetch the doctor ID by name
      this.http.post(`${this.apiUrl}/email/send-email`, emailRequest)
              .subscribe({
                next: (emailResponse) => {
                  console.log('Email sent successfully:', emailResponse);
                },
                error: (emailError) => {
                  console.error('Error sending email:', emailError);
                },
              });

  this.http.get<any[]>(`${this.apiUrl}/doctors`)
      .subscribe({
        next: (doctors) => {
          if (!Array.isArray(doctors)) {
            throw new Error('Invalid response format');
          }

          const doctor = doctors.find((doc) => {
            if (doc && doc.name) {
              return doc.name.toLowerCase() === this.selectedDoctor.name.toLowerCase();
            }
            return false;
          });

          if (!doctor) {
            console.warn('Doctor not found');
            throw new Error('Doctor not found');
          }

          const doctorId = doctor.id;
          const doctorNumber = doctor.phoneNumber;

          // Prepare appointment data
          // console.log('contact', this.contactForm.value);
          const appointmentData = {
            patientName: patientName,
            phoneNumber: this.contactForm.value.contactNumber,
            email: this.contactForm.value.email,
            doctorName: this.selectedDoctor.name,
            department: Array.isArray(this.selectedDoctor.speciality)
            ? this.selectedDoctor.speciality.join(', ')
            : this.selectedDoctor.speciality, // Convert array to string if necessary, // Assuming `speciality` is the department
            date: appointmentDate,
            time: this.contactForm.value.time.name,
            requestVia: 'Online',
            status: 'pending',
            smsSent: false,
            emailSent: false,
            doctorId: doctorId,
          };
                // Reset the form and close dialog after the appointment has been successfully saved
                this.contactForm.reset();
                this.closeDialog();
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: 'Thank you, we have received your request and will get back to you shortly.',
                });
          // Make the POST request to create the appointment
          this.http.post<any>(`${this.apiUrl}/appointments`, appointmentData)
            .subscribe({
              next: (appointmentResult) => {
                console.log('Appointment successfully created:', appointmentResult);

                // Show success message to the user
      
              },
              error: (appointmentError) => {
                console.error('Error creating appointment:', appointmentError);
              }
            });

            const appointmentDetails ={
              // patientName: patientName,
              // doctorName: this.selectedDoctor ? this.selectedDoctor.name : '',
              // date: appointmentDate,
              // time: this.contactForm.value.time?.name,
              // doctorPhoneNumber: doctorNumber,
              // patientPhoneNumber: this.contactForm.value.contactNumber,
              ...appointmentData,
              patientPhoneNumber:'91'+ appointmentData.phoneNumber,
              doctorPhoneNumber:doctorNumber,
              status: 'received'
            }
            // console.log("appointmentDetails",appointmentDetails)
            this.http.post(`${this.apiUrl}/whatsapp/send`, appointmentDetails)
            .subscribe({
              next: (whatsappResponse) => {
                console.log('WhatsApp message sent:', whatsappResponse);
              },
              error: (whatsappError) => {
                console.error('Error sending WhatsApp message:', whatsappError);
              },
            });
            this.http.post(`${this.apiUrl}/sms/send-sms`, appointmentDetails)
            .subscribe({
              next: (smsResponse) => {
                console.log('SMS message sent:');
              },
              error: (whatsappError) => {
                console.error('Error sending WhatsApp message:', whatsappError);
              },
            });
            
            this.http.post(`${this.apiUrl}/email/send-email`, emailRequest)
              .subscribe({
                next: (emailResponse) => {
                  console.log('Email sent successfully:', emailResponse);
                },
                error: (emailError) => {
                  console.error('Error sending email:', emailError);
                },
              });
        },
        error: (doctorError) => {
          console.error('Error fetching doctors:', doctorError);
        }
      });
  }
  



  
}

get f(): { [key: string]: AbstractControl } {
  return this.contactForm.controls;
}
closeDialog(): void {
  this.close.emit();
}

// onSubmit(): void {
//   if (this.contactForm.valid) {
//     const dateObj = this.contactForm.value.date_appointment;
//     const appointmentDate = dateObj ? this.formatDate(new Date(dateObj)) : '';
//     const firstName = this.contactForm.value.firstName;
//           const lastName = this.contactForm.value.lastName;
//           // Combine first and last names
//           const patientName = `${firstName} ${lastName}`;
//     const emailParams = {
//       doctorName: this.selectedDoctor.name,
//       doctorDesignation: this.selectedDoctor.desgination,
//       patientName: patientName,
//       patientEmail: this.contactForm.value.email,
//       patientContact: this.contactForm.value.contactNumber,
//       appointmentTime: this.contactForm.value.time.name,
//       appointmentDate: appointmentDate,
//       message: this.contactForm.value.message
//     };
//     console.log(emailParams);

//     // Send email using EmailJS
//     emailjs.send('service_pzzreii', 'template_5iklj2q', emailParams, 'poMF_gJiwXDRedqcn')
//       .then((response: EmailJSResponseStatus) => {
//         console.log('SUCCESS!', response.status, response.text);
//         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Thank you, we have received your request and will get back to you shortly.' });
//         this.contactForm.reset();
//         this.close.emit();
//       }, (error) => {
//         console.log('FAILED...', error);
//         this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Failed to send appointment request. Please try again later.' });
//       });
//   }
// }

// get f(): { [key: string]: AbstractControl } {
//   return this.contactForm.controls;
// }

// closeDialog(): void {
//   this.close.emit();
// }
}