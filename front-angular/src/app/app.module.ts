import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";


import {routes} from './routes'

import { AppComponent } from './app.component';
import { ApiComponent } from './compenents/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent
  ],
  imports: [
    RouterModule.forRoot(routes),

    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
