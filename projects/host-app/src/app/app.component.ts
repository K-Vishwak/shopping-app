import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../../remote-app/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host-app';
  productListComponent = loadRemoteModule({
    remoteName: 'remoteApp',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    exposedModule: './ProductList',
  });
}
