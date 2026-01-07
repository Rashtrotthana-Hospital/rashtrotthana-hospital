import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-surgery-treatment-card',
  templateUrl: './surgery-treatment-card.component.html',
  styleUrl: './surgery-treatment-card.component.css'
})
export class SurgeryTreatmentCardComponent {

  @Input() data!: {
    heading?: string;
    subHeading?: string;
    surgeries: any[];
  };



  @Output() bookAppointment = new EventEmitter<void>();

  onBookAppointment() {
    this.bookAppointment.emit();
  }
}
