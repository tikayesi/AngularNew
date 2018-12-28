import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  custForm : FormGroup;

  @Output()
  result = new EventEmitter();
  

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router : Router) { }

  ngOnInit() {
    this.custForm = this.fb.group({
      firstName : ["", Validators.required],
      lastName : ["", Validators.required],
      birthDate : ["", Validators.required],
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

    this.customerService.insert(customer).subscribe(
      (response)=>{
      console.log(JSON.stringify(response));
      this.router.navigate(["/customer-list"]);
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });

    // this.data.insert(customer);
   
  }

}
