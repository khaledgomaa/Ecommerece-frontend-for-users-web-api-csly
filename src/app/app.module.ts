import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { LoginComponent } from './user-manager/login/login.component';
import { SignupComponent } from './user-manager/signup/signup.component';
import { LoginApi } from './shared/services/login.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { RegisterApi } from './shared/services/register.service';
import { ToastrModule  } from 'ngx-toastr';
import { CategoryApi } from './shared/services/category.service';
import { ProductsliderComponent } from './productslider/productslider.component';
import { GetProductsComponent } from './get-products/get-products.component';
import { ProductApi } from './shared/services/products.service';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { filterList } from './shared/pips/filter.pipe';
import { CartManager } from './shared/services/cartManager.service';
import { PurchaseProductsInCartComponent } from './purchase-products-in-cart/purchase-products-in-cart.component';
import { PurchaseProducts } from './shared/services/puchase.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UserManagerComponent,
    LoginComponent,
    SignupComponent,
    ProductsliderComponent,
    GetProductsComponent,
    GetAllProductsComponent,
    filterList,
    PurchaseProductsInCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [LoginApi , AuthGuard , RegisterApi , CategoryApi , ProductApi, CartManager, PurchaseProducts,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
