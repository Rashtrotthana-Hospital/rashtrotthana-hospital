import { Component,Input } from '@angular/core';
import { Doctors } from '../doctor.model';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-speciality-component',
  templateUrl: './speciality-component.component.html',
  styleUrl: './speciality-component.component.css'
})
export class SpecialityComponentComponent {
@Input()main_heading:string='';
@Input()heading:string='';
@Input()content:SafeHtml='';
@Input()content_1:SafeHtml='';
@Input()alt:string='';
@Input()doctor?:Doctors[];
@Input()image:string='';
@Input() activeSpecialty: string = '';
// @Input() experience: string = '';

  isActive(specialty: string): boolean {
    return this.activeSpecialty === specialty;
  }

}
