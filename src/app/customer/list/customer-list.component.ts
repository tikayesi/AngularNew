import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { CustomerFormComponent } from '../form/customer-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @ViewChild('formCustomer')
  formCustomer: CustomerFormComponent;

  listCustomer: Customer[] = [];
  showDetail: boolean = true;
  selectedCustomer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  selectCustomer(customer: Customer) {
    let copyCustomer = new Customer();
    copyCustomer.customerNumber = customer.customerNumber;
    copyCustomer.firstName = customer.firstName;
    copyCustomer.lastName = customer.lastName;
    copyCustomer.birthDate = customer.birthDate;
    copyCustomer.username = customer.username;
    copyCustomer.password = customer.password;
    copyCustomer.phoneNumber = customer.phoneNumber;
    copyCustomer.phoneType = customer.phoneType;
    this.selectedCustomer = copyCustomer;
    this.showDetail = true;
    this.formCustomer.updateData();
  }

  loadData() {
    this.customerService.getList().subscribe((response) => {
      console.log(JSON.stringify(response));
      
      Object.assign(this.listCustomer, response['values']);
    }, (err) => {
      alert('error' + JSON.stringify(err));
    });
  }

  prosesResult(result) {
    if (result) {
      this.showDetail = false;
      this.loadData();
    }
  }

  delete(customerNumber) {
    // alert(customerNumber)
    this.customerService.delete(customerNumber).subscribe(
      (response) => {
        // console.log(JSON.stringify(response));
        location.href = "/customer-list";
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      });

  }

 viewAccount(customer : Customer){
  this.router.navigate(['/account-list',{customerNumber: customer.customerNumber}]);
 }

}



