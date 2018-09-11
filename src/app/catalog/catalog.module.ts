import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CatalogComponent } from './catalog/catalog.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { FilterComponent } from './filter/filter.component';
import { FilterItemComponent } from './filter-item/filter-item.component';
import { SortComponent } from './sort/sort.component';
import { PipeModule } from '../pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    OwlModule,
    FontAwesomeModule,
    PipeModule.forRoot()
  ],
  declarations: [
    CatalogComponent,
    CarouselComponent,
    CarouselItemComponent,
    FilterComponent,
    FilterItemComponent,
    SortComponent
  ],
  exports: [CatalogComponent]
})
export class CatalogModule {}
