import { Component, OnInit } from '@angular/core';
import { CartManager } from '../shared/services/cartManager.service';
import { ProductModel } from '../shared/interfaces/product.interface';
import { PurchaseProducts } from '../shared/services/puchase.service';
import { PurchaseProduct, ProductItem } from '../shared/interfaces/purchaseProduct.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchase-products-in-cart',
  templateUrl: './purchase-products-in-cart.component.html',
  styleUrls: ['./purchase-products-in-cart.component.css']
})
export class PurchaseProductsInCartComponent implements OnInit {

  constructor(public manageCart: CartManager ,
              public purchaseCart: PurchaseProducts ,
              public toastr: ToastrService) { }

  purchaseModel: PurchaseProduct;

  countOfProduct = 1;

  totalPrice: number;

  // update quantity of existing products in the cart
  addToCart(product: ProductModel , event){
      console.log(event.target.value);
      if(this.manageCart.productsInCart
        .find(p => p.ProductName === product.ProductName).Amount >= event.target.value){
          this.manageCart.productsInCart
        .find(p => p.ProductName === product.ProductName).Quantity = event.target.value;
          console.log(product);
         }
       else{
         this.toastr.warning('Not enough amount for this product');
       }
  }

  // get Total price of all products in the cart
  getTotalPrice(){
    let totalPrice = 0;
    if ( this.manageCart.productsInCart != null ) {

      // tslint:disable-next-line: prefer-for-of
      for ( let i = 0 ; i < this.manageCart.productsInCart.length ; i++ ){
        totalPrice += this.manageCart.productsInCart[i].Price *
        this.manageCart.productsInCart[i].Quantity;
      }
      return totalPrice;
    }
    return 0;
  }

  // Get products in cart call it when this page launched in ngOninit
  getProductsInCart(){
    return this.manageCart.productsInCart;
  }

  // remove any product in cart before purchasing
  removeProductFromCart(product: ProductModel){
    const index = this.manageCart.productsInCart.indexOf(product, 0);
    if(index > -1){
      this.manageCart.productsInCart.splice(index, 1);
    }
  }

  // purchase a product by sending a request to backend for more details check purchase.service.ts
  purchaseProducts(){
    // console.log(this.manageCart.productsInCart);
    this.purchaseModel = {
      UserName: localStorage.getItem('username'),
      ProductItems: this.manageCart.productsInCart
    };
    this.purchaseCart.puchaseProductsInCart(this.purchaseModel);
    console.log(this.purchaseModel);
    this.manageCart.productsInCart = [];
  }

  ngOnInit(): void {
    this.getProductsInCart();
  }

}
