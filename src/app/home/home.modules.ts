import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from "./signin/signin.component";
import { VMessageModule } from "../shared/components/vmessage/vmessage.moule";
import { MonitorComponent } from "../monitor/monitor.component";

@NgModule({
    declarations: [ 
        SignInComponent,
        MonitorComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule { }