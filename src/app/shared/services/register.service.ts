import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { SignUpModel } from '../interfaces/signup.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({providedIn: 'root'})
export class RegisterApi {
    constructor(private router: Router , private httpService: HttpClient
        ) { }

    registerModel: SignUpModel;

    registerUser(){
        let reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth': 'true'});
        return this.httpService.post('http://localhost:50694/api/Registers/RegisterUser', this.registerModel , {headers: reqHeader});
    }
}