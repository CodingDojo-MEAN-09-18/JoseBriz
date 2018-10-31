import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly base = '/api/products';
  products$ = new BehaviorSubject<Product[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {
    this.http.get<Product[]>(this.base)
      .subscribe(data => {
        this.products$.next(data);
      });
      return this.products$;
  }
  createProduct(product: Product): Observable<Product> {
    console.log('service got request to create product', product);
    return this.http.post<Product>(this.base, product);
  }
  showProduct(id: string): Observable<Product> {
    console.log('service got request to retrieve product', id);
    return this.http.get<Product>(`${this.base}/${id}`);
  }
}
