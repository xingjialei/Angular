import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() dataList;
  todolist = this.dataList;
  comlist = [];
  delete(i){
    this.dataList.splice(i,1);
    console.log(this.comlist,this.dataList);
  }
  changeData(i){
    this.comlist.push(this.dataList[i]);
    this.dataList.splice(i,1);

  }
  delete2(i){
    this.comlist.splice(i,1);
    console.log(this.comlist,this.dataList);
  }
  changeData2(i){
    this.dataList.push(this.comlist[i]);
    this.comlist.splice(i,1);
  }
}
