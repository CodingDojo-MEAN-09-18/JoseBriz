import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Ability } from './ability';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my Angular API Experience';
  abilities: string[] = [];
  selectedAbility: Ability;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    this._httpService.getPokemon()
      .subscribe(data => {
        for (const ability of data['abilities']) {
          this.abilities.push(ability['ability'].name);
        }
      });
    }
  onSelect(ability: Ability): void {
    this.selectedAbility = ability;
  }
}
