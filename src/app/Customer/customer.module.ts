import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CustProfileComponent } from './cust-profile/cust-profile.component';
import { CustcreditComponent } from './custcredit/custcredit.component';
import { CustdebitComponent } from './custdebit/custdebit.component';
import { CustdeliveryComponent } from './custdelivery/custdelivery.component';
import { CustinquiryComponent } from './custinquiry/custinquiry.component';
import { CustinvoiceComponent } from './custinvoice/custinvoice.component';
import { CustpaymentComponent } from './custpayment/custpayment.component';
import { CustsalesComponent } from './custsales/custsales.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
const customerRoot=[ {
  path: '',
  component: CustDashboardComponent,
  children: [
    { path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent},
    {path: 'custDashboard', component: CustDashboardComponent},
    {path: 'custProfile', component: CustProfileComponent},
    {path: 'custinquiry', component: CustinquiryComponent},
    {path: 'custsales', component: CustsalesComponent},
    {path: 'custdelivery', component: CustdeliveryComponent},
    {path: 'custinvoice', component: CustinvoiceComponent},
    {path: 'custpayment', component: CustpaymentComponent},
    {path: 'custcredit', component: CustcreditComponent},
    {path: 'custdebit', component: CustdebitComponent},

  ],
},
];

@NgModule({
  declarations: [CustDashboardComponent, BodyComponent, SidenavComponent, CustProfileComponent, CustcreditComponent, CustdebitComponent, CustdeliveryComponent, CustinquiryComponent, CustinvoiceComponent, CustpaymentComponent, CustsalesComponent, HomeComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    
    RouterModule.forChild(customerRoot),
  ]
})
export class CustomerModule { }
