import { Routes } from '@angular/router';
import { Change } from './change/change';
import { Forgot } from './forgot/forgot';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // stays on buttons page
  { path: 'change', component: Change },
  { path: 'forgot', component: Forgot }
];
