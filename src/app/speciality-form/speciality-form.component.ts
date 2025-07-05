import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speciality-form',
  templateUrl: './speciality-form.component.html',
  styleUrl: './speciality-form.component.css'
})
export class SpecialityFormComponent {

  @Input() doctor : any

}
