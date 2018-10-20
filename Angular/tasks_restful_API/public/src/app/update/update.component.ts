import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../models/task';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  task: (object | Task);

  constructor(
    private route: ActivatedRoute,
    private _httpService: HttpService,
    private location: Location
    ) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    console.log('update component getting detail of' + this.route.snapshot.paramMap.get('_id'), _id);
    this._httpService.getDetail(_id)
      .subscribe(task => this.task = task);
  }

  updateTask(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('from update component, there is an update request', form);
    // this._httpService.updateTask(form);
  }

}
