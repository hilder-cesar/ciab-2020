import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

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
import { KeynoteSpeakersComponent } from './containers/keynote-speakers/keynote-speakers.component';
import { SubscriptionComponent } from './containers/subscription/subscription.component';

// components
import { SliderComponent } from './components/slider/slider.component';
import { SliderNavComponent } from './components/slider/slider-nav.component';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SponsorExhibitFormComponent } from './components/sponsor-exhibit-form/sponsor-exhibit-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { KeynoteSpeakerComponent } from './components/keynote-speaker/keynote-speaker.component';
import { KeynoteSpeakerModalComponent } from './components/keynote-speaker-modal/keynote-speaker-modal.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryNavComponent } from './components/gallery/gallery-nav.component';
import { BannerSponsorExhibitComponent } from './components/banner-sponsor-exhibit/banner-sponsor-exhibit.component';
import { ModalPhotosComponent } from './components/modal-photos/modal-photos.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

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
    ModalVideoComponent,
    PageHeaderComponent,
    SponsorExhibitFormComponent,
    KeynoteSpeakersComponent,
    HeaderComponent,
    FooterComponent,
    KeynoteSpeakersComponent,
    KeynoteSpeakerComponent,
    KeynoteSpeakerModalComponent,
    SponsorsComponent,
    GalleryComponent,
    GalleryNavComponent,
    BannerSponsorExhibitComponent,
    ModalPhotosComponent,
    RegisterFormComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    // modules
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgbCarouselModule,
    NgbDropdownModule
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
    SponsorExhibitComponent,
    KeynoteSpeakersComponent,
    SubscriptionComponent,
    // components
    HeaderComponent,
    FooterComponent
  ]
})
export class PublicModule { }
