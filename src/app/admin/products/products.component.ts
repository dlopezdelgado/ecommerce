import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(){
    this.products$ = this.productsService.loadAll();
  }

}
