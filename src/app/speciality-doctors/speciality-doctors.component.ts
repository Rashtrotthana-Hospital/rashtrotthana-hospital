import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-speciality-doctors',
  templateUrl: './speciality-doctors.component.html',
  styleUrl: './speciality-doctors.component.css'
})
export class SpecialityDoctorsComponent {
  
  @Input()name:string='';
  @Input()experience:string='';
  @Input()image:string='';
  @Input()alt:string='';
  @Input()department:string=''
}
