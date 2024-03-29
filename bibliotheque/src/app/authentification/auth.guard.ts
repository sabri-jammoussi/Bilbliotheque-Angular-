import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
 
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.isLoggedIn()!==true) {
    window.alert('Access not allowed!');
    router.navigate(['login']);
    }
    
  return true;
};
