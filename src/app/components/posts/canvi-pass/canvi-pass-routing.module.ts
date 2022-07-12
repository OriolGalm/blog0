import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanviPassComponent } from './canvi-pass.component';

const routes: Routes = [{ path: '', component: CanviPassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanviPassRoutingModule { }
