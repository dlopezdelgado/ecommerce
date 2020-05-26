import { Action, createReducer, on } from '@ngrx/store';
import { fromProductActions } from '../actions/product.actions';
import { productsAdapter, ProductState } from '../entity/products.entity';


export const productFeatureKey = 'products';

export const initialState: ProductState = productsAdapter.getInitialState({
  selectedProductId: undefined,
  loadedProducts: false,
  loadingList: false,
  error: null
});


const reducer = createReducer(
  initialState,
  on(fromProductActions.loadProducts, (state) => ({
    ...state,
    loadingList: true,
    loadedProducts: false
  })),
  on(fromProductActions.loadProductsSuccess, (state, { products }) => productsAdapter.setAll(products, {
    ...state,
    loadingList: false,
    loadedProducts: true
  })),
  on(fromProductActions.loadProductsFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  })

);


export function productReducer(state: ProductState | undefined, action: Action) {
  return reducer(state, action);
}

