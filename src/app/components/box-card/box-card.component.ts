import { Component , Input,Output, EventEmitter,HostListener} from '@angular/core';

@Component({
  selector: 'app-box-card',
  templateUrl: '../../components/box-card/box-card.component.html',
  styleUrl: './box-card.component.css'
})
export class BoxCardComponent {
  screenWidth: number=0;
  showImage:any;
  closeBox:boolean = true;
@Input() image: string ='1'; 
@Input() title: string ='';
@Input() button_text: string = '';
@Input() key:string ='';
@Output() buttonClick = new EventEmitter<void>();
@Input() background: string = '#008080';

constructor(){
  this.screenWidth = window.innerWidth;
}
@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.screenWidth = window.innerWidth;
}
onButtonClick() {
  this.buttonClick.emit();
}

// onMouseOver(key: string) {
// if(this.screenWidth > 600)
//   this.showImage =  key;
//   this.closeBox = false;
//   console.log('key',key)
// };

hover_image:any ={
  'default': 'assets/sheild_num.png',
  'In patient facility': 'assets/hover-facility-1.png',
  'Emergency & Trauma Care': 'assets/naturopathy-outline.png',
  'Pharmacy': 'assets/medicine-outline.png',
  'Ambulance Services': 'assets/ayurveda-outline.png',
  'Physiotherapy': 'assets/homeopathy-outline.png'
}
}
