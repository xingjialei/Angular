import { Component, OnInit,Output, Input} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {

  constructor(public getdata:LocalService) {
    console.log(1);
  }

  ngOnInit() {
  }

  @Output() dataInput = new EventEmitter();
  datalist = [];
  content = '';
  i=0;

  addData(){
    this.i++;

    /*this.datalist.push(this.content);
    console.log(this.datalist);*/
    this.dataInput.emit(this.content);

    this.getdata.set(this.i,this.content);

    this.content = '';
  }
  keyData(e){
    if(e.keyCode==13){
      /*this.datalist.push(this.content);*/
      this.dataInput.emit(this.content);
      this.content = '';

      this.getdata.set(this.i,this.content);
    }
  }
}
