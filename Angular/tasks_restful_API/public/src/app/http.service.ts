import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


import { Task } from './models/task';
import { NewTask } from './models/taskNew';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // $ indicates this is an observable, starts with empty array
  tasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private _http: HttpClient) {
    // this.getTasks();
  }

  getTasks(): Observable<Task[]> {
    this._http.get<Task[]>('/tasks')
      .subscribe(data => this.tasks$.next(data));
      return this.tasks$;
  }

  getDetail(_id): Observable<Task> {
    return this._http.get<Task>(`/tasks/${_id}`);
  }

  createTask(task: NewTask): Observable<Task> {
    console.log('got a new task from component: ', task);
    return this._http.post<Task>('/tasks', task);
  }

  updateTask(task: Task): Observable<Task> {
    console.log('got a request to update: ', task);
    return this._http.put<Task>('tasks/', task);
  }

  deleteTask(_id): Observable<Task> {
    console.log('got a new task from component: ', _id);
    return this._http.delete<Task>(`/tasks/${_id}`);
  }
}

