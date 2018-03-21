import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}
  timer;
  ngOnInit() {
    this.timer = setInterval(function(){
      console.log(2);
    },1000);
  }
  ngOnDestory(){
    clearInterval(this.timer);
    console.log(111);
  }
  /*goGood(){
    this.router.navigate(['/goodlist']);
  }*/
}
