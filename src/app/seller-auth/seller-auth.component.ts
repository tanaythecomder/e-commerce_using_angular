import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { SignUp } from '../data-type';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',

})
export class SellerAuthComponent {

  showLogin = false;
 
  constructor(private sellerauthService:SellerService ,private router:Router){}
  ngOnInit(){
    this.sellerauthService.reloadSeller()
  }
  onSignup(data:SignUp):any{
    this.sellerauthService.sellerSignup(data)
    console.log(data)
  }
  onLoginToggleButton(){
    this.showLogin = !this.showLogin
  }
}
