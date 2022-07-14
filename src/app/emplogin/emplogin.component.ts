import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignInData } from 'src/app/model/SignInData';
import { AuthenticationService } from '../Service/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  user: any;
  data : any;
  name: any;
  constructor(private router: Router, private service: AuthenticationService,private toastr: ToastrService) {
    this.user = {eid: '', epass: ''};
  }

  ngOnInit(): void {
  }

  loginSubmit(loginEmpForm: any): void {

    this.service.EmpLogin(this.user.eid,this.user.epass).subscribe((data: any) => 
    {
      console.log(data);
      this.name=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_LOGIN_528.Response'].EV_OUT._text;

      if(this.name !='E'){
        this.toastr.success('Login Successfull!!!');
        localStorage.setItem('eid',this.user.eid);
        this.router.navigate(['employee']);
      } 
      else{
        this.toastr.error('Invalid Login!!!');
      }

    });
    console.log(loginEmpForm);
  }
  
}
