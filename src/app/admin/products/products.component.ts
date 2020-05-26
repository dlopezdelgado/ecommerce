import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fromProductActions } from './store/actions/product.actions';
import { selectAllProducts, selectLoadingList } from './store/selectors/product.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  loadingList$ = this.store.pipe(select(selectLoadingList));
  products$ = this.store.pipe(select(selectAllProducts));

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.store.dispatch(fromProductActions.loadProducts());
  }

}
