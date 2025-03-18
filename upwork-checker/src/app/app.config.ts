import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {MessagesEffects} from './state/effects';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {messagesReducer} from './state/reducer';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {MessageApiService} from './providers/message-api.service';
import {provideFirebaseApp} from '@angular/fire/app';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../../firebase-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'messages', reducer: messagesReducer }),
    provideEffects(MessagesEffects),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    MessageApiService
  ]
};
