import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    TestLibComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    TestLibComponent,
    ButtonComponent
  ]
})
export class TestLibModule { }
