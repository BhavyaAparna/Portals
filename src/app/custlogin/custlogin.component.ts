import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignInData } from 'src/app/model/SignInData';
import { AuthenticationService } from '../Service/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css']
})
export class CustloginComponent implements OnInit {

  cid:any;
  person : string="";
  pass : string="";
  // loginForm: FormGroup;
  loading = false;
  submitted = false;
  // returnUrl: string;
  error = '';
  uname : string="";
pwd : string="";
name: string="";

isFormValid = false;
areCredentialsInvalid = false;
  constructor(private http:HttpClient, private router: Router, private authenticationService:AuthenticationService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  getValues(val:string){
   console.warn(val) ;
  }
  getresult(f:any) {
    console.log("Yes");
    if (!f.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(f);
  }
  
  private checkCredentials(signInForm:any) {
    const signInData = new SignInData(signInForm.value.uname, signInForm.value.pwd);
    this.authenticationService.authenticate(signInData);
    this.cid = signInData.login;
    console.log(this.cid);
    localStorage.setItem('cid',this.cid);
    if (!signInData.ans) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }

  
  
  
}
