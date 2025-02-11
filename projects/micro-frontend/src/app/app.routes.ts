import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from '../../lazy-load/lazy-load.module';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'lazy',
    loadChildren: () => LazyLoadModule,
  },
];
