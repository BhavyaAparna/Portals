import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }


  toHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
    console.log("Home !!!");
  }
  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
    console.log("About !!!");
  }
  toPortals(){
    document.getElementById("portals").scrollIntoView({behavior:"smooth"});
    console.log("Contact !!!");
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
    console.log("Contact !!!");
  }
}
