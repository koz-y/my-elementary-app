import { Component, OnInit } from '@angular/core';

import { Products } from '../products';

type ProductType = {
  name: string;
  price: number;
  description: string;
};

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
