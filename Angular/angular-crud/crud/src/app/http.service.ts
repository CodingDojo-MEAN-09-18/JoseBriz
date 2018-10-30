import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Author } from './models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  authors$ = new BehaviorSubject<Author[]>([]);

  private readonly base = '/api/authors';

  constructor(
    private http: HttpClient,
    ) { }

  getAuthors(): Observable<Author[]> {
    this.http.get<Author[]>(this.base)
      .subscribe(data => {
        this.authors$.next(data);
      });
      return this.authors$;
  }

  createAuthor(author: Author): Observable<Author> {
    console.log('httpService has received this data', author);
    return this.http.post<Author>(this.base, author);
  }

  getAuthor(_id: string): Observable<Author> {
    console.log('httpService will go to DB and get detail for', _id);
    return this.http.get<Author>(`${this.base}/${_id}`);
  }

  editAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.base}/${author._id}`, author);
  }

  deleteAuthor(_id: string): Observable<Author> {
    return this.http.delete<Author>(`${this.base}/${_id}`);
  }

}
