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
    const tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => {
      console.log(`Our tasks are:`);
      for (const task of data) {
        console.log(`${task.title} - ${task.description}`);
      }
    });
  }

  getOneTask(id) {
    const tempObservable = this._http.get(`/tasks/${id}`);
    tempObservable.subscribe(data => console.log(`Here is the task you wanted ${data}`));
  }
}

