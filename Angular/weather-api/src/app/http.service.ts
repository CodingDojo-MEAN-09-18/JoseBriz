import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCity(id: number) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=8f54c0b062bfe33557da58c53ef0b917`);
  }
}


