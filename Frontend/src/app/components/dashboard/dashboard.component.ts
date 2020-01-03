import { Component, OnInit} from '@angular/core';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any = [];
  userlogged: any = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUsers();
    this.dataUser();
  }

  getUsers() {
    this.authService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  dataUser() {
    this.authService.dataUser().subscribe(
      res => {
        this.userlogged = res;
      },
      err => console.error(err)
    );
  }

  /*deleteUser(id: string) {
    this.authService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.error(err)
    );
  }*/
  
  deleteUser(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't to be able to revert this action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, Cancel!'
    }).then(result => {
      if (result.value) {
        console.log('Delete');
        Swal.fire('Deleted', 'The User has been deleted!', 'success')
      }
    })
  }

}
