import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestlagiComponent } from './test/testlagi.component';
import { CustomerComponent } from './customer/customer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { AccountListComponent } from './account/list/account-list.component';
import { AccountFormComponent } from './account/form/account-form.component';
import { TransactionFormComponent } from './transaction/form/transaction-form.component';
import { TransactionListComponent } from './transaction/list/transaction-list.component';
import { CreateAccountComponent } from './account/create/create-account.component';
import { CreateCustomerComponent } from './customer/create/create-customer.component';

const routes: Routes = [
  {
    path:'test',
    component: TestComponent
  },
  {
    path:'testlagi',
    component: TestlagiComponent
  },
  {
    path:'customer-list',
    component: CustomerListComponent
  },
  {
  path:'customer-form',
    component: CustomerFormComponent
  },
  {
    path:'parent',
    component: ParentComponent
  },
  {
    path:'child',
    component: ChildComponent
  },
  {
    path:'account-list',
    component: AccountListComponent
  },
  {
    path: 'account-form',
    component: AccountFormComponent
  },
  {
    path: 'transaction-form',
    component: TransactionFormComponent
  },
  {
    path: 'transaction-list',
    component: TransactionListComponent
  },
  {
    path: 'create-form',
    component: CreateAccountComponent
  },
  {
    path: 'create-customer',
    component: CreateCustomerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
