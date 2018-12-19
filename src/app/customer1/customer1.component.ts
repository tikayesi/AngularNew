import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  FirstName = "test";
  Lastname = "test";
  Username = "test";
  Password = "test";
  PhoneNumber:number;
  PhoneType = "test";
  showChild:boolean;
  public CData: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ok(){
    this.router.navigate(['/testlagi',{testData: this.FirstName}]);
  }
  show(){
    this.showChild=true;
  }
  hide(){
    this.showChild=false;
  }
  

}
