import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Account} from './account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  getListAcc(){
    return this.httpClient.get('http://localhost:8080/account/inilist');
  }

  updateAcc(account: Account){
    return this.httpClient.put('http://localhost:8080/account/iniput', account);
  }

  insertAcc(account: Account){
    return this.httpClient.post('http://localhost:8080/account/inipost', account);
  }
  delete(account){
    return this.httpClient.delete('http://localhost:8080/account/inidelet/'+ account);
  }
}
