import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../../http.service';
import { MessageService } from '../../message.service';

import { Author } from '../../models/author';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author = new Author();

  constructor(
    private httpService: HttpService,
    private router: Router,
    private messageService: MessageService,
    ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    console.log('onSubmit() at new.component.ts picked up data from form', form.value);
    this.httpService.createAuthor(form.value)
      .subscribe(data => {
        this.messageService.clear();
        this.router.navigateByUrl('authors/all');
        console.log('onSubmit() subscription got created author', data);
      }, error => {
        this.messageService.add(error.error);
        console.log('onSubmit() at new.component.ts received error from DB: ', error);
      });
  }
}
