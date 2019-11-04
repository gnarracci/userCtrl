import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from './../../models/users';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  @HostBinding('class') classes = 'row';

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

  edit: boolean = false;

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
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

  saveNewUser() {
    delete this.user.id;
    delete this.user.created_at;
    this.authService.saveUser(this.user).subscribe(
      res => {
        this.router.navigate(['/dashboard']);
      },
      err => console.error(err)
    );
  }

  updateUser() {
    delete this.user.created_at;
    this.authService.updateUser(this.user.id, this.user).subscribe(
      res => {
        this.router.navigate(['/dashboard']);
      },
      err => console.error(err)
    );
  }

}
