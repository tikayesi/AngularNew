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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
