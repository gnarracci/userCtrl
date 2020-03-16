import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { User } from './../../models/users';
import { AuthService } from '../../services/auth.service';
import { Role } from './../../models/role';
import { Country } from './../../models/country';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})

export class UserformComponent implements OnInit {

  user: User = {
    id: 0,
    username: '',
    password: '',
    email: '',
    image: '',
    role: '',
    country: '',
    description: '',
    created_at: new Date()
  };

  listRoles: Role = {
    id: 0,
    role: '',
    role_descrip: ''
  }

  listCountries: Country = {
    id: 0,
    country: ''
  }

  edit = false;

  userlogged: any = [];

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dataUser();
    this.listRole();
    this.listCountry();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.authService.getUser(params.id)
      .subscribe(
        res => {
          this.user = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  listRole(): any {
    this.authService.getRoles().subscribe(
      res => {
        this.listRoles = res;
        console.log(res);
      },
      err => console.error(err)
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

  saveNewUser() {
    delete this.user.id;
    delete this.user.created_at;
    this.authService.saveUser(this.user).subscribe(
      res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'New User was Saved!',
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigate(['/dashboard']);
      },
      err => Swal.fire('Error!', 'Something went wrong!', 'error')
    );
  }

  updateUser() {
    delete this.user.created_at;
    this.authService.updateUser(this.user.id, this.user).subscribe(
      res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User was Updated!',
          showConfirmButton: false,
          timer: 2500
        })
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      err => Swal.fire('Error!', 'Something went wrong!', 'error')
    );
  }

  dataUser() {
    this.authService.dataUser().subscribe(
      res => {
        this.userlogged = res;
      },
      err => console.log(err)
    );
  }

}
