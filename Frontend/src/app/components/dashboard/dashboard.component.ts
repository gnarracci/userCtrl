import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  users: any = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.authService.getUsers().subscribe(
      res => {
        //this.users = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteUser(id: string) {
    this.authService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.error(err)
    );
  }

}
