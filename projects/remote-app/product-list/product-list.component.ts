import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  constructor(private router: Router) {}
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
    this.router.navigate([], {
      queryParams: { data: 'url_data' },
      queryParamsHandling: 'merge',
    });
    window.dispatchEvent(event);
  }
}
