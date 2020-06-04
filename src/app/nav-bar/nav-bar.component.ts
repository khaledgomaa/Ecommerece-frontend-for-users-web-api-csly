import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginApi } from '../shared/services/login.service';
import { CategoryApi } from '../shared/services/category.service';
import { CartManager } from '../shared/services/numOfCartItems.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router , private loginService: LoginApi ,
              public categoryApi: CategoryApi , public ItemsInCart: CartManager) { }

  // tslint:disable-next-line: member-ordering

  loginStatus$: Observable<boolean>;

  userName$: Observable<string>;

  getNumOfItemsInCart(){
    return this.ItemsInCart.productsInCart.length;
  }

  setProdcutsInCart(){
    this.ItemsInCart.productsInCart = [];
  }

  logout(){
    this.loginService.logout();
    this.setProdcutsInCart();
  }

  getAllCategories(){
    this.categoryApi.getCategories();
  }

  ngOnInit(): void {
    this.loginStatus$ = this.loginService.isLoggedIn;
    this.userName$ = this.loginService.currentUserName;
    this.getAllCategories();
  }

}
