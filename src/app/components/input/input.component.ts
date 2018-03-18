import { Component, OnInit,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() dataInput = new EventEmitter();
  datalist = [];
  content = '';
  addData(){
    this.datalist.push(this.content);
    console.log(this.datalist);
    this.dataInput.emit(this.content);
    this.content = '';
  }
  keyData(e){
    if(e.keyCode==13){
      this.datalist.push(this.content);
      this.content = '';
    }
  }
}
