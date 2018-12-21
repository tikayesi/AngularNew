import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { TransactionFormComponent } from '../form/transaction-form.component';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  @ViewChild('formTransaction')
  formTransaction: TransactionFormComponent; 

  listTransaction: Transaction[]=[];
  showDetailTr:boolean=true;
  selectedTransaction: Transaction = new Transaction();
  

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.loadDataTr();
  }

  selectTransaction(transaction: Transaction) {
    let copyTransaction = new Transaction();
    copyTransaction.idTransaction = transaction.idTransaction;
    copyTransaction.type = transaction.type;
    copyTransaction.amount = transaction.amount;
    copyTransaction.amountSign = transaction.amountSign;
    copyTransaction.accountId = transaction.accountId;
    this.selectedTransaction = copyTransaction;
    this.showDetailTr = true;
    this.formTransaction.updateData();
  }


  loadDataTr() {
    this.transactionService.getListTr().subscribe((response) => {
      console.log(JSON.stringify(response));
      Object.assign(this.listTransaction, response);
    }, (err) => {
      alert('error' + JSON.stringify(err));
    });
  }
  prosesResult(result) {
    if (result) {
      this.showDetailTr = false;
      this.loadDataTr();
    }
  }
  deleteTr(idTransaction) {
    this.transactionService.deleteTr(idTransaction).subscribe(
      (response)=>{
        location.href="/transaction-list";
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
    
  }
}
