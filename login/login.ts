import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Headers, Http} from '@angular/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http:Http) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  status = 'login';
  user = '74193847982365836849';
  password = '123';

  /*ngOnInit(){
    console.log('111');
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',{userID:this.user,password:this.password},{headers:this.headers} ).subscribe(data=>{
      console.log(data);
    });
  }*/
  /*ngOnChanges(){
    console.log('222');
  }*/

  test(){
    console.log('this.user and password'+this.user,this.password);
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',{status:this.status,userID:this.user,password:this.password},{headers:this.headers}).subscribe(data=>{
      console.log(data['_body']);
      if(data['_body'] == 0){
        this.showAlert(data['_body']);
      }
      if(data['_body'] == 2){
        this.showAlert(data['_body']);
      }
    },err=>{
      console.log(err);
    });
    /*this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?userID=123password=123callback=JSONP_CALLBACK').subscribe(data=>{
      
      console.log(data['_body']);
    },err=>{
      console.log(err);
    });*/
  }

  showAlert(a){
    let alert = this.alertCtrl.create({
      title: '登录失败',
      subTitle: '用户名不存在',
      buttons: ['OK']
    });
    let alert2 = this.alertCtrl.create({
      title: '登录失败',
      subTitle: '用户名与密码不符',
      buttons: ['OK']
    });
    if(a == 0){
      alert.present();
    }
    alert2.present();
  }
}