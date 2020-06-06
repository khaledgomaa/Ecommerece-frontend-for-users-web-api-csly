import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseProduct } from '../interfaces/purchaseProduct.interface';

@Injectable({providedIn: 'root'})
export class PurchaseProducts {
    constructor(private httpService: HttpClient, private router: Router , private toastr: ToastrService) { }

    puchaseProductsInCart(purchaseModel: PurchaseProduct){
        return this.httpService.post(' http://localhost:50694/api/Transactions/RequestOrder/', purchaseModel)
        .subscribe(res => {
            this.toastr.success('you have purchased successfully');
            this.router.navigateByUrl('');
        });
    }
}