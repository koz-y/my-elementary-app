import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';

import { ProductType } from '../product-type';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListingsComponent implements OnInit {
  products: ProductType[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const productObservable = this.productService.getProducts();
    productObservable.subscribe({
      next: (data) => {
        this.products = data;
        console.log({ next: data });
      },
      error: (err) => {
        console.log({ error: err });
      },
      complete: () => {
        console.log('conplete');
      },
    });
  }
}
