import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  exports: [
    // containers
    HomeComponent,
    CiabComponent
  ]
})
export class PublicModule { }
