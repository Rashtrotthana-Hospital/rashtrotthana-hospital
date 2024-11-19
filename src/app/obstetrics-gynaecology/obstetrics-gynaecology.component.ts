import { Component, OnInit } from '@angular/core';
import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-obstetrics-gynaecology',
  templateUrl: './obstetrics-gynaecology.component.html',
  styleUrl: './obstetrics-gynaecology.component.css'
})
export class ObstetricsGynaecologyComponent {
  constructor(private titleService: Title, private metaService: Meta, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("Best Obstetrics & Gynecologist Hospital in Bangalore ");  

  this.metaService.updateTag({ name: 'description', content: 'Rashtrotthana Hospital is the Best Obstetrics & Gynecologist Hospital in Bangalore, India with renowned top obstetrician offer gynaecological & maternity services.' });

  this.metaService.updateTag({ name: 'keywords', content: 'gynaecologist, gynaecologist hospital near me,pcod, thyroid, abdominal pain, fibroids, menstrual problems, best, care, periods, periods problem' });

  }

}
