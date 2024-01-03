import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { LogIn, SignUp } from '../data-type';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
})
export class SellerAuthComponent {
  showLogin = false;
  userRelatedMessage: string = '';

  constructor(
    private sellerauthService: SellerService,
    private router: Router
  ) {}
  ngOnInit() {
    this.sellerauthService.reloadSeller();
  }
  onSignup(data: SignUp): any {
    this.sellerauthService.sellerSignup(data, (message: string) => {
      this.userRelatedMessage = message
      this.showLogin = true
    });
    console.log(this.userRelatedMessage);
  }
  onLoginToggleButton() {
    this.showLogin = !this.showLogin;
  }
  onLogin(data: LogIn) {
    console.log(data)
    this.sellerauthService.sellerLogin(data,(message:string)=>{
      
    })

  }
  
}
