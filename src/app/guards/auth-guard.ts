import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const authService=inject(AuthService);
  const userRole=authService.getRole();
  if(userRole==='admin'){
    return true;
  }else{
    router.navigate(['/unauthorized']);
    return false;
  }
};
