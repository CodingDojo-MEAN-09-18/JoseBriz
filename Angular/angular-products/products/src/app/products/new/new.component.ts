import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product = new Product();

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
  }

  createProduct(event: Event, form: NgForm): void {
    console.log('new.component.ts got the form submission', event, form);
    this.httpService.createProduct(form.value)
      .subscribe(data => {
        console.log('created product', data);
        this.product = new Product();
        form.reset();
      });
  }
}
