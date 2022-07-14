import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';

@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.component.html',
  styleUrls: ['./cust-profile.component.css']
})
export class CustProfileComponent implements OnInit {
  
  //Updated
  name:any;
  cid:any;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {KUNNR:'',NAME1:'',NAME2:'',ORT01:'',PSTLZ:'',REGIO:'',COUNTRY:'',TELF1:'',STRAS:''}
        
   }

  ngOnInit(): void {
    console.log("Profile Working!!");
    this.cid = localStorage.getItem('cid'); 
    //console.log(this.cid);
    this.service.Profile(this.cid).subscribe( (result: any) => 
    {
      console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_PROFILE_528.Response'].CUST_PROFILE));
      console.log(this.name);
     
     
    
  });
   
  }
  
  
  

}
