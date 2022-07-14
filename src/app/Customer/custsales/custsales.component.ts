import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';
declare var jQuery: any;

@Component({
  selector: 'app-custsales',
  templateUrl: './custsales.component.html',
  styleUrls: ['./custsales.component.css']
})
export class CustsalesComponent implements OnInit {

  //Updated
  name:any;
  cid:any;
  data:any;
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {SD_DOC:'',DOC_DATE:'',DOC_STATUS:'',SHORT_TEXT:'',VALID_FROM:'',VALID_TO:'',SOLD_TO:'',SALES_ORG:'',EXCHG_RATE:'',REQ_QTY:''},
    this.data = {MATERIAL: '',NAME:'',ITM_NUMBER: '',NET_PRICE: '',CREATION_DATE: ''
      }
   }
  items = [];

  ngOnInit(): void {
    console.log("Working!!");
    this.cid = localStorage.getItem('cid'); 
    console.log(this.cid);
    this.service.Sales(this.cid).subscribe( (result: any) => 
    {
     // console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_SALE_ORDER_528.Response']['SALES_TABLE'].item));
     // console.log(this.name);
      this.items = this.name;
      console.log("Items");
      console.log(this.items);
    
  });
   
  }
  showPopup(item: any) {
    console.log(item);
    this.data = item;
    jQuery('#salesModel').modal('show');
  }
}