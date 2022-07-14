import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';
declare var jQuery: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  name:any;
  vid:any;
  data:any;
  final:any;
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {PO_NUMBER:'',PURCH_ORG: '',PUR_GROUP: '',CO_CODE:'',DOC_DATE: '',DOC_TYPE: '',DOC_CAT: '',STATUS:'',CREATED_ON: '',CREATED_BY: '',PMNTTRMS: '',EXCH_RATE: ''}
    this.data = {PO_NUMBER: '',PUR_MAT: '',INFO_REC: '',SHORT_TEXT: '',NET_PRICE: ''}
    this.final = {PO_NUMBER: '',PUR_MAT: '',INFO_REC: '',SHORT_TEXT: '',NET_PRICE: ''}
    
   }
  items = [];

  ngOnInit(): void {
    console.log("Working!!");
    this.vid = localStorage.getItem('vid'); 
    console.log(this.vid);
    this.service.VendorOrder(this.vid).subscribe( (result: any) => 
    {
     // console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PRDORD_528.Response']['ET_PO_HEADERS'].item));
      this.data=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PRDORD_528.Response']['ET_PO_ITEMS'].item));
     
      // console.log(this.name);
      this.items = this.name;
      console.log("Items");
      console.log(this.items);
    
  });
   
  }
  showPopup(item: any) {
    jQuery('#orderModel').modal('show');
   // console.log("Length:",this.data.length);
    for(let i=0; i<this.data.length; i++){
      console.log(this.data[i].PO_NUMBER);
      if(item.PO_NUMBER._text === this.data[i].PO_NUMBER._text){
       
        this.final = this.data[i];
      }
       //use i instead of 0
  }
  console.log("Final Data",this.final);
  }

}
