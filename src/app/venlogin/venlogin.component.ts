import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Service/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-venlogin',
  templateUrl: './venlogin.component.html',
  styleUrls: ['./venlogin.component.css','css/style.css','css/font-awesome.min.css']
})
export class VenloginComponent implements OnInit {
  user: any;
  data : any;
  name: any;
  constructor(private router: Router, private service: AuthenticationService,private toastr: ToastrService) {
    this.user = {vid: '', pass: ''};
  }

  ngOnInit(): void {
  }

  loginSubmit(loginVendorForm: any): void {

    this.service.VendorLogin(this.user.vid,this.user.pass).subscribe((data: any) => 
    {
      console.log(data);
      this.name=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_LOGIN_528.Response'].EV_OUT._text;

      if(this.name !='E'){
        this.toastr.success('Login Successfull!!!');
        localStorage.setItem('vid',this.user.vid);
        this.router.navigate(['vendor']);
      } 
      else{
        this.toastr.error('Invalid Login!!!');
      }

    });
    console.log(loginVendorForm);
  }
  
}
