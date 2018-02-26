import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  product: Product = null;
  buyAmount = 1;
  id: number;

  ngOnInit() {
    this.product = {
      name: '', id: null, url: '', description: '', category: '', imagePath: '',
      price: 0, amount: 0, feature1: '', available: true};
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.http.get('https://arzachal-buy-these.firebaseio.com/products/' + (this.id - 1) + '.json')
        .subscribe(
          (response: Product) => {
            this.product = response;
          }
        );
    });
  }
  ngOnDestroy() {
    this.buyAmount = 1;
  }

  amountDecrease() {
    if (this.buyAmount !== 1) { this.buyAmount = this.buyAmount - 1; }
  }

  amountIncrease() {
    this.buyAmount = this.buyAmount + 1;
  }
  onAddToShoppingCart(product: Product) {
    this.product.amount += this.buyAmount;
    this.appService.addProductToShoppingCart(this.product);
    this.router.navigate(['/shopping-cart']);
  }
}
