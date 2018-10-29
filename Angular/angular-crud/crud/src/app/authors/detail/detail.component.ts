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
    console.log(this.route.snapshot.paramMap.get('_id'));
    const _id = this.route.snapshot.paramMap.get('_id');
    console.log('component sending request for detail on id', _id);
    this.httpService.getAuthor(_id)
      .subscribe(data => this.author = data);
  }

  editAuthor(author: Author): void {
    console.log('got a request to update', author);
    this.httpService.editAuthor(author)
      .subscribe(data => {
        console.log('updated author', data);
      });
  }

  deleteAuthor(_id: string): void {
    this.httpService.deleteAuthor(_id)
      .subscribe(data => {
        console.log('deleted', data);
      });
  }

  manageEvent(event: Event): void {
    event.stopPropagation();
  }

}
