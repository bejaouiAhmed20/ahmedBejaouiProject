import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth:AuthService,private router:Router){}
  navigate(){
    if(localStorage.getItem('login')=='connected'){
      this.router.navigate(['/admin'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }
 

}
