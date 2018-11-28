import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { User } from '../../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  registrationErrors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit(user: User) {
    this.auth.register(user)
      .subscribe(data => {
        this.user = new User();
        console.log('user has been registered', data);
        this.router.navigateByUrl('');
      });
  }

}
