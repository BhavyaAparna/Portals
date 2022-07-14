import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';  
  
  
import {ConfirmDialogService} from './confirm-dialog.service';
import { ConfirmDialogComponent } from './confirm-dialog.component'; 


@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    BrowserModule,  
    CommonModule
  ],
  exports: [  
   ConfirmDialogComponent  
],  
providers: [  
   ConfirmDialogService  
]  
})  
export class ConfirmDialogModule  
{  
}  