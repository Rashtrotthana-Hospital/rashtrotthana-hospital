import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  post: any;
  categories: string[] = [];
  sanitizedYouTubeContent: SafeHtml | null = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogServiceService,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    const importedslug = this.route.snapshot.paramMap.get('slug')!;
    const slug = this.removeSpecialChar(importedslug);

    console.log(slug)

    this.blogService.getPostBySlug(slug).subscribe(async (data: any) => {
      this.post = data[0];

      const youtubeContent = this.extractYouTubeIframes(this.post.content.rendered);
      this.sanitizedYouTubeContent = this.sanitizer.bypassSecurityTrustHtml(youtubeContent);

      const categoryPromises = this.post.categories.map((categoryId: number) =>
        this.blogService.getCategory(categoryId).toPromise()
      );

      const categories = await Promise.all(categoryPromises);
      this.categories = categories.map((category: any) => category.name);
    });
  }

  private extractYouTubeIframes(content: string): string {
    const div = document.createElement('div');
    div.innerHTML = content;
    const iframes = div.querySelectorAll('iframe');

    const youtubeIframes = Array.from(iframes).filter((iframe) => {
      const src = iframe.getAttribute('src');
      return src && src.includes('youtube.com');
    });

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('youtube-videos-container');

    youtubeIframes.forEach((iframe) => {
      const responsiveWrapper = document.createElement('div');
      responsiveWrapper.className = 'responsive-iframe';
      responsiveWrapper.appendChild(iframe.cloneNode(true));
      wrapperDiv.appendChild(responsiveWrapper);
    });

    return wrapperDiv.innerHTML;
  }

  ngAfterViewInit() {
    const style = this.renderer.createElement('style');
    style.textContent = `
      .wp-block-table table {
        border-collapse: collapse;
        width: 100%;
      }
      .wp-block-table th,
      .wp-block-table td {
        border: 1px solid #ccc;
        padding: 10px;
        text-align: left;
      }
      .wp-block-image {
        display: flex;
        justify-content: center;
        margin: 1.5rem 0;
      }
      .wp-block-image img {
        max-width: 100%;
        height: auto;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      h1, h2, h3, h4, h5, h6 {
        color: teal !important;
      }
      ul li::marker {
        color: teal !important;
      }
      .wp-block-columns {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        min-width: 280px;
      }
      .wp-block-column {
        flex: 1 !important;
        min-width: 280px;
      }
      .wp-block-column img {
        max-width: 80%;
        height: auto;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-top: -1rem;
      }

      @media only screen and (max-width: 768px) {
        .wp-block-columns {
          flex-direction: column !important;
        }
      }
    `;
    this.renderer.appendChild(this.el.nativeElement, style);
  }

  private removeSpecialChar(slug: string): string {
    return slug
    .toLowerCase()
    .trim()
    .replace(/[&'"=@]/g, '')  
    .replace(/\s+/g, '-')     
    .replace(/--+/g, '-'); 
  }
}
