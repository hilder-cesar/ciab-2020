import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    // components
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent
  ]
})
export class SharedModule { }
