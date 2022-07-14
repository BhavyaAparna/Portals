import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';


@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  name:any;
  vid:any;
  myVar=null;
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {EBELN:'',BUKRS:'',BSTYP:'',STATU: '',AEDAT:'',ERNAM: '',ZTERM: '',EKORG: '',ANGDT: '',WKURS: ''}
    
   }
  items = [];

  ngOnInit(): void {
    console.log("Working!!");
    console.log("Var:",this.myVar);
    console.log("Name:",this.name);
    this.vid = localStorage.getItem('vid'); 
    console.log(this.vid);
    this.service.VendorQuotation(this.vid).subscribe( (result: any) => 
    {
     console.log(result);
     
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_QUOTATION_528.Response']['ET_RESULT'].item));
     console.log("Name:",this.name);
      this.items = this.name;
      console.log("Items");
      console.log(this.items);
      this.myVar=1;
      console.log("Var:",this.myVar);
  });
   
  }

}