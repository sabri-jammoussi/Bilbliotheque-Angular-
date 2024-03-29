import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authserv: AuthService, private router: Router) { }
  user: User = new User()
  
  Ajoutuser = () => {
    this.authserv.signUp(this.user).subscribe((data => {
      this.router.navigate(['login']);
    }))
  }


}
