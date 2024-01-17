import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public authService: AuthService, public router: Router) { }
  email: string = ''
  password: string = ''
  loginUser() {
    const userlogin = {
      email: this.email,
      password: this.password
    }
    6
    this.authService.signIn(userlogin);
  }
}
