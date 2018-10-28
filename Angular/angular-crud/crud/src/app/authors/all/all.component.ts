import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

import { Author } from '../../models/author';
import { BlockingProxy } from 'blocking-proxy';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  authors: Author[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors(): void {
    this.httpService.getAuthors()
      .subscribe(data => {
        this.authors = data;
      });
  }

}
