import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent {
  constructor(private router:Router){}

  logoutButton(){
    localStorage.removeItem("seller")
    this.router.navigate(['seller-auth'])
  }
}
