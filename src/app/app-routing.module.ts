import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
  { path: 'article/:id', loadChildren: () => import('./components/article/article.module').then(m => m.ArticleModule) },
//  { path: 'admin', loadChildren: () => import('./components/crud/crud.module').then(m => m.CrudModule)},
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
//  { path: 'canvi-pass', loadChildren: () => import('./components/posts/canvi-pass/canvi-pass.module').then(m => m.CanviPassModule) },
//  { path: 'edit', loadChildren: () => import('./components/posts/edit/edit.module').then(m => m.EditModule) },
//  { path: 'new', loadChildren: () => import('./components/posts/new/new.module').then(m => m.NewModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
