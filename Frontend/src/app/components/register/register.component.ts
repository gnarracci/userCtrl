import { Component, OnInit } from '@angular/core';
import { User } from './../../models/users';
import { Router } from '@angular/router';
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
    role: 'USER',
    country: '',
    description: '',
    created_at: new Date()
  };

  constructor(private authService: AuthService, private router: Router) { }

  public roleUser = 'USER';

  ngOnInit() {
  }

  saveNewUser() {
    console.log(this.user);
    delete this.user.created_at;
    this.authService.saveUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => console.error(err)
    );
  }

}
