import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  listAccount: Account[]=[];
  showDetailAcc:boolean=true;
  selectedAccount: Account = new Account();

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.loadDataAcc();
  }
  selectAccount(account: Account) {
    let copyAccount = new Account();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customerId = account.customerId;
    this.selectedAccount = copyAccount;
    this.showDetailAcc = true;
  }
  loadDataAcc() {
    this.accountService.getListAcc().subscribe((response) => {
      console.log(JSON.stringify(response));
      Object.assign(this.listAccount, response);
    }, (err) => {
      alert('error' + JSON.stringify(err));
    });
  }
  prosesResult(result) {
    if (result) {
      this.showDetailAcc = false;
      this.loadDataAcc();
    }
  }
  deleteacc(accountNumber) {
    // alert(customerNumber)
    this.accountService.delete(accountNumber).subscribe(
      (response)=>{
        location.href="/account-list";
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
    
  }
}
