import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { TENDER_DOCUMENTS, TenderDocument } from '../tender/tenders.data';

/**
 * Read-only viewer for a single tender document.
 *
 * The PDF is shown through the browser's own viewer with the toolbar hidden, so the
 * download, print and save buttons are not offered. Right click and the Ctrl+S /
 * Ctrl+P shortcuts are blocked as well. This stops casual saving; it cannot stop a
 * determined visitor, because the browser must receive the file in order to show it.
 */
@Component({
  selector: 'app-tender-viewer',
  templateUrl: './tender-viewer.component.html',
  styleUrl: './tender-viewer.component.css'
})
export class TenderViewerComponent implements OnInit {

  tender: TenderDocument | undefined;
  safeUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.tender = TENDER_DOCUMENTS.find(doc => doc.slug === slug);

    if (!this.tender) {
      this.titleService.setTitle('Tender not found | Rashtrotthana Hospital');
      return;
    }

    this.titleService.setTitle(`${this.tender.title} | Tender - Rashtrotthana Hospital`);

    // toolbar=0 hides the viewer's download, print and save controls
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `assets/tenders/${this.tender.file}#toolbar=0&navpanes=0&statusbar=0&scrollbar=1&view=FitH`
    );
  }

  blockContextMenu(event: MouseEvent): void {
    event.preventDefault();
  }

  @HostListener('document:keydown', ['$event'])
  blockSaveAndPrint(event: KeyboardEvent): void {
    const key = (event.key || '').toLowerCase();
    if ((event.ctrlKey || event.metaKey) && (key === 's' || key === 'p')) {
      event.preventDefault();
    }
  }
}
