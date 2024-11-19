import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  post: any;
  categories: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogServiceService
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

      // Fetch categories
      const categoryPromises = this.post.categories.map((categoryId: number) =>
        this.blogService.getCategory(categoryId).toPromise()
      );

      const categories = await Promise.all(categoryPromises);
      this.categories = categories.map((category: any) => category.name);
    });
  }
}

