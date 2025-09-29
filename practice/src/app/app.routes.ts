import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { Signin } from './signin/signin';

import { Reset } from './reset/reset';
import { Forgot } from './forgot/forgot';

export const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: Signup },
    { path: 'signin', component: Signin},
    { path: 'forgot', component: Forgot } ,
    { path: 'reset', component: Reset },
   
];