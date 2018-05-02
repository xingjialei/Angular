import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the UserSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-setting',
  templateUrl: 'user-setting.html',
})
export class UserSettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSettingPage');
  }

  items1 = ['图片设置','自动播放视频设置','消息提醒设置'];
  items2 = ['关于资芽','资芽公约(免责声明等)','把资芽推荐给朋友'];

  goPage(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }

}
