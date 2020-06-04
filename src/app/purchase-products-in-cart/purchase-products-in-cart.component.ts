import { Component, OnInit } from '@angular/core';
import { CartManager } from '../shared/services/numOfCartItems.service';
import { ProductModel } from '../shared/interfaces/product.interface';

@Component({
  selector: 'app-purchase-products-in-cart',
  templateUrl: './purchase-products-in-cart.component.html',
  styleUrls: ['./purchase-products-in-cart.component.css']
})
export class PurchaseProductsInCartComponent implements OnInit {

  constructor(private manageCart: CartManager) { }

  productsInCart: ProductModel[] = [];

  countOfProduct = 1;

  totalPrice: number;

  addToCart(product: ProductModel , event){
    if(this.productsInCart.includes(product)){
        {this.manageCart.productsInCart
          .find(p => p.ProductName === product.ProductName).Quantity = event.target.value; }
    }
    console.log(this.manageCart.productsInCart);
  }

  getTotalPrice(){
    let totalPrice = 0;
    // tslint:disable-next-line: prefer-for-of
    for(let i = 0 ; i < this.manageCart.productsInCart.length ; i++){
      totalPrice += this.manageCart.productsInCart[i].Price *
      this.manageCart.productsInCart[i].Quantity;
    }
    console.log(totalPrice);
    return totalPrice;
  }

  getProductsInCart(){
    this.productsInCart = this.manageCart.productsInCart;
  }

  removeProductFromCart(product: ProductModel){
    const index = this.manageCart.productsInCart.indexOf(product, 0);
    if(index>-1){
      this.manageCart.productsInCart.splice(index,1);
      console.log(this.manageCart.productsInCart);
    }
  }

  ngOnInit(): void {
    this.getProductsInCart();
  }

}
