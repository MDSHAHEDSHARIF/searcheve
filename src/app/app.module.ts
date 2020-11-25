import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';

import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsearchComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
