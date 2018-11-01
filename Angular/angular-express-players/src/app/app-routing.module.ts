import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromPlayers from './players';
import * as fromStatus from './status';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'players', component: fromPlayers.PlayersComponent, children: [
      {path: 'list', component: fromPlayers.ListComponent},
      {path: 'new', component: fromPlayers.NewComponent},
    ]},
    {path: 'status', component: fromStatus.StatusComponent},
    {path: '**', component: NotFoundComponent}
  ]}
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
