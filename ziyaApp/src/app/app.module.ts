import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CheckPage } from '../pages/check/check';
import { UserPage } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
/*import { ReInfoPage } from '../pages/re-info/re-info';
import { FindpassPage } from '../pages/findpass/findpass';
import { UserPublishPage } from '../pages/user-publish/user-publish';
import { CheckMessagePage } from '../pages/check-message/check-message';
import { CheckInfoPage } from '../pages/check-info/check-info';
import { UserSettingPage } from '../pages/user-setting/user-setting';
import { AboutInfoPage } from '../pages/about-info/about-info';
import { HomeFindInfoPage } from '../pages/home-find-info/home-find-info';
import { HomeInfoDetailsPage } from '../pages/home-info-details/home-info-details';
import { TestPage } from '../pages/test/test';*/

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CheckPage,
    UserPage,
    LoginPage,
    RegisterPage,
    /*ReInfoPage,
    FindpassPage,
    UserPublishPage,
    CheckMessagePage,
    CheckInfoPage,
    UserSettingPage,
    AboutInfoPage,
    HomeFindInfoPage,
    HomeInfoDetailsPage,
    TestPage*/
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:'true',
      backButtonText:'',
      pageTransition:'ios-transition',
      backButtonicon:"",
    }),
    HttpModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CheckPage,
    UserPage,
    LoginPage,
    RegisterPage,
    /*ReInfoPage,
    FindpassPage,
    UserPublishPage,
    CheckMessagePage,
    CheckInfoPage,
    UserSettingPage,
    AboutInfoPage,
    HomeFindInfoPage,
    HomeInfoDetailsPage,
    TestPage*/
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
