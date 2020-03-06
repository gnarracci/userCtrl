import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { AuthService } from './../../services/auth.service';
import { Role } from '../../models/role';
import { Country } from '../../models/country';
import { NgForm } from '@angular/forms';

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

  country: Country = {
    id: 0,
    country: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.dataUser();
    this.listRole();
    this.listCountry();
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

  listCountry(): any {
    this.authService.viewCountries().subscribe(
      res => {
        this.listCountries = res;
        console.log(res);
      },
      err => console.error(err)
    );
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
        }),
        this.listRole();   
      },
      err => Swal.fire('Error!', 'Something went wrong!', 'error')
    );
  }

  saveNewCountry(country: Country) {
    console.log(this.country);
    this.authService.addCountry(this.country).subscribe(
      res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'New Country is Added!',
          showConfirmButton: false,
          timer: 2500
        }),
        this.listCountry();
      },
      err => Swal.fire('Error', 'Something went wrong!', 'error')
    );
  }

  deleteCountry(id:string) {
    Swal.fire({
      title:'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        //Want Delete
        this.authService.deleteCountry(id).subscribe(
          res => {
            console.log(res);
            this.listCountry();
          },
          err => Swal.fire('Error!', 'Something went wrong!', 'error')
        );
        Swal.fire('Deletes!', 'Country selected has been deleted!.', 'success')
      }
    })
  }

  formReset(form?: NgForm) {
    this.formReset();
  }

}
