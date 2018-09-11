import { NgModule } from '@angular/core';
import { CurrencyFormatPipe } from './currency.pipe';

@NgModule({
  declarations: [CurrencyFormatPipe],
  exports: [CurrencyFormatPipe]
})
export class PipeModule {
  static forRoot() {
    return {
        ngModule: PipeModule,
        providers: [],
    };
 }
}
