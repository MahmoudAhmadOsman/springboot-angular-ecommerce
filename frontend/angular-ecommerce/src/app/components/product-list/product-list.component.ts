import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  //(step:0) - currentCategoryId: number
  currentCategoryId: number;
  constructor(
    private productService: ProductService,
    //(step:01) - private route: ActivatedRoute
    private route: ActivatedRoute
  ) {}

  // ngOnInit(): void
  ngOnInit() {
    //Subscribe to route (step:1)
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    //(step:2)
    //Check if the 'id' is avaiable or nor
    const hasCatergoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCatergoryId) {
      //Covert it to a number using + sign
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      // not, default to category id 1
      this.currentCategoryId = 1;
    }

    //(step:4) - this.currentCategoryId
    //Then update the product.service.ts
    this.productService
      .getProductList(this.currentCategoryId)
      .subscribe((data) => {
        this.products = data;
      });
  }
}
