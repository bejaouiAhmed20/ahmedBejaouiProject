import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Classes/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
  constructor(private accountService:AccountService){}
  actif=true;
  editPassword(){
    this.actif=false;
  }
  accounts:Account[]=[]
  onModifier(a:Account,pass:string){
    a.password=pass
    this.accountService.updateAccount(a.id, a).subscribe (
    data => {
    this.actif=true;
    alert('Account changed  :) ')
  }
    )
    }
    
    
  ngOnInit(): void {
    this.accountService.getAccount().subscribe(
      data=>{
        this.accounts=data
        
      }
    )
    
  }

}
