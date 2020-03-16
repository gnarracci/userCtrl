import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { AuthService } from './../../services/auth.service';
import { Role } from '../../models/role';
import { Country } from '../../models/country';

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
    if (this.role.id == 0) {
      console.log(this.role);
      delete this.role.id;
      this.authService.addRole(this.role).subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'New Role was Registered!',
            showConfirmButton: false,
            timer: 2500
          }),
          this.role = {},
          this.listRole();   
        },
        err => Swal.fire('Error!', 'Something went wrong!', 'error')
      );
    } else {
      // Want Update
      console.log(this.role);
      console.log(this.role.id);
      this.authService.updateRole(this.role.id, this.role).subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Role was Updated!',
            showConfirmButton: false,
            timer: 2500
          }),
          this.role = {},
          console.log(res);
        },
        err => Swal.fire('Error!', 'Something went wrong!', 'error')
       );      
    }
  }
  
  saveNewCountry(country: Country, ctry: Country) {
    if (this.country.id == 0) {
      console.log(this.country);
        delete this.country.id;
        this.authService.addCountry(this.country).subscribe(
          res => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New Country is Added!',
              showConfirmButton: false,
              timer: 2500
            }),
            this.country = {},
            this.listCountry();
      },
      err => Swal.fire('Error', 'Something went wrong!', 'error')
    );
    } else {
      // Want Update
      console.log(this.country);
      console.log(this.country.id);
      this.authService.updateCountry(this.country.id, this.country).subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Country was Updated!',
            showConfirmButton: false,
            timer: 2500
          }),
          this.country = {},
          console.log(res);
        },
        err => Swal.fire('Error!', 'Something went wrong!', 'error')
      );
      }
  }

  deleteRole(id: string) {
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
        this.authService.deleteRole(id).subscribe(
          res => {
            console.log(res);
            this.listRole();
          },
          err => Swal.fire('Error!', 'Something went wrong!', 'error')
        );
        Swal.fire('Deletes!', 'Role selected has been deleted!.', 'success')
      }
    })
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

  updateRole(rol: Role) {
    this.role = rol;
  }

  updateCountry(ctry: Country) {
    this.country = ctry;
    console.log(ctry.id);
  }

}
