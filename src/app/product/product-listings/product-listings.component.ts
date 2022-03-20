import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListingsComponent implements OnInit {
  products = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}
