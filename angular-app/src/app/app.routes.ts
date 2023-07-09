import { Routes } from '@angular/router';
import { NewPageComponent } from "../new-page/new-page.component";
import { FirstPageComponent } from "../first-page/first-page.component";

export const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent
  },
  {
    path: 'new-page',
    component: NewPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
