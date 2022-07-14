import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustloginComponent } from './custlogin/custlogin.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VenloginComponent } from './venlogin/venlogin.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';

const appRoot: Routes = [{path: '', component: HomeComponent},
                         {path: 'home', component: HomeComponent},
                         {path: 'custlogin', component: CustloginComponent},
                         {path: 'header', component: HeaderComponent},
                         {path: 'venlogin', component: VenloginComponent},
                         {path: 'emplogin', component: EmploginComponent},
                         {path:'vendor', loadChildren: ()=> import('./Vendor/vendor.module').then((m) => m.VendorModule)},
                         {path:'customer', loadChildren: ()=> import('./Customer/customer.module').then((m) => m.CustomerModule)},
                         {path:'employee', loadChildren: ()=> import('./Employee/employee.module').then((m) => m.EmployeeModule)},
                         {path:'confirm', loadChildren: ()=> import('./confirm-dialog/confirm-dialog.module').then((m) => m.ConfirmDialogModule)},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustloginComponent,
    HeaderComponent,
    VenloginComponent,
    EmploginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfirmDialogModule,
    RouterModule.forRoot(appRoot),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
