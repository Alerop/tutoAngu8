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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.basePath}users`);
  }
}
