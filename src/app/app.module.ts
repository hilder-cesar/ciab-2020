import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { PublicModule } from './modules/public/public.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';

// services
import { ConfigService } from './services/config/config.service';
import { ModalCiabCancelComponent } from './components/modal-ciab-cancel/modal-ciab-cancel.component';

const appInitializerFn = (config: ConfigService) => {
  return () => {
    return config.loadConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    ModalCiabCancelComponent
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
    // services
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
