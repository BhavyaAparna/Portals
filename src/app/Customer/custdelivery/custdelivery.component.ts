import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';
declare var jQuery: any;
@Component({
  selector: 'app-custdelivery',
  templateUrl: './custdelivery.component.html',
  styleUrls: ['./custdelivery.component.css']
})
export class CustdeliveryComponent implements OnInit {

  //Updated
  name:any;
  cid:any;
  data:any;
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {VBELN:'',ERNAM:'',ERZET:'',VSTEL:'',VKORG:'',LFART:'',LFDAT:'',KUNNR:'',PERFK:''}
    this.data={VBELN:'',POSNR:'',ARKTX:'',LGORT: '',LFIMG: '',BRGEW: '',GEWEI: '',MBDAT: '',LGNUM: ''},
    this.final={VBELN:'',POSNR:'',ARKTX:'',LGORT: '',LFIMG: '',BRGEW: '',GEWEI: '',MBDAT: '',LGNUM: ''}
   }
  items = [];

  ngOnInit(): void {
    console.log("Working!!");
    this.cid = localStorage.getItem('cid'); 
    console.log(this.cid);
    this.service.Delivery(this.cid).subscribe( (result: any) => 
    {
      console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_LIST_DELIVERY_528.Response']['IT_DLVHEAD'].item));
     // console.log(this.name);IT_DLVITEM
     this.data=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_LIST_DELIVERY_528.Response']['IT_DLVITEM'].item));
     // console.log(this.data);
     
      this.items = this.name;
      //console.log("Items");
      //console.log(this.items);
    
  });
   
  }
  final:any;
  showPopup(item: any) {

    //console.log("Delivery Header:",item.VBELN);
    jQuery('#deliveryModel').modal('show');
    console.log("Length:",this.data.length);
    for(let i=0; i<this.data.length; i++){
      console.log(this.data[i].VBELN);
      if(item.VBELN._text === this.data[i].VBELN._text){
       
        this.final = this.data[i];
      }
       //use i instead of 0
  }
  console.log("Final Data",this.final);
  }
}