import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/articles.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  id: any;
  article: any;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  async ngOnInit() {
    this.article = await lastValueFrom(this.articleService.getOne(this.id))
  }

}
