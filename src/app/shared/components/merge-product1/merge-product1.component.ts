import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { from, map, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-merge-product1',
  templateUrl: './merge-product1.component.html',
  styleUrls: ['./merge-product1.component.scss']
})
export class MergeProduct1Component implements OnInit {
   productsArr : Array<any> =[]
  constructor(
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchAllProducts()
  }

  // fetchAllProducts(){
  //   this._productService.getAllProducts()
  //     .subscribe(products => {
  //       // console.log(products);// 20 products array here we get
  //       products.forEach((prod : any) => {
  //         console.log(prod)//ek ek product we get
  //         this._productService.getReviewById(prod.id)//returns observable so need to subscribe it
  //           .subscribe(post=>{
  //              console.log(prod,post)//product ka review hai ye
  //              let obj = {
  //               ...prod,
  //               review : post.title
  //              }
  //             //  console.log(obj)//object with information and review we get here
  //             this.productsArr.push(obj)
  //           })
  //       })
  //     })
  // }

  fetchAllProducts(){
    this._productService.getAllProducts()
     .pipe(
      mergeMap(products => {
      //  return products // it is just js object need to convert into Observable so write here from
      return from(products)
      }),//isko jo data mil raha hai wahi return kar raha hai no any  changes so here we get ek ek object
       mergeMap((product :any) => {
        return this._productService.getReviewById(product.id)//here we get data par product data nahi hai so use pipable operator
           .pipe(
            map((post : any) =>{
              return {
                ...product,
                review : post.title
              }
            })
           )
       }),
       toArray()
     )
    .subscribe(res =>{
      // console.log(res);//get 20 products array now want id to get har product ka review for this pipable oprator we use uper
     this.productsArr = res;
    })
  }
}
