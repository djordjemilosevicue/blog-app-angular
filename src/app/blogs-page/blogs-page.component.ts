import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/articles.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent implements OnInit {

  public test: any;
  public articles: any = { data: [] };

  constructor(
    private articleService: ArticleService
  ) { }

  async ngOnInit() {
    this.articles = await lastValueFrom(this.articleService.getAll(0))
    console.log(this.articles)

    this.test = await lastValueFrom(this.articleService.getOne("65"))
  }

}
