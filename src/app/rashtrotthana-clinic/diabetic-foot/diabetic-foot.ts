import { Component } from '@angular/core';

@Component({
  selector: 'app-diabetic-foot',
  standalone: false,
  templateUrl: './diabetic-foot.html',
  styleUrl: './diabetic-foot.css'
})
export class DiabeticFoot {
  showPopup = false

  openPopup(){
    this.showPopup = true
  }

  closePopup(){
    this.showPopup = false
  }
}
