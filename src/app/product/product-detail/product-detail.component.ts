import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products } from '../products';

type ProductType = {
  name: string;
  price: number;
  description: string;
};

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  products: ProductType[] = Products;
  product!: ProductType;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = this.products[+params.get('productId')!];
    });
  }
}
