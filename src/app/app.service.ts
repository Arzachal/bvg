import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
    this.http.get('https://arzachal-buy-these.firebaseio.com/products.json')
      .subscribe(
        (response: Product[]) => {
          this.products = response;
          this.loading = false;
        }
      );
  }

  loading = true;
  products: Product[] = [];
  shoppingCartProducts: Product[] = [];

  consolidateShoppingCart() {
    this.shoppingCartProducts.forEach((product, i) => {
      const name = product.name;
      for (let j = 0; j < this.shoppingCartProducts.length; j++) {
        if (this.shoppingCartProducts[j].name === name && i !== j) {
          product.amount = this.shoppingCartProducts[j].amount;
          this.shoppingCartProducts.splice(j, 1);
        }
      }
    });
  }

  addProductToShoppingCart(product: Product) {
    this.shoppingCartProducts.push(product);
    this.consolidateShoppingCart();
  }
}
