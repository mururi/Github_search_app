import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';

const routes: Routes = [
  { path: 'profile', component: GithubProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
