import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

import { ActivatedRoute } from '@angular/router';

import { Weather } from '../models';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  weather: Weather;


  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getCity();
  }
  getCity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getCity(id)
      .subscribe(data => {
        this.weather = {
          city: data['name'],
          main: data['main'],
          weather: data['weather']
        };
        console.log(this.weather);
      });
  }
}
