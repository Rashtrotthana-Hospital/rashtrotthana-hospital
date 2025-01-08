import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent {
  @Input() activeSpecialty: string = '';
  isActive(specialty: string): boolean {
    return this.activeSpecialty === specialty;
  }
}
