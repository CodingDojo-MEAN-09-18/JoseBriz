import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

import { Task } from '../../models/tasks';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  @Output() newTask = new EventEmitter<Task>();
  task = new Task();
  tasks: Task[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  createTask(event: Event, form: NgForm): void {
    console.log('got request to create new task', this.task);
    this._httpService.createTask(this.task)
      .subscribe(data => {
        // this.tasks.push(data);
        this.newTask.emit(data);
        this.task = new Task();
        form.reset();
      });
  }

}
