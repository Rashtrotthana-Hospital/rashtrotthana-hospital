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
  filteredPosts: any[] = [];
  allPosts: any[] = []; // Store original posts
  post: any;
  featuredPost: any; 
  categories: string[] = ['Oncology', 'Pulmonology','ENT', 'Ayurveda', 'Paediatrics', 'Nephrology', 'Homeopathy', 'Gynecology', 'Cardiology', 'Orthopedic', 'Ophthalmology', 'Neuroscience', 'Vascular'];
  
  // Category ID to name mapping
  private categoryMapping: { [key: number]: string } = {
    // 4: 'Gynecology',
    // 2: 'ENT', 
    // 3: 'Oncology',
    // 1: 'All Blogs',
    // 5: 'Orthopedic',
    // Add more mappings as needed

    3: 'Oncology',
    9: 'Pulmonology',
    5: "ENT",
    12: 'Ayurveda',
    17: 'Paediatrics',
    14: 'Nephrology',
    10: 'Homeopathy',
    4: 'Gynecology',
    13: 'Cardiology',
    7: 'Orthopedic',
    6: 'Ophthalmology',
    19: 'Vascular'
  };
  
  // Filter properties
  searchTerm: string = '';
  selectedCategories: string[] = [];
  showAllCategories: boolean = false;

  // Pagination properties
  currentPage: number = 1;
  postsPerPage: number = 6;
  paginatedPosts: any[] = [];
  totalPages: number = 0;

  constructor(
    private blogService: BlogServiceService,
    private route: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta
  ) { }

  generateSlug(title: string): string {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((data: any[]) => {
      if (data.length > 0) {
        // Process all posts
        const processedPosts = data.map(post => {
          post.slug = this.generateSlug(post.title.rendered);
          post.featured_image_url =
          post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
          'assets/default-placeholder.png'; // fallback imag
          return post;
        });

        this.featuredPost = processedPosts[0];
        this.allPosts = processedPosts.slice(1);
        this.posts = [...this.allPosts];
        this.filteredPosts = [...this.allPosts];
        
        // Initialize pagination
        this.updatePagination();

        console.log(data)

        // Don't extract categories anymore since we have predefined ones
        // this.extractCategories(data);
      }
    });

    this.titleService.setTitle("Health & Wellness Blogs | Rashtrotthana Hospital");  
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Visit the healthcare blog of Rashtrotthana Hospital and discover a world of wellness. Discover health-related topics that empower your journey towards better health, from expert advice to medical insights' 
    });
    this.metaService.updateTag({ 
      name: 'keywords', 
      content: ' general medicine, internal medicine, cardiology, nephrology, urology, dermatology, gynaecology, pulmonology' 
    });
  }

  extractCategories(posts: any[]): void {
    const categorySet = new Set<string>();
    
    posts.forEach(post => {
      // Assuming categories are in post.categories array or similar structure
      // You'll need to adjust this based on your actual data structure
      if (post.categories && Array.isArray(post.categories)) {
        post.categories.forEach((category: any) => {
          if (typeof category === 'string') {
            categorySet.add(category);
          } else if (category.name) {
            categorySet.add(category.name);
          }
        });
      }
      
      // Alternative: if categories are in a different field
      // You can modify this based on your WordPress API response
      if (post._embedded && post._embedded['wp:term']) {
        post._embedded['wp:term'].forEach((termGroup: any[]) => {
          termGroup.forEach(term => {
            if (term.taxonomy === 'category') {
              categorySet.add(term.name);
            }
          });
        });
      }
    });
    
    this.categories = Array.from(categorySet).sort();
  }

  onSearchChange(): void {
    this.currentPage = 1; // Reset to first page when searching
    this.applyFilters();
  }

  onCategoryCheck(event: any, category: string): void {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(cat => cat !== category);
    }
    this.currentPage = 1; // Reset to first page when filtering
    this.applyFilters();
  }

  toggleShowAllCategories(): void {
    this.showAllCategories = !this.showAllCategories;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategories = [];
    this.currentPage = 1; // Reset to first page when clearing filters
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = [...this.allPosts];

    // Apply search filter
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(post => 
        post.title.rendered.toLowerCase().includes(searchLower) ||
        post.excerpt.rendered.toLowerCase().includes(searchLower) ||
        (post.content && post.content.rendered && post.content.rendered.toLowerCase().includes(searchLower))
      );
    }

    // Apply category filter
    if (this.selectedCategories.length > 0) {
      filtered = filtered.filter(post => {
        const postCategories = this.getPostCategories(post);
        return this.selectedCategories.some(selectedCat => 
          postCategories.includes(selectedCat)
        );
      });
    }

    this.filteredPosts = filtered;
    this.updatePagination();
  }

  // Pagination methods
  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
    
    // Ensure current page doesn't exceed total pages
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
    
    // Calculate start and end indices for current page
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    
    this.paginatedPosts = this.filteredPosts.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
      
      // Scroll to top of content section
      const contentSection = document.querySelector('.content-section');
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  // Helper methods for pagination buttons
  canGoToPrevious(): boolean {
    return this.currentPage > 1;
  }

  canGoToNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  shouldShowFeaturedPost(): boolean {
    return this.currentPage === 1 && !this.searchTerm && this.selectedCategories.length === 0;
  }

  removeCategory(category: string): void {
    this.selectedCategories = this.selectedCategories.filter(cat => cat !== category);
    this.currentPage = 1; // Reset to first page when removing category
    this.applyFilters();
  }

  getCategoryCount(category: string): number {
    return this.allPosts.filter(post => {
      const postCategories = this.getPostCategories(post);
      return postCategories.includes(category);
    }).length;
  }

  getPostCategories(post: any): string[] {
    const postCategories: string[] = [];
    
    // Handle categories as array of IDs
    if (post.categories && Array.isArray(post.categories)) {
      post.categories.forEach((categoryId: number) => {
        const categoryName = this.categoryMapping[categoryId];
        if (categoryName) {
          postCategories.push(categoryName);
        }
      });
    }
    
    return postCategories;
  }
}