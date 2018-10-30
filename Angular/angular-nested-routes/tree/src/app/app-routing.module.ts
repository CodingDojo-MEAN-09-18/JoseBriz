import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent,
  ProductDetailsComponent,
  BrandComponent,
  CategoryComponent,
  ReviewsComponent,
  ReviewsDetailsComponent,
  AuthorComponent,
  AllComponent
} from './trees';

const routes: Routes = [
  {path: 'products', component: ProductsComponent, children: [
    {path: 'details/:id', component: ProductDetailsComponent},
    {path: 'brand/:brand', component: BrandComponent},
    {path: 'category/:cat', component: CategoryComponent},
  ]},
  {path: 'reviews', component: ReviewsComponent, children: [
    {path: 'details/:id', component: ReviewsDetailsComponent},
    {path: 'author/:id', component: AuthorComponent},
    {path: 'all/:id', component: AllComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
