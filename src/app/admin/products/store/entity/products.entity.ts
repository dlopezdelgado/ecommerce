import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from 'src/app/shared/models/product.model';

export interface ProductState extends EntityState<Product> {
  selectedProductId: number;
  loadedProducts: boolean;
  loadingList: boolean;
  error?: Error | any;
}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id
});
