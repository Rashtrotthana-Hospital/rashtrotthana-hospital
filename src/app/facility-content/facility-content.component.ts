import { Component, Input } from '@angular/core';
import { SubFacility } from '../sub-facility.model';

@Component({
  selector: 'app-facility-content',
  templateUrl: './facility-content.component.html',
  styleUrl: './facility-content.component.css'
})
export class FacilityContentComponent {
  @Input() image_2: string='';
  @Input() image_1: string =''; 
  @Input() main_heading: string ='';
  @Input() heading: string = '';
  @Input() subFacilities?: SubFacility[];
  @Input() bg_image:any;
}
