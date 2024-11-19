import { Component , OnInit} from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './analytics.service';
import { MessageService } from 'primeng/api';
import { Meta, Title } from '@angular/platform-browser';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private router: Router, private analyticsService: AnalyticsService, private messageService: MessageService,private meta: Meta, private title: Title) { } 
  // title = 'rashtrotthana_hospital';
  ngOnInit() { 
    // this.router.events.subscribe((event) => { 
    //     if (!(event instanceof NavigationEnd)) { 
    //         return; 
    //     } 
    //     window.scrollTo(0, 0) 
    // }); 
    this.setMetaTags();
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('config', 'G-RTWK6W8EE3', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
  setMetaTags() {
    this.title.setTitle('Rashtrotthana Hospital');
    this.meta.updateTag({ name: 'description', content: 'Rashtrotthana Hospital provides exceptional healthcare services. Visit us for quality medical treatment.' });
    this.meta.updateTag({ property: 'og:title', content: 'Rashtrotthana Hospital' });
    this.meta.updateTag({ property: 'og:description', content: 'Rashtrotthana Hospital provides exceptional healthcare services. Visit us for quality medical treatment.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.rashtrotthanahospital.com/assets/logo.png' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.rashtrotthanahospital.com/' });
  }
  closeChatBot: boolean = true; // Initially closed
  toggleChatBot() {
    this.closeChatBot = !this.closeChatBot; // Toggle the visibility state
  }
} 

