import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  private baseUrl = 'https://hrproindia.in/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts?per_page=20`);
  }

  // getPost(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/posts/${id}`);
  // }
  getPostBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts?slug=${slug}`);
  }
  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories/${id}`);
  }

  
}
