import { NgModule } from '@angular/core';

import { Ng8BoootSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Ng8BoootSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Ng8BoootSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Ng8BoootSharedCommonModule {}
