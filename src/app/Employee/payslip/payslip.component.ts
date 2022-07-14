import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';
declare const require: any;
require('jspdf-autotable');
const { jsPDF } = require("jspdf");
@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  //Updated
 name:any;
 eid:any;
 msg: string = "no data";
 searchText:string;
 constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
   this.name = {SEQUENCENUMBER: '',FPPERIOD:  '',FPBEGIN: '',FPEND: '',PAYDATE: '',PAYTYPE_TEXT: ''}
  
  }
 items = [];

 ngOnInit(): void {
   //console.log("Working!!");
   this.eid = localStorage.getItem('eid'); 
   //console.log(this.eid);
   this.service.EmpPayslip(this.eid).subscribe( (result: any) => 
   {
    // console.log(result);
     this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PAYSLIP_528.Response']['PAY_OUTPUT'].item));
    // console.log(this.name);
     this.items = this.name;
    //  console.log("Items");
    //  console.log(this.items);
   
 });
  
 }
 SavePDF()
  {
    let doc = new jsPDF();
    var prepare: any[] = [];
    this.items.forEach((e:any)=>{  

       var tempObj :any[] = [];



      console.log(tempObj);



      tempObj.push(e.PAYTYPE_TEXT._text);



      tempObj.push(e.PAYDATE._text||this.msg);



      tempObj.push(e.FPPERIOD._text||this.msg);



      tempObj.push(e.FPBEGIN._text||this.msg);



      tempObj.push(e.FPEND._text||this.msg);



     



     



      prepare.push(tempObj);



      console.log(tempObj)



    });



    doc.text("PaySlip",10,10);



    doc.autoTable({



      head: [['Payroll type','Pay date for payroll result','For-period for payrol','Start date of payroll period','End of payroll periode']],



      body: prepare



  });



    doc.save('PaySlip.pdf');



 



  }



  }