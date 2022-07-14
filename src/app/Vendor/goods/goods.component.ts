import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/Service/authentication/authentication.service';
declare var jQuery: any;
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  data:any;
  name:any;
  vid:any;
  final:any;
  searchText:string;
  constructor(private http:HttpClient, private router: Router, private service:AuthenticationService) {
    this.name = {MAT_DOC: '',DOC_YEAR:'',TR_EV_TYPE:'',DOC_DATE: '',PSTNG_DATE: '',ENTRY_DATE: '',ENTRY_TIME: '',USERNAME:'',VER_GR_GI_SLIP: ''}
    this.data={MAT_DOC:'',MATERIAL:'',PLANT:'',STGE_LOC:'',ENTRY_QNT:''}
    this.final={MAT_DOC:'',MATERIAL:'',PLANT:'',STGE_LOC:'',ENTRY_QNT:''}
   }
  items = [];

  ngOnInit(): void {
    console.log("Working!!");
    this.vid = localStorage.getItem('vid'); 
    console.log(this.vid);
    this.service.VendorGoods(this.vid).subscribe( (result: any) => 
    {
     // console.log(result);
      this.name=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_GOODS_RCPT_528.Response']['ET_GOODSMVT_HEADER'].item));
      this.data=JSON.parse(JSON.stringify(result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_GOODS_RCPT_528.Response']['ET_GOODSMVT_ITEMS'].item));
     
      // console.log(this.name);ET_GOODSMVT_ITEMS
      this.items = this.name;
      // console.log("Items");
      // console.log(this.items);
    
  });
   
  }
  showPopup(item: any) {
    jQuery('#goodsModel').modal('show');
    for(let i=0; i<this.data.length; i++){
      console.log(this.data[i].MAT_DOC);
      if(item.MAT_DOC._text === this.data[i].MAT_DOC._text){
       
        this.final = this.data[i];
      }
       //use i instead of 0
  }
  }

}
