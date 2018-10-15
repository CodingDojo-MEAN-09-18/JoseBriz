import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my Angular API Experience';
  abilities: string[] = [];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this._httpService.getPokemon()
      .subscribe(data => {
        for (const ability of data['abilities']) {
          this.abilities.push(ability['ability'].name);
          console.log(ability['ability'].name);
        }
      });
      console.log(this.abilities);
    }
}
