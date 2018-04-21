import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-message',
  templateUrl: 'check-message.html',
})
export class CheckMessagePage {

  title = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /* this.title = navParams.get('title');
    console.log(this.title); */
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckMessagePage');
  }

  

}
