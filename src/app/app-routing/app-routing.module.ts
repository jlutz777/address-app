import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FindComponent } from '../find/find.component';
//import { AuthGuard } from './guards/auth-guard';
//import { LoginComponent } from './login/login.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
    {
       path: '',
       component: FindComponent,
       //canActivate: [ AuthGuard ]
    },
    /*{
       path: 'login',
       component: LoginComponent
    },*/
    {
        path: 'find',
        component: FindComponent,
        //canActivate: [ AuthGuard ]
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
