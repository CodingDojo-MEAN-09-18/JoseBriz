import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {path: '', component: NavComponent},
  {path: 'city/:id', component: CityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
