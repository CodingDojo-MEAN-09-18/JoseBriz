import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

import { NewTask } from '../models/taskNew';
import { Task } from '../models/task';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  new_task = new NewTask();

  @Output() makeTask = new EventEmitter<Task>();

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  createTask(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('from the form to component: a new task will be created! ', event, form, this.new_task);
    this._httpService.createTask(this.new_task)
      .subscribe(data => {
        console.log('created a new task', data);
        this.makeTask.emit(data);  // emitting to parent
      }
      );
      form.reset();
    }


}
