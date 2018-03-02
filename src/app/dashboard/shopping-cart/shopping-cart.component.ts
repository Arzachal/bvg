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
  value: number;
  amountAlert = false;
  shoppingCartProducts = this.appService.shoppingCartProducts;
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  update(value: number, index: number) {
    if (value < 1) {this.shoppingCartProducts[index].amount = 1; this.amountAlert = true;
      setTimeout( () => {this.amountAlert = false; }, 2500); }
    console.log(this.shoppingCartProducts[index].amount);
  }
  onRemoveProduct(index: number) {
    console.log(index);
    this.shoppingCartProducts.splice(index, 1);
  }
}
