import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Task } from './models/tasks';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  tasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private _http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    console.log('service processing tasks request')
    return this._http.get<Task[]>('/tasks');
  }

  deleteTask(_id: number): Observable<Task> {
    console.log('service got delte request for', _id);
    return this._http.delete<Task>(`./tasks/${_id}`);
  }

  updateTask(task: Task): Observable<Task> {
    return this._http.put<Task>(`/tasks/${task._id}`, task);
  }

  createTask(task: Task): Observable<Task> {
    return this._http.post<Task>(`/tasks`, task);
  }

}
