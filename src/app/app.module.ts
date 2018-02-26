import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { ShoppingCartComponent } from './dashboard/shopping-cart/shopping-cart.component';
import { ProductComponent } from './dashboard/products/product/product.component';

import { AppService } from './app.service';

import { RemoveSpacesPipe } from './pipes/removespaces.pipe';
import { NameChangerPipe } from './pipes/namechanger.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumPipe } from './pipes/sum.pipe';
import { ArraySortPipe } from './pipes/sort.pipe';
import { SignupComponent } from './dashboard/signup/signup.component';
import { LoginComponent } from './dashboard/login/login.component';
import { AuthService } from './dashboard/auth.service';
import { CheckoutComponent } from './dashboard/shopping-cart/checkout/checkout.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProductComponent,
    RemoveSpacesPipe,
    NameChangerPipe,
    FilterPipe,
    SumPipe,
    ArraySortPipe,
    TotalPipe,
    SignupComponent,
    LoginComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
