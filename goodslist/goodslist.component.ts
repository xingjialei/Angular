import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { ServicesService} from '../../services/services.service';
import { Http,Jsonp,Headers} from "@angular/http";
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  
  /*constructor(public getdata:ServicesService) { 

  }*/
  constructor(public router:Router,public http:Http,public jsonp:Jsonp) { 

  }
  /*@Input() list;*/
  /*list = [1,2,3,4,5];*/
  list = [];
  /*ngOnInit() {
    this.getdata.addData(20);
    console.log(this.getdata.list);
    console.log(this.list);
  }*/
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  ngOnInit(){
    this.http.get('http://datainfo.duapp.com/shopdata/getclass.php').subscribe(data=>{
      console.log(data);
      console.log(JSON.parse(data['_body']));
      this.list = JSON.parse(data['_body']);
    },err=>{
      console.log(err);
    });

    this.jsonp.get('http://datainfo.duapp.com/shopdata/getgoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.list = data['_body'];
    },err=>{
      console.log(err);
    });

    //JSON.stringify({})为传入的数据
    this.http.post( 'http://datainfo.duapp.com/shopdata/getclass.php',JSON.stringify({}), {headers:this.headers} ).subscribe(data=>{
      console.log(data);
    });
  }

  goDetail(idx){
    this.router.navigate(['/gooddetail/',idx]);
    //this.router.navigate(['/goodslist/gooddetail/',idx]);

    //this.router.navigate(['/gooddetail/',idx],{queryParams:{num:100}});
  }
}

