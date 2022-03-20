import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListingsComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
