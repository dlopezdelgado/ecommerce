import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productFeatureKey } from '../reducers/product.reducer';
import { ProductState, productsAdapter } from '../entity/products.entity';


const featureSelector = createFeatureSelector<ProductState>(productFeatureKey);

const { selectEntities, selectAll, selectTotal } = productsAdapter.getSelectors();

export const selectProductIds = createSelector(featureSelector, selectEntities);

export const selectAllProducts = createSelector(featureSelector, selectAll);

export const selectProductsCount = createSelector(featureSelector, selectTotal);

export const selectLoadingList = createSelector(featureSelector, state => state.loadingList);

// select product loaded flag
export const selectProductsLoaded = createSelector(featureSelector, state => state.loadedProducts);

// select products error
export const selectProductsError = createSelector(featureSelector, state => state.error);

