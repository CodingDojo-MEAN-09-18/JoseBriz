import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

import { Band } from 'src/app/models/band';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() band: Band;
  bands: Band[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  hideDetail(): void {
    this.band = null;
  }
  updateBand(band: Band, form: NgForm): void {
    console.log('got the update request for ', band);
    this._httpService.updateBand(band)
      .subscribe(data => {console.log('updated task', data);
      this.band = null;
    });
  }

}
