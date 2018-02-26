import { Component, OnInit, DoCheck} from '@angular/core';
import { AuthService } from '../dashboard/auth.service';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(public authService: AuthService, private appService: AppService, private router: Router) {}
  cartProducts: Product[];
  pay: boolean;
  ngOnInit() {
    this.cartProducts = this.appService.shoppingCartProducts;
  }
  ngDoCheck() {
    if
      (this.router.url === '/shopping-cart' ||
      this.router.url === '/payment')
        { return this.pay = true; }
          else
          { return this.pay = false; }
  }
  onLogout() {
    this.authService.logout();
  }
}
