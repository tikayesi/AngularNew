import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  getListTr(){
    return this.httpClient.get('http://localhost:8080/transaction/translist');
  }
  updateTr(transaction: Transaction){
    return this.httpClient.put('http://localhost:8080/transaction/transaput', transaction);
  }
  insertTr(transaction: Transaction){
    return this.httpClient.post('http://localhost:8080/transaction/transpost', transaction);
  }

  deleteTr(transaction){
    console.log("deleting " + transaction);
    return this.httpClient.delete('http://localhost:8080/transaction/transdelet/'+ transaction);
  }
}
