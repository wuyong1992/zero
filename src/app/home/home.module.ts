import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from "../shared/shared.module";
import {NavComponent} from "../component/nav/nav.component";
import {BreadNavComponent} from "../bread-nav/bread-nav.component";
import {SiderComponent} from "../component/sider/sider.component";
import {ArticleListComponent} from "../article/article-list/article-list.component";
import {PagingComponent} from "../component/paging/paging.component";
import {FooterComponent} from "../component/footer/footer.component";


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    NavComponent,
    BreadNavComponent,
    SiderComponent,
    ArticleListComponent,
    PagingComponent,
    FooterComponent
  ]
})
export class HomeModule { }
