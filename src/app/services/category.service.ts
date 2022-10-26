import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  token = "9aK4W3D7NpbWwPzJmUOIcyPmyehl0PHZLWP14rzQqKzUPtcFCo0Tn051CvwN"
  endpoint = "http://18.192.182.140/api/categories";

  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get(this.endpoint);
  }
  getOne(categoryId: string) {
    return this.http.get(`${this.endpoint}/${categoryId}`);
  }
}