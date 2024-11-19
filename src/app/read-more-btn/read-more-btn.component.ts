import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-more-btn',
  templateUrl: './read-more-btn.component.html',
  styleUrl: './read-more-btn.component.css'
})
export class ReadMoreBtnComponent {

  @Output() click = new EventEmitter<void>();


  @Input() text: string = 'Read More';
  @Input() iconClass: string = 'fa fa-angle-right'; 
  @Input() background: string = 'linear-gradient(90deg, #022b50 0%, #279797 100%)';
  @Input() boxShadow: string = '3px 4px 15px rgba(63, 176, 206, 0.65)';
  @Input() disabled: boolean = false; // Add this line

  onClick() {
    // this.click.emit();
    if (!this.disabled) {
      this.click.emit();
    }
  }
}
