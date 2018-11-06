import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorResolve } from './resolvers';

import { LandingComponent, AllComponent, NewComponent, DetailComponent, NotFoundComponent } from './authors';
import { HomeComponent, LoginComponent, RegisterComponent } from './home';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'authors',
    children: [{
      path: '',
      component: LandingComponent
    },
    {
      path: 'all',
      component: AllComponent
    },
    {
      path: 'new',
      component: NewComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'all/:_id',
      component: DetailComponent,
      resolve: {author: AuthorResolve},
      canActivate: [AuthGuard]
    },
    {
      path: '**',
      component: NotFoundComponent
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
