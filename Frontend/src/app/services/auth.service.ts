import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

    getUsers() {
      return this.http.get(`${this.API_URI}/users`);
    }

    getUser(id: string) {
      return this.http.get(`${this.API_URI}/users/${id}`);
    }

    saveUser(user: User) {
      return this.http.post(`${this.API_URI}/users`, user);
    }

    updateUser(id: string | number, updatedUser: User): Observable<User> {
      return this.http.put(`${this.API_URI}/users/${id}`, updatedUser);
    }

    deleteUser(id: string) {
      return this.http.delete(`${this.API_URI}/users/${id}`);
    }

    registerUser(user: User) {
      return this.http.post(`${this.API_URI}/auth/register`, user);
    }

    loginUser(user: User): Observable<User> {
      return this.http.post(`${this.API_URI}/auth/login`, user);
    }

    // tslint:disable-next-line: ban-types
    loggedIn(): Boolean {
      return !!localStorage.getItem('token');
    }

    getToken() {
      return localStorage.getItem('token');
    }

    dataUser() {
      return this.http.get(`${this.API_URI}/auth/profile`);
    }

    logOut() {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }

    // Extras

    getCountries() {
      return this.http.get(`${this.API_URI}/users/extras`);
    }

}
