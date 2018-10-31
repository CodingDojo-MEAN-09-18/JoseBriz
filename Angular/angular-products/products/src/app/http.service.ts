import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MessageService } from './message.service';

import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly base = '/api/products';
  products$ = new BehaviorSubject<Product[]>([]);

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
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
  showProduct(_id: string): Observable<Product> {
    console.log('service got request to retrieve product', _id);
    return this.http.get<Product>(`${this.base}/${_id}`);
  }
  editProduct(product: Product): Observable<Product> {
    console.log('service got request to edit product', product);
    return this.http.put<Product>(`${this.base}/${product._id}`, product);
  }
  deleteProduct(_id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.base}/${_id}`);
  }
}
