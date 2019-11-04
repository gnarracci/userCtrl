import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  users: any = [];

  constructor(private authService: AuthService) { }

  ngOnInit() { 
    this.dataUser()
   }

  dataUser() {
    this.authService.dataUser().subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)
    );
  }

}
