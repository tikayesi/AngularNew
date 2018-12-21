import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Customer } from 'src/app/customer/customer';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  result = new EventEmitter();
  customer = Object;
  accForm : FormGroup;

  constructor(private fb: FormBuilder, private data : AccountService, private router : Router) { }

  ngOnInit() {
    this.createForm();
  }

    createForm(){
      this.accForm = this.fb.group({
        openDate : ["", Validators.required],
        balance : ["", Validators.required],
        customerId : ["", Validators.required]
      });
    }
    insert(){
      let account: Account = new Account();
      account.accountNumber = this.accForm.controls['accountNumber'].value;
      account.openDate = this.accForm.controls['openDate'].value;
      account.balance = this.accForm.controls['balance'].value;
  
      let customer = new Customer();
      customer.customerNumber = this.accForm.controls['customerId'].value;
      account.customerId = customer;
      this.data.insertAcc(account).subscribe(
        (response)=>{
        console.log(JSON.stringify(response));
        this.result.emit(true);
        location.href="/account-list";
      },(err)=>{
        alert('error : '+JSON.stringify(err));
      });
    }

  // insertData(){
  //   let account: Account = new Account();
  //   account.openDate = this.accForm.controls['openDate'].value;
  //   account.balance = this.accForm.controls['balance'].value;

  //   let customer = new Customer();
  //   customer.customerNumber - this.accForm.controls['customerId'].value;
  //   account.customerId = customer;

  //   this.data.insertAcc(account);
  //   this.router.navigate(["/account-list"]);
  // }

setSelectedCustomer(customer : Customer){
  this.accForm.controls['customer'].setValue(customer.customerNumber);
  alert(customer.customerNumber);

this.accForm.updateValueAndValidity();
}
cancel(){
  location.href="./account-list";
}
}
