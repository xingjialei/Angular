import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gooddetail',
  templateUrl: './gooddetail.component.html',
  styleUrls: ['./gooddetail.component.css']
})
export class GooddetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.goodsid);
  }

}
