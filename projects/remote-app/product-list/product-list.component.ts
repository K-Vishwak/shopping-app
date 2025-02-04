import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products = [
    { name: 'Product1', description: 'Description of Product1' },
    { name: 'Product2', description: 'Description of Product2' },
    { name: 'Product3', description: 'Description of Product3' },
  ];

  sendData() {
    const event = new CustomEvent('mf-data', {
      detail: {
        data: 'Tranferred from remote App!',
      },
    });
    window.dispatchEvent(event);
  }
}
