import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

import { Task } from '../models/task';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Input() task: (object | Task);

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  getDetail(_id): void {
    console.log('getting detail for', _id);
    this._httpService.getDetail(_id)
      .subscribe(data => this.task = data);
  }


}
