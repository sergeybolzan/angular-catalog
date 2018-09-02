import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CurrencyFormat } from './currency.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogComponent, CatalogItemComponent, CurrencyFormat],
  exports: [CatalogComponent]
})
export class CatalogModule { }
