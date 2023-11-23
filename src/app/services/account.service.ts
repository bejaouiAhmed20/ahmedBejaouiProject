import { Injectable } from '@angular/core';
import { Account } from '../Classes/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = "http://localhost:3000/account"
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http:HttpClient){}
  getAccount():Observable<Account[]>{
    return this.http.get<Account[]>(URL);
  }
  updateAccount(id:number, a:Account):Observable<Account>{
    return this.http.put<Account>(URL+"/"+id, a);
    }
    
    
}
