import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

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
  books: Book[] = [];
  selectedAuthor: Author;
  selectedBook: Book;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getAuthors();
    this.getBooks();
  }
  getAuthors(): void {
    this._httpService.getAuthors()
      .subscribe(authors => {
        this.authors = authors;
        console.log('these authors are back from subscription', authors);
      });
  }
  getBooks(): void {
    this._httpService.getBooks()
      .subscribe(books => {
        this.books = books;
        console.log('these books are back from subscription', books);
      });
  }
  submitAuthor(event: Event, form: NgForm): void {
    console.log('new author form submitted', this.author);
    this._httpService.createAuthor(this.author)
      .subscribe(data => this.authors.push(data));
  }
  submitBook(event: Event, form: NgForm): void {
    console.log('printing book form', this.book);
    this._httpService.createBook(this.book)
      .subscribe(data => this.books.push(data));
  }
  getAuthor(author: Author): void {
    this.selectedAuthor = author;
  }
  getBook(book: Book): void {
    console.log('this is the book', book);
    this.selectedBook = book;
  }
  deleteAuthor(_id: number): void {
    this.selectedAuthor = null;
    this._httpService.deleteAuthor(_id)
      .subscribe(data => console.log('deleted author data', data));
  }
  deleteBook(_id: number): void {
    this.selectedBook = null;
    this._httpService.deleteBook(_id)
      .subscribe(data => console.log('deleted book data', data));
  }
  updateAuthor(author: Author): void {
    console.log('component got a request to update author', author);
    this._httpService.updateAuthor(author)
      .subscribe(data => console.log('updated author data', data));
  }
  updateBook(book: Book): void {
    console.log('component got a request to update book', book);
    this._httpService.updateBook(book)
      .subscribe(data => console.log('updated book data', data));
  }

}

