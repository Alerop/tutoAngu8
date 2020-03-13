import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { WelcomePageComponent } from './home/components/welcome-page/welcome-page.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { PostPageComponent } from './home/components/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'posts',
    component: PostPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
