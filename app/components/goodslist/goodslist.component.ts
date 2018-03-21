import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { ServicesService} from '../../services/services.service';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  
  /*constructor(public getdata:ServicesService) { 

  }*/
  constructor(public router:Router) { 

  }
  /*@Input() list;*/
  list = [1,2,3];
  /*ngOnInit() {
    this.getdata.addData(20);
    console.log(this.getdata.list);
    console.log(this.list);
  }*/
  ngOnInit(){}

  goDetail(idx){
    this.router.navigate(['/gooddetail/',idx]);
  }
}

