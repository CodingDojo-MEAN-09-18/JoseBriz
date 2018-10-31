import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../../http.service';
import { MessageService } from 'src/app/message.service';
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
    private messageService: MessageService,
  ) { }

  ngOnInit() {
  }

  createProduct(event: Event, form: NgForm): void {
    console.log('new.component.ts got the form submission', event, form);
    this.httpService.createProduct(form.value)
      .subscribe(data => {
        console.log('created product', data);
        this.router.navigateByUrl('products');
      }, error => {
        this.messageService.add(error.error);
      });
  }
}
