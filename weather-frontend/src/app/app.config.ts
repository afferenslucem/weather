import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
    ApplicationConfig,
    isDevMode,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

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
      provideTranslateService({
          loader: provideTranslateHttpLoader({
              prefix: '/i18n/',
              suffix: '.json',
              useHttpBackend: true
          }),
          fallbackLang: 'en',
          lang: 'ru'
      }), provideServiceWorker('ngsw-worker.js', {
          enabled: !isDevMode(),
          registrationStrategy: 'registerWhenStable:30000',
      }),
  ]
};
