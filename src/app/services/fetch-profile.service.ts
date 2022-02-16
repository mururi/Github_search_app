import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchProfileService {
  private username!: string;

  constructor(private http: HttpClient) {
    // console.log("Service is now ready!");
    // this.username = 'mururi';
  }

  fetchProfileData(){
    return this.http.get(`https://api.github.com/users/${this.username}?${environment.clientId}&client_secret=${environment.clientSecret}`)
  }

  fetchRepoData(){
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${environment.clientId}&client_secret=${environment.clientSecret}`)
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
