import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //@ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 5; i++) {
      this.items.push( this.items.length );
    }
  }

  go(){

  }
  items=[];
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();

      if(this.items.length>20){
        infiniteScroll.enable(false);
      }

    }, 500);
  }
}
