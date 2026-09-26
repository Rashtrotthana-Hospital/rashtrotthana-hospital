import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TENDER_DOCUMENTS, TenderDocument } from './tenders.data';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrl: './tender.component.css'
})
export class TenderComponent implements OnInit {

  tenders: TenderDocument[] = TENDER_DOCUMENTS;

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Tenders | Rashtrotthana Hospital Bangalore');
    this.metaService.updateTag({
      name: 'description',
      content: 'Current equipment tender documents from Rashtrotthana Hospital, Bangalore. View each tender notice online.'
    });
  }

  trackBySlug(_index: number, tender: TenderDocument): string {
    return tender.slug;
  }
}
