import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './home/signin/signin.component';
import { MonitorComponent } from './monitor/monitor.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
    { 
        path: '',
        component: SignInComponent 
    }, 
    
    { 
        path: 'monitor',
        component: MonitorComponent,
        canActivate: [ AuthGuard ]
    }, 
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }