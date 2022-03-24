import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../service/product.service';

import { ProductType } from '../product-type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: ProductType;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productService.getProductById(params.get('productId')!).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
}
