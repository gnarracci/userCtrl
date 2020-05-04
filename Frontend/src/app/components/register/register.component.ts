import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  listCountries: any = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.listCountry();
  }

  saveNewUser() {
    console.log(this.user);
    delete this.user.created_at;
    this.authService.registerUser(this.user).subscribe(
      res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'New User was Registered!',
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigate(['/profile']);
      },
      err => Swal.fire('Error!', 'Something went wrong!', 'error')
    );
  }

  listCountry(): any {
    this.authService.viewCountries().subscribe(
      res => {
        this.listCountries = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
