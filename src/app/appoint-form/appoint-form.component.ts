import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appoint-form',
  templateUrl: './appoint-form.component.html',
  styleUrl: './appoint-form.component.css'
})
export class AppointFormComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeIframe() {
    this.close.emit();
  }
}
