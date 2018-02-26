import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { AppService } from '../../app.service';
import { element } from 'protractor';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  product: Product;
  index: number;
  shoppingCartProducts = this.appService.shoppingCartProducts;
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  onRemoveProduct(index: number) {
    this.shoppingCartProducts.splice(index, 1);
  }
}
