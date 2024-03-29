import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    imports: [
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [
        UserService
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
})
export class CoreModule { }