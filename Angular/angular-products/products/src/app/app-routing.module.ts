import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductResolve } from './resolvers';

import {
  AllComponent,
  NewComponent,
  EditComponent
} from './products';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'products', children: [
    {path: '', component: AllComponent},
    {path: 'edit/:id', component: EditComponent, resolve: {product: ProductResolve}},
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
