import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllComponent, NewComponent, DetailComponent } from './authors';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'authors', children: [
    {path: 'all', component: AllComponent},
    {path: 'new', component: NewComponent},
    {path: 'all/:_id', component: DetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
