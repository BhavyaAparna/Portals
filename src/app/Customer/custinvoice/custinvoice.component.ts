import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';

@Component({
  selector: 'app-custinvoice',
  templateUrl: './custinvoice.component.html',
  styleUrls: ['./custinvoice.component.css']
})
export class CustinvoiceComponent implements OnInit {

  //Updated
  name:any;
  cid:any;
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {VBELN:'',FKART:'',FKART_RL:'',WAERK:'',VKORG:'',BSTNK_VF:'',NETWR:'',KUNRG:'',EXNUM:'',MWSBK:''}
    
   }
  items = [];

  ngOnInit(): void {
    console.log("Working!!");
    this.cid = localStorage.getItem('cid'); 
    console.log(this.cid);
    this.service.Invoice(this.cid).subscribe( (result: any) => 
    {
     // console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_INVOICE_528.Response']['IT_INVOICE_LIST'].item));
     // console.log(this.name);
      this.items = this.name;
      console.log("Items");
      console.log(this.items);
    
  });
   
  }

}
