import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';

export const routes: Routes = [
  {path: 'home', component: Homepage},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
