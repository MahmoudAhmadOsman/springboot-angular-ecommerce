import { Product } from './../common/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //Base URL ?size=100 -> return all the products in the DATABASE
  private baseUrl = 'http://localhost:8080/api/products?size=100'; //Spring Boot backend API

  constructor(private httClient: HttpClient) {}

  //Custom method that gets the backend data
  // you can also use: getProductList(): Observable<any>
  getProductList(theCategoryId: number): Observable<Product[]> {
    /*===============================  
     //You need to figure out based tthe backend url here
===============================*/
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return (
      this.httClient
        //.get<GetResponse>(this.baseUrl)
        .get<GetResponse>(searchUrl)
        .pipe(map((response) => response._embedded.products))
    );
  }
}
interface GetResponse {
  _embedded: {
    products: Product[];
  };
}
