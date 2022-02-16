import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';
import { Repository } from '../classes/repository';

@Injectable({
  providedIn: 'root'
})
export class FetchProfileService {
  private username!: string;
  user: User;
  repo: Repository;

  constructor(private http: HttpClient) {
    // console.log("Service is now ready!");
    // this.username = 'mururi';
    this.user = new User("","","","","", 0, 0, 0, new Date());
    this.repo = new Repository("","","", new Date(),"");
  }

  fetchProfileData(){
    //return this.http.get(`https://api.github.com/users/${this.username}?${environment.clientId}&client_secret=${environment.clientSecret}`)
    let promise = new Promise<void>((resolve, reject) =>{
      this.http.get<User>(`https://api.github.com/users/${this.username}?${environment.clientId}&client_secret=${environment.clientSecret}`).toPromise().then(response => {
        //console.log(`response is ${response?.name}`)
        this.user.login = response?.login;
        this.user.avatar_url = response?.avatar_url;
        this.user.repos_url = response?.repos_url;
        this.user.name = response?.name;
        this.user.bio = response?.bio;
        this.user.public_repos = response?.public_repos;
        this.user.followers = response?.followers;
        this.user.following = response?.following;
        this.user.created_at = response?.created_at;

        resolve()
      },
      error => {
        reject(error)
      })
    })
    //console.log(this.user)
    return promise;
  }

  fetchRepoData(){
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${environment.clientId}&client_secret=${environment.clientSecret}`)
  }

  updateProfile(username: string) {
    this.username = username;
    //console.log(`update profile with this name: ${this.username}`)
  }
}
