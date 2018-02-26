import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  product: Product;
  shoppingCartProducts = this.appService.shoppingCartProducts;
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
