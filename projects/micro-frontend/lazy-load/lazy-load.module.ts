import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: LazyLoadComponent }];

@NgModule({
  declarations: [LazyLoadComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyLoadModule {}
