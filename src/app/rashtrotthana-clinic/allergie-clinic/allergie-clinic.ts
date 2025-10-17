import { Component } from '@angular/core';

@Component({
  selector: 'app-allergie-clinic',
  standalone: false,
  templateUrl: './allergie-clinic.html',
  styleUrl: './allergie-clinic.css'
})
export class AllergieClinic {
   showPopup = false

  openPopup(){
    this.showPopup = true
  }

  closePopup(){
    this.showPopup = false
  }
}
