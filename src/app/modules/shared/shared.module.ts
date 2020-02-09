import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { FormControlMessageComponent } from './components/form-control-message/form-control-message.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { KeynoteSpeakerComponent } from './components/keynote-speaker/keynote-speaker.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    // components
    FormControlMessageComponent,
    HeaderComponent,
    FooterComponent,
    KeynoteSpeakerComponent,
    SponsorsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    // modules
    ReactiveFormsModule,
    NgbModalModule
  ],
  exports: [
    FormControlMessageComponent,
    HeaderComponent,
    FooterComponent,
    KeynoteSpeakerComponent,
    SponsorsComponent,
    GalleryComponent
  ]
})
export class SharedModule { }
