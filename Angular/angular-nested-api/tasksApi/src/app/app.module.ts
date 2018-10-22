import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';

// barrelling by creating an index.ts inside the folder where we have all the child components and making a one-line import of all of them:
import * as fromTasks from './tasks';
import { TitleizePipe } from './pipes/titleize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ...fromTasks.components,
    TitleizePipe    // barreling continues; using a ...rest operator instead of comma-separated list of all components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, TitleizePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
