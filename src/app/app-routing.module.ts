import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { ProductComponent } from './dashboard/products/product/product.component';
import { ShoppingCartComponent } from './dashboard/shopping-cart/shopping-cart.component';
import { LoginComponent } from './dashboard/login/login.component';
import { SignupComponent } from './dashboard/signup/signup.component';
import { CheckoutComponent } from './dashboard/shopping-cart/checkout/checkout.component';

const appRoutes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'shopping-cart', component: ShoppingCartComponent},
    {path: 'payment', component: CheckoutComponent},
    {path: ':catName', component: ProductsComponent},
    {path: ':catName/:id', component: ProductComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
