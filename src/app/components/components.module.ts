import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [ 
        HeaderComponent, FooterComponent, PopinfoComponent, MenuComponent
    ],
    exports: [
        HeaderComponent, FooterComponent, PopinfoComponent, MenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        IonicModule
    ]
})

export class ComponentsModule { }