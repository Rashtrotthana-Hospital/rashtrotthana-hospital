import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-arrow-btn',
  templateUrl: './arrow-btn.component.html',
  styleUrl: './arrow-btn.component.css'
})
export class ArrowBtnComponent {
  constructor(private router: Router) {}
  @Output() onClick = new EventEmitter<void>();
  @Input() text: string = 'View All';
  handleClick() {
    this.router.navigate(['/best-doctors-bangalore']);
  }
}
