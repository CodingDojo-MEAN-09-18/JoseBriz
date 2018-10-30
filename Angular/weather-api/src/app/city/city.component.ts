import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { map, switchMap } from 'rxjs/operators';

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
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.httpService.getCity(id)))
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
