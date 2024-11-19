import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import * as AOS from 'aos';

import { Title, Meta,DomSanitizer,SafeHtml } from '@angular/platform-browser'; 
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})

export class DonationComponent implements OnInit {
  constructor(private router: Router,
    private viewportScroller: ViewportScroller,private titleService: Title, private metaService: Meta) { }
  ngOnInit() {
    AOS.init();
    this.titleService.setTitle("Donate to Support Healthcare - Rashtrotthana Hospital Bangalore");  

    this.metaService.updateTag({ name: 'description', content: 'Contribute to quality healthcare by donating to Rashtrotthana Hospital in Bangalore. Your support makes a difference in patient care.' });
  
    this.metaService.updateTag({ name: 'keywords', content: 'hospital donation, charitable hospital, support healthcare Bangalore' });
  }
  
  scrollToSection() {
    this.viewportScroller.scrollToAnchor('container_2');
  }
}
