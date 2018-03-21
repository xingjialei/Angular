import { Component, OnInit ,Input} from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public getdata2:LocalService) {
    console.log(2);
  }

  ngOnInit() {
  }

  @Input() dataList;
  todolist = this.dataList;
  comlist = [];
  delete(i){
    var str = this.dataList.splice(i,1);

    console.log(JSON.stringify(str));
    this.getdata2.get(str);
    /*console.log(this.comlist,this.dataList);
    this.getdata2.remove(i);*/
  }
  changeData(i){
    console.log(i);
    this.comlist.push(this.dataList[i]);
    this.dataList.splice(i,1);

    this.getdata2.remove(i);
  }
  delete2(i){
    this.comlist.splice(i,1);
    console.log(this.comlist,this.dataList);
  }
  changeData2(i){
    this.dataList.push(this.comlist[i]);
    this.comlist.splice(i,1);

    this.getdata2.set(i,this.comlist[i]);
  }
}
