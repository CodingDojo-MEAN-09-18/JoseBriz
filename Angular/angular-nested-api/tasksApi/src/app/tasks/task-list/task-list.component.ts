import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

import { TitleizePipe } from '../../pipes/titleize.pipe';

import { Task } from 'src/app/models/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(private _httpService: HttpService, private titleize: TitleizePipe) { }

  ngOnInit() {
    this.getTasks();
    setTimeout(() => {
        console.log(this.tasks);
    }, 1000);
    this.tasks.forEach(task => {
      task.title = this.titleize.transform(task.title);
    });
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
