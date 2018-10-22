import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

import { Task } from 'src/app/models/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getTasks();
    setTimeout(() => {
        console.log(this.tasks);
    }, 1000);
  }
  getTasks(): void {
    console.log('component requesting tasks to service');
    this._httpService.getTasks()
      .subscribe(data => this.tasks = data);
  }
  getDetail(task: Task): void {
    this.selectedTask = this.selectedTask === task ? null : task;
  }
  onCreate(task: Task): void {
    console.log('creating task', task);
    this.tasks.push(task);
  }

}
