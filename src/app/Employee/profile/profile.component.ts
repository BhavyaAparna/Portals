import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:any;
  eid:any;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {ENAME: '',PERNR:'',GBDAT:'',PSTLZ: '',ORT01: '',STRAS: '',LAND:'',TELNR: '',BEGDA: '',ORGEH: '',ORGEH_TXT: '',PLANS_TXT: ''
    }
   }

  ngOnInit(): void {
    console.log("Profile Working!!");
    this.eid = localStorage.getItem('eid'); 
    //console.log(this.cid);
    this.service.EmpProfile(this.eid).subscribe( (result: any) => 
    {
      console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROFILE_528.Response'].IT_OUTPUT));
      console.log(this.name);
     
     
    
  });
   
  }
  
  
  

}
