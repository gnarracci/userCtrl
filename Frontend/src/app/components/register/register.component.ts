import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../models/users';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: 0,
    username: '',
    password: '',
    email: '',
    image: '',
    role: 'USER', // By default for all new users
    country: '',
    description: '',
    created_at: new Date()
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  saveNewUser() {
    console.log(this.user);
    delete this.user.created_at;
    this.authService.registerUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/profile']);
      },
      err => console.error(err)
    );
  }

}
