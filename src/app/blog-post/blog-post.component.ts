import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  post: any;
  categories: string[] = [];
  sanitizedYouTubeContent : SafeHtml | null = null

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogServiceService,
    private sanitizer : DomSanitizer
  ) { }

  ngOnInit(): void {
  //   const idParam = this.route.snapshot.paramMap.get('id');
  //   if (idParam) {
  //     const id = +idParam;
  //     this.blogService.getPost(id).subscribe((data: any) => {
  //       this.post = data;
  //     });
  //   } else {
  //     console.error('No ID provided in route.');
  //   }
  // }
  // const id = +this.route.snapshot.paramMap.get('id')!;
  //   this.blogService.getPost(id).subscribe(async (data: any) => {
  //     this.post = data;
  const slug = this.route.snapshot.paramMap.get('slug')!;
  this.blogService.getPostBySlug(slug).subscribe(async (data: any) => {
    this.post = data[0];

    const youtubeContent = this.extractYouTubeIframes(this.post.content.rendered);
    this.sanitizedYouTubeContent = this.sanitizer.bypassSecurityTrustHtml(youtubeContent);
      // Fetch categories
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

    // Find all iframe elements
    const iframes = div.querySelectorAll('iframe');

    // Filter only YouTube iframe elements
    const youtubeIframes = Array.from(iframes).filter((iframe) => {
      const src = iframe.getAttribute('src');
      return src && src.includes('youtube.com');
    });

    // Wrap YouTube iframes in a responsive container
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('youtube-videos-container'); // Add a class for styling

    youtubeIframes.forEach((iframe) => {
      const responsiveWrapper = document.createElement('div');
      responsiveWrapper.className = 'responsive-iframe'; // Class for responsive styling
      responsiveWrapper.appendChild(iframe.cloneNode(true)); // Clone the iframe
      wrapperDiv.appendChild(responsiveWrapper);
    });

    return wrapperDiv.innerHTML; // Return the sanitized content with YouTube videos
  }
  
}

