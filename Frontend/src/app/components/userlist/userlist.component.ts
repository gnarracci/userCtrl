import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  userlogged: any = [];
  listUsers: any = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.dataUser();
    this.listUser();
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

  listUser() {
    this.authService.getUsers().subscribe(
      res => {
        this.listUsers = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
