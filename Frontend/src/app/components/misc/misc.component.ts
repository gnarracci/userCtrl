import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { Role } from '../../models/role';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {

  userlogged: any = []; 

  role: Role = {
    id: 0,
    role: '',
    role_descrip: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.dataUser();
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

  addRole(role: Role) {
    console.log(this.role);
    this.authService.addRole(this.role).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }
  


}
