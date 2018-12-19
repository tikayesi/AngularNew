import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @Input()
  customer: Customer;

  @Output()
  result = new EventEmitter();
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  submitData(){
    this.customerService.update(this.customer).subscribe(
      (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  cancelChanges(){
    this.result.emit(true);
  }

  insertData(){
    this.customerService.insert(this.customer).subscribe(
      (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
}



