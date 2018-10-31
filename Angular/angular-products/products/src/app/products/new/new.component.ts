import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

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
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createProduct(event: Event, form: NgForm): void {
    console.log('new.component.ts got the form submission', event, form);
    this.httpService.createProduct(form.value)
      .subscribe(data => {
        console.log('created product', data);
        this.router.navigateByUrl('products');
      });
  }
}
