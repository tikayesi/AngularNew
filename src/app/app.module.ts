import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestlagiComponent } from './test/testlagi.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { CustomerService } from './customer/customer.service';
import { AccountComponent } from './account/account.component';
import { AccountListComponent } from './account/list/account-list.component';
import { AccountFormComponent } from './account/form/account-form.component';
import { EnigmaPipe } from './customer/enigma.pipe';
import { InsertComponent } from './insert/insert.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionFormComponent } from './transaction/form/transaction-form.component';
import { TransactionListComponent } from './transaction/list/transaction-list.component';
import { SharedComponent } from './shared/shared.component';
import { ComboCustomerComponent } from './shared/component/customer/combo-customer.component';
import { CreateAccountComponent } from './account/create/create-account.component';
import { CreateCustomerComponent } from './customer/create/create-customer.component';
import { CreateTransactionComponent } from './transaction/create/create-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestlagiComponent,
    CustomerComponent,
    ParentComponent,
    ChildComponent,
    CustomerFormComponent,
    CustomerListComponent,
    AccountComponent,
    AccountListComponent,
    AccountFormComponent,
    EnigmaPipe,
    InsertComponent,
    TransactionComponent,
    TransactionFormComponent,
    TransactionListComponent,
    SharedComponent,
    ComboCustomerComponent,
    CreateAccountComponent,
    CreateCustomerComponent,
    CreateTransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
