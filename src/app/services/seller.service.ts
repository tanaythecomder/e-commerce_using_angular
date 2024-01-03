import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogIn, SignUp } from '../data-type';
import { resourceLimits } from 'worker_threads';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  postUrl = 'http://localhost:8000/api/seller/';

  constructor(private http: HttpClient, private router: Router) {}

  sellerSignup(data: SignUp, callback: (message: string) => void): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let message = '';

    this.http.post(this.postUrl + 'signup', data, { headers }).subscribe(
      (result) => {
        message = 'User SignedUp Successfully';
        callback(message);
      },
      (error) => {
        console.log(error.error.error);
        message = error.error.error;
        callback(message);
      }
    );
  }

  sellerLogin(
    data: LogIn,
    callback: (message: string, resultObject?: any) => void
  ): void {
    const headers = {
      'Content-Type': 'application/json',
    };
    let message = '';
    this.http.post(this.postUrl + 'login', data, { headers }).subscribe(
      (result: any) => {
        console.log(result);

        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result));
        this.router.navigate(['seller-home']);
        message = 'Login Successfully';
        callback(message, result);
      },
      (error) => {
        console.log(error);
        message = error.error.error;
        callback(message);
      }
    );
  }

  reloadSeller(): void {
    if (localStorage.getItem('seller')) {
      console.log(this.isSellerLoggedIn);
      // this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  logoutButton() {
    localStorage.removeItem('seller');
    this.router.navigate(['seller-auth']);
  }
  sellerLoggedIn(callback: (message: string) => void): void {
    const tokenString = localStorage.getItem('seller');
    if (tokenString) {
      const token = JSON.parse(tokenString);
      console.log(token);

      const headers = new HttpHeaders()
        .set('Authorization', `Bearer ${token.token}`)
        .set('Content-Type', 'application/json');

      // Set params
      const params = new HttpParams().set('username', token.username);
      // console.log(token.username, params);

      this.http
        .get(this.postUrl + 'sellergreeting', { headers, params })
        .subscribe(
          (result: any) => {
            callback(result.message)
          },
          (error) => {
            // Handle the error
          }
        );
    } else {
      console.error('Token not found in localStorage');
    }
  }
}
