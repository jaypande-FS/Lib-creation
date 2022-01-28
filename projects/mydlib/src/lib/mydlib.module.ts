import { NgModule } from '@angular/core';
import { MydlibComponent } from './mydlib.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [MydlibComponent],
  imports: [NzButtonModule],
  exports: [MydlibComponent],
})
export class MydlibModule {}
