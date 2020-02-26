import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    providers: [
        UserService
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
})
export class CoreModule { }