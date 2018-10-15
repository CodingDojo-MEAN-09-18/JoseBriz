import { Component, OnInit, Input } from '@angular/core';
import { Ability } from '../ability';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {

  @Input() ability: Ability;

  constructor() { }

  ngOnInit() {
  }

}
