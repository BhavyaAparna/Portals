import { Component, OnInit, Input,VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';
declare var jQuery: any;
@Component({
  selector: 'app-custinquiry',
  templateUrl: './custinquiry.component.html',
  styleUrls: ['./custinquiry.component.css']
})
export class CustinquiryComponent implements OnInit {

  //Updated
  list=[];
  cid:any;
  final:any;
  items= [];
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.final = {VBELN: '',ARKTX: '',ZMENG: '',PSTYV: ''}

   }
  

  ngOnInit(): void {
    console.log("Working!!");
    this.cid = localStorage.getItem('cid'); 
    console.log(this.cid);
    this.service.Inquiry(this.cid).subscribe( (result: any) => 
    {
     console.log(result);
      this.list=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_INQUIRY_DATA_528.Response']['INQ_LIST'].item));
    //  console.log(this.list);

          this.items = this.list;
//           
         console.log("Items");
         console.log(this.items);
  });
 
   
  }
  data=null;
  showPopup(item: any) {

    jQuery('#inquiryModel').modal('show');
    this.service.InquiryDetails(item.VBELN._text).subscribe( (result: any) => 
    {
    // console.log(result);
     this.data = 1;
      this.final=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_INQ_DETAIL_528.Response']['ET_RESULT'].item));
     console.log("Final Data",this.final);
    
  });
      
  }
  
  
  

}
