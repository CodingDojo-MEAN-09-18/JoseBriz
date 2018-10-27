import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, from } from 'rxjs';

import { Band } from './models/band';
import { Rating } from './models/rating';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  bands$ = new BehaviorSubject<Band[]>([]);

  constructor(private _http: HttpClient) { }

  getBands(): Observable<Band[]> {
    this._http.get<Band[]>('/bands')
      .subscribe(data => this.bands$.next(data));
      return this.bands$;
  }
  createBand(band: Band): Observable<Band> {
    console.log('http service got a request to create band', band);
    return this._http.post<Band>('/bands', band);
  }
  deleteBand(_id: number): Observable<Band> {
    console.log('service got the request to delete band', _id);
    return this._http.delete<Band>(`/bands/${_id}`);
  }
  updateBand(band: Band): Observable<Band> {
    console.log('service got the request to update band', band);
    return this._http.put<Band>(`/bands/${band._id}`, band);
  }
  onVote(rating: Rating) {
    console.log('from service to controller: band ', rating._id, rating);
    return this._http.put(`/bands/${rating._id}/rate`, rating);
  }
}
