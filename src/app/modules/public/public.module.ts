import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from './../shared/shared.module';

// containers
import { HomeComponent } from './containers/home/home.component';
import { CiabComponent } from './containers/ciab/ciab.component';

// components
import { SliderComponent } from './components/slider/slider.component';
import { SliderNavComponent } from './components/slider/slider-nav.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    // containers
    HomeComponent,
    CiabComponent,
    // components
    SliderComponent,
    SliderNavComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    // modules
    SharedModule
  ],
  exports: [
    // containers
    HomeComponent,
    CiabComponent
  ]
})
export class PublicModule { }
