import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

// containers
import { HomeComponent } from './containers/home/home.component';
import { CiabComponent } from './containers/ciab/ciab.component';
import { CongressoComponent } from './containers/congresso/congresso.component';
import { ExposicaoComponent } from './containers/exposicao/exposicao.component';
import { FintechComponent } from './containers/fintech/fintech.component';
import { InformationsComponent } from './containers/informations/informations.component';
import { PublicationsComponent } from './containers/publications/publications.component';
import { PressComponent } from './containers/press/press.component';
import { SponsorExhibitComponent } from './containers/sponsor-exhibit/sponsor-exhibit.component';

// components
import { SliderComponent } from './components/slider/slider.component';
import { SliderNavComponent } from './components/slider/slider-nav.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SponsorExhibitFormComponent } from './components/sponsor-exhibit-form/sponsor-exhibit-form.component';

@NgModule({
  declarations: [
    // containers
    HomeComponent,
    CiabComponent,
    CongressoComponent,
    ExposicaoComponent,
    FintechComponent,
    InformationsComponent,
    PublicationsComponent,
    PressComponent,
    SponsorExhibitComponent,
    // components
    SliderComponent,
    SliderNavComponent,
    PageHeaderComponent,
    SponsorExhibitFormComponent
  ],
  imports: [
    CommonModule,
    // modules
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    // containers
    HomeComponent,
    CiabComponent,
    CongressoComponent,
    ExposicaoComponent,
    FintechComponent,
    InformationsComponent,
    PublicationsComponent,
    PressComponent,
    SponsorExhibitComponent
  ]
})
export class PublicModule { }
