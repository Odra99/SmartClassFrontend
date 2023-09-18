import {
  provideTransloco,
  TranslocoModule
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';
@NgModule({
  exports: [ TranslocoModule ],
  providers: [
      provideTransloco({
        config: {
          availableLangs: ['es'],
          defaultLang: 'es',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
        },
        loader: TranslocoHttpLoader
      }),
  ],
})
export class TranslocoRootModule {}
