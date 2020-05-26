import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = environment.apiUrls.products;

  constructor(
    private http: HttpClient
  ) { }

  loadProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        map((resp: any) => resp)
      );
  }
}
