import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Account } from '../account';
import { AccountService} from '../account.service';
import {OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/customer/customer';


@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  @Input()
  account: Account;

  @Output()
  result = new EventEmitter();
  accountFormGroup: FormGroup;
  constructor(private accountService: AccountService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accountFormGroup = this.formBuilder.group({
      accountNumber: [''],
      openDate: ['', Validators.required],
      balance: ['', Validators.required],
      customer: ['', Validators.required],
    });
    this.updateData();
  }

  setSelectedCustomer(customer : Customer){
    // this.selectedCustomer = customer;
    this.accountFormGroup.controls['customer'].setValue(customer.customerNumber);
    this.accountFormGroup.updateValueAndValidity();
  }

  updateData(){
    this.setDataToForm(this.account);
  }

  setDataToForm(account){
    if(this.account){
      this.accountFormGroup.controls['accountNumber'].setValue(this.account.accountNumber);
      this.accountFormGroup.controls['openDate'].setValue(this.account.openDate);
      this.accountFormGroup.controls['balance'].setValue(this.account.balance);
      this.accountFormGroup.controls['customer'].setValue(this.account.customer.customerNumber);
    }
    }

  submit(){

    let account: Account = new Account();
    account.accountNumber = this.accountFormGroup.controls['accountNumber'].value;
    account.openDate = this.accountFormGroup.controls['openDate'].value;
    account.balance = this.accountFormGroup.controls['balance'].value;

    let customer = new Customer();
    customer.customerNumber = this.accountFormGroup.controls['customer'].value;
    account.customer = customer;

    this.accountService.updateAcc(account).subscribe(
      (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      // location.href="/account-list";
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  cancel(){
    this.result.emit(true);
  }

  insert(){
    let account: Account = new Account();
    account.accountNumber = this.accountFormGroup.controls['accountNumber'].value;
    account.openDate = this.accountFormGroup.controls['openDate'].value;
    account.balance = this.accountFormGroup.controls['balance'].value;

    // let customer = new Customer();
    account.customer = this.accountFormGroup.controls['customer'].value;
    // account.customer = customer;
    
    this.accountService.insertAcc(account).subscribe(
      (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      location.href="/account-list";
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }

}
