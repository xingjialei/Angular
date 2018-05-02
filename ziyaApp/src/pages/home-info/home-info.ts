import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-info',
  templateUrl: 'home-info.html',
})
export class HomeInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar) {
    for (let i = 0; i < 5; i++) {
      this.items.push( this.items.length );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeInfoPage');
  }

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


  icons = "information";
  items = [];

  goPageFindInfo(){
    this.navCtrl.push('HomeFindInfoPage');
  }

}
