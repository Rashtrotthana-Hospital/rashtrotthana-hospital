import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: any[] = [];
  post: any;
  featuredPost: any; 
  categories: string[] = [];

  constructor(private blogService: BlogServiceService,private route: ActivatedRoute,private titleService: Title, private metaService: Meta) { }
  generateSlug(title: string): string {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  ngOnInit(): void {
    // this.blogService.getPosts().subscribe((data: any[]) => {
    //   this.posts = data;
    // });
    
    this.blogService.getPosts().subscribe((data: any[]) => {
      if (data.length > 0) {
        this.featuredPost = data[0];
        this.featuredPost.slug = this.generateSlug(this.featuredPost.title.rendered);
        this.posts = data.slice(1).map(post => {
          post.slug = this.generateSlug(post.title.rendered);
          return post;
        });
      }
    });
    this.titleService.setTitle("Rashtrotthana Hospital Blogs | Top Medical Treatments & Procedures Blogs");  

  this.metaService.updateTag({ name: 'description', content: 'Visit the healthcare blog of Rashtrotthana Hospital and discover a world of wellness. Discover health-related topics that empower your journey towards better health, from expert advice to medical insights' });

  this.metaService.updateTag({ name: 'keywords', content: ' general medicine, internal medicine, cardiology, nephrology, urology, dermatology, gynaecology, pulmonology' });
    
  }
}
