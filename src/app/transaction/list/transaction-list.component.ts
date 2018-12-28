import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { TransactionFormComponent } from '../form/transaction-form.component';
import { ActivatedRoute } from '@angular/router';

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
  

  constructor(private transactionService: TransactionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        let accountNumber = params['accountNumber'];
        this.loadDataTr(accountNumber);
      }
    );
    // this.loadDataTr();
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


  loadDataTr(accountNumber?) {
    this.transactionService.getListTr(accountNumber).subscribe((response) => {
      console.log(JSON.stringify(response));
      Object.assign(this.listTransaction, response['values']);
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
