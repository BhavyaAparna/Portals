import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  name:any;
  vid:any;
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {COMP_CODE:'',FISC_YEAR:'',DOC_NO: '',ITEM_NUM: '',LOC_CURRCY:'',TAX_CODE:'',LC_AMOUNT: '',PMNTTRMS: '',NETTERMS: '',REF_DOC: ''}
    
   }
  items = [];

  ngOnInit(): void {
    console.log("Working!!");
    this.vid = localStorage.getItem('vid'); 
    console.log(this.vid);
    this.service.VendorPayment(this.vid).subscribe( (result: any) => 
    {
     // console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PAYMENT_528.Response']['PAYMENT_TABLE'].item));
     // console.log(this.name);
      this.items = this.name;
      console.log("Items");
      console.log(this.items);
    
  });
   
  }

}