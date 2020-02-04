import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SliderComponent } from './components/slider/slider.component';
import { SliderNavComponent } from './components/slider/slider-nav.component';

@NgModule({
  declarations: [
    // components
    SliderComponent,
    SliderNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent
  ]
})
export class SharedModule { }
