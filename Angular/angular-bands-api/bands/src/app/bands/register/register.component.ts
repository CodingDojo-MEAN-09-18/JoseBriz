import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

import { Band } from 'src/app/models/band';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() newBand = new EventEmitter<Band>();
  band = new Band();
  bands: Band[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  createBand(event: Event, form: NgForm): void {
    console.log('got request to create new band', this.band);
    this._httpService.createBand(this.band)
      .subscribe(data => {
        // this.bands.push(data);
        this.newBand.emit(data);
        this.band = new Band();
        form.reset();
      });
  }


}
