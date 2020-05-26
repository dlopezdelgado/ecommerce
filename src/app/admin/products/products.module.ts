import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { StoreModule } from '@ngrx/store';
import { productFeatureKey, productReducer } from './store/reducers/product.reducer';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProductsComponent, ProductsListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    StoreModule.forFeature(productFeatureKey, productReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule { }
