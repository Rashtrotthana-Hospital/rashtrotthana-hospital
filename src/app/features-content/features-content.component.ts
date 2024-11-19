import { Component ,Input} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-features-content',
  templateUrl: './features-content.component.html',
  styleUrl: './features-content.component.css'
})
export class FeaturesContentComponent {
@Input() image_2: string='';
@Input() image_1: string =''; 
@Input() main_heading: string ='';
@Input() heading: string = '';
// @Input() content:string ='';
@Input() content: SafeHtml = ''; // Change type to SafeHtml
@Input() content_1: SafeHtml = ''; // Change type to SafeHtml
@Input() bg_image:any;
}
