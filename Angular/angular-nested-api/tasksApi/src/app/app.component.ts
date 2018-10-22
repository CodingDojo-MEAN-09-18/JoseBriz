import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';
import { Task } from './models/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Tasks API';
  task: Task = new Task();
  tasks: Task[] = [];
  selectedTask: Task;
  toggleCreate = false;

  constructor(private _httpService: HttpService) { }

  showCreate(): void {
    this.toggleCreate = !this.toggleCreate;
  }
}
