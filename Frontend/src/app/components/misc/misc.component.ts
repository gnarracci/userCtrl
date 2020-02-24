import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { AuthService } from './../../services/auth.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})

export class MiscComponent implements OnInit {

  userlogged: any = [];
  listRoles: any = [];
  listCountries: any = [];

  role: Role = {
    id: 0,
    role: '',
    role_descrip: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.dataUser();
    this.listRole();
  }

  dataUser() {
    this.authService.dataUser().subscribe(
      res => {
        this.userlogged = res;
        console.log(res);
      },
      err => console.error(err)
    );
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

  resetForm() {
    
  }

  saveNewRole(role: Role) {
    console.log(this.role);
    this.authService.addRole(this.role).subscribe(
      res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'New Role was Registered!',
          showConfirmButton: false,
          timer: 2500
        })
      },
      err => Swal.fire('Error!', 'Something went wrong!', 'error'),
      this.listRole()
    );
  }

  editRole() {
    
  }


}
