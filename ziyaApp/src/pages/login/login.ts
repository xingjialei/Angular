import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
//import { FindpassPage } from '../findpass/findpass';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  status = 'login';
  user;
  password;
  login(){ 
    console.log(this.user,this.password);

    this.http.get('http://datainfo.duapp.com/shopdata/userinfo.php?status='+this.status+'&userID='+this.user+'&password='+this.password).subscribe(data=>{
      
      console.log(data['_body']);
    },err=>{
      console.log(err);
    });
  }

  goPage(){
    this.navCtrl.push(RegisterPage);
  }

  goHome(){
    this.navCtrl.push(TabsPage);
  }

  goPass(){
    this.navCtrl.push('FindpassPage');
  }

}
