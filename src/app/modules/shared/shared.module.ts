import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SliderComponent } from './components/slider/slider.component';
import { SliderNavComponent } from './components/slider/slider-nav.component';
import { FormControlMessageComponent } from './components/form-control-message/form-control-message.component';

@NgModule({
  declarations: [
    // components
    SliderComponent,
    SliderNavComponent,
    FormControlMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent,
    FormControlMessageComponent
  ]
})
export class SharedModule { }
