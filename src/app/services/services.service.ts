import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {

  constructor() { }

  list = [];
  get(url:number){
    console.log(13);
    
    return url+100;
  }
  
  addData(num:number){
    this.list.push(num);
  }

  index:number;//
  getIndex(i){
    this.index = i;
  }
  getindex(i){
    return this.index;
  }

  set(a,value){
    localStorage(a,JSON.stringify(value));
  }
  get1(){}
  remove(){}
}
