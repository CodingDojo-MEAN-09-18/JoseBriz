import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Author } from './models/author';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  authors$ = new BehaviorSubject<Author[]>([]);

  constructor(private _http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    this._http.get<Author[]>('/authors')
      .subscribe(data => this.authors$.next(data));
      console.log('processing get request to get all authors', this.authors$);
      return this.authors$;
  }
  createAuthor(author: Author): Observable<Author> {
    console.log('processing create author post request for', author);
    return this._http.post<Author>('./authors', author);
  }
}
