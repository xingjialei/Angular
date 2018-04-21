import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckMessagePage } from '../check-message/check-message'; 
import { FindpassPage } from '../findpass/findpass';
import {CheckInfoPage } from '../check-info/check-info';

@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
})
export class CheckPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckPage');
  }

  items = [];

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
  };

  arrs = [
    {title:'资芽小助手',img:'assets/imgs/portiait.jpg'},
    {title:'系统消息',img:'assets/imgs/portiait.jpg'},
    {title:'Bob',img:'assets/imgs/portiait4.jpg'},
    {title:'Clio',img:'assets/imgs/portiait3.jpg'},
    {title:'Eason',img:'assets/imgs/portiait2.jpg'},
    {title:'Frank',img:'assets/imgs/portiait5.jpg'},
    {title:'Demo',img:'assets/imgs/portiait1.jpg'},
    {title:'Jack',img:'assets/imgs/portiait3.jpg'},
    {title:'Hash',img:'assets/imgs/portiait2.jpg'}
  ];

  goPage(item){
    console.log(item);
    this.navCtrl.push(CheckInfoPage,{title:item});
  }
}
