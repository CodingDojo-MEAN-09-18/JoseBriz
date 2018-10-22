import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';
import { Task } from './models/task';
import { NewTask } from './models/taskNew';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // attributes
  title = 'Tasks API';
  task: Task;
  tasks: Task[];
  new_task = new NewTask();

  toggleCreate = false;

  // dependency injections help our component set up
  constructor(private _httpService: HttpService) {}



  // once set up, we indicate automatic steps to take
  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this._httpService.getTasks()
      .subscribe(data => this.tasks = data);
  }

  getDetail(_id): void {
    console.log('getting detail for', _id);
    this._httpService.getDetail(_id)
      .subscribe(data => this.task = data);
  }

  deleteTask(_id: number, task: Task): void {
    console.log('deleting task---', _id);
    this.task = null;
    this._httpService.deleteTask(_id)
      .subscribe();
  }

  showCreate(): void {
    this.toggleCreate = !this.toggleCreate;
  }

  onCreate(task: Task): void {
    this.tasks.push(task);
  }

  hideCreate(): void {
    this.toggleCreate = false;
  }

}


// on http service create behavior subject
