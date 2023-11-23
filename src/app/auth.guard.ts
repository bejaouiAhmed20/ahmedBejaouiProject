import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('login')== 'connected'){
    return true;
  }
  else{
    return false;
  }
};
