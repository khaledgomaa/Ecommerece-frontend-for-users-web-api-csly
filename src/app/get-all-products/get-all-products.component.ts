import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../shared/services/products.service';
import { CartManager } from '../shared/services/cartManager.service';
import { ProductModel } from '../shared/interfaces/product.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {

  constructor(public productApi: ProductApi , private cartManager: CartManager ,
              private toastr: ToastrService) { }

  searchProduct = null;


  // set product to cart
  setProductToCart(product: ProductModel){
    product.Quantity = 1;
    this.cartManager.productsInCart.push(product);
  }

  // get all products in cart
  getProductsInCart(): ProductModel[]{
    return this.cartManager.productsInCart;
  }

  // Add new product to cart and make sure it's not exit in the cart
  addProductToCart(product: ProductModel){
      if(this.getProductsInCart().includes(product)){
      this.toastr.error('This product already Exist in the cart');
      }
      else{
        this.setProductToCart(product);
      }
  }


  // call getAllProducts from product.service.ts
  getAllProducts(){
    this.productApi.getAllProducts();
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

}
