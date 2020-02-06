import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// containers
import { HomeComponent } from './containers/home/home.component';
import { CiabComponent } from './containers/ciab/ciab.component';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    // containers
    HomeComponent,
    CiabComponent,
    // components
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    // modules
    SharedModule,
    ReactiveFormsModule,
    NgbModalModule
  ],
  exports: [
    // containers
    HomeComponent,
    CiabComponent,
    // components
    HeaderComponent,
    FooterComponent
  ]
})
export class PublicModule { }
