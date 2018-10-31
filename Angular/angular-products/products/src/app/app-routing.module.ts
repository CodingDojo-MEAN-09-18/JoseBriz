import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AllComponent,
  NewComponent,
  EditComponent
} from './products';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'products', component: AllComponent, children: [
    {path: 'show/:id', component: EditComponent},
  ]},
  {path: 'new', component: NewComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
