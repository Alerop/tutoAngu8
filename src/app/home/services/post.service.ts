import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  basePath: String;

  constructor(
    public http: HttpClient
  ) {
    this.basePath = `https://jsonplaceholder.typicode.com/`;
  }

  /**
   * @name getPosts
   * @description
   * Function that realize a GET request to return all posts
   * 
   * @returns {Observable<Post[]>}
   * @memberof PostService
   */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.basePath}posts`);
  }

  getPost(idPost: number): Observable<Post> {
    const result = this.http.get<Post>(`${this.basePath}post/${idPost}`);
    return result;
  }

  addPost(userId: number, title: string, body: string): Observable<Object> {
    const newPost = {
      userId,
      title,
      body
    }
    const result = this.http.post(`${this.basePath}posts`, newPost)
    return result;
  }
}
