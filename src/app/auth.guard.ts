import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SellerService } from './services/seller.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sellerService: SellerService, private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(localStorage.getItem("seller"))
    {
      return true;
    }
    console.log("haghaha")
    return this.sellerService.isSellerLoggedIn;
    
  }
}
