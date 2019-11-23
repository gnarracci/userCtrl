import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/users';
import { JWT } from '../models/jwtresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://localhost:3000/api';
  
  headers = new Headers();

  constructor(private http: HttpClient) { }

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

    dataUser() {
      return this.http.get(`${this.API_URI}/auth/profile`);
    }

}
