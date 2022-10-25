import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blogs',
    component: BlogsPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
