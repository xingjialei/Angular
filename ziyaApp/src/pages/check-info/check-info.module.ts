import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckInfoPage } from './check-info';

@NgModule({
  declarations: [
    CheckInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckInfoPage),
  ],
})
export class CheckInfoPageModule {}
