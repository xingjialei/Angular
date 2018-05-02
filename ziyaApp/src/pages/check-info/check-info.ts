import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-info',
  templateUrl: 'check-info.html',
})
export class CheckInfoPage {

  title = '';
  img = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title').title;
    this.img = navParams.get('title').img;
    console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckInfoPage');
  }

}
