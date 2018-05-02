import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/*import { UserPublishPage } from '../user-publish/user-publish';
import { UserSettingPage } from '../user-setting/user-setting';*/

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [
    {title:'芽币',img:'assets/imgs/user/icon1.png',id:'item1'},
    {title:'我发布的',img:'assets/imgs/user/icon2.png',id:'item2'},
    {title:'我合作的',img:'assets/imgs/user/icon3.png',id:'item3'}
  ];
  item2 = [
    {title:'我收藏的',img:'assets/imgs/user/icon4.png',id:'item4'},
    {title:'我的草稿箱',img:'assets/imgs/user/icon5.png',id:'item5'},
    {title:'视频发布',img:'assets/imgs/user/icon6.png',id:'item6'},
    {title:'完善信息',img:'assets/imgs/user/icon7.png',id:'item7'},
    {title:'VIP等级',img:'assets/imgs/user/icon8.png',id:'item8'},
    {title:'账户安全',img:'assets/imgs/user/icon9.png',id:'item9'},
    {title:'帮助与反馈',img:'assets/imgs/user/icon10.png',id:'item10'},
    {title:'设置',img:'assets/imgs/user/icon11.png',id:'item11'}
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  getValue(id){
    console.log(id);
    switch(id){
      case 'item2':
        this.navCtrl.push('UserPublishPage');
      case 'item3':
        this.navCtrl.push('UserPublishPage');
      default:
        this.navCtrl.push('UserSettingPage');
    }
  }

}
