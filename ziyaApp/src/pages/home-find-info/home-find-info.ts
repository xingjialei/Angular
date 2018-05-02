import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import { HomeInfoDetailsPage } from '../home-info-details/home-info-details';
import { TestPage } from '../test/test';*/

/**
 * Generated class for the HomeFindInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-find-info',
  templateUrl: 'home-find-info.html',
})
export class HomeFindInfoPage {

  searchQuery: string = '';
  items:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeFindInfoPage');
  }

  initializeItems(){
   this.items = [
     '资产包转让',
     '委外催收',
     '法律服务',
     '商业保障',
     '融资借贷'
   ]
  }

  items1=[
    '资产包转让',
    '债权转让',
    '固产转让',
    '法律服务',
    '商业保理',
    '典当担保',
    '融资借贷',
    '委外催收',
    '资产求购',
    '悬赏信息',
    '尽职调查'
  ];

  items2 = [
    '北京',
    '上海',
    '广州',
    '河北',
    '云南',
    '江苏'
  ]

  items3 = [
    '抵押',
    '信用',
    '综合类'
  ]
  getItems(ev:any){
    this.initializeItems();
    let val = ev.target.value;

    if(val && val.trim()!=''){
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goPageDetails(){
    this.navCtrl.push('HomeInfoDetailsPage');
  }

  goPageTest(){
    this.navCtrl.push('TestPage');
  }
}
