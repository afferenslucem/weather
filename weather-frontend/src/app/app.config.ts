import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { baseUrlInterceptor } from './interceptors/base-url-interceptor';
import { loggingInterceptor } from './interceptors/logging-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
      provideClientHydration(withEventReplay()),
      provideHttpClient(
          withInterceptors(
              [
                  baseUrlInterceptor,
                  loggingInterceptor,
              ],
          ),
          withFetch(),
      ),
  ]
};
