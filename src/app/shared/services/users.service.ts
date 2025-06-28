import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl : string =`https://jsonplaceholder.typicode.com/users`
  constructor(
    private _http : HttpClient
  ) { }

  getAllUsers() : Observable<any>{
    return this._http.get(this.usersUrl)
  }

  getPostsOfUsers(userId : number) : Observable<any>{
    return this._http.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )
  }
}
