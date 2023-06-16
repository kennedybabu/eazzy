import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CreateLandlordComponent } from './components/create-landlord/create-landlord.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateEstateComponent } from './components/create-estate/create-estate.component';
import { UnpaidVouchersComponent } from './components/unpaid-vouchers/unpaid-vouchers.component';
import { SendBulkSmsComponent } from './components/send-bulk-sms/send-bulk-sms.component';
import { ImportLandlordsComponent } from './components/import-landlords/import-landlords.component';
import { LandlordsListComponent } from './components/landlords-list/landlords-list.component';
import { GeneratedInvoicesComponent } from './components/generated-invoices/generated-invoices.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { StandingOrdersComponent } from './components/standing-orders/standing-orders.component';
import { UnpaidInvoicesComponent } from './components/unpaid-invoices/unpaid-invoices.component';
import { LoanDisbursementsComponent } from './components/loan-disbursements/loan-disbursements.component';
import { LoanTransactionsComponent } from './components/loan-transactions/loan-transactions.component';
import { LoanStatusComponent } from './components/loan-status/loan-status.component';
import { OutstandingLoansComponent } from './components/outstanding-loans/outstanding-loans.component';
import { RemittanceDisbursementComponent } from './components/remittance-disbursement/remittance-disbursement.component';
import { RemittanceBadDebtsComponent } from './components/remittance-bad-debts/remittance-bad-debts.component';
import { RemittanceAnalysisComponent } from './components/remittance-analysis/remittance-analysis.component';
import { CollectionRemittanceAnalysisComponent } from './components/collection-remittance-analysis/collection-remittance-analysis.component';
import { LandlordsComponent } from './pages/landlords/landlords.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatInputModule } from '@angular/material/input';
import { SystemComponent } from './pages/system/system.component';
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    CreateLandlordComponent,
    CreateEstateComponent,
    UnpaidVouchersComponent,
    SendBulkSmsComponent,
    ImportLandlordsComponent,
    LandlordsListComponent,
    GeneratedInvoicesComponent,
    StandingOrdersComponent,
    UnpaidInvoicesComponent,
    LoanDisbursementsComponent,
    LoanTransactionsComponent,
    LoanStatusComponent,
    OutstandingLoansComponent,
    RemittanceDisbursementComponent,
    RemittanceBadDebtsComponent,
    RemittanceAnalysisComponent,
    CollectionRemittanceAnalysisComponent,
    LandlordsComponent,
    SystemComponent,
    AddUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatStepperModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    NgApexchartsModule,
    MatInputModule ,
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
