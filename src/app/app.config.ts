import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-a8671","appId":"1:447808803537:web:2501cc1704b4cb3d1babf0","storageBucket":"friendlychat-a8671.appspot.com","locationId":"us-central","apiKey":"AIzaSyB6Xihhax2SSq7Bd5ucFhJe5fCs-cL3ftQ","authDomain":"friendlychat-a8671.firebaseapp.com","messagingSenderId":"447808803537","measurementId":"G-0SLFY5D9P1"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-a8671","appId":"1:447808803537:web:2501cc1704b4cb3d1babf0","storageBucket":"friendlychat-a8671.appspot.com","locationId":"us-central","apiKey":"AIzaSyB6Xihhax2SSq7Bd5ucFhJe5fCs-cL3ftQ","authDomain":"friendlychat-a8671.firebaseapp.com","messagingSenderId":"447808803537","measurementId":"G-0SLFY5D9P1"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
