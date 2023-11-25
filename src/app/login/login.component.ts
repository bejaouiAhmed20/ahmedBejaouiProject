import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Account } from '../Classes/account';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  tab:Account[]=[]
constructor(private authService:AuthService,private router:Router,private accountService:AccountService,private fb:FormBuilder){}
loginForm:FormGroup=this.fb.nonNullable.group(
  {
    username:[,[Validators.required,Validators.minLength(3)]],
    password:[,[Validators.required]]
  }
)
public get Username(){
  return this.loginForm.get('username')
}
public get Password(){
  return this.loginForm.get('password')
}
loopTable(x:string,y:string){
  for(let t of this.tab){
    if(x==t.username && y==t.password){
      return true;
    }
  }
  return false;
}
submit(){
  if(this.loopTable(this.Username?.value, this.Password?.value)){
    this.authService.Adminlogin();
    this.router.navigate(['/admin'])
  }
  else{
    alert(' Somthing Wrong ! Check your information  ')
  }
}
  ngOnInit(): void {
    this.accountService.getAccount().subscribe(
      data=>{
        this.tab=data
      }
    )
  }

}