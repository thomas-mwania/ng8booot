import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Ng8BoootSharedLibsModule, Ng8BoootSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Ng8BoootSharedLibsModule, Ng8BoootSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Ng8BoootSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Ng8BoootSharedModule {
  static forRoot() {
    return {
      ngModule: Ng8BoootSharedModule
    };
  }
}
