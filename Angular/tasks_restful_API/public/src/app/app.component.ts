import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // attributes
  title = 'Tasks API';
  task: (object | Task);
  tasks: (object | Task[]);

  // dependency injections help our component set up
  constructor(private _httpService: HttpService) {}

  // once set up, we indicate automatic steps to tak
  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this._httpService.getTasks()
      .subscribe(data => this.tasks = data);
  }

  getDetail(_id) {
    console.log('getting detail for', _id);
    this._httpService.getDetail(_id)
      .subscribe(data => this.task = data);
  }
}

