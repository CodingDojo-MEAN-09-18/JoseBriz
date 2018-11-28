import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// need to npm i -S ngx-cookie for angular to be able to read cookies
import { CookieModule } from 'ngx-cookie';

import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AllComponent } from './authors/all/all.component';
import { NewComponent } from './authors/new/new.component';
import { DetailComponent } from './authors/detail/detail.component';
import { NotFoundComponent } from './authors/not-found/not-found.component';
import { LandingComponent } from './authors/landing/landing.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent, LoginComponent, RegisterComponent } from './home/';

import { AuthorResolve } from './resolvers';

import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AllComponent,
    NewComponent,
    DetailComponent,
    NotFoundComponent,
    LandingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CookieModule.forRoot(),
  ],
  providers: [HttpService, AuthorResolve, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
