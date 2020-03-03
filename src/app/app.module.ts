import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { PublicModule } from './modules/public/public.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';

// others
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { APP_LOCALE_ID } from './app-locale';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // modules
    SharedModule,
    PublicModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: APP_LOCALE_ID },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
