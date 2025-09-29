import 'zone.js'; // must be first
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // (Needed for your Auth service)
import { App } from './app/app'; 
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    // 👇 This is critical for routing
    provideRouter(routes), 
    provideHttpClient(),
    // ...
  ]
})
.catch(err => console.error(err));