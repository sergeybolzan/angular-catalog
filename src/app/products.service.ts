import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product.model';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  public getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  public getSortingOptions(): string[] {
    return ['price', 'name'];
  }
}
