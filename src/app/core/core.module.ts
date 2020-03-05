import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [ 
        HeaderComponent, 
        NavbarComponent 
    ],
    exports: [ 
        HeaderComponent,
        NavbarComponent 
    ],
})

export class CoreModule {}