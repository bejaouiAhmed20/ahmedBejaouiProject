import { Injectable } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public Adminlogin(){
    localStorage.setItem('login','connected');
  }
  public logout(){
    localStorage.removeItem('login')
  }
}
