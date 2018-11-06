import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// import { HttpService } from '../../http.service';
// import { MessageService } from 'src/app/message.service';

import { Player } from '../../models/player';
import { Positions } from '../../models/positions';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  player = new Player();

  constructor(
    private router: Router,
    private location: Location,
    private httpService: HttpService,
  ) { }

  ngOnInit() {
  }
  createPlayer(event: Event, form: NgForm): void {
    console.log('new component creating player', event, form.value);
    this.httpService.createPlayer(form.value)
      .subscribe(data => {
        this.router.navigateByUrl('players/list');
      }, error => {
        console.log(error);
        // this.messageService.add(error.error);
      });

  }
  manageEvent(event: Event): void {
    event.stopPropagation();
  }

  goBack(): void {
    this.location.back();
  }

  clearForm(form: NgForm): void {
    form.reset();
  }
}
