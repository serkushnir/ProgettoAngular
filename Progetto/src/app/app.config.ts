import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(), importProvidersFrom([AngularFireModule.initializeApp({
    apiKey: "AIzaSyCH6N9BFY6xszEcXoah-kfPMv9gxC-YPig",
    authDomain: "progettoangular-cc12f.firebaseapp.com",
    projectId: "progettoangular-cc12f",
    storageBucket: "progettoangular-cc12f.appspot.com",
    messagingSenderId: "1016902412422",
    appId: "1:1016902412422:web:06e9c7b64f67ffe3dec907"
  })]), AngularFireAuth, AngularFireAuthModule]
};
