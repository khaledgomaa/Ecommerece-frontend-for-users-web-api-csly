import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})
export class ProductApi {
    constructor(private httpService: HttpClient) { }

    productItems: ProductModel[];
    AllProducts: ProductModel[];

    getPopularProducts(){
        return this.httpService.get('http://localhost:50694/api/Products/GetRandomProductsDto/')
        .subscribe(res =>
            this.productItems = res as ProductModel[]);
    }

    getAllProducts(){
        return this.httpService.get('http://localhost:50694/api/Products/GetProducts/')
        .subscribe(res => this.AllProducts = res as ProductModel[]);
    }
}