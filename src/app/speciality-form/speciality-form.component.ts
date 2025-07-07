import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-speciality-form',
  templateUrl: './speciality-form.component.html',
  styleUrl: './speciality-form.component.css'
})
export class SpecialityFormComponent {

  @Input() doctor : any

  appointmentForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      doctor: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Form Submitted:', this.appointmentForm.value);
    } else {
      this.appointmentForm.markAllAsTouched(); // show all validation messages
    }
  }
}
