import { Component, OnInit } from '@angular/core';

import { cities, City } from '../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cities: City[] = cities;

  constructor() { }

  ngOnInit() {
  }

}
