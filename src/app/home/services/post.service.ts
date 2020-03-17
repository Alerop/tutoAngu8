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
    const result = this.http.get<Post[]>(`${this.basePath}posts`);
    return result;
  }

  /**
   * @name getPost
   * @description
   * Function used to get just one Post by id
   * 
   * @param {number} idPost
   * @returns {Observable<Post>}
   * @memberof PostService
   */
  getPost(idPost: number): Observable<Post> {
    const result = this.http.get<Post>(`${this.basePath}posts/${idPost}`);
    return result;
  }

  /**
   * @name addPost
   * @description
   * Function used to add a new Post
   * 
   * @param {number} userId
   * @param {string} title
   * @param {string} body
   * @returns {Observable<Object>}
   * @memberof PostService
   */
  addPost(userId: number, title: string, body: string): Observable<Post> {
    const newPost = {
      userId,
      title,
      body
    }
    const result = this.http.post<Post>(`${this.basePath}posts`, newPost);
    return result;
  }

  /**
   * @name deletePost
   * @description
   * Function used to remove a post by id
   * 
   * @param {number} idPost
   * @returns {Observable<Post>}
   * @memberof PostService
   */
  deletePost(idPost: number): Observable<Post> {
    const result = this.http.delete<Post>(`${this.basePath}posts/${idPost}`);
    return result;
  }
}
