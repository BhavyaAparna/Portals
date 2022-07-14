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
  vid:any;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {VENDOR:'',NAME_2:'',NAME:'',CITY:'',STREET:'', POSTL_CODE:'',TELEPHONE:'',REGION:'',COUNTRY:'',FORMOFADDR:''}
        
   }

  ngOnInit(): void {
    console.log("Profile Working!!");
    this.vid = localStorage.getItem('vid'); 
    //console.log(this.cid);
    this.service.VendorProfile(this.vid).subscribe( (result: any) => 
    {
      console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PROFILE_528.Response'].EXPORT_GEN_DETAIL));
      console.log(this.name);
     
     
    
  });
   
  }
  
  
  

}
