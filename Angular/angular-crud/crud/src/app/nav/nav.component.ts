import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  isLoggedIn = false;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router

  ) { }

  ngOnInit() {
  }
  logout(): void {
    this.auth.logout()
      .subscribe(data => {
        console.log('successfully logged out', data);
        this.router.navigateByUrl('');
      });
  }

}
