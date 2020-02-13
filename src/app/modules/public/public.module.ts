import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from './../shared/shared.module';

// containers
import { HomeComponent } from './containers/home/home.component';
import { CiabComponent } from './containers/ciab/ciab.component';
import { CongressoComponent } from './containers/congresso/congresso.component';
import { ExposicaoComponent } from './containers/exposicao/exposicao.component';

// components
import { SliderComponent } from './components/slider/slider.component';
import { SliderNavComponent } from './components/slider/slider-nav.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    // containers
    HomeComponent,
    CiabComponent,
    CongressoComponent,
    // components
    SliderComponent,
    SliderNavComponent,
    PageHeaderComponent,
    ExposicaoComponent
  ],
  imports: [
    CommonModule,
    // modules
    SharedModule
  ],
  exports: [
    // containers
    HomeComponent,
    CiabComponent,
    CongressoComponent,
    ExposicaoComponent
  ]
})
export class PublicModule { }
