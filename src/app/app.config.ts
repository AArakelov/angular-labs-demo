import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideHttpClient} from '@angular/common/http';
import {provideClientHydration} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({eventCoalescing: true}),
        provideAnimations(),
        provideHttpClient(),
        provideRouter(routes, withComponentInputBinding()), provideStore(), provideEffects(), provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode()
        }), provideClientHydration()]
};
