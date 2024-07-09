import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter([]),
    provideExperimentalZonelessChangeDetection(),
  ],
}).catch((err) => console.error(err));
