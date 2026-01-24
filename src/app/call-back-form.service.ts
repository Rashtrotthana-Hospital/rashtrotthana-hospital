import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallBackFormService {
  private apiUrl = environment.apiurl;

  constructor(private http: HttpClient) {}

  /**
   * CREATE CALLBACK REQUEST
   */
  createCallback(data: {
    name: string;
    mobile: string;
    address?: string;
    pageName?: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/call-back`, data);
}
}