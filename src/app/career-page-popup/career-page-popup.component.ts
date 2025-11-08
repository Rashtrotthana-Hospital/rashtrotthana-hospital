import { Component } from '@angular/core';

@Component({
  selector: 'app-career-page-popup',
  templateUrl: './career-page-popup.component.html',
  styleUrl: './career-page-popup.component.css'
})
export class CareerPagePopupComponent {
  showPopup: boolean = true;
  showPopup2: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showPopup = true; // Show popup on page load

    setTimeout(() => {
      this.showPopup = false
    }, 7000)

    setTimeout(() => {
      this.showPopup = false
      this.showPopup2 = true;
    }, 9000)
  }

  closePopup(): void {
    this.showPopup = false; // Hide popup when close button is clicked
  }

  closePopup2() : void {
    this.showPopup2 = false;
  }
}
