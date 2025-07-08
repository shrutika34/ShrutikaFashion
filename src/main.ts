import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { ApiModule } from './app/api/api.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ApiModule),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
