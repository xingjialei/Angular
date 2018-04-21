import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //@ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController,private statusBar: StatusBar) {
    for (let i = 0; i < 5; i++) {
      this.items.push( this.items.length );
    }
  }

  icons = "information";

  items=[];
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

  goPage(){
    this.navCtrl.push(LoginPage);
  }

  //this.statusBar.overlayWebView(true);
  //this.statusBar.backgroundColorByHexString('#ffffff');
}
