import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPublishPage } from './user-publish';

@NgModule({
  declarations: [
    UserPublishPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPublishPage),
  ],
})
export class UserPublishPageModule {}
