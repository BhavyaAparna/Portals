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
  styleUrls: ['./sidenav.component.scss'],
  animations: [
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
    this.router.navigate(['customer/home']);
  }
  profile():void{
    this.router.navigate(['customer/custProfile']);
  }
  inquiry():void{
    this.router.navigate(['customer/custinquiry']);
  }
  sales():void{
    this.router.navigate(['customer/custsales']);
  }
  delivery():void{
    this.router.navigate(['customer/custdelivery']);
  }
  invoice():void{
    this.router.navigate(['customer/custinvoice']);
  }
  payments():void{
    this.router.navigate(['customer/custpayment']);
  }
  credit():void{
    this.router.navigate(['customer/custcredit']);
  }
  debit():void{
    this.router.navigate(['customer/custdebit']);
  }
  
  logout():void{
    this.confirmDialogService.confirmThis("Are you sure to Logout?", () =>{  
   
     this.toastr.info('Customer Logged out');
     this.router.navigate(['custlogin']);
    }, ()=> {
      this.toastr.info('Customer Logged in');
    })  
    
  }
}