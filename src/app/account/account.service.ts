import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Account} from './account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  getListAcc(customerNumber){
    let params : String="";
    if(customerNumber){
      params="?customerId="+customerNumber;
    }
    // return this.httpClient.get('http://localhost:8080/account/list'+ params);
    return this.httpClient.get('http://localhost:3000/accounts'+ params);
  }

  // updateAcc(account: Account){
  //   return this.httpClient.put('http://localhost:3000/account', account);
  // }
  updateAcc(account: Account){
    return this.httpClient.put('http://localhost:8080/account/iniput', account);
  }

  insertAcc(account: Account){
    return this.httpClient.post('http://localhost:3000/account/', account);
  }
  // insertAcc(account: Account){
  //   return this.httpClient.post('http://localhost:8080/account/inipost', account);
  // }
  // delete(account){
  //   return this.httpClient.delete('http://localhost:3000/account/'+ account);
  // }
  delete(account){
    return this.httpClient.delete('http://localhost:8080/account/inidelet/'+ account);
  }
}
