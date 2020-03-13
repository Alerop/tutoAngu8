import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from '../shared/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostPageComponent } from './components/post-page/post-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    WelcomePageComponent,
    PostPageComponent
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
    PostPageComponent
  ]
})
export class HomeModule { }
