import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

import { Player } from '../../models/player';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: Player[] = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getPlayers();
  }
  getPlayers(): void {
    this.httpService.getPlayers()
      .subscribe(data => {
        this.players = data;
      });
  }
  deletePlayer(_id: string): void {
    this.httpService.deletePlayer(_id)
      .subscribe(data => {
        console.log('deleted', data);
        for (let i = 0; i < this.players.length; i ++) {
          if (this.players[i]._id === data._id) {
            this.players.splice(i, 1);
          }
        }
      }, error => {
        console.log(error);
      });
  }
}
