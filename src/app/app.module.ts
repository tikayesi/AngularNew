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
import { ReactiveComponent } from './reactive/reactive.component';

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
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
