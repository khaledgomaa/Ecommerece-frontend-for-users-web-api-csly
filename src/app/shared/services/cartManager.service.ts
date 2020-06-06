import { Injectable } from '@angular/core';
import { ProductModel } from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})
export class CartManager {
    constructor() { }

    productsInCart: ProductModel[] = [];
}