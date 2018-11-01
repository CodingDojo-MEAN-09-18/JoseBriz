import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
// import { MessageService } from './message.service';

import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly base = '/api/players';
  players$ = new BehaviorSubject<Player[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  createPlayer(player: Player): Observable<Player> {
    console.log('service processing create player', player);
    return this.http.post<Player>(this.base, player);
  }

  getPlayers(): Observable<Player[]> {
    this.http.get<Player[]>(this.base)
      .subscribe(data => {
        this.players$.next(data);
      });
      return this.players$;
  }

  deletePlayer(_id: string): Observable<Player> {
    return this.http.delete<Player>(`${this.base}/${_id}`);
  }
}
