import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AccountFormComponent } from '../form/account-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @ViewChild('formAccount')
  formAccount: AccountFormComponent; 

  listAccount: Account[]=[];
  showDetailAcc:boolean=false;
  selectedAccount: Account = new Account();


  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        let customerNumber = params['customerNumber'];
        this.loadDataAcc(customerNumber);
      }
    );
  }

  selectAccount(account: Account) {
    let copyAccount = new Account();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customer = account.customer;
    this.selectedAccount = copyAccount;
    this.showDetailAcc = true;
    // this.formAccount.updateData();
  }

  loadDataAcc(customerNumber?) {
    this.accountService.getListAcc(customerNumber).subscribe((response) => {
      console.log(JSON.stringify(response));
      Object.assign(this.listAccount, response['values']);
    }, (err) => {
      alert('error' + JSON.stringify(err));
    });
    
  }

  prosesResult(result) {
    if (result) {
      this.showDetailAcc = false;
      //this.loadDataAcc();
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
  viewTransaction(account : Account){
    this.router.navigate(['/transaction-list',{accountNumber: account.accountNumber}]);
   }

}
