import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

import { Product } from '../../models/product';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.httpService.getProducts()
      .subscribe(data => {
        this.products = data;
      });
  }
  deleteProduct(_id: string): void {
    this.httpService.deleteProduct(_id)
      .subscribe(data => {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i]._id === data._id) {
            this.products.splice(i, 1);
          }
        }
      });
  }
  manageEvent(event: Event): void {
    event.stopPropagation();
  }
}
