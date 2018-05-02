import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeInfoDetailsPage } from './home-info-details';

@NgModule({
  declarations: [
    HomeInfoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeInfoDetailsPage),
  ],
})
export class HomeInfoDetailsPageModule {}
