import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { User } from '../../models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User;
  errors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit(user: User): void {
    this.auth.login(user)
      .subscribe(data => {
        console.log('successful login', data);
        this.router.navigateByUrl('authors');
      }, error => {
        console.log('an error', error);
        this.handleErrors(error.error);
      });
  }

  private handleErrors(errors: string[] | Error | string): void {
    if (Array.isArray(errors)) {
      this.errors = errors;
    } else if (typeof errors === 'string') {
      this.errors = [errors];
    } else {
      this.errors = [errors.message];
    }
  }
}
