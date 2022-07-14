import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignInData } from 'src/app/model/SignInData';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  name:any;
  ans = false;
  data1:any;
  isAuthenticated = false;
  constructor(private http:HttpClient ,private router:Router,private toastr: ToastrService) { }
  authenticate(signInData: SignInData): void {
    this.checkCredentials(signInData);
  }
  checkCredential(signInData : SignInData){
    if (signInData.ans) {
      this.isAuthenticated = true;
      localStorage.setItem("uname",signInData.getLogin());
      this.router.navigate(['customer']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  private checkCredentials(signInData: SignInData): void {  
    console.log("Checking!!!!");
    this.http.post('http://localhost:4000/login',{uname:signInData.getLogin(),pwd:signInData.getPassword()}).subscribe((data:any)=>{
      console.log(data);
      this.name=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUSTOMER_LOGIN_528.Response'].EV_OUT._text;

      if(this.name !='E'){
        
        sessionStorage.setItem('uname',signInData.getLogin());
        signInData.ans=true;
        this.toastr.success('Login Successfull!!!');
       // alert("Welcome " + this.name);
        this.router.navigate(['customer']);
        this.checkCredential(signInData);
      } 
      else{
        this.toastr.error('Invalid Login!!!');
       // alert("Invalid User");
        signInData.ans=false;
        this.checkCredential(signInData);
      }
    });
    // console.log(this.ans);
    // return this.ans;
  }
  logout() {
    this.isAuthenticated = false;
    localStorage.clear();
    this.router.navigate(['']);
  }
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  loggedIn(){
    return !!localStorage.getItem("uname");
  }

  //Updated for Inquiry Data
  Inquiry(cid:any): any {  
    return this.http.get('http://localhost:4000/inquiry/'+cid);
  }
  InquiryDetails(cid:any): any {  
    return this.http.get('http://localhost:4000/inquiryDetails/'+cid);
  }
  //Updated for Profile
  Profile(cid:any):any{
    return this.http.get('http://localhost:4000/profile/'+cid)
  }
  Sales(cid:any):any{
    return this.http.get('http://localhost:4000/sales/'+cid)
  }
  Delivery(cid:any):any{
    return this.http.get('http://localhost:4000/delivery/'+cid)
  }
  Payment(cid:any):any{
    return this.http.get('http://localhost:4000/payment/'+cid)
  }
  Invoice(cid:any):any{
    return this.http.get('http://localhost:4000/invoice/'+cid)
  }
  Credit(cid:any):any{
    return this.http.get('http://localhost:4000/credit/'+cid)
  }
  Debit(cid:any):any{
    return this.http.get('http://localhost:4000/debit/'+cid)
  }
  VendorLogin(vid:any,pass:any):any{
    return this.http.get('http://localhost:4000/vendor/login/'+vid +'/'+pass);
  }
  VendorCredit(vid:any):any{
    return this.http.get('http://localhost:4000/vendor/credit/'+vid)
  }
  VendorDebit(vid:any):any{
    return this.http.get('http://localhost:4000/vendor/debit/'+vid)
  }
  VendorGoods(vid:any):any{
    return this.http.get('http://localhost:4000/vendor/goods/'+vid)
  }
  VendorInvoice(vid:any):any{
    return this.http.get('http://localhost:4000/vendor/invoice/'+vid)
  }
  VendorOrder(vid:any):any{
    return this.http.get('http://localhost:4000/vendor/order/'+vid)
  }
  VendorPayment(vid:any):any{
    return this.http.get('http://localhost:4000/vendor/payment/'+vid)
  }
  VendorProfile(vid:any):any{
    return this.http.get('http://localhost:4000/vendor/profile/'+vid)
  }
  VendorQuotation(vid:any):any{
    return this.http.get('http://localhost:4000/vendor/quotation/'+vid)
  }
  VendorQuotationDetails(vid:any):any{
    return this.http.get('http://localhost:4000/vendor/quotationDetails/'+vid)
  }
  EmpLogin(eid:any,pass:any):any{
    return this.http.get('http://localhost:4000/employee/login/'+eid +'/'+pass);
  }
  EmpLeave(eid:any):any{
    return this.http.get('http://localhost:4000/employee/leave/'+eid);
  }
  EmpPayslip(eid:any):any{
    return this.http.get('http://localhost:4000/employee/payslip/'+eid);
  }
  EmpProfile(eid:any):any{
    return this.http.get('http://localhost:4000/employee/profile/'+eid);
  }
}
