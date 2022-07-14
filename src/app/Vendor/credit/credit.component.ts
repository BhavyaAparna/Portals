import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  name:any;
  vid:any;
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {MATNR:'',WERKS:'',MEINS:'',BUKRS:'',BELNR:'',GJAHR:'',BUZEI:'',AUGDT:'',KOART:'',XBILK:'',BDIFF:'',DMBTR:'',MENGE:''}
    
   }
  items = [];

  ngOnInit(): void {
    console.log("Working!!");
    this.vid = localStorage.getItem('vid'); 
    console.log(this.vid);
    this.service.VendorCredit(this.vid).subscribe( (result: any) => 
    {
     // console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_CREDIT_528.Response']['VEN_CREDIT_TABLE'].item));
     // console.log(this.name);
      this.items = this.name;
      console.log("Items");
      console.log(this.items);
    
  });
   
  }

}