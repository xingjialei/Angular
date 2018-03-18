import { Component, OnInit, Input } from '@angular/core';
import { ServicesService} from '../../services/services.service';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public getdata:ServicesService) { 

  }
  @Input() list:Array<any>;
  ngOnInit() {
    this.getdata.addData(20);
    console.log(this.getdata.list);
  }
}
