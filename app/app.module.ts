import { BrowserModule } from '@angular/platform-browser';  //浏览器模块（数据绑定）
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { AComponent } from './components/a/a.component';
import { HomeComponent } from './components/home/home.component';
import {ServicesService} from './services/services.service';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { LocalService } from './services/local.service';
import { Home2Component } from './components/home2/home2.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { GooddetailComponent } from './components/gooddetail/gooddetail.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    InputComponent,
    ListComponent,
    Home2Component,
    NopageComponent,
    GooddetailComponent,
    AComponent,
  ],//组件
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      /*{path: 'todolist/:id', component: TodolistComponent},*/
      {path: 'todolist/:id/:num', component: TodolistComponent},///多个参数
      {path: 'goodslist/:list',component:GoodslistComponent},
      {path:'home',component:Home2Component},
      {path:'gooddetail/:goodsid',component:GooddetailComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:NopageComponent}
    ])
  ],//类
  providers: [ServicesService,LocalService],//服务
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
