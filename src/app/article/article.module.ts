import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import {PagingComponent} from "../component/paging/paging.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ]
})
export class ArticleModule { }
