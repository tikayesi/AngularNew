import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/transaction/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { Account } from 'src/app/account/account';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  account = Object;
  trxForm : FormGroup;

  @Output()
  result = new EventEmitter();

  constructor(private fb: FormBuilder, private data : TransactionService, private router : Router) { }

  ngOnInit() {
    this.trxForm = this.fb.group({
      idTransaction:[''],
      type : ["", Validators.required],
      amount: ["", Validators.required],
      amountSign : ["", Validators.required],
      accountId : ["", Validators.required]
    });
  }

  insert(){
    let transaction: Transaction = new Transaction();
    transaction.idTransaction = this.trxForm.controls['idTransaction'].value;
    transaction.type = this.trxForm.controls['type'].value;
    transaction.amount = this.trxForm.controls['amount'].value;
    transaction.amountSign = this.trxForm.controls['amountSign'].value;

    let account = new Account();
    account.accountNumber = this.trxForm.controls['accountId'].value;
    transaction.accountId = account;

    this.data.insertTr(transaction).subscribe(
      (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      //location.href="/account-list";
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });

  }
    setSelectedAccount(account : Account){
      this.trxForm.controls['account'].setValue(account.accountNumber);
      alert(account.accountNumber);
    
    this.trxForm.updateValueAndValidity();
    }
    cancel(){
      location.href="./transaction-list";
  }
}
