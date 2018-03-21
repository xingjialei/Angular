import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

  constructor() { }

  i;
  set(a,value){
    localStorage.setItem(JSON.stringify(value),a);
    console.log(typeof(value));
    /*console.log(localStorage.getItem(JSON.stringify(value)));*/
    console.log('111111111111111111111111');
    /*localStorage.setItem(a,value);*/
    console.log('set!');
  }
  get(value){
    console.log(typeof(value));
    /*console.log(value.join(''));*/
    console.log(localStorage.getItem(value.join('')));
    console.log('get!');
  }
  remove(a){
    localStorage.removeItem(a);
    console.log('remove!');
  }
}
