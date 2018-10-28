import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpService } from '../../http.service';

import { Author } from '../../models/author';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author = new Author();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    console.log('component picked up data from form', form.value);
    this.httpService.createAuthor(form.value)
      .subscribe(data => {
        console.log('created author', data);
        this.author = new Author();
      });

  }

}
