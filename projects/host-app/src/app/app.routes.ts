import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'lazy-load',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'microApp',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './LazyLoadModule',
      }).then((m) => m.LazyLoadModule),
  },
  {
    path: 'rlazy-load',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'remoteApp',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './RlazyLoadModule',
      }).then((m) => m.RlazyLoadModule),
  },
];
