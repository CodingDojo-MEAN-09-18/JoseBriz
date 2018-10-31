import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

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

}
