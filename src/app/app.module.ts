import { BrowserModule } from '@angular/platform-browser';  //浏览器模块（数据绑定）
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { AComponent } from './components/a/a.component';
/*import { HomeComponent } from './components/home/home.component';*/
import {ServicesService} from './services/services.service';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    InputComponent,
    ListComponent,
    AComponent,
  ],//组件
  imports: [
    BrowserModule,
    FormsModule
  ],//类
  providers: [ServicesService],//服务
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
