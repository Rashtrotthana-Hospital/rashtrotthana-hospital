import { Component } from '@angular/core';
import { Input  } from '@angular/core';

@Component({
  selector: 'app-speciality-header',
  templateUrl: './speciality-header.component.html',
  styleUrl: './speciality-header.component.css'
})
export class SpecialityHeaderComponent {
@Input()main_heading:string='';

}
