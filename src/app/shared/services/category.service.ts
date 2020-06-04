import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryModel } from '../interfaces/category.interface';

@Injectable({providedIn: 'root'})
export class CategoryApi {
    constructor(private httpService: HttpClient) { }

    categoryList: CategoryModel[];

    getCategories(){
        return this.httpService.get('http://localhost:50694/api/Categories/GetCategories')
        .subscribe(res =>
            this.categoryList = res as CategoryModel[]);
    }
}