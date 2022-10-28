import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  token = "9aK4W3D7NpbWwPzJmUOIcyPmyehl0PHZLWP14rzQqKzUPtcFCo0Tn051CvwN"
  endpoint = "http://18.192.182.140/api/articles";

  constructor(
    private http: HttpClient,
  ) { }

  getAll(pageNumber: number = 1) {
    return this.http.get(`${this.endpoint}?page=${pageNumber}`);
  }

  getOne(articleId: string) {
    return this.http.get(`${this.endpoint}/${articleId}`);
  }

  getComments(articleId: string) {
    return this.http.get(`${this.endpoint}/${articleId}/comments`);
  }

  create(article: any) {
    return this.http.post(this.endpoint + "?api_token=" + this.token, article)
  }

}
