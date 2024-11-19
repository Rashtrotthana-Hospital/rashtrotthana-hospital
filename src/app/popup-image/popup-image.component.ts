import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-image',
  templateUrl: './popup-image.component.html',
  styleUrl: './popup-image.component.css'
})
export class PopupImageComponent {
  showPopup: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showPopup = true; // Show popup on page load
  }

  closePopup(): void {
    this.showPopup = false; // Hide popup when close button is clicked
  }
}
