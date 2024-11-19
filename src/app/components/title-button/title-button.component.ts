import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-button',
  templateUrl: './title-button.component.html',
  styleUrl: './title-button.component.css'
})
export class TitleButtonComponent {
  @Input() text: string = '';
}
