import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../data-type';
import { resourceLimits } from 'worker_threads';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  postUrl = 'http://localhost:3000/seller';

  constructor(private http: HttpClient,private router:Router) {}
  sellerSignup(data: SignUp) {
    this.http
      .post(this.postUrl, data, { observe: 'response' })
      .subscribe((result) => {
        console.log(result.body)
        this.isSellerLoggedIn.next(true);
        localStorage.setItem("seller", JSON.stringify(result.body))
        this.router.navigate(['seller-home']);

        return true;
      });

    return false;
  }
  reloadSeller():void{
    
    if(localStorage.getItem("seller"))
    {
      console.log(this.isSellerLoggedIn)
      // this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }

  }
}
