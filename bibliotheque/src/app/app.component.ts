import { Component } from '@angular/core';
import { AuthService } from './authentification/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bibliotheque';
  constructor(public authService: AuthService, private router: Router) {}
  changeRoute(route: string) {
    this.router.navigate([route]);
  }
  
logout() {
this.authService.doLogout();
this.router.navigate(['/login']);

}
}
