import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { FormControlMessageComponent } from './components/form-control-message/form-control-message.component';

@NgModule({
  declarations: [
    // components
    FormControlMessageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // components
    FormControlMessageComponent
  ]
})
export class SharedModule { }
