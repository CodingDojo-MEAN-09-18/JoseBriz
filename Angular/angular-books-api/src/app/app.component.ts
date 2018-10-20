import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';

import { Book } from './models/book';
import { Author } from './models/author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  author = new Author();
  authors: Author[] = [];
  book = new Book();

  constructor(private _httpService: HttpService) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this._httpService.getAuthors()
      .subscribe(data => this.authors = data);
  }

  createAuthor(event: Event, form: NgForm): void {
    event.preventDefault();
    this.authors.push(this.author);
    this.book = new Book();
    form.reset();
  }

}
