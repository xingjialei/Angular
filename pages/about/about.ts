import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutInfoPage } from '../about-info/about-info';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goPage(){
    this.navCtrl.push(AboutInfoPage);
  }
}
