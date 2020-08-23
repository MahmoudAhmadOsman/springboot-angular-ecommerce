import { Product } from "./../common/product";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private baseUrl = "http://localhost:8080/api/products"; //Spring Boot backend API

  constructor(private httClient: HttpClient) {}

  //Custom method that gets the backend data
  // you can also use: getProductList(): Observable<any>
  getProductList(): Observable<Product[]> {
    return this.httClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.products));
  }
}
interface GetResponse {
  _embedded: {
    products: Product[];
  };
}
