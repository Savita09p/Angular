import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { from, map, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-merge-map-products',
  templateUrl: './merge-map-products.component.html',
  styleUrls: ['./merge-map-products.component.scss']
})
export class MergeMapProductsComponent implements OnInit {
  usersArr : Array<any> =[]
  constructor(
    private _usersService : UsersService
  ) { }

  ngOnInit(): void {
    this.fetchAllUsers()
  }

  // fetchAllUsers(){
  //   this._usersService.getAllUsers().subscribe(users => {
  //     users.forEach((user:any) => {
  //       //  console.log(user)
  //        this._usersService.getPostsOfUsers(user.id)
  //          .subscribe(posts=>{
  //           // console.log({
  //           //   ...user,
  //           //   postsArr : posts
  //           // });

  //           let obj = {
  //             ...user, 
  //             postsArr : posts
  //           }
  //           this.usersArr.push(obj)
  //          })
  //     })
     
  //   })

  // }

  fetchAllUsers(){
    this._usersService.getAllUsers()
     .pipe(
      mergeMap(users =>from(users)),//here we get users// single obeject of user dege ye.// here from do work of rxjs oprator jisme ham array pas karenge and is array ek obeservable banayega  and it give single elements after subscribe it
      mergeMap((user : any) => {
        return this._usersService.getPostsOfUsers(user.id)//user hai already so we get here id of user
            .pipe(
              map(posts => {
               return {
                 ...user,
                postsArr :  posts
               }
              })
            )
      }),
      toArray()
     )
     .subscribe(res =>{
      // console.log(res)
      // this.usersArr.push(res)
      this.usersArr = res;
     })
  }
}


// get service ka method it gives observable and then it give us Array of users and isko hamne from me pass kiya then it return single user
//mergeMap return from an dit is obeservable and after subscribe we get single user. again we return that into  observable id get kiya and pass into pipable map madhe to get user and its resp postsand pipable map operator return observable
//array chahiya tha so rxjs ka operator toArray we use.