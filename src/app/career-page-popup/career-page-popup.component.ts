import { Component } from '@angular/core';

@Component({
  selector: 'app-career-page-popup',
  templateUrl: './career-page-popup.component.html',
  styleUrl: './career-page-popup.component.css'
})
export class CareerPagePopupComponent {
  showPopup: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showPopup = true; // Show popup on page load
  }

  closePopup(): void {
    this.showPopup = false; // Hide popup when close button is clicked
  }
}
