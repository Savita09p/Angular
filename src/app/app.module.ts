import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';
import { MergeMapProductsComponent } from './shared/components/merge-map-products/merge-map-products.component';
import { MergeProduct1Component } from './shared/components/merge-product1/merge-product1.component'

@NgModule({
  declarations: [
    AppComponent,
    MergeMapProductsComponent,
    MergeProduct1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
