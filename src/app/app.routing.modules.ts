import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './home/signin/signin.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
    { 
        path: '',
        component: SignInComponent 
    }, 
    
    { 
        path: 'monitor',
        component: MonitorComponent 
    }, 
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }