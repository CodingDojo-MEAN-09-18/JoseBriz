import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks() {
    const taskObservable = this._http.get('/tasks');
    taskObservable.subscribe(data => console.log('Got the tasks', data));
  }

  getOneTask(id) {
    const tempObservable = this._http.get(`/tasks/${id}`);
    tempObservable.subscribe(data => console.log(`Here is the task you wanted ${data}`));
  }
}

