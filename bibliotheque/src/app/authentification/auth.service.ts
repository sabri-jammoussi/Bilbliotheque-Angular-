import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl = "http://localhost:5000/api/users"
  constructor(private http: HttpClient, public router: Router) { }
  // Sign-up
  signUp(user: User): Observable<any> {
    return this.http.post(this.baseurl + '/', user);
  }
  // Sign-in
  signIn(user: any) {
    return this.http
      .post<any>(this.baseurl + "/login/", user)
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('refresh_token', res.refreshToken);

        },
        error: (e: any) => {
          console.log(e);
          alert("Error !")
        },
        complete: () => {
          this.router.navigate(['livres']);
        }
      });
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  isLoggedIn(): boolean {
  if (typeof localStorage !== 'undefined') {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  return false; // Handle the case where localStorage is not available
}

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      
      this.router.navigate(['login']);
    }
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
    } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
    }
    //refresh
    refreshToken(token: string) {
    const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.baseurl +'/refreshToken/', {
    refreshToken: token
    }, httpOptions);
    }
}

