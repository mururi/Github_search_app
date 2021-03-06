import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { FetchProfileService } from './services/fetch-profile.service';
import { HeaderComponent } from './components/header/header.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { DaysCountPipe } from './pipes/days-count.pipe';
import { HeadingStyleDirective } from './directives/heading-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    HeaderComponent,
    GithubReposComponent,
    DaysCountPipe,
    HeadingStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
