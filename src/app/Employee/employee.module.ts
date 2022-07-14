import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { PayslipComponent } from './payslip/payslip.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterPipe } from './filter.pipe';
const employeeRoot=[ {
  path: '',
  component: DashboardComponent,
  children: [
    { path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent},
    {path: 'leave', component: LeaveComponent},
    {path: 'payslip', component: PayslipComponent},
    {path: 'profile', component: ProfileComponent}
  ],
},
];

@NgModule({
  declarations: [SidenavComponent, BodyComponent, DashboardComponent, HomeComponent, LeaveComponent, PayslipComponent, ProfileComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    RouterModule.forChild(employeeRoot),
  ]
})
export class EmployeeModule { }
