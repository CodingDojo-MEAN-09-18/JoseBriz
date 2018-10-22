import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

import { Task } from 'src/app/models/tasks';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  tasks: Task[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  deleteTask(_id: number): void {
    this.task = null;
    this._httpService.deleteTask(_id)
      .subscribe(data => {
        for (let i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i]._id === data._id) {
            this.tasks.splice(i, 1);
          }
        }
      });
  }
  updateTask(task: Task, form: NgForm): void {
    console.log('got the update request for ', task);
    this._httpService.updateTask(task)
      .subscribe(data => {console.log('updated task', data);
      this.task = null;
    });
  }
  hideEdit(): void {
    this.task = null;
  }

}
