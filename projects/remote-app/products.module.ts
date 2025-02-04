import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductListComponent, CartListComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductListComponent, CartListComponent],
})
export class ProductsModule {}
