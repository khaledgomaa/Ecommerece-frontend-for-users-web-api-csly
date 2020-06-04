import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user-manager/login/login.component';
import { SignupComponent } from './user-manager/signup/signup.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { AuthGuard } from './auth/auth.guard';
import { GetProductsComponent } from './get-products/get-products.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { PurchaseProductsInCartComponent } from './purchase-products-in-cart/purchase-products-in-cart.component';

export const appRoutes: Routes=[
    {path: '' , component: HomeComponent , canActivate:[AuthGuard]},
    {
        path: 'login' , component: UserManagerComponent,
        children: [{path: '' , component: LoginComponent }]
    },
    {
        path: 'signup' , component: UserManagerComponent,
        children: [{path: '' , component: SignupComponent}]
    },
    {path: 'products' , component: GetAllProductsComponent} ,
    {path: 'purchase' , component: PurchaseProductsInCartComponent}
]