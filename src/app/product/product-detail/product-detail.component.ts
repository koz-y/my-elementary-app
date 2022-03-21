import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products } from '../products';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  products: ProductType[] = Products;
  product: ProductType = {
    name: '',
    price: 0,
    description: '',
    coverImage: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = this.products[+params.get('productId')!];
    });
  }
}
