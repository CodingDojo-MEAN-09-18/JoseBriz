import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { HttpService } from '../../http.service';
import { MessageService } from 'src/app/message.service';

import { Author } from '../../models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  author: Author;

  constructor(
  private route: ActivatedRoute,
  private httpService: HttpService,
  private router: Router,
  private messageService: MessageService
  ) { }

  ngOnInit() {

    this.author = this.route.snapshot.data.author as Author;
  }

  editAuthor(author: Author): void {
    console.log('got a request to update', author);
    this.httpService.editAuthor(author)
    .subscribe(data => {
      this.messageService.clear();
      this.router.navigateByUrl('authors/all');
      console.log('editAuthor() subscription got edited author', data);
    }, error => {
      this.messageService.add(error.error);
      console.log('editAuthor() at edit.component.ts received error from DB: ', error);
    });
}

  deleteAuthor(_id: string): void {
    this.httpService.deleteAuthor(_id)
      .subscribe(data => {
        console.log('deleted', data);
        this.router.navigateByUrl('authors/all');
      });
  }

  manageEvent(event: Event): void {
    event.stopPropagation();
  }

}
