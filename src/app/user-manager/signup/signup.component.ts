import { Component, OnInit } from '@angular/core';
import { RegisterApi } from 'src/app/shared/services/register.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public registerApi: RegisterApi , private router: Router) { }

  resetForm(form?: NgForm){
    if(form != null){form.reset();}
    this.registerApi.registerModel = {
      UserName: null,
      Email: null,
      Password: null,
      ConfirmedPassword: null,
      PhoneNumber: null,
    }
  }

  registerNewUser(){
    alert(this.registerApi.registerModel.UserName + 
          this.registerApi.registerModel.Email +
          this.registerApi.registerModel.Password +
          this.registerApi.registerModel.ConfirmedPassword +
          this.registerApi.registerModel.PhoneNumber);
    this.registerApi.registerUser().subscribe(res => {
      this.resetForm();
      this.router.navigate(['/login']);
  },
  (err: HttpErrorResponse) => {
      this.router.navigate(['/signup']);
      this.resetForm();
  });
  }

  ngOnInit(): void {
    this.resetForm();
  }

}
