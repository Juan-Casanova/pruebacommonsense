import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ApiComponent} from './compenents/api/api.component';

export const routes:Routes=[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: AppComponent },
]