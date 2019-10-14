import { Component, OnInit } from '@angular/core';
import { User } from './../../models/users';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(user: User) {
    this.authService.loginUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/profile']);
      },
      err => console.error(err));
    this.router.navigate(['/login']);

  }

}
