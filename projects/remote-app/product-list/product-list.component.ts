import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products = [
    { name: 'Product1', description: 'Description of Product1' },
    { name: 'Product2', description: 'Description of Product2' },
    { name: 'Product3', description: 'Description of Product3' },
  ];
}
