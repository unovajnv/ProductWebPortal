import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  postUserDetails(data:any): any {
    return this.http.post(`${this.apiUrl}/users`,data);
  }

  getProducts(): any {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getUsers(): any {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }
  postReview(data:any,id:any): any {
    console.log(data);
    return this.http.patch(`${this.apiUrl}/products/${id}`,data);
  }
}
