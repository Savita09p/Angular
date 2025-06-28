import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  fakeProductUrl : string =`https://fakestoreapi.com/products`;
  reviewUrl : string =`https://jsonplaceholder.typicode.com/posts`
  constructor(
    private _http : HttpClient
  ) { }

  getAllProducts () : Observable<any>{
   return this._http.get(this.fakeProductUrl)
  }
  getReviewById(id : number): Observable<any>{
    return this._http.get(`${this.reviewUrl}/${id}`)//alaga alag product ke review chahiye so id add karenge

  }
}
