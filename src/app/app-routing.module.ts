import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: '**', redirectTo: '/catalog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
