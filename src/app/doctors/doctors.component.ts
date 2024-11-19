import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  @Input() image: any; 
  @Input() name: any;
  @Input() desgination: any;
  @Input() about:any;
  @Input() expertise: any;
  @Output() viewProfile = new EventEmitter<void>();
  @Output() bookAppointment = new EventEmitter<void>();

  onViewProfile() {
    this.viewProfile.emit();
  }
  onBookAppointment() {
    this.bookAppointment.emit();
  }
}
