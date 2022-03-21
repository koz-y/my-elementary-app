import { Component, OnInit } from '@angular/core';

import { Products } from '../products';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListingsComponent implements OnInit {
  products: ProductType[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = Products;
  }
}
