import { Component, OnInit } from '@angular/core';
import { FetchProfileService } from 'src/app/services/fetch-profile.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  userProfile: any;
  userRepos: any;
  username!: string;

  constructor(private fetchProfileService: FetchProfileService) {
    
  }

  getProfile(){
    this.fetchProfileService.updateProfile(this.username);
    this.fetchProfileService.fetchProfileData().subscribe(profile => {
      console.log(profile);
      this.userProfile = profile;
    });

    this.fetchProfileService.fetchRepoData().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    });
  }

  ngOnInit(): void {
    this.username = 'mururi';
  }

}
