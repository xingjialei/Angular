import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  /*getdata = new ServicesService();*/
  num;
  @Input() title;
  @Input() arrData:Array<any>;
  @Output() getIndex=new EventEmitter();
  /*fn(i){
    this.getIndex.emit(i);
  }*/
  constructor(public getdata:ServicesService){
    console.log(-1);
    console.log(this.arrData);
  }
  click(){
    this.arrData = [2,3,4];
  }
  /*当数据绑定输入属性的值发生变化时候调用*/
  ngOnChanges(){
    console.log(0);
  }
  /*页面初始化，进行触发事件*/
  ngOnInit() {
    /*this.num = this.getdata.get(300);*/
    /*console.log(this.num);*/

    this.getdata.addData(800);
    console.log(this.getdata.list);
    
    /*console.log(1);
    console.log(this.arrData);*///在初始化函数中得到输入的数值
  }
  /*点击按钮，页面改变，触发函数*/
  ngDoCheck(){
    console.log(2);
  }

  fn(i){
    this.getdata.getIndex(i);
  }
}
