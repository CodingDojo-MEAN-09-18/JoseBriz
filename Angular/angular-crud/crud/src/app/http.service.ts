import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Author } from './models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  authors$ = new BehaviorSubject<Author[]>([]);

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    this.http.get<Author[]>('/cruds')
      .subscribe(data => {
        this.authors$.next(data);
      });
      return this.authors$;
  }

  createAuthor(author: Author): Observable<Author> {
    console.log('httpService has received this data', author);
    return this.http.post<Author>('/cruds', author);
  }

  getAuthor(id: number): Observable<Author> {
    console.log('httpService will go to DB and get detail for', id);
    return this.http.get<Author>(`/cruds/${id}`);
  }

}
