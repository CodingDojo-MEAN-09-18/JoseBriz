import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

import { AuthorResolve } from './resolvers';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AllComponent,
    NewComponent,
    DetailComponent,
    NotFoundComponent,
    LandingComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, AuthorResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
