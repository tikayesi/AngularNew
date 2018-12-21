import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/account/account.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  custForm : FormGroup;

  constructor(private fb: FormBuilder, private data : AccountService, private router : Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.custForm = this.fb.group({
      firstName : ["", Validators.required],
      lastName : ["", Validators.required],
      birtDate : ["", Validators.required],
      username : ["", Validators.required],
      password : ["", Validators.required],
      phoneNumber : ["", Validators.required],
      phoneType : ["", Validators.required]
    });
  }

  insertData(){
    let customer: Customer = new Customer();
    customer.firstName = this.custForm.controls['firstName'].value;
    customer.lastName = this.custForm.controls['lastName'].value;
    customer.birthDate = this.custForm.controls['birthDate'].value;
    customer.username = this.custForm.controls['username'].value;
    customer.password = this.custForm.controls['password'].value;
    customer.phoneNumber = this.custForm.controls['phoneNumber'].value;
    customer.phoneType = this.custForm.controls['phoneType'].value;

    this.data.insert(customer);
    this.router.navigate(["/customer-list"]);
  }

}
