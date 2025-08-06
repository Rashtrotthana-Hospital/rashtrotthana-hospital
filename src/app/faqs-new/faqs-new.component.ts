import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-faqs-new',
  templateUrl: './faqs-new.component.html',
  styleUrl: './faqs-new.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        maxHeight: '500px',
        opacity: 1,
        paddingTop: '30px',
        paddingBottom: '30px'
      })),
      state('out', style({
        maxHeight: '0px',
        opacity: 0,
        paddingTop: '0px',
        paddingBottom: '0px'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ]),
    trigger('rotateIcon', [
      state('plus', style({ transform: 'rotate(0deg)' })),
      state('close', style({ transform: 'rotate(180deg)' })),
      transition('plus => close', animate('300ms ease-in-out')),
      transition('close => plus', animate('300ms ease-in-out'))
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class FaqsNewComponent {


@Input() faqData: any[] = [];
  @Input() title: string = 'Frequently Asked Questions';
  @Input() subtitle: string = 'Find answers to the most common questions about our services.';

  constructor() { }

  ngOnInit(): void {
    // Initialize all FAQs as closed
    this.faqData.forEach(faq => faq.isOpen = false);
  }

  toggleFaq(selectedFaq: any): void {
    // Close all other FAQs (no multi open allowed)
    this.faqData.forEach(faq => {
      if (faq.id !== selectedFaq.id) {
        faq.isOpen = false;
      }
    });
    
    // Toggle the selected FAQ
    selectedFaq.isOpen = !selectedFaq.isOpen;
  }
}

