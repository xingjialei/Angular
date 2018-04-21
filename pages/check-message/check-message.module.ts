import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckMessagePage } from './check-message';

@NgModule({
  declarations: [
    CheckMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(CheckMessagePage),
  ],
})
export class CheckMessagePageModule {}
