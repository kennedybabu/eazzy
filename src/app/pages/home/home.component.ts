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
import { LoanTransactionsComponent } from 'src/app/components/loan-transactions/loan-transactions.component';
import { OutstandingLoansComponent } from 'src/app/components/outstanding-loans/outstanding-loans.component';
import { RemittanceDisbursementComponent } from 'src/app/components/remittance-disbursement/remittance-disbursement.component';
import { RemittanceBadDebtsComponent } from 'src/app/components/remittance-bad-debts/remittance-bad-debts.component';
import { RemittanceAnalysisComponent } from 'src/app/components/remittance-analysis/remittance-analysis.component';
import { CollectionRemittanceAnalysisComponent } from 'src/app/components/collection-remittance-analysis/collection-remittance-analysis.component';

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

  openUnpaidVouchersDialog() {
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
  

  loanTransacsDiaotionslog() {
    const dialogRef = this.dialog.open(LoanTransactionsComponent, {
      minHeight: 'auto', width: '50%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  loanStatusDialog() {
    const dialogRef = this.dialog.open(LoanTransactionsComponent, {
      minHeight: 'auto', width: '50%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  outstandingLoansDialog() {
    const dialogRef = this.dialog.open(OutstandingLoansComponent, {
      minHeight: 'auto', width: '50%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }

  remittanceDisbursementDialog() {
    const dialogRef = this.dialog.open(RemittanceDisbursementComponent, {
      minHeight: 'auto', width: '50%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }


  remittanceAnalysisDialog() {
    const dialogRef = this.dialog.open(RemittanceAnalysisComponent, {
      minHeight: 'auto', width: '50%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }


  remittanceBadDebtsDialog() {
    const dialogRef = this.dialog.open(RemittanceBadDebtsComponent, {
      minHeight: 'auto', width: '70%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }


  collectionsRemittanceDialog() {
    const dialogRef = this.dialog.open(CollectionRemittanceAnalysisComponent, {
      minHeight: 'auto', width: '70%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
  }
}
