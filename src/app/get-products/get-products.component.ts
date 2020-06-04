import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../shared/services/products.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {

  constructor(public productApi: ProductApi) { }


  getProducts(){
    this.productApi.getPopularProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
