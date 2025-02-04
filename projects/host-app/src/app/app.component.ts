import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductsModule } from '../../../remote-app/products.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  title = 'host-app';

  loadModule(module: string) {
    loadRemoteModule({
      remoteName: 'remoteApp',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: module,
    });
  }
  productListComponent = this.loadModule('./ProductList');
  cartListComponent = this.loadModule('./CartList');

  eventHandler = (event: Event) => {
    const customEvent = event as CustomEvent;
    console.log('Data from remote app is:', customEvent.detail.data);
  };

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('mf-data', this.eventHandler);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('mf-data', this.eventHandler);
    }
  }
}
