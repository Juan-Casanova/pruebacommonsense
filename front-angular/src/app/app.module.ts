import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";


import {routes} from './routes'

import { AppComponent } from './app.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadoComponent,
    ConsultaComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),

    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
