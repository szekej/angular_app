import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { CommonModule } from '@angular/common'; 

import { DataDisplayComponent } from './components/data-display/data-display.component';
import { HttpClientModule } from '@angular/common/http';

export const AppConstants = {
  apiUrl: 'https://jsonplaceholder.typicode.com/posts'
};

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideAnimationsAsync(),
    importProvidersFrom(ReactiveFormsModule),
    importProvidersFrom(RouterModule),
    importProvidersFrom(CommonModule),

    importProvidersFrom(MatButtonModule),
    importProvidersFrom(MatCardModule),
    importProvidersFrom(MatInputModule),
    importProvidersFrom(MatIconModule),
    importProvidersFrom(MatTableModule),
    importProvidersFrom(MatFormFieldModule),  

  ]
};
