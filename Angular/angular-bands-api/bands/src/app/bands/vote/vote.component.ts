import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

import { Band } from 'src/app/models/band';
import { Rating } from 'src/app/models/rating';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  bands: Band[] = [];
  selectedBand: Band;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBands();
  }
  getBands(): void {
    console.log('component requesting tasks to service');
    this._httpService.getBands()
      .subscribe(data => this.bands = data);
  }
  getDetail(band: Band): void {
    this.selectedBand = this.selectedBand === band ? null : band;
  }
  onCreate(band: Band): void {
    console.log('adding band to list', band);
    this.bands.push(band);
  }
  onVote(band: Band, form: NgForm): void {
    console.log('vote submitted', band, form);
    const rating: Rating = {
      _id: band._id,
      ...form.value
    };
    console.log('this is the rating', rating);
    this._httpService.onVote(rating)
      .subscribe(data => console.log('vote submitted', rating));
  }

}
