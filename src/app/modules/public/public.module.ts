import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// containers
import { HomeComponent } from './containers/home/home.component';
import { CiabComponent } from './containers/ciab/ciab.component';
import { CongressComponent } from './containers/congress/congress.component';
import { ExposureComponent } from './containers/exposure/exposure.component';
import { FintechComponent } from './containers/fintech/fintech.component';
import { InformationsComponent } from './containers/informations/informations.component';
import { PublicationsComponent } from './containers/publications/publications.component';
import { PressComponent } from './containers/press/press.component';
import { KeynoteSpeakersComponent } from './containers/keynote-speakers/keynote-speakers.component';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { SponsorExhibitComponent } from './containers/sponsor-exhibit/sponsor-exhibit.component';
import { SubscriptionComponent } from './containers/subscription/subscription.component';

// components
import { SliderComponent } from './components/slider/slider.component';
import { SliderNavComponent } from './components/slider/slider-nav.component';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';
import { KeynoteSpeakerComponent } from './components/keynote-speaker/keynote-speaker.component';
import { KeynoteSpeakerModalComponent } from './components/keynote-speaker-modal/keynote-speaker-modal.component';
import { BannerSponsorExhibitComponent } from './components/banner-sponsor-exhibit/banner-sponsor-exhibit.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryNavComponent } from './components/gallery/gallery-nav.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageHeaderMenuComponent } from './components/page-header-menu/page-header-menu.component';
import { SponsorExhibitFormComponent } from './components/sponsor-exhibit-form/sponsor-exhibit-form.component';
import { ModalPhotosComponent } from './components/modal-photos/modal-photos.component';
import { ModalRegisterFormComponent } from './components/modal-register-form/modal-register-form.component';
import { ModalTermsUseComponent } from './components/modal-terms-use/modal-terms-use.component';
import { ModalPrivacyPolicyComponent } from './components/modal-privacy-policy/modal-privacy-policy.component';
import { ScheduleEventsFormComponent } from './components/schedule-events-form/schedule-events-form.component';
import { ScheduleSpeakersFormComponent } from './components/schedule-speakers-form/schedule-speakers-form.component';

@NgModule({
  declarations: [
    // containers
    HomeComponent,
    CiabComponent,
    CongressComponent,
    ExposureComponent,
    FintechComponent,
    InformationsComponent,
    PublicationsComponent,
    PressComponent,
    KeynoteSpeakersComponent,
    ScheduleComponent,
    SponsorExhibitComponent,
    SubscriptionComponent,
    // components
    SliderComponent,
    SliderNavComponent,
    ModalVideoComponent,
    KeynoteSpeakerComponent,
    KeynoteSpeakerModalComponent,
    BannerSponsorExhibitComponent,
    GalleryComponent,
    GalleryNavComponent,
    SponsorsComponent,
    PageHeaderComponent,
    PageHeaderMenuComponent,
    SponsorExhibitFormComponent,
    ModalPhotosComponent,
    ModalRegisterFormComponent,
    ModalTermsUseComponent,
    ModalPrivacyPolicyComponent,
    ScheduleEventsFormComponent,
    ScheduleSpeakersFormComponent
  ],
  imports: [
    CommonModule,
    // modules
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgbCarouselModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    // containers
    HomeComponent,
    CiabComponent,
    CongressComponent,
    ExposureComponent,
    FintechComponent,
    InformationsComponent,
    PublicationsComponent,
    PressComponent,
    KeynoteSpeakersComponent,
    ScheduleComponent,
    SponsorExhibitComponent,
    SubscriptionComponent
  ]
})
export class PublicModule { }
