import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../shared/services/products.service';
import { CartManager } from '../shared/services/numOfCartItems.service';
import { ProductModel } from '../shared/interfaces/product.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {

  constructor(public productApi: ProductApi , private ItemsInCart: CartManager ,
              private toastr: ToastrService) { }

  searchProduct = null;

  productsInCart: ProductModel[] = [];


  setProductToCart(product: ProductModel){
    product.Quantity = 1;
    this.ItemsInCart.productsInCart.push(product);
  }

  getProductsInCart(): ProductModel[]{
    return this.ItemsInCart.productsInCart;
  }

  addProductToCart(product: ProductModel){
    if(this.getProductsInCart().includes(product))
    {
      this.toastr.error('This product already Exist in the cart');
    }
    else{
      this.setProductToCart(product);
      console.log(this.getProductsInCart());
    }
  }



  getAllProducts(){
    this.productApi.getAllProducts();
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

}
