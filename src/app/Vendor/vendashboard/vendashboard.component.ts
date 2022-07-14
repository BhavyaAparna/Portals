import { Component, OnInit } from '@angular/core';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-vendashboard',
  templateUrl: './vendashboard.component.html',
  styleUrls: ['./vendashboard.component.css']
})
export class VendashboardComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
