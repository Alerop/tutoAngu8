import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath: String;

  constructor(
    public http: HttpClient
  ) {
    this.basePath = `https://jsonplaceholder.typicode.com/`;
  }

  /**
   * @name getUsers
   * @description
   * Function that realize a GET request to return all users
   * 
   * @returns {Observable<User[]>}
   * @memberof UserService
   */
  getUsers(): Observable<User[]> {
    const result = this.http.get<User[]>(`${this.basePath}users`);
    return result;
  }
}
