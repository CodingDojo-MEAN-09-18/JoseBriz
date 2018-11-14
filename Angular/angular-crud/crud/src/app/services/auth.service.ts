import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
// need to import this here and in app.module after doing npm install -save ngx-cookie
import { CookieService } from 'ngx-cookie';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base = '/api/auth';
  isLoggedIn$ = new BehaviorSubject(this.isAuthed());

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/login`, user)
      .pipe(tap(() => this.isLoggedIn$.next(true)));
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/register`, user);
  }
  logout(): Observable<void> {
    return this.http.delete<void>(`${this.base}/logout`)
      .pipe(
        tap(() => this.cookieService.removeAll()),
        tap(() => this.isLoggedIn$.next(false))
        );
  }
  isAuthed(): boolean {
    // parseInt turns a string into number
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userID = this.cookieService.get('userID');
    const session = this.cookieService.get('session');
    return expired && userID && session && expired > Date.now();
  }
}
