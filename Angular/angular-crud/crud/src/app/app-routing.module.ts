import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorResolve } from './resolvers';

import { LandingComponent, AllComponent, NewComponent, DetailComponent, NotFoundComponent } from './authors';

const routes: Routes = [
  {path: '', redirectTo: 'authors', pathMatch: 'full'},
  {path: 'authors', children: [
    {path: '', component: LandingComponent},
    {path: 'all', component: AllComponent},
    {path: 'new', component: NewComponent},
    {path: 'all/:_id', component: DetailComponent, resolve: {author: AuthorResolve}},
    {path: '**', component: NotFoundComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
