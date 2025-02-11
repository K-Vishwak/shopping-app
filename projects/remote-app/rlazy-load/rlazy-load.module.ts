import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RlazyLoadComponent } from './rlazy-load/rlazy-load.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [{ path: '', component: RlazyLoadComponent }];

@NgModule({
  declarations: [RlazyLoadComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class RlazyLoadModule {}
