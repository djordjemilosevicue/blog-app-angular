import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/articles.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public test: any;
  public articles: any = { data: [] };

  constructor(
    private articleService: ArticleService
  ) { }

  async ngOnInit() {

    this.articles = await lastValueFrom(this.articleService.getAll(0))
    console.log(this.articles)

    this.test = await lastValueFrom(this.articleService.getOne("65"))
    console.log(this.test)

    // const article = {
    //   "title": "string",
    //   "body": "string",
    //   "category_id": 1
    // }
    // const response = await lastValueFrom(this.articleService.create(article))
    // console.log(response)
  }

}
