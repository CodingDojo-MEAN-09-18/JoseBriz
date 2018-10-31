import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { HttpService } from '../../http.service';

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
  ) { }

  ngOnInit() {
    this.product = this.route.snapshot.data.product as Product;
  }

}
