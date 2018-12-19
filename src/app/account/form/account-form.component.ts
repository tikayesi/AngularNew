import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Account } from '../account';
import { AccountService} from '../account.service';
import {OnInit} from '@angular/core';

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
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }
  submit(){
    this.accountService.updateAcc(this.account).subscribe(
      (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  cancel(){
    this.result.emit(true);
  }
  insert(){
    this.accountService.insertAcc(this.account).subscribe(
      (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }

}
