import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';
import { Task } from './models/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tasks API';
  task: Task = new Task();
  tasks: Task[] = [];
  selectedTask: Task;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getTasks();
  }
  getTasks(): void {
    console.log('component requesting tasks to service');
    this._httpService.getTasks()
      .subscribe(data => this.tasks = data);
  }
  getDetail(task: Task): void {
    this.selectedTask = task;
    console.log('getting detail', task);
  }
  deleteTask(_id: number): void {
    this.selectedTask = null;
    this._httpService.deleteTask(_id)
      .subscribe(data => console.log('deleted task', data));
  }
  updateTask(task: Task): void {
    console.log('got the update request for ', task);
    this._httpService.updateTask(task)
      .subscribe(data => console.log('updated task', data));
  }
  createTask(event: Event, form: NgForm): void {
    console.log('got request to create new task', this.task);
    this._httpService.createTask(this.task)
      .subscribe(data => this.tasks.push(data));
  }
}
