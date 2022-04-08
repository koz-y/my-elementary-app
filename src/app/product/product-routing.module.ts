import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductListingsComponent } from './product-listings/product-listings.component'
import { ProductComponent } from './product.component'
import { AuthGuard } from '../auth/service/auth.guard'

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListingsComponent },
      { path: ':productId', component: ProductDetailComponent, canActivate: [AuthGuard] },
    ],
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
