import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from "ng-zorro-antd/src/release/ng-zorro-antd.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    HttpModule,
  ],
  declarations: [
  ],
  exports:[
    FormsModule,
    HttpModule,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
