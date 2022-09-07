import { ProductService } from "./services/product.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { NavComponent } from './components/nav/nav.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, NavComponent, ProductGridComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
