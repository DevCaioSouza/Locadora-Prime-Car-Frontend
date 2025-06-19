import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { CreateCarForm } from './create-car-form/create-car-form';

export const routes: Routes = [
  {path: 'home', component: Homepage},
  {path: 'adicionar', component: CreateCarForm}
];
