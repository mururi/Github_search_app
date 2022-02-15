import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { FetchProfileService } from './services/fetch-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent
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
