import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../transaction';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { Account } from 'src/app/account/account';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  @Input()
  transaction: Transaction;

  @Output()
  result = new EventEmitter();
  transactionFormGroup: FormGroup;
  constructor(private transactionService: TransactionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  
  this.transactionFormGroup = this.formBuilder.group({
    idTransaction:[''],
    type: ['', Validators.required],
    amount: ['', Validators.required],
    amountSign:['', Validators.required],
    accountId: ['', Validators.required]
  });
  this.updateData();
  }
  updateData(){
    this.setDataToForm(this.transaction);
  }

  setDataToForm(transaction){
    if(this.transaction){
      this.transactionFormGroup.controls['idTransaction'].setValue(this.transaction.idTransaction);
      this.transactionFormGroup.controls['type'].setValue(this.transaction.type);
      this.transactionFormGroup.controls['amount'].setValue(this.transaction.amount);
      this.transactionFormGroup.controls['amountSign'].setValue(this.transaction.amountSign);
      this.transactionFormGroup.controls['accountId'].setValue(this.transaction.accountId.accountNumber)
    }
  }

  submitTr(){
  let transaction: Transaction = new Transaction();
  transaction.idTransaction = this.transactionFormGroup.controls['idTransaction'].value;
  transaction.type = this.transactionFormGroup.controls['type'].value;
  transaction.amount = this.transactionFormGroup.controls['amount'].value;
  transaction.amountSign = this.transactionFormGroup.controls['amountSign'].value;
  transaction.accountId = this.transactionFormGroup.controls['accountId'].value;
  let account = new Account();
  account.accountNumber = this.transactionFormGroup.controls['accountId'].value;
  transaction.accountId = account;
  
  this.transactionService.updateTr(transaction).subscribe(
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

insertT(){
  let transaction: Transaction = new Transaction();
  transaction.idTransaction = this.transactionFormGroup.controls['idTransaction'].value;
  transaction.type = this.transactionFormGroup.controls['type'].value;
  transaction.amount = this.transactionFormGroup.controls['amount'].value;
  transaction.amountSign = this.transactionFormGroup.controls['amountSign'].value;

  let account = new Account();
  account.accountNumber = this.transactionFormGroup.controls['accountId'].value;
  transaction.accountId = account;
  this.transactionService.insertTr(transaction).subscribe(
    (response)=>{
    console.log(JSON.stringify(response));
    this.result.emit(true);
  },(err)=>{
    alert('error : '+JSON.stringify(err));
  });
}

}
