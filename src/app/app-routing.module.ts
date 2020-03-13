import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './home/components/user-page/user-page.component';
import { WelcomePageComponent } from './home/components/welcome-page/welcome-page.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { PostPageComponent } from './home/components/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'user',
    component: UserPageComponent
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
