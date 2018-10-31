import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { HttpService } from '../../http.service';
import { MessageService } from 'src/app/message.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
    private messageService: MessageService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.product = this.route.snapshot.data.product as Product;
  }
  editProduct(product: Product): void {
    console.log('got request to edit product', product);
    this.httpService.editProduct(product)
      .subscribe(data => {
        this.router.navigateByUrl('products');
      }, error => {
        this.messageService.add(error.error);
      });
  }
  deleteProduct(_id: string): void {
    this.httpService.deleteProduct(_id)
      .subscribe(data => {
        this.router.navigateByUrl('products');
      });
  }
  manageEvent(event: Event): void {
    event.stopPropagation();
  }
  goBack(): void {
    this.location.back();
  }
}
