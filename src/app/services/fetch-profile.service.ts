import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchProfileService {
  private username: string;
  private clientId = '7042017714e78256fa34';
  private clientSecret = '82e9cae24002ac5291df133df04d6fa3af8e406a';

  constructor(private http: HttpClient) {
    console.log("Service is now ready!");
    this.username = 'mururi';
  }

  fetchProfileData(){
    return this.http.get(`https://api.github.com/users/${this.username}?${this.clientId}&client_secret=${this.clientSecret}`)
  }

  fetchRepoData(){
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${this.clientId}&client_secret=${this.clientSecret}`)
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
