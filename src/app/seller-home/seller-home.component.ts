import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent {
  constructor(private router:Router, private sellerauthServices:SellerService,
    private http:HttpClient){}
  response:string = "Welcome to your dashboard"


  ngOnInit(){
    this.sellerauthServices.sellerLoggedIn((message:string)=>{
      this.response = message
    })
  }
  logoutButton(){

    this.sellerauthServices.logoutButton()
  }


}
