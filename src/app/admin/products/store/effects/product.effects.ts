import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { fromProductActions } from '../actions/product.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';



@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(fromProductActions.loadProducts),
    switchMap(() =>
      this.productsService.loadProducts().pipe(
        map((products: Product[]) =>
          fromProductActions.loadProductsSuccess({ products })
        ),
        catchError(error => of(fromProductActions.loadProductsFail({ error }))
        )
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }

}
