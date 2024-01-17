import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public authService: AuthService, private router: Router) {}
  changeRoute(route: string) {
    this.router.navigate([route]);
  }
  
logout() {
this.authService.doLogout();
this.router.navigate(['/login']);

}
}
