import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorRoutingModule } from './vendor-routing.module';
import { FormsModule } from '@angular/forms';
import { VendashboardComponent } from './vendashboard/vendashboard.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileComponent } from './profile/profile.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { GoodsComponent } from './goods/goods.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { QuotationComponent } from './quotation/quotation.component';
import { FilterPipe } from './filter.pipe';
const vendorRoot=[ {
  path: '',
  component: VendashboardComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'credit', component: CreditComponent },
    { path: 'debit', component: DebitComponent },
    { path: 'goods', component: GoodsComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'order', component: OrderComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quotation', component: QuotationComponent }

  ],
},
];
@NgModule({
  declarations: [VendashboardComponent, BodyComponent, SidenavComponent, ProfileComponent, CreditComponent, DebitComponent, GoodsComponent, InvoiceComponent, OrderComponent, PaymentComponent, HomeComponent, QuotationComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    VendorRoutingModule,
    RouterModule.forChild(vendorRoot),
  ]
})
export class VendorModule { }
