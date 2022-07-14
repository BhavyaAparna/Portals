import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['custlogin']);
    //this.toastr.error('Invalid Credentials');
  }
  toHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }
  toPortals(){
    document.getElementById("portals").scrollIntoView({behavior:"smooth"});
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }
  vendor(){
    this.router.navigate(['venlogin']);
  }
  employee(){
    this.router.navigate(['emplogin']);
  }
  goToLink(url: string){
    window.open(url, "_blank");
}
}
