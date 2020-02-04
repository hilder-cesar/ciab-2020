import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from './../shared/shared.module';

// containers
import { HomeComponent } from './containers/home/home.component';
import { CiabComponent } from './containers/ciab/ciab.component';

// components
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    // containers
    HomeComponent,
    CiabComponent,
    // components
    HeaderComponent
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
