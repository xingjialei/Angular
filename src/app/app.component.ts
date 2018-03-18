import { Component } from '@angular/core';
import { ServicesService } from '../app/services/services.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* index:number;
  constructor(public get:ServicesService){};
  getIndex(i){
    this.index = this.get.getindex(i);
  }

  //输入输出
  arrD = [1,2,3];
  idx:number=-1;
  getI(i){
    this.idx = i;
  }
  // 插值表达式
  title = 'hello world';
  imgUrl = 'assets/imgs/m1.png';
  // 绑定属性
  id = 'box';
  // 循环
  arr = [1,2,3,4];

  fn(){
    console.log(123);
  }
  // ngSwitch
  fruit:any;
  changeFruit(v){
    console.log(v);
    this.fruit = v;
  }

  // 双向数据绑定
  txt = '新年快乐';

  // todolist
  tolist = [];
  comlist = [];
  content = '';
  addData(){
    this.tolist.push(this.content);
    this.content = '';
  }
  keyData(e){
    if(e.keyCode==13){
      this.tolist.push(this.content);
      this.content = '';
    }
  }
  delData(i){
  	this.tolist.splice(i,1);
  }
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);
  }
  delData2(i){
  	this.comlist.splice(i,1);
  }
  change2(i){
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i,1);
  }
  // 组件交互
  arr1 = [1,2,3,4];
  goodslist = ['a','b','c','d','e','f'];

  agreed = 0;
  disagreed = 0;
  voters = ['张三', '李四', '王五'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }*/
//自定义添加数据 
  /*dataArr=[];
  dataA=[];
  add(){
    this.dataArr.push(this.data);
    this.data='';
  }
  changeData(i){
    this.dataA.push(this.dataArr[i]);
    this.dataArr.splice(i,1);
  }
  changeData2(i){
    this.dataArr.push(this.dataA[i]);
    this.dataA.splice(i,1);
  }
  delete(i){
    this.dataArr.splice(i,1);
  }
  delete2(i){
    this.dataA.splice(i,1);
  }*/

  //Input,List组件交互
  datalist = [];
  dataInput(data){
    this.datalist.push(data);
    console.log(this.datalist);
  }
}




