import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ResultadoComponent} from './resultado/resultado.component';
import {ConsultaComponent} from './consulta/consulta.component';

export const routes:Routes=[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: ConsultaComponent },

    {
      path:'results', component:ResultadoComponent
    }
]