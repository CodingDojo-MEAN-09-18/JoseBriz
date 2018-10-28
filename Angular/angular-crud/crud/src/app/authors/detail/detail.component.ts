import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HttpService } from '../../http.service';

import { Author } from '../../models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  author: Author;

  constructor(
  private route: ActivatedRoute,
  private httpService: HttpService,
  private location: Location
  ) { }

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getAuthor(id)
      .subscribe(data => this.author = data);
  }

}
