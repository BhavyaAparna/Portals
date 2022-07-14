import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';

@Component({
  selector: 'app-custcredit',
  templateUrl: './custcredit.component.html',
  styleUrls: ['./custcredit.component.css']
})
export class CustcreditComponent implements OnInit {
  //Updated
  name:any;
  cid:any;
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {COMP_CODE:'',DOC_NO:'',FISC_YEAR:'',FIS_PERIOD:'',CURRENCY:'',POST_KEY:'',ENTRY_DATE:'',DB_CR_IND:'',BILL_DOC:'',AMOUNT:'',BLINE_DATE:''}
    
   }
  items = [];

  ngOnInit(): void {
    console.log("Working!!");
    this.cid = localStorage.getItem('cid'); 
    console.log(this.cid);
    this.service.Credit(this.cid).subscribe( (result: any) => 
    {
     // console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CREDIT_MEMO_528.Response']['CREDIT_TABLE'].item));
     // console.log(this.name);
      this.items = this.name;
      console.log("Items");
      console.log(this.items);
    
  });
   
  }

}