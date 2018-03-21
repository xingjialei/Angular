import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  index;
  constructor(public get:ServicesService) { }
  getIndex(i){
    this.index = this.get.getindex(i);
  }
  arrD = [1,2,3];
  idx:number=-1;
  getI(i){
    this.idx = i;
  }
  ngOnInit() {
  }

}
