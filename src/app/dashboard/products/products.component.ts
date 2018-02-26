import { Component, OnInit, ChangeDetectorRef, ApplicationRef, Output } from '@angular/core';
import { AppService } from '../../app.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute} from '@angular/router';
import { NgForm, NgModel, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private appService: AppService, private route: ActivatedRoute,
              private changeRef: ChangeDetectorRef, private appRef: ApplicationRef, private http: HttpClient) {
              }
  products: Product[];
  catName;
  product: Product;
  filterItems = [
    {feature: 'CD', checked: false},
    {feature: 'Floppy Disk', checked: false},
    {feature: 'Digital Copy', checked: false}
  ];
  prices = {minPrice: null, maxPrice: null};
  priceForm: FormGroup;
  priceFormSubmitted = false;
  property = 'name';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.catName = params['catName'];
    });
    this.initForm();
    this.products = this.appService.products;
  }
  private initForm() {
    const formMinPrice = null;
    const formMaxPrice = null;

    this.priceForm = new FormGroup({
      'minPrice': new FormControl(formMinPrice),
      'maxPrice': new FormControl(formMinPrice)
    });
  }
  onSubmit() {
    this.prices = this.priceForm.value;
    this.priceFormSubmitted = true;
    this.priceForm.reset();
  }
  onResetPrice() {
    this.priceFormSubmitted = false;
    this.priceForm.reset();
    this.prices.minPrice = null;
    this.prices.maxPrice = null;
  }
  checked() {
    return this.filterItems.filter(product => product.checked);
  }
  onChangeSort(value: string) {
    this.property = value;
  }
}

