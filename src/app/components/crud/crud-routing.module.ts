import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

import { CrudComponent } from './crud.component';

const routes: Routes = [
  { path: '', component: CrudComponent,
  canActivate: [AuthGuard],
  children: [
    {path: 'admin/new', loadChildren: () => import('../posts/new/new.module').then(m => m.NewModule)},
    {path: 'admin/edit', loadChildren: () => import('../posts/edit/edit.module').then(m => m.EditModule)},
    {path: 'admin/canvi', loadChildren: () => import('../posts/canvi-pass/canvi-pass.module').then(m => m.CanviPassModule) }
  ]  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
