import { Component, OnInit ,Output, EventEmitter, HostListener} from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogModule } from 'src/app/confirm-dialog/confirm-dialog.module';
import { ConfirmDialogService } from 'src/app/confirm-dialog/confirm-dialog.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
 

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }
  constructor(private router: Router,private toastr: ToastrService,private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  home():void{
    this.router.navigate(['employee/home']);
  }
  leave():void{
    this.router.navigate(['employee/leave']);
  }
  payslip():void{
    this.router.navigate(['employee/payslip']);
  }
  profile():void{
    this.router.navigate(['employee/profile']);
  }
  
  logout():void{
    // this.router.navigate(['home']);
    // this.toastr.info('Employee Logged out');
    this.confirmDialogService.confirmThis("Are you sure to Logout?", () =>{  
   
      this.toastr.info('Employee Logged out');
      this.router.navigate(['emplogin']);
     }, ()=> {
       this.toastr.info('Employee Logged in');
     })  
    
  }
}