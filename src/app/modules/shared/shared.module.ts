import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { FormControlMessageComponent } from './components/form-control-message/form-control-message.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderNavComponent } from './components/slider/slider-nav.component';
import { KeynoteSpeakerComponent } from './components/keynote-speaker/keynote-speaker.component';

@NgModule({
  declarations: [
    // components
    FormControlMessageComponent,
    SliderComponent,
    SliderNavComponent,
    KeynoteSpeakerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormControlMessageComponent,
    SliderComponent,
    KeynoteSpeakerComponent
  ]
})
export class SharedModule { }
