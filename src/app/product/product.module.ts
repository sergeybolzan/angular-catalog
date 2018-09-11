import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductComponent } from './product/product.component';
import { PipeModule } from '../pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    PipeModule.forRoot()
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
