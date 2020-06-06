import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LoginModel } from '../interfaces/login.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({providedIn: 'root'})
export class LoginApi {
    constructor(private httpService: HttpClient,
                private router: Router ,
                private toastr: ToastrService) { }

    loginModel: LoginModel;

    private loggedIn = new BehaviorSubject<boolean>(false);
    private userName = new BehaviorSubject<string>(localStorage.getItem('username'));

    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
      }

    get currentUserName(){
      return this.userName.asObservable();
    }

    userAuthentication(){
        let reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth': 'true'});
        return this.httpService.post('http://localhost:50694/api/Jwt/GenerateToken/',
         this.loginModel , {headers: reqHeader}).subscribe((data: string) => {
            localStorage.setItem('usertoken', data );
            this.router.navigate(['']);
            this.loggedIn.next(true);
            localStorage.setItem('username', this.loginModel.userName);
            this.userName.next(localStorage.getItem('username'));
          },
          (err: HttpErrorResponse) => {
            if(err.status === 401){this.toastr.error('Invalid username or password'); }
            else if(err.status === 500){this.toastr.warning('server in maintenace try in 1 hour =D'); }
          });;
    }

    logout() {                            // {4}
        this.loggedIn.next(false);
        localStorage.removeItem('username');
        localStorage.removeItem('usertoken');
        this.router.navigateByUrl('/login');
    }
}