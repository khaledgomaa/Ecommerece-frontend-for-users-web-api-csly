import { Component, OnInit } from '@angular/core';
import { LoginApi } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginapi: LoginApi , private router: Router) { }


  resetForm(form?: NgForm){
    if(form != null){form.reset();}
    this.loginapi.loginModel = {
      userName: null,
      Password: null
    }
  }

  onClick(){
    this.loginapi.userAuthentication();
  }

  ngOnInit(): void {
    this.resetForm();
  }

}
