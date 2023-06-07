import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CreateLandlordComponent } from 'src/app/components/create-landlord/create-landlord.component';
import { CreateEstateComponent } from 'src/app/components/create-estate/create-estate.component';
import { UnpaidVouchersComponent } from 'src/app/components/unpaid-vouchers/unpaid-vouchers.component';
import { SendBulkSmsComponent } from 'src/app/components/send-bulk-sms/send-bulk-sms.component';
import { ImportLandlordsComponent } from 'src/app/components/import-landlords/import-landlords.component';
import { LandlordsListComponent } from 'src/app/components/landlords-list/landlords-list.component';
import { GeneratedInvoicesComponent } from 'src/app/components/generated-invoices/generated-invoices.component';
import { UnpaidInvoicesComponent } from 'src/app/components/unpaid-invoices/unpaid-invoices.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private dialog: MatDialog){} 

  openDialog() {
    const dialogRef = this.dialog.open(CreateLandlordComponent, {
      minHeight: 'auto', width: '80%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  openCreateEstDialog() {
    const dialogRef = this.dialog.open(CreateEstateComponent, {
      minHeight: 'auto', width: '80%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  openUnpaidVouch() {
    const dialogRef = this.dialog.open(UnpaidVouchersComponent, {
      minHeight: 'auto', width: '60%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  openSendBulkSMSDialog() {
    const dialogRef = this.dialog.open(SendBulkSmsComponent, {
      minHeight: 'auto', width: '80%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  importLandlords() {
    const dialogRef = this.dialog.open(ImportLandlordsComponent, {
      minHeight: 'auto', width: '80%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  landslordsList() {
    const dialogRef = this.dialog.open(LandlordsListComponent, {
      minHeight: 'auto', width: '60%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  generatedInvoices() {
    const dialogRef = this.dialog.open(GeneratedInvoicesComponent, {
      minHeight: 'auto', width: '50%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  standingOrdersDialog() {
    const dialogRef = this.dialog.open(GeneratedInvoicesComponent, {
      minHeight: 'auto', width: '50%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  unpaidInvoicesDialog() {
    const dialogRef = this.dialog.open(UnpaidInvoicesComponent, {
      minHeight: 'auto', width: '50%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }


  loanDisbursementsDiaolog() {
    const dialogRef = this.dialog.open(UnpaidInvoicesComponent, {
      minHeight: 'auto', width: '50%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }
  
}
