import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import * as fromProducts from './products';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpService } from './http.service';

import { ProductResolve } from './resolvers';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ...fromProducts.components,
    LandingComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService, ProductResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
