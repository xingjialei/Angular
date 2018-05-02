import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ReInfoPage } from '../re-info/re-info';
import { Http } from '@angular/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goPage(){
    this.navCtrl.push('ReInfoPage');
  }

  status='register';
  user;
  password;
  password2;
  register(){
    if(this.password === this.password2){
      this.http.get('http://datainfo.duapp.com/shopdata/userinfo.php?status='+this.status+'&userID='+this.user+'&password='+this.password).subscribe(data=>{
        console.log(data['_body']);
      },err=>{
        console.log(err);
      });
    }
    else{
      
    }
  }
}
