import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'github-search', pathMatch: 'full' },
  { path: 'github-search', loadChildren: () => import('./components/github-search/github-search.module').then(m => m.GithubSearchModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
