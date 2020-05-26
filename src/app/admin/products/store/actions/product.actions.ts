import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';


export enum ProductActionTypes {
  LoadProducts = '[Products] Load Products',
  LoadProductsSuccess = '[Products] Load Products Success',
  LoadProductsFail = '[Products] Load Products Fail'
}

export const loadProducts = createAction(ProductActionTypes.LoadProducts);

export const loadProductsSuccess = createAction(
  ProductActionTypes.LoadProductsSuccess,
  props<{ products: Product[] }>()
);

export const loadProductsFail = createAction(
  ProductActionTypes.LoadProductsFail,
  props<{ error: Error | any }>()
);

export const fromProductActions = {
  loadProducts,
  loadProductsSuccess,
  loadProductsFail
};
