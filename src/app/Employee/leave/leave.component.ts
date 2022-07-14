import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

 //Updated
 name:any;
 eid:any;
 searchText:string;
 constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
   this.name = {VALIDEND: '',VALIDBEGIN: '',ABSENCETYPE: '',NAMEOFABSENCETYPE: '',ABSENCEDAYS: '',ABSENCEHOURS: ''}
   
  }
 items = [];

 ngOnInit(): void {
   //console.log("Working!!");
   this.eid = localStorage.getItem('eid'); 
   //console.log(this.eid);
   this.service.EmpLeave(this.eid).subscribe( (result: any) => 
   {
    // console.log(result);
     this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_LEAVE_528.Response']['IT_LEAVE_DET'].item));
    // console.log(this.name);
     this.items = this.name;
    //  console.log("Items");
    //  console.log(this.items);
   
 });
  
 }

}